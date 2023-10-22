import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import ItemThumbnail from './item/ItemThumbnail';
import ItemInfoPanel from './item/ItemInfoPanel';
import ItemAuthor from './item/ItemAuthor';
import Loader from './general/Loader';
import FullScreenLoader from './general/FullScreenLoader';
import { SiBinance } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';
import Web3 from 'web3';
import { useAccount, useChainId } from 'wagmi';
import { Contract_Addresss } from '../Utils/Contract';
import axios from 'axios';
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useDispatch, useSelector } from 'react-redux';
import { getLoarem } from '../Redux/GetNFTs';

function ItemSingle() {

  const { addToast } = useToasts();
  const { id, chainid } = useParams();
  const [MktIsLoading, setMktIsLoading] = useState(false);
  const [User_Probile, setUser_Probile] = useState([])
  const [ShowData, setShowData] = useState([])
  const AllNFTS = useSelector((state) => state.GETNFT)
  let { data } = AllNFTS.data
  const chainId = useChainId();
  const { address } = useAccount();
  let history = useHistory()
  const getAllNFts = async () => {
    try {
      let res = await axios.get(
        `https://sanjhavehra.womenempowerment.online/get_one_NFT?name=${id}&&chainid=${chainid}`
      );
      console.log("getAllNFts", res.data.data);
      if (res.data.success == true) {
        setShowData(res.data.data)
        // console.log("getAllNFts", res?.data?.data);
      } else {
        setShowData([])

      }
    } catch (error) {
      console.log(error);
      // setSpinner(false)

    }
  }

  const fetchData = async () => {
    if (address) {
      let res = await axios.get(
        `https://sanjhavehra.womenempowerment.online/get_user_profile?address=${address?.toUpperCase()}`
      );

      if (res?.data.success == false) {
        // history("/Create_User_profile");
      } else {
        setUser_Probile(res?.data?.data);
      }
    }
  };

  useEffect(() => {
    getAllNFts()
    fetchData();

  }, [id,address,chainid]);



  const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");



  const buyHandler = async (event, id, chain) => {
    try {
      event.preventDefault();


      let CurruntChain =
        chainId == 97
          ? "Binance"
          : chainId == 80001
            ? "Polygon"
            : "Ethereum";
      if (address) {
        if (CurruntChain == chain) {

          setMktIsLoading(true);
          let ethAmount = webSupply.utils.toWei(ShowData.price);

          // console.log("ethAmount",ethAmount);


          // let provider = new ethers.providers.Web3Provider(window.ethereum);
          // let signer = provider.getSigner()
          // let contract = null
          // if (chainId == 97) {
          //   contract = new Contract(Contract_Addresss[0].nftMarketContractAddress, Contract_Addresss[0].nftMarketContractAddress_Abi, signer);
          // } else if (chainId == 11155111) {
          //   contract = new Contract(Contract_Addresss[1].nftMarketContractAddress, Contract_Addresss[1].nftMarketContractAddress_Abi, signer);

          // } else {
          //   contract = new Contract(Contract_Addresss[2].nftMarketContractAddress, Contract_Addresss[2].nftMarketContractAddress_Abi, signer);

          // }

          const { request } = await prepareWriteContract({
            address: chainId == 97 ? Contract_Addresss[0].nftMarketContractAddress : chainId == 11155111 ? Contract_Addresss[1].nftMarketContractAddress : Contract_Addresss[2].nftMarketContractAddress,
            abi: chainId == 97 ? Contract_Addresss[0].nftMarketContractAddress_Abi : chainId == 11155111 ? Contract_Addresss[1].nftMarketContractAddress_Abi : Contract_Addresss[2].nftMarketContractAddress_Abi,

            functionName: "fillOffer",
            args: [ShowData.itemId],
            value: ethAmount,
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });

          // const tx = await contract.fillOffer(NFT.itemId, {
          //   value: ethAmount,
          //   gasLimit: 1000000,
          // })
          // await tx.wait();

          // let DeleteItems = await axios.post(
          //   "https://sanjhavehra.womenempowerment.online/update_sell_status",
          //   {
          //     tokenid: ShowData.tokenId,
          //     Blockchain: ShowData.Blockchain,
          //   }
          // )
          // console.log("DeleteItems", DeleteItems);
          let payment = await axios.post("https://sanjhavehra.womenempowerment.online/User_payment", {

            Eth_Cost: chainId == 11155111 ? ShowData.price : 0,
            BNB_Cost: chainId == 97 ? ShowData.price : 0,
            Metic_Cost: chainId == 80001 ? ShowData.price : 0,
            Address: address,

          });
          let TrandingItems = await axios.post(
            "https://sanjhavehra.womenempowerment.online/update_Tranding",
            {
              tokenId: ShowData.tokenId,
              Blockchain: ShowData.Blockchain,
            }
          )
          console.log("TrandingItems", TrandingItems);
          let update_Favorite = await axios.post(`https://sanjhavehra.womenempowerment.online/update_Favorite`, {
            tokenId: ShowData.tokenId
          })
          console.log("get_Favorite", update_Favorite.data);
          let postapiPushdata = await axios.post("https://sanjhavehra.womenempowerment.online/open_marketplace", {
            useraddress: address,
            itemId: "01000000000000000",
            nftContract: chainId == 97 ? Contract_Addresss[0].CreateNFT : chainId == 11155111 ? Contract_Addresss[1].CreateNFT : Contract_Addresss[2].CreateNFT,
            tokenId: "01000000000000000",
            owner: "",
            price: "01000000000000000",
            sold: ShowData?.sold,
            name: ShowData?.name,
            url: ShowData?.url,
            txn: ShowData?.txn,
            category: ShowData?.category,
            edate: ShowData?.edate,
            Blockchain: ShowData?.Blockchain,
            Owner_Name:User_Probile?.username == undefined ? address : User_Probile?.username,
            Owner_Image:User_Probile?.image == undefined ? "./images/Avtat.png" : User_Probile?.image || "./images/Avtat.png",
          });
          console.log("postapiPushdata",postapiPushdata);
          addToast("You Buy This NFT SuccessFully!", {
            appearance: "success",
          });

          setMktIsLoading(false);
          history.push("/explore")
          // window.location.reload()

        } else {
          addToast(`Please Connect To ${chain} Chain`, {
            appearance: "error",
          });
          setMktIsLoading(false);

        }
      } else {
        addToast(`Please Connect Wallet First!`, {
          appearance: "error",
        });
        setMktIsLoading(false);

      }
    } catch (error) {
      addToast(
        "Something went wrong when pushing to the blockchain",
        {
          appearance: "error",
        }
      );
      console.log(error);
      setMktIsLoading(false);

    }
  };

  const cancelHandler = async (event, chain) => {

    try {
      let CurruntChain =
        chainId == 97
          ? "Binance"
          : chainId == 80001
            ? "Polygon"
            : "Ethereum";
      if (address) {
        if (CurruntChain == chain) {
          setMktIsLoading(true)


          // let provider = new ethers.providers.Web3Provider(window.ethereum);
          // let signer = provider.getSigner()
          // let contract = null
          // if (chainId == 97) {
          //   contract = new Contract(Contract_Addresss[0].nftMarketContractAddress, Contract_Addresss[0].nftMarketContractAddress_Abi, signer);
          // } else if (chainId == 11155111) {
          //   contract = new Contract(Contract_Addresss[1].nftMarketContractAddress, Contract_Addresss[1].nftMarketContractAddress_Abi, signer);

          // } else {
          //   contract = new Contract(Contract_Addresss[2].nftMarketContractAddress, Contract_Addresss[2].nftMarketContractAddress_Abi, signer);

          // }

          // const tx = await contract.cancelOffer(NFT.itemId)
          // await tx.wait();
          const { request } = await prepareWriteContract({
            address:
              chainId == 97
                ? Contract_Addresss[0].nftMarketContractAddress
                : chainId == 11155111
                  ? Contract_Addresss[1].nftMarketContractAddress
                  : Contract_Addresss[2].nftMarketContractAddress,
            abi:
              chainId == 97
                ? Contract_Addresss[0].nftMarketContractAddress_Abi
                : chainId == 11155111
                  ? Contract_Addresss[1].nftMarketContractAddress_Abi
                  : Contract_Addresss[2].nftMarketContractAddress_Abi,
            functionName: "cancelOffer",
            args: [ShowData.itemId],

            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });

          // let DeleteItems = await axios.post(
          //   "https://sanjhavehra.womenempowerment.online/update_sell_status",
          //   {
          //     tokenid: ShowData.tokenId,
          //     Blockchain: ShowData.Blockchain,
          //   }
          // )
          let TrandingItems = await axios.post(
            "https://sanjhavehra.womenempowerment.online/update_Tranding",
            {
              tokenId: ShowData.tokenId,
              Blockchain: ShowData.Blockchain,
            }
          )

          let update_Favorite = await axios.post(`https://sanjhavehra.womenempowerment.online/update_Favorite`, {
            tokenId: ShowData.tokenId
          })
          let postapiPushdata = await axios.post("https://sanjhavehra.womenempowerment.online/open_marketplace", {
            useraddress: address,
            itemId: "01000000000000000",
            nftContract: chainId == 97 ? Contract_Addresss[0].CreateNFT : chainId == 11155111 ? Contract_Addresss[1].CreateNFT : Contract_Addresss[2].CreateNFT,
            tokenId: "01000000000000000",
            owner: "",
            price: "01000000000000000",
            sold: ShowData?.sold,
          
            name: ShowData?.name,
            url: ShowData?.url,
            txn: ShowData?.txn,
            category: ShowData?.category,
            edate: ShowData?.edate,
            Blockchain: ShowData?.Blockchain,
            
          });
          console.log("get_Favorite", update_Favorite.data);
          addToast("Owner CancelOffer SuccessFully!", {
            appearance: "success",
          });
          setMktIsLoading(false);
          history.push("/explore")

        } else {
          addToast(`Please Connect To ${chain} Chain`, {
            appearance: "error",
          });
          setMktIsLoading(false);

        }
      } else {
        addToast(`Please Connect Wallet First!`, {
          appearance: "error",
        });
        setMktIsLoading(false);
       
        // window.location.reload()
      }
    } catch (error) {

      console.log(error);
      setMktIsLoading(false);

    }
  };


  useEffect(() => {
    document.title = 'Item Details | NFT Marketplace';
  }, []);


  return (
    <>
      {MktIsLoading ? <FullScreenLoader heading='loading' /> : null}
      <section className='py-5 mt-2'>
        {ShowData?.length == 0 ? (
          <div className='py-5 text-center mt-5'>
            <h1 className='h2 mt-5'>Fetching item details</h1>
            <p className='text-muted'>Please wait until we prepare your data.</p>
            <Loader />
          </div>
        ) : (
          // currentAsset.map((asset, key) => {
          // const index = marketplaceCtx.offers
          //     ? marketplaceCtx.offers.findIndex((offer) => offer.id === asset.id)
          //     : -1;
          // const owner = index === -1 ? asset.owner : marketplaceCtx.offers[index].user;
          // const price = index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;

          // return (
          <div >
            {/* <div className='bg-dark py-4 mt-4'>
              <div className='container'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link
                        className='text-decoration-none d-flex align-items-center'
                        to='/'
                      >
                        {' '}
                        <i className='las la-home la-sm me-1'></i>Home
                      </Link>
                    </li>
                    <li className='breadcrumb-item'>
                      <Link
                        className='text-decoration-none d-flex align-items-center'
                        to='/explore'
                      >
                        {' '}
                        <i className='las la-icons la-sm me-1'></i>Explore
                      </Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      {ShowData?.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div> */}
            
            <div className='container py-5'>
              <div className='row mb-4 g-5 mt-4'>
                <div className='col-lg-6'>
                  {/* <ItemThumbnail thumbnail={`https://ipfs.infura.io/ipfs/${asset.img}`} /> */}
                  <ItemThumbnail thumbnail={ShowData.url} type={ShowData.sold} name={ShowData.name} category={ShowData.category} price={ShowData.price} />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-between'>
                  {/* <ItemInfoPanel
                                                name={asset.title}
                                                category={asset.category}
                                                img={`https://ipfs.infura.io/ipfs/${asset.img}`}
                                                creator={ShowData[0]}
                                                description={asset.description}
                                                dateCreated={asset.dateCreated}
                                            /> */}
                  <ItemInfoPanel
                    name={ShowData.name}
                    category={ShowData.category}
                    img={ShowData.url}
                    creator={ShowData}
                    // description={ShowData.description}
                    dateCreated={ShowData.edate}
                  />

                  <ItemAuthor creator={ShowData} owner={ShowData.owner} User_Probile={User_Probile} />

                  <div className='mb-1'>
                    {ShowData.price !== "01000000000000000" ? (
                      <>
                        <div className="row p-3 mx-0" style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row"}}>
                          <div className='col-6 d-flex align-items-center'>
                            <h6 className='mb-0 text-white'>Price</h6>
                          </div>
                          <div className='col-6'>
                            <div className='text-sm text-muted fw-normal mb-0 d-flex align-items-center justify-content-end'>
                              <span className='icon bg-primary text-white me-2'>
                                {ShowData.Blockchain == "Binance" ? (
                                  <SiBinance className="fa-brands fa-ethereum" />
                                ) : ShowData.Blockchain === "Ethereum" ? (
                                  <FaEthereum />
                                ) : (
                                  <>
                                    <svg
                                      fill="white"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ width: "18px", height: "20px" }}
                                    >
                                      <path
                                        d="M16.5828 8.90039C16.2516 8.70599 15.8196 8.70599 15.4524 8.90039L12.8604 10.4016L11.1 11.3808L8.508 12.882C8.1768 13.0764 7.7448 13.0764 7.3776 12.882L5.3184 11.7084C4.9872 11.514 4.7532 11.154 4.7532 10.7616V8.44679C4.7532 8.05439 4.9512 7.69799 5.3184 7.49999L7.3452 6.35879C7.6764 6.16439 8.1084 6.16439 8.4756 6.35879L10.5024 7.49999C10.8336 7.69439 11.0676 8.05439 11.0676 8.44679V9.94799L12.828 8.93639V7.43519C12.828 7.04279 12.63 6.68639 12.2628 6.48839L8.5116 4.33559C8.1804 4.14119 7.7484 4.14119 7.3812 4.33559L3.5652 6.48839C3.198 6.68279 3 7.04279 3 7.43519V11.7732C3 12.1656 3.198 12.522 3.5652 12.72L7.3848 14.8728C7.716 15.0672 8.148 15.0672 8.5152 14.8728L11.1072 13.404L12.8676 12.3924L15.4596 10.9236C15.7908 10.7292 16.2228 10.7292 16.59 10.9236L18.6168 12.0648C18.948 12.2592 19.182 12.6192 19.182 13.0116V15.3264C19.182 15.7188 18.984 16.0752 18.6168 16.2732L16.59 17.4468C16.2588 17.6412 15.8268 17.6412 15.4596 17.4468L13.4328 16.3056C13.1016 16.1112 12.8676 15.7512 12.8676 15.3588V13.8576L11.1072 14.8692V16.3704C11.1072 16.7628 11.3052 17.1192 11.6724 17.3172L15.492 19.47C15.8232 19.6644 16.2552 19.6644 16.6224 19.47L20.442 17.3172C20.7732 17.1228 21.0072 16.7628 21.0072 16.3704V12.0324C21.0072 11.64 20.8092 11.2836 20.442 11.0856L16.5828 8.90039Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </>
                                )}
                                {/* <i className='lab la-ethereum fa-fw'></i> */}
                              </span>

                              <p className='mb-0 h4 d-flex align-items-end fw-normal text-white ms-2'>
                                {ShowData.price} <span className='ms-2 text-white small'>

                                  {ShowData.Blockchain == "Binance"
                                    ? "BNB"
                                    : ShowData.Blockchain === "Ethereum"
                                      ? "ETH"
                                      : "MATIC"}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        {
                          ShowData.owner?.toUpperCase() !== address?.toUpperCase() ? (
                            <button
                              type='button'
                              className='btn-buynow w-100 px-5 mt-5'
                              value={1}
                              onClick={(e) => buyHandler(e, ShowData.tokenId, ShowData.Blockchain)}
                            >
                              Buy Item
                            </button>
                          ) : (
                            <button
                              type='button'
                              // value={index}
                              className='btn btn-danger w-100 rounded-pill px-5 mt-5'
                              style={{ boxShadow: "0px 0px 10px 5px #e9191977" }}
                              onClick={(e) => cancelHandler(e, ShowData.Blockchain)}
                            >
                              Cancel Offer
                            </button>
                          )

                        }
                      </>
                    ) : (
                      <p className='text-white mb-0 p-3' style={{background: "#131DFF", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row"}}>This item is not for sale!</p>
                    )}
                  </div>



                </div>
              </div>
            </div>
          </div>
          // );
          // })
        )}
      </section>
    </>
  );
}

export default ItemSingle;
