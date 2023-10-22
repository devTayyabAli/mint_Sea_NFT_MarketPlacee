import React from 'react';
//import { Link} from "react-router-dom";

function ContactInfo(props) {
    return (
        <div className={props.gridWidth}>
            <div className='card' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "8px"}}>
                <div className='card-body px-2 py-4 px-lg-4 py-lg-5'>
                    <h5 className='mb-4'>We are here to help you!</h5>
                    <ul className='list-unstyled mb-4'>
                        <li className='d-flex flex-column mb-4'>
                            {/* <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-globe'></i>
                            </div> */}
                            {/* <div className='ms-3'> */}
                            <h6>Company Address</h6>
                            <p className='text-sm text-white mb-0 p-2' style={{borderRadius: "8px", border: "1px solid #49E6FB"}}>62 Bridge Street, Kington, United Kingdom, HR5 3DJ
                                United Kingdom
                            </p>
                            {/* </div> */}
                        </li>
                        <li className='d-flex flex-column mb-4'>
                            {/* <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-phone'></i>
                            </div>
                            <div className='ms-3'> */}
                            <h6>Hot lines</h6>
                            <ul className='list-unstyled p-2' style={{borderRadius: "8px", border: "1px solid #49E6FB"}}>
                                <li>
                                    <a
                                        className='text-decoration-none text-sm text-white mb-1'
                                        rel='noreferrer'
                                        href='tel:447897060588'
                                    >
                                        +447897060588
                                    </a>
                                </li>
                            </ul>
                            {/* </div> */}
                        </li>
                        <li className='d-flex flex-column mb-4'>
                            {/* <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-envelope'></i>
                            </div> */}
                            {/* <div className='ms-3'> */}
                            <h6>Email address</h6>
                            <ul className='list-unstyled mb-0 p-2' style={{borderRadius: "8px", border: "1px solid #49E6FB"}}>
                                <li>
                                    <a
                                        className='text-decoration-none text-sm text-white mb-1'
                                        rel='noreferrer'
                                        href='mailto:info@mint-sea.com'
                                    >
                                        info@mint-sea.com
                                        
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='text-decoration-none text-sm text-white mb-1'
                                        rel='noreferrer'
                                        href='mailto:contact@mint-sea.com'
                                    >
                                        contact@mint-sea.com
                                    </a>
                                </li>
                            </ul>
                            {/* </div> */}
                        </li>
                    </ul>

                    <h2 className='h5 mb-1'>We are social</h2>
                    <p className='text-white mb-3 p-2' style={{fontSize:"0.9em", borderRadius: "8px", border: "1px solid #49E6FB"}}>
                        We are active on every social media network. Join our Network <br /> and start your NFT journey with Us.
                    </p>
                    <ul className='list-inline mb-0 d-flex justify-content-evenly'>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href={process.env.REACT_APP_SOCIAL_FACEBOOK}>
                                <i className='lab la-facebook-f'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href={process.env.REACT_APP_SOCIAL_PINTEREST}>
                                <i className='lab la-pinterest'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href={process.env.REACT_APP_SOCIAL_TWITTER}>
                                <i className='lab la-twitter'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href={process.env.REACT_APP_SOCIAL_INSTAGRAM}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href={process.env.REACT_APP_SITE_URL}>
                                <i className='las la-link'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
