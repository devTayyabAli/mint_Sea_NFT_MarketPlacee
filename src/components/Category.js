import React, { useEffect, useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from './general/PageBanner';
// import Pagination from './general/Pagination';
import CollectionContext from '../store/collection-context';
import MarketplaceContext from '../store/marketplace-context';
import { formatPrice, formatCategory } from '../helpers/utils';
import NftItem from './general/NftItem';
import Loader from './general/Loader';
import FullScreenLoader from './general/FullScreenLoader';
import useWeb3 from './Components/useWeb3';
import { API } from '../API';
import axios from 'axios';
import { Pagination } from '@mui/material';
import usePagination from '../helpers/Pagination';
import './App.css'

function Category() {
    const collectionCtx = useContext(CollectionContext);
    const marketplaceCtx = useContext(MarketplaceContext);
    const [Category_Data, setCategory_Data] = useState([])
    const [Spinner, setSpinner] = useState(false)

    // const [currentPage, setCurrentPage] = useState(1);
    const [currentPage, setPage] = useState(1);
    const [itemsPerPage] = useState(24);
  
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const { category } = useParams();

    const count = Math.ceil(Category_Data?.length / itemsPerPage);
    const _DATA = usePagination(Category_Data, itemsPerPage);
    const {
        Filter_ShowData
    } = useWeb3();
  

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = collectionCtx.collection.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        document.title = `${formatCategory(category)} | NFT Marketplace`;

        document.getElementById("root").classList.add("bg-category");
        return () => {
            document.getElementById("root").classList.remove("bg-category");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(category);

    // Pagination
    // function paginate(pageNumber) {
    //     setCurrentPage(pageNumber);
    // }




    useEffect(() => {
        const getAllNFts = async () => {
            try {
                setSpinner(true)
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=${category}`
                );
                setCategory_Data(res.data.data)
                setSpinner(false)
        
                console.log("UU", res);
             
            } catch (error) {
                console.log(error);
                setSpinner(false)
        
            }
        }
        getAllNFts()
    }, [category])

    return (
        <>
            {/* {Spinner ? <FullScreenLoader heading='loading' /> : null} */}
            <PageBanner heading={`${formatCategory(category)} NFTs`} category={category} />
            <section className='py-5'>
                <div className='container py-5'>
                    {!Spinner ? (
                        <div className='row mixitUpContainer gy-4 mb-5 align-items-stretch'>
                            { _DATA.currentData().map((NFT, key) => {
                                    const index = marketplaceCtx.offers
                                        ? marketplaceCtx.offers.findIndex((offer) => offer.id === NFT.id)
                                        : -1;
                                    const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                                    const price =
                                        index !== -1
                                            ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2)
                                            : null;

                                    return (
                                        <div className={`col-xl-3 col-lg-4 col-md-6 mix ${NFT.category}`} key={key}>
                                            <NftItem {...NFT} NFT={NFT} index={index} owner={owner} price={NFT.price} nftKey={key} />
                                        </div>
                                    );
                                })}
                        </div>
                    ) : (
                        <>
                            <h6 className='fw-normal text-muted text-center mb-0'>
                                Fetching data from the blockchain please wait...
                            </h6>
                            <Loader />
                        </>
                    )}

{Category_Data.length> 25 && (
                  <>
                    <div className="d-flex justify-content-center">
                      <Pagination
                        count={count}
                        page={currentPage}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}

                    {Category_Data.length===0 && (
                            <div className='row text-center'>
                                <div className='col-lg-6 mx-auto'>
                                    <i className='las la-exclamation mb-2' style={{ fontSize: '3rem' }}></i>
                                    <h3 className='h3'>No NFTs listed under this category.</h3>
                                    <p className='text-muted mb-3'>Return Home and pick another category...</p>
                                    <Link className='btn btn-gradient-primary' to='/'>
                                        Return Home
                                    </Link>
                                </div>
                            </div>
                        )}
                </div>
            </section>
        </>
    );
}

export default Category;
