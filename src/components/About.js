import React, { useCallback, useEffect } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
// import { particlesOptions } from '../helpers/constants';

const About = () => {
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
    useEffect(() => {
        document.getElementById("root").classList.add("bg-about");
        return () => {
            document.getElementById("root").classList.remove("bg-about");
        };
    }, []);
    return (
        <>
            {/* <section className='py-5 bg-transparent position-relative'>
            <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
                <div className="container py-5 mt-5 z-index-20">
                    <div className="row mb-5">
                        <div className="col-lg-6 text-center mx-auto">
                            <h1>About Us</h1>
                            <p className="text-muted mb-0">Opening a New Realm in the Digital Economy</p>
                        </div>
                    </div>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'>
                                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                    {' '}
                                    <i className='las la-home la-sm me-1'></i>Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5 pt-5'>
                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">About Us</h1>
                            <p className='text-white'>Opening a New Realm in the Digital Economy</p>
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item active text-lg fw-bold'>
                                    About Us
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/about.webp" alt="about" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="card p-5" style={{height: "100%", background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                        <div className='mb-4 text-white'>
                            <h4 className='mb-4 text-center'>Opening a New Realm in the Digital Economy</h4>

                            <p className="text-md mb-3">We are a digital marketplace for buying and selling NFTs. Our platform allows users to store, show, and sell their NFTs to other users in exchange for cryptocurrencies.</p>
                            <p className="text-md mb-3">The distinctiveness, tradability, demonstrable scarcity, and adaptability to many applications are exciting novel aspects of NFTs. As opposed to tangible things, they can be programmed just the way digital items could be. For instance, like tangible goods, you can do whatever you want with them! You could give them to someone, keep them with you, or sell them in a market. Yet opposed to tangible things, they can be programmed just the way digital items could be.</p>
                            <p className="text-md mb-3">Our concept is fundamentally based on the idea that dynamic new economies will be made possible by open protocols like Ethereum and compatible standards like ERC-721. We're creating technologies that let users freely exchange their goods, producers publish new digital creations, and developers create robust, integrated marketplaces for their digital goods.</p>
                            <p className="text-md mb-3">We take great pride in being known as one of the prominent NFT marketplaces. </p>
                        </div>

                        <div className='mb-4 text-white'>
                            <h4 className='mb-2 text-center'>Our Story</h4>
                            <h6 className='mb-4 text-center'>We are fully utilizing the vast opportunities in the NFT landscape!</h6>
                            <p className="text-md mb-3">The first decentralized application powered by blockchains was geared toward a mass market. With this onset of cryptocurrencies and digital asset markets, non-fungible tokens (NFTs) have become quite a thing today. Our journey in this sphere began with the growing popularity of cryptocurrencies and NFTs. Today, the potential of the NFT market has skyrocketed, and we are proud to be among the largest NFT marketplaces.</p>
                            <p className="text-md mb-3">Amidst all these emerging NFT trends, our CEO, Alamgir Rajab, made a wise decision to be a part of this Mint-sea Project. His decision proved to be a great one as today, we have a huge market for a variety of NFTs.</p>
                            <p className="text-md mb-3">Despite so much growth and changes in the NFT market from where we began, we're pleased to say that we've maintained our position as the largest general user-owned digital item marketplace, supporting a variety of blockchains, with a wide range of categories and the most affordable pricing for the newly emerging digital item classes.</p>
                            <p className="text-md mb-3">We are thrilled to be at the forefront of this expanding sector, and we'll keep investing in our fundamental framework as we create the most user-friendly marketplace for NFT consumers, sellers, and creators.</p>

                            <h4 className='my-4 text-center'>Inspired by major businesses and industry giants,  we have forged the path for a brand-new digital economy.</h4>

                        </div>

                        <div className='mb-4 text-white'>
                            <h4 className='mb-4 text-center'>Security Reports</h4>

                            <p className="text-md mb-3">In order to be a dependable and secure marketplace for NFTs, we work diligently. Identifying and eliminating present vulnerabilities is of paramount significance. We make sure that every report is examined by security professionals and treated appropriately.</p>
                            <p className="text-md mb-3">To receive updates on our newest feature releases,  hints and tips for using Mint-Sea, subscribe to our mailing list.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About