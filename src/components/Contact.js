import React, { useEffect } from 'react';
import PageBanner from './general/PageBanner';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { Link } from 'react-router-dom';

function Contact(props) {
    useEffect(() => {
        document.title = 'Contact Us | NFT Marketplace';
    });

    useEffect(() => {
        document.getElementById("root").classList.add("bg-complete");
        return () => {
            document.getElementById("root").classList.remove("bg-complete");
        };
    }, []);

    return (
        <>
            {/* <PageBanner heading={'Contact Us'} /> */}
            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5'>

                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">Contact Us</h1>
                            {/* <h2 className='text-white ms-5 ps-3 mb-5' >
                                Our NFTs
                            </h2> */}
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link className='text-white fs-5' to='/contact' style={{textDecoration: "none"}}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/contact.webp" alt="contact" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container py-5'>
                    <div className='row g-4'>
                        <ContactInfo gridWidth='col-lg-4' />
                        <ContactForm gridWidth='col-lg-8' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
