import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MarketplaceContext from '../store/marketplace-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { formatPrice } from '../helpers/utils';
import { categoryOptions } from '../helpers/constants';
import 'swiper/swiper-bundle.css';

// COMPONENTS
import HomeBanner from './home/HomeBanner';
import NftItem from './general/NftItem';
import NoDataAlert from './general/NoDataAlert';
import TopSellers from './home/TopSellers';
import Loader from './general/Loader';
import useWeb3 from './Components/useWeb3';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Load_offers';

import { useAccount } from 'wagmi';
import { getLoarem } from '../Redux/GetNFTs';
import { getTranding } from '../Redux/tranding_NFTs';
import io from 'socket.io-client';
const socket = io('https://newflash.womenempowerment.online/');

SwiperCore.use([Navigation]);

function Home({ topSellers }) {

    const marketplaceCtx = useContext(MarketplaceContext);

    const AllNFTS = useSelector((state) => state.GETNFT)
    const TrandingsNFTS = useSelector((state) => state.getTrandingNFTs)
    let dispatch = useDispatch()
    const {
        ShowData, Spinner
    } = useWeb3();

    useEffect(() => {
        // socket.on("TrandingListiner", (uNFT) => {
        //     dispatch(getTranding())
        // })
        // dispatch(getTranding())
        document.title = 'MintSea | Best NFT Marketplace';

        document.getElementById("root").classList.add("bg-complete");

        return () => {
            document.getElementById("root").classList.remove("bg-complete");
        };
    }, []);



    // RETURN ITEMS TEMPLATE
    return (
        <>
            <HomeBanner />

            {/* MARKETPLACE FEATURED ITEMS */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <header className='mb-5 pb-5'>
                        <div className='row position-relative heading-col'>

                            <div className="col-7 text-white heading-left-part">
                                <h3 className="text-white mb-0">Marketplace's Choice</h3>
                                <p className="text-white text-sm mb-0">
                                    MintSea is the most secure and user-friendly cryptocurrency buying, selling, and storing platform. <br />Our industry-leading security systems will keep your NFTs protected.
                                </p>
                            </div>
                            <div className="col-5 h-100 position-div rounded-pill heading-right-part d-flex align-items-center">
                                <img className="some-css img-fluid mx-auto" src="/images/market.webp" alt="" />
                            </div>


                        </div>
                    </header>

                    {TrandingsNFTS.data.length < 0 ? (
                        <div className='col-12'>
                            <NoDataAlert
                                heading="There're no NFTs at the moment."
                                subheading='Try to mint some assets to see how are we rendering them.'
                            />
                        </div>
                    ) : null}

                    {Spinner ? <Loader /> : null}

                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            400: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                            1400: { slidesPerView: 4 },
                        }}
                        navigation={Boolean(TrandingsNFTS.data.length !== 0)}
                    >


                        {AllNFTS?.data?.data?.filter((element) => element?.Owner_Address?.startsWith('0x') && element.price != "01000000000000000").slice(-10).reverse().map((NFT, key) => {
                            const index = marketplaceCtx.offers
                                ? marketplaceCtx.offers.findIndex((offer) => offer.id === NFT.id)
                                : -1;
                            const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                            const price =
                                index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;

                            return (
                                <SwiperSlide key={key}>
                                    <NftItem {...NFT} NFT={NFT} index={index} owner={owner} price={NFT.price} nftKey={key} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section>

            {/* BROWSE BY CATEGORY */}
            <section className='pt-5'>
                <div className='container py-4'>
                    <header className='mb-5 pb-5'>
                        <div className='row position-relative heading-col'>

                            <div className="col-7 text-white heading-left-part">
                                <h3 className="text-white mb-0">Browse by category</h3>
                                <p className="text-white text-sm mb-0">
                                    You can choose an NFT from a variety of categories. Everyone will find something to their liking:
                                </p>
                            </div>
                            <div className="col-5 h-100 position-div rounded-pill heading-right-part d-flex align-items-center">
                                <img className="some-css img-fluid mx-auto" src="/images/browse.webp" alt="" />
                            </div>


                        </div>
                    </header>



                    <div className="row px-lg-5 mx-lg-4 g-3 g-lg-5 justify-content-center">
                        {categoryOptions?.map((el, i) => {
                            return (
                                <div className="col-6 col-sm-4" key={i}>
                                    <div className="card-hover-minimal m-md-2 border-custom" style={{ border: "1px solid #49E6FB", padding: "5px", boxShadow: "0px 0px 10px 5px #4659CF77" }}>
                                        <div
                                            className="box-shadow position-relative"
                                            onClick={() => dispatch(setCategory(el.value))}>

                                            <Link
                                                className="text-reset stretched-link"
                                                to={`/categories/${el.value}`}
                                            >
                                                <div className="d-flex mb-0 justify-content-center align-items-center">
                                                    <img src={`/category-images/${el.value}.webp`} className="img-fluid mt-2" alt="" />

                                                    <div className='position-absolute p-2' style={{ top: "25px", right: "25px", maxWidth: "40px", background: "#1adfbb", clipPath: "polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)" }}>
                                                        <img src={`/category-images/${el.value}-icon.webp`} className="img-fluid" alt="" />
                                                    </div>

                                                    <div className="btn-buynow f-custom text-center mb-2 px-0 px-md-2 py-2 py-md-2 py-lg-2 py-xl-3 w-custom text-white position-absolute bottom-0 ms-auto me-auto mb-lg-3 mb-xl-5" style={{ boxShadow: "0px 0px 10px 5px #4659CF77" }}>{el.label}</div>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* NFT ITEMS */}
            <section className='py-5'>
                <div className='container pt-5'>
                    <header className='mb-5 pb-5'>
                        <div className='row position-relative heading-col'>
                            {/* <div className='col-lg-6'>
                                <h2>New Items</h2>
                                <p className='text-muted text-sm mb-0'>
                                    Explore the fascinating new collection of NFTs every day.
                                </p>
                            </div> */}

                            {/* <div className="container-xl">
                                <div className="row mt-5 position-relative heading-col"> */}
                            <div className="col-7 text-white heading-left-part">
                                <h3 className="text-white mb-0">New Items</h3>
                                <p className="text-white text-sm mb-0">
                                    Explore the fascinating new collection of NFTs every day.
                                </p>
                            </div>
                            <div className="col-5 h-100 position-div rounded-pill heading-right-part d-flex align-items-center">
                                <img className="some-css img-fluid mx-auto" src="/images/loot_boxes.webp" alt="" />
                            </div>
                            {/* </div>
                            </div> */}

                        </div>
                    </header>


                    {AllNFTS.data.length == 0 ? (
                        <div className='col-12'>
                            <NoDataAlert
                                heading="There're no NFTs at the moment."
                                subheading='Try to mint some assets to see how are we rendering them.'
                            />
                        </div>
                    ) :
                        <>
                            {/* {
                            console.log("Test",Math.max(ShowData.filter((element) => element.price == "01000000000000000").length - 10))
                        } */}

                            <Swiper
                                spaceBetween={30}
                                breakpoints={{
                                    400: { slidesPerView: 1 },
                                    900: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                    1400: { slidesPerView: 4 },
                                }}

                                navigation={Boolean(AllNFTS?.data?.data?.length !== 0)}
                            >
                                {

                                    AllNFTS.data.data.filter((element) => element.price == "01000000000000000").slice(-10).reverse().map((NFT, key) => {

                                        return (
                                            <SwiperSlide key={key}>
                                                <NftItem {...NFT} NFT={NFT} nftKey={key} />

                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
                        </>
                    }

                    {Spinner ? <Loader /> : null}


                </div>
            </section>

            <TopSellers
                topSellers={topSellers}
                title='Top Sellers'
                description='Here are MintSea’s top sellers with the highest number of NFTs sold:'
            />

            <section className='pt-5'>
                <div className='container'>
                    <header className='mb-5'>
                        <div className='row heading-col py-5'>
                            <div className='col-lg-6 text-center mx-auto'>
                                <h3 className='text-white mb-0'>How it works</h3>
                                <p className='text-white text-sm mb-0'>
                                    MintSea marketplace offers fixed-price NFT tokens, requiring a crypto wallet for storage, exchange, and artwork creation.
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className='row px-0 mx-1 px-lg-4 mx-lg-2 g-5'>
                        <div className='col-lg-4'>
                            <div className='card h-i-w-Card card-hover-minimal h-100 border-0' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }}>
                                <div className='card-body py-lg-5 align-items-center position-relative'>
                                    <div className='mx-auto flex-shrink-0 position-absolute d-flex justify-content-end top-0 end-0'>
                                        {/* <i className='fs-2 las la-wallet'></i> */}
                                        <img src="/images/connect.webp" alt="icons" className='w-50 w-sm-75' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }} />
                                    </div>
                                    <div className='px-2 pt-4'>
                                        <h5 className='mb-3'>Connect your wallet</h5>
                                        <p className='text-white text-sm mb-0'>
                                            The first step in harnessing the potential of the MintSea platform is to create a wallet from which to proceed with your purchases, sells, or exchanges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='card h-i-w-Card card-hover-minimal h-100 border-0' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }}>
                                <div className='card-body py-lg-5 align-items-center position-relative'>
                                    <div className='mx-auto flex-shrink-0 position-absolute d-flex justify-content-end top-0 end-0'>
                                        {/* <i className='fs-2 las la-rocket'></i> */}
                                        <img src="/images/sell.webp" alt="icons" className='w-50 w-sm-75' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }} />
                                    </div>
                                    <div className='px-2 pt-4'>
                                        <h5 className='mb-3'>Mint & Buy and Sell NFTs</h5>
                                        <p className='text-white text-sm mb-0'>
                                            You may now purchase, sell, exchange, and manage NFTs with your wallet connected to the MintSea marketplace.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='card h-i-w-Card card-hover-minimal h-100 border-0' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }}>
                                <div className='card-body py-lg-5 align-items-center position-relative'>
                                    <div className='mx-auto flex-shrink-0 position-absolute d-flex justify-content-end top-0 end-0'>
                                        {/* <i className='lab la-ethereum'></i> */}
                                        <img src="/images/funds.webp" alt="icons" className='w-50 w-sm-75' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)" }} />
                                    </div>
                                    <div className='px-2 pt-4'>
                                        <h5 className='mb-3'>Collect your funds</h5>
                                        <p className='text-white text-sm mb-0'>
                                            To release your funds from MintSea account, you need to transfer the amount to your wallet first, then you can claim funds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NFT ITEMS */}
            <section className='py-5'>
                <div className='container py-5'>
                    <header className='mb-5 pb-5'>
                        <div className='row position-relative heading-col'>
                            {/* <div className='col-lg-6'>
                                <h2>Open for sale NFTs</h2>
                                <p className='text-muted text-sm mb-0'>
                                    These are the listed NFTs, open for sale:
                                </p>
                            </div> */}

                            {/* <div className="container-xl">
                                <div className="row mt-5 position-relative heading-col"> */}
                            <div className="col-7 text-white heading-left-part">
                                <h3 className="text-white mb-0">Open for sale NFTs</h3>
                                <p className="text-white text-sm mb-0">
                                    These are the listed NFTs, open for sale:
                                </p>
                            </div>
                            <div className="col-5 h-100 position-div rounded-pill heading-right-part d-flex align-items-center">
                                <img className="some-css img-fluid mx-auto" src="/images/NFT_sell.webp" alt="" />
                            </div>
                            {/* </div>
                            </div> */}

                        </div>
                    </header>

                    {AllNFTS.data.length == 0 ? (
                        <div className='col-12'>
                            <NoDataAlert
                                heading="There're no Open For Sale assets at the moment."
                                subheading='Once someone has listed his asset for sale, you should find it here.'
                            />
                        </div>
                    ) :

                        <>
                            <Swiper
                                spaceBetween={30}
                                breakpoints={{
                                    400: { slidesPerView: 1 },
                                    900: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                    1400: { slidesPerView: 4 },
                                }}
                                navigation={Boolean(ShowData.length !== 0)}
                            >
                                {/* Math.max(ShowData.filter((element) => element.price != "01000000000000000").length - 20, 0) */}
                                {AllNFTS?.data?.data.filter((element) => element.price != "01000000000000000").slice(-10).reverse().map((NFT, key) => {
                                    // console.log("Show_items",NFT.price);
                                    const index = marketplaceCtx.offers
                                        ? marketplaceCtx.offers.findIndex((offer) => offer.id === NFT.id)
                                        : -1;
                                    const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                                    const price =
                                        index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;

                                    return (
                                        <>
                                            <SwiperSlide key={key}>
                                                <NftItem {...NFT} NFT={NFT} index={index} owner={owner} price={NFT.price} nftKey={key} />
                                            </SwiperSlide>m
                                        </>
                                    );
                                })}
                            </Swiper>
                        </>}

                    {ShowData.length == 0 ? <Loader /> : null}


                </div>
            </section>
        </>
    );
}

export default Home;
