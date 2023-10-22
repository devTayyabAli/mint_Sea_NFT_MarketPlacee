import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';

function PageBanner({ heading, category }) {
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
    
    return (
        <>
            {/* <section className='py-5 bg-dark position-relative'>
            <Particles  init={particlesInit}
                loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
                <div className='container py-5 mt-5 z-index-20'>
                    <h1 className='text-center'>{heading}</h1>

                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'>
                                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                    {' '}
                                    <i className='las la-home la-sm me-1'></i>Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>
                                {heading}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5 pt-md-5'>

                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">{heading}</h1>
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
                                    <Link className='text-white fs-5' to={`/categories/${category}`} style={{textDecoration: "none"}}>
                                        {heading}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid ms-auto' src={`/images/cards/${category}.png`} alt="explore" style={{width: "35%", filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default PageBanner;
