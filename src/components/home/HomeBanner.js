// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
//import React, { useEffect } from 'react';
import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// import { particlesOptions } from '../../helpers/constants';
// import { useDispatch } from 'react-redux';

function HomeBanner() {
    // const particlesInit = useCallback(async engine => {
    //     // console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async container => {
    //     // await console.log(container);
    // }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'animation';
        script.src = "/js/animation.js";
        script.async = true;
    
        document.body.appendChild(script);
        //console.log("added script");
    
        return () => {
          document.body.removeChild(script);
          //console.log("removed script");
        }
      }, []);
  
    return (
        <section className='hero'>
            {/* bg-dark pb-5 background-top */}
            {/* <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} /> */}
            {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}
            <div className='container py-5 z-index-10 position-relative mt-5'>
                <div className='row align-items-center mt-5'>
                    <div className='col-lg-6 ms-auto d-none d-lg-block'>
                        {/* <img className='img-fluid mx-auto' src=' images/illu-3.png' alt='..' /> */}
                        {/* <img className='img-fluid mx-auto' src="/images/hero.png" alt="hero"></img> */}
                        {/* <img className='img-fluid mx-auto' src="/images/hero-animation.gif" alt="hero"></img> */}
                        <div className="scene">
                            <div className="carousel">
                                <div className="carousel__cell">
                                    <Link to={"/categories/art"}>
                                        <img src="/images/cards/art.webp" alt="art"/>
                                    </Link>
                                </div>
                                <div className="carousel__cell">
                                    <Link to={"/categories/collectibles"}>
                                        <img src="/images/cards/collectibles.webp" alt="collectibles"/>
                                    </Link>
                                </div>
                                <div className="carousel__cell">
                                    <Link to={"/categories/domainNames"}>
                                        <img src="/images/cards/domainNames.webp" alt="domainNames"/>
                                    </Link>
                                </div>
                                <div className="carousel__cell">
                                    <Link to={"/categories/music"}>
                                        <img src="/images/cards/music.webp" alt="music"/>
                                    </Link>
                                </div>
                                <div className="carousel__cell">
                                    <Link to={"/categories/trendingCards"}>
                                        <img src="/images/cards/trendingCards.webp" alt="trending cards"/>
                                    </Link>
                                </div>
                                <div className="carousel__cell">
                                    <Link to={"/categories/virtualWorlds"}>
                                        <img src="/images/cards/virtualWorlds.webp" alt="virtual worlds"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className="carousel-options">
                            <p>
                                <label>
                                Cells
                                <input className="cells-range" type="range" min="6" max="6" value="1" />
                                </label>
                            </p>
                            <p>
                                <button className="previous-button">Previous</button>
                                <button className="next-button">Next</button>
                            </p>
                            <p>
                                Orientation:
                                <label>
                                <input type="radio" name="orientation" value="horizontal" checked />
                                horizontal
                                </label>
                                <label>
                                <input type="radio" name="orientation" value="vertical" />
                                vertical
                                </label>
                            </p>
                        </div> */}
                    </div>

                    <div className='col-lg-6'>
                        
                        <h1 className="text-white h-b-t-fs">Begin Your NFT Collection Today with Us.</h1>
                        <p className='text-white mb-5' style={{fontSize: "1.32rem"}}>
                            Whether you are a beginner, expert, or anything in between, MintSea is the right place for you.
                        </p>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Link className='btn-blue me-2' to='/mint'>
                                    Mint NFT
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link className='btn-white ms-2' to='/explore'>
                                    Explore
                                </Link>
                            </li>
                        </ul>
                        <div className='w-75 d-flex align-items-center justify-content-between pt-4'>
                            <div className='d-flex align-items-center'>
                                <img className='mx-2 align-self-end mb-1' src="/images/side_icon.png" alt="side icon" style={{height:"4.3rem"}}/>
                                <div className='me-4'>
                                    <p className='h1 mb-0' style={{color: "#9CAAFF"}}>942+</p>
                                    <span className="fw-bold" style={{color: "#49E6FB"}}>Collectibles</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center '>
                                <img className='mx-2 align-self-end mb-1' src="/images/side_icon.png" alt="side icon" style={{height:"4.3rem"}}/>
                                <div className='me-4'>
                                    <p className='h1 mb-0' style={{color: "#9CAAFF"}}>27k</p>
                                    <span className="fw-bold" style={{color: "#49E6FB"}}>Auctions</span>
                                </div>
                            </div>

                            <div className='d-flex align-items-center '>
                                <img className='mx-2 align-self-end mb-1' src="/images/side_icon.png" alt="side icon" style={{height:"4.3rem"}}/>
                                <div className='me-4'>
                                    <p className='h1 mb-0' style={{color: "#9CAAFF"}}>4k</p>
                                    <span className="fw-bold" style={{color: "#49E6FB"}}>NFT</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
