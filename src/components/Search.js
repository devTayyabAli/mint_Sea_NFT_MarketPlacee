import React, { useEffect, useContext, useState, useCallback } from 'react';
import CollectionContext from '../store/collection-context';
import { Link } from 'react-router-dom';
import MarketplaceContext from '../store/marketplace-context';
import { formatPrice } from '../helpers/utils';
import NftItem from './general/NftItem';

// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { particlesOptions } from '../helpers/constants';
import FullScreenLoader from './general/FullScreenLoader';
import axios from 'axios';
import usePagination from '../helpers/Pagination';
import { Pagination } from '@mui/material';

function Search() {

    const marketplaceCtx = useContext(MarketplaceContext);
    const [query, setQuery] = useState('');
    const [searchResultsLength, setSearchResultsLength] = useState([]);
    const [Spinner, setSpinner] = useState(false)
    const [Isdata, setIsdata] = useState(false)

    const [currentPage, setPage] = useState(1);
    const [itemsPerPage] = useState(24);


    useEffect(() => {
        document.title = 'Search Assets';

        document.getElementById("root").classList.add("bg-search");
        //document.getElementById("root").style.backgroundImage = "url('/images/bg-search.jpg')";
      
        return () => {
            document.getElementById("root").classList.remove("bg-search");
        };
    }, []);

    useEffect(() => {

        const search_api = async () => {
            try {
                if (query != "") {

                    setSpinner(true)
                    let res = await axios.get(`https://newflash.womenempowerment.online/searchNFT?name=${query}`)
                    //console.log("Search", res.data.data);
                    if (res.data.success == true) {
                        setSearchResultsLength(res.data.data)
                        setSpinner(false)
                    } else {
                        setIsdata(true)
                        setSpinner(false)

                    }
                } else {
                    setSearchResultsLength([])
                }

            } catch (error) {
                console.log(error);
            }
        }

        search_api()


        // setSearchResultsLength(
        //     collectionCtx.collection.filter((nft) => {
        //         if (nft.title.toLowerCase().includes(query.toLowerCase().trim())) {
        //             return nft;
        //         }
        //         return false;
        //     }).length
        // );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);


    const count = Math.ceil(searchResultsLength?.length / itemsPerPage);
    const _DATA = usePagination(searchResultsLength, itemsPerPage);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {Spinner == true ? <FullScreenLoader /> : null}
            <section className='pt-5 position-relative'>
                {/* <Particles init={particlesInit}
                    loaded={particlesLoaded} options={particlesOptions} style={{ zIndex: "-1" }} /> */}
                <div className='container py-5 mt-5 z-index-20'>
                    <div className='row'>
                        <div className='col-lg-6 text-center mx-auto'>
                            <h2 className='text-white'>Search Digital Assets</h2>
                            <p className='mb-0' style={{color: "#ececec"}}>
                                Our extensive list of NFT categories will assist you in locating the one you seek:
                            </p>
                        </div>
                    </div>

                    {/* <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'>
                                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                    {' '}
                                    <i className='las la-home la-sm me-1'></i>Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>
                                Search digital assets
                            </li>
                        </ol>
                    </nav> */}

                    {/* <div className='search-form-holder'> */}
                    <div className='row py-5'>
                        <div className='col-lg-8 mx-auto'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div
                                    className='bg-transparent p-1 rounded-pill'
                                    style={{border: "1px solid #ffffff"}}
                                >
                                    <div className='input-icon'>
                                        <div className='input-icon-text' style={{ top: '1.1rem', margin: "-5px" }}>
                                            {/* <i className='text-primary las la-search'></i> */}
                                            <img src="/images/icon_search.png" alt="search button" style={{height: "20px"}}></img>
                                        </div>
                                        <input
                                            className='form-control bd-dark-lighter bg-none form-control-lg shadow-0 border-0 mysearch py-0 ps-5'
                                            type='search'
                                            autoComplete='off'
                                            name='search'
                                            placeholder='Search....'
                                            onChange={(event) => setQuery(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* </div> */}

                    <div className='row pt-2'>
                        <div className='col-lg-8 mx-auto'>
                            <ul className='list-inline d-flex justify-content-center mb-0'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link className='text-white fs-5' to='/search' style={{textDecoration: "none"}}>
                                        Search Digital Assets
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section className='pb-5'>
                {searchResultsLength.length > 0 ? (
                    <p className='lead text-muted text-center mb-0'>
                        Found <strong className='fw-bold badge bg-primary mx-2'>{searchResultsLength.length}</strong> items
                        match your search
                    </p>
                ) : null}
                <div className='container py-5'>
                    <div className='row gy-4'>
                        {_DATA.currentData().map((NFT, key) => {
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

                    {query === '' ? (
                        <div className='row text-center'>
                            <div className='col-lg-6 mx-auto'>
                                <i className='las la-keyboard mb-2' style={{ fontSize: '2.5rem',background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px" }}></i>
                                <h3 className='h3'>No search data entered!</h3>
                                <p className='text-muted mb-0'>Wating for your search...</p>
                            </div>
                        </div>
                    ) : null}

                    {Isdata ? (
                        <div className='row text-center'>
                            <div className='col-lg-6 mx-auto'>
                                <i className='las la-exclamation mb-2' style={{ fontSize: '3rem' }}></i>
                                <h3 className='h3'>Cannot find any assets that match your search</h3>
                                <p className='text-muted mb-0'>You can search for another term...</p>
                            </div>
                        </div>
                    ) : null}
                </div>
                {searchResultsLength?.length > 25 && (


                    <div className='d-flex justify-content-center'>
                        <Pagination
                            count={count}
                            page={currentPage}
                            onChange={handleChange}
                        />
                    </div>
                )
                }
            </section>

        </>
    );
}

export default Search;
