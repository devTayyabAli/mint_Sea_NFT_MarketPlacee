import React, { useEffect, useState } from "react";
import PageBanner from "../../general/PageBanner";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
import { useAccount, useChainId } from "wagmi";
import NftItem from "../../general/NftItem";
import Loader from "../../general/Loader";
import io from "socket.io-client";
import { Link } from 'react-router-dom';

const socket = io("https://sanjhavehra.womenempowerment.online/");

export default function Favorite() {
  const [show_Favorite, setshow_Favorite] = useState([]);
  const [Spinner, setSpinner] = useState(false);
  const { address } = useAccount();

  const Get_Favorite = async () => {
    let new_Array = [];
    try {
      setSpinner(true);
      let res = await axios.get(
        `https://sanjhavehra.womenempowerment.online/get_Favorite?useraddress=${address}`
      );
      console.log("Get_Favorite", res.data.data);
      setshow_Favorite(res.data.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("FavoriteListiner", (uNFT) => {
      Get_Favorite();
    });
    Get_Favorite();
    
    document.getElementById("root").classList.add("bg-complete");
    //document.getElementById("root").style.backgroundImage = "url('/images/bg-mint.jpg')";
    
    return () => {
        document.getElementById("root").classList.remove("bg-complete");
    };
  }, []);

  return (
    <div>
      {/* <PageBanner heading={"Favorite NFTs"} /> */}

      <section className='py-5 position-relative'>
          <div className='container z-index-10 position-relative'>
              <div className='row align-items-center mt-5'>

                  <div className='col-lg-6'>                        
                      <h1 className="text-white h-b-t-fs">Favorite NFTs</h1>
                      <ul className='list-inline'>
                          <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                              <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                  Home
                              </Link>
                          </li>
                          <li className='list-inline-item'>
                              <Link className='text-white fs-5' to='/Favorite' style={{textDecoration: "none"}}>
                                  Favorite NFTs
                              </Link>
                          </li>
                      </ul>
                  </div>

                  <div className='col-lg-6 ms-auto d-none d-lg-block'>
                      <img className='img-fluid mx-auto w-75' src="/images/favorite.webp" alt="favorite" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                  </div>

              </div>
          </div>
      </section>

      <section className="py-5">
        {/* FILTER CONTROLS */}
        <div className="container pt-5">
          {!Spinner ? (
            <div className="row mixitUpContainer gy-4 mb-5 align-items-stretch">
              {show_Favorite?.map((NFT, key, index) => {
                // console.log("NFT", NFT);

                return (
                  <div
                    className={`col-xl-3 col-lg-4 col-md-6 mix ${NFT.category}`}
                    key={key}
                  >
                    <NftItem
                      {...NFT}
                      NFT={NFT}
                      index={index}
                      price={NFT.price}
                      nftKey={key}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <h6 className="fw-normal text-muted text-center mb-0">
                Fetching data from the blockchain please wait...
              </h6>
              <Loader />
            </>
          )}

          {/* <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={collectionCtx.collection.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    /> */}
        </div>
      </section>
    </div>
  );
}
