import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const DocsBanner = ({heading}) => {
    useEffect(() => {
        document.getElementById("root").classList.add("bg-docs");
        return () => {
            document.getElementById("root").classList.remove("bg-docs");
        };
    }, []);
    return (
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
                                <Link className='text-white fs-5' to='/docs' style={{textDecoration: "none"}}>
                                    {heading}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-6 ms-auto d-none d-lg-block'>
                        <img className='img-fluid mx-auto w-50' src="/images/docs.webp" alt="docs" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DocsBanner;