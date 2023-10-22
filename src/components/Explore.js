import React, { useEffect, useContext, useState } from 'react';
import PageBanner from './general/PageBanner';
// import Pagination from './general/Pagination';
import CollectionContext from '../store/collection-context';
import MarketplaceContext from '../store/marketplace-context';
import { formatPrice } from '../helpers/utils';
import NftItem from './general/NftItem';
import Loader from './general/Loader';
import mixitup from 'mixitup';
import FullScreenLoader from './general/FullScreenLoader';
import { categoryOptions } from '../helpers/constants';
import axios from 'axios';
import { API } from '../API';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Load_offers';
import useWeb3 from './Components/useWeb3';
import { Pagination } from '@mui/material';
import usePagination from '../helpers/Pagination';
import { getLoarem } from '../Redux/GetNFTs';
import { Link } from 'react-router-dom';
import './App.css'

function Explore() {
    let Category = useSelector((state) => state.Offers.Category)
    let dispatch = useDispatch()
    const marketplaceCtx = useContext(MarketplaceContext);
    const AllNFTS = useSelector((state) => state.GETNFT)
    const {
        ShowData, Spinner, Filter_ShowData
    } = useWeb3();


    // const [currentPage, setCurrentPage] = useState(1);
    const [currentPage, setPage] = useState(1);
    const [itemsPerPage] = useState(24);
    const count = Math.ceil(AllNFTS?.data?.data?.length / itemsPerPage);
    const _DATA = usePagination(AllNFTS.data.data, itemsPerPage);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // console.log("currentItems", _DATA)
    // const getAllNFts = async () => {
    //     try {
    //         setSpinner(true)
    //         let res = await API.get(
    //             `sell_and_auction_history?category=${Category}`
    //         );
    //         setShowData(res.data.data)
    //         setSpinner(false)

    //         console.log("UU", res);

    //     } catch (error) {
    //         console.log(error);
    //         setSpinner(false)

    //     }
    // }
    // dispatch(getLoarem("All"))

    useEffect(() => {

        document.title = 'Explore NFTs | Best NFT Marketplace';
        if (document.querySelector('.mixitUpContainer')) {
            mixitup('.mixitUpContainer');
        }

        document.getElementById("root").classList.add("bg-complete");
        return () => {
            // console.log('clear...')
            document.getElementById("root").classList.remove("bg-complete");
        };
    }, []);


    return (
        <>
            {/* {marketplaceCtx.mktIsLoading ? <FullScreenLoader heading='loading' /> : null} */}
            {/* <PageBanner heading={'Explore our NFTs'} /> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5'>

                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">Explore Our NFTs</h1>
                            {/* <h2 className='text-white ms-5 ps-3 mb-5' >                            
                                Our NFTs
                            </h2> */}
                            {/* style={{fontSize: "2.8rem", fontWeight: "500"}} */}
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link className='text-white fs-5' to='/explore' style={{textDecoration: "none"}}>
                                        Explore Our NFTS
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/explore.webp" alt="explore" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                {/* FILTER CONTROLS */}
                <div className='container pt-5'>
                    <div className='controls d-flex flex-column flex-md-row mb-5 p-1'>
                        <button className={`mixitup-control flex-fill m-1 ${Category == "All" ? "mixitup-control-active" : ""} `} type='button' onClick={() => (dispatch(setCategory("All")), dispatch(getLoarem("All")))} >
                            All
                        </button>
                        {categoryOptions.map((el, i) => {
                            return (
                                <button
                                    key={i}
                                    className={`mixitup-control flex-fill m-1 ${Category == el.value ? "mixitup-control-active" : ""} `}
                                    type='button'
                                    // data-filter={`.${el.value}`}
                                    onClick={() => (dispatch(setCategory(el.value)), dispatch(getLoarem(el.value)))}

                                >
                                    {el.label}
                                </button>
                            );
                        })}
                    </div>



                    {!Spinner ? (
                        <>
                            {
                                _DATA.currentData()?.length === 0 ?
                                    <div className='row text-center'>
                                        <div className='col-lg-6 mx-auto'>
                                            <i className='las la-exclamation mb-2' style={{ fontSize: '3rem' }}></i>
                                            <h3 className='h3'>No NFTs listed under this category.</h3>
                                            <p className='text-muted mb-3'>Pick another category...</p>

                                        </div>
                                    </div> :
                                    <>
                                        <div className='row mixitUpContainer gy-4 mb-5 align-items-stretch'>
                                            {_DATA.currentData()?.map((NFT, key) => {
                                                const index = marketplaceCtx.offers
                                                    ? marketplaceCtx.offers.findIndex((offer) => offer.id === NFT.id)
                                                    : -1;
                                                const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                                                const price =
                                                    index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;

                                                return (
                                                    <div className={`col-xl-3 col-lg-4 col-md-6 mix ${NFT.category}`} key={key}>
                                                        <NftItem {...NFT} NFT={NFT} index={index} owner={owner} price={NFT.price} nftKey={key} />

                                                    </div>
                                                );
                                            })}
                                        </div>

                                    </>

                            }


                        </>
                    ) : (
                        <>
                            <h6 className='fw-normal text-muted text-center mb-0'>
                                Fetching data from the blockchain please wait...
                            </h6>
                            <Loader />
                        </>
                    )}

                    {Spinner != true ?
                        <>
                        </>
                        :
                        <></>
                        // _DATA.currentData()?.length === 0 && (
                        //     <div className='row text-center'>
                        //         <div className='col-lg-6 mx-auto'>
                        //             <i className='las la-exclamation mb-2' style={{ fontSize: '3rem' }}></i>
                        //             <h3 className='h3'>No NFTs listed under this category.</h3>
                        //             <p className='text-muted mb-3'>Return Home and pick another category...</p>
                        //             {/* <Link className='btn btn-gradient-primary' to='/'>
                        //                 Return Home
                        //             </Link> */}
                        //         </div>
                        //     </div>
                        // )

                    }

                    <div className='d-flex justify-content-center'>
                        <Pagination
                            count={count}
                            page={currentPage}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Explore;
