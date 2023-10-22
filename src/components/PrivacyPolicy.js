import React, { useCallback, useEffect } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link, NavLink } from 'react-router-dom';
import { particlesOptions } from '../helpers/constants';

const PrivacyPolicy = () => {
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
        document.getElementById("root").classList.add("bg-privacy-policy");
        return () => {
            document.getElementById("root").classList.remove("bg-privacy-policy");
        };
    }, []);
    return (
        <>
            {/* <section className='py-5 bg-transparent position-relative'>
            <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
                <div className="container py-5 mt-5 z-index-20">
                    <div className="row">
                        <div className="col-lg-6 text-center mx-auto">
                            <h1>Privacy Policy</h1>
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
                                Privacy Policy
                            </li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5 pt-5'>
                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">Privacy Policy</h1>
                            {/* <p className='text-white mb-5' >Opening a New Realm in the Digital Economy</p> */}
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item active text-lg fw-bold'>
                                    Privacy Policy
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/privacy-policy.webp" alt="privacy policy" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="card p-5" style={{height: "100%", background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                        <div className='mb-4 text-white'>
                            <h4 className='mb-4 text-center'>Privacy Policy</h4>

                            <p className="text-md mb-3">Your privacy is something that Mint-Sea takes seriously. To let you know how we collect, use, and disclose your information in connection with the Mint-Sea websites, mobile apps, and other services we offer you, we have created this privacy policy.</p>
                            <p className="text-md mb-3"><b>1. The kinds of data we gather.</b> As stated below, we gather data that may be personally identifiable, fictitious, or about our users.</p>
                            <p className="text-md mb-3 ms-3 fst-italic"><b>A.</b> Information That You Give Us.</p>
                            <p className="text-md mb-3 ms-5"><b>I.</b> Account Specifics. You can add information to your account when using our service. We gather information and other data you add to your account, including your username, email address, Bio, wallet address and Profile Picture. Other than your email address, your account information will be available to the public. Please keep in mind that even after you remove public content from your Mint-Sea account, it will not more available in our Mint-sea site.</p>
                            <p className="text-md mb-3 ms-5"><b>II.</b> Preferences. Using our service, you can save preferences for things like notification settings, how your information is displayed, and favorite websites. These decisions can be connected to your account, browser, or mobile device.</p>
                            <p className="text-md mb-3 ms-5"><b>III.</b> Feedback. We may obtain your name, contact information (such as an email address), and any other information contained in or connected with the message you provide if you give us feedback or contact us.</p>

                            <p className="text-md mb-3">Your blockchain wallet address also serves as your identity on Mint-Sea, similar to much of web3. As a result, to use specific features of the Service, A blockchain wallet address alone is not regarded by us as personal information about you. However, when you use our Service, a blockchain wallet address might be connected to you or the data you give us.</p>
                            <p className="text-md mb-3 fst-italic"><b>B.</b> Public Information.</p>
                            <p className="text-md mb-3">We gather information from transactions and data that are openly accessible and/or visible on public blockchains or other sources. This might include things like blockchain wallet addresses and details on NFT purchases, sales,Marketplace's Choice,Browse by category ,New Items, Top Sellers NFT,Open for sale NFTs or transfers, which could then be connected to other information you've given us.</p>

                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">2. Use of Your Data.</p>
                            <p className="text-md mb-3 ms-3"><b>I.</b> To operate our business, deliver the Service, cater to your individual needs, and enhance the Service, we process information about and/or pertaining to you. To be more precise, we use your information to:</p>
                            <p className="text-md mb-3 ms-3"><b>II.</b> Deliver, run, and maintain the Service;</p>
                            <p className="text-md mb-3 ms-3"><b>III.</b> Enhance and assess the Service;</p>
                            <p className="text-md mb-3 ms-3"><b>IV.</b> Analyze, enhance, and tailor your usage of the service, including by providing suggestions to you;</p>
                            <p className="text-md mb-3 ms-3"><b>V.</b> To speak with you;</p>
                            <p className="text-md mb-3 ms-3"><b>VI.</b> Investigate, address, and stop behavior that may be harmful or illegal or that may be In violation of our terms of service;</p>
                            <p className="text-md mb-3 ms-3"><b>VII.</b> Send you newsletters,and other communications about our service or the products and services of third parties;</p>
                            <p className="text-md mb-3 ms-3"><b>VIII.</b> Obey all applicable laws, assist in the investigation of alleged legal infractions by law enforcement or other authorities, and/or defend the legal rights of us and our affiliates.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>3. Disclosure of Your Information.</b> As outlined below, we disclose information about you.</p>
                            <p className="text-md mb-3 ms-3"><b>A.</b> Affiliates. Any subsidiaries, joint ventures, or other businesses or goods that are under our common control (collectively, "Affiliates") may receive some or all of your information and information about you, in which case we will require our Affiliates to abide by this Privacy Policy.</p>
                            <p className="text-md mb-3 ms-3"><b>B.</b> Normative Rights. Regardless of any decisions you make regarding your information (as described below), Mint-Sea may disclose your information and information about you if Mint-Sea has a good faith belief that such disclosure is required: (a) in connection with any legal investigation; (b) to comply with applicable laws or to respond to subpoenas, warrants, or other legal process served on Mint-Sea; (c) to protect or defend the rights or property of Mint-Sea or users of the Service.</p>
                            <p className="text-md mb-3 ms-3"><b>C.</b> Additional Disclosures. To fulfill the reason for which you provide it, such as to give you access to our Service and new features, for any other purpose indicated by us when you provide it, or with your consent. We may also disclose your information and information about you.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>4. External Wallets.</b> You need to use a third-party wallet with public blockchain support in order to enjoy some features of our Service. The applicable terms of service and privacy policy of any third-party wallet provider will apply to your dealings with that third party.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>5. Your Informational Decision-Making Options.</b> Regarding how to use the information on our service, you have options:</p>
                            <p className="text-md mb-3 ms-3"><b>A.</b> Email correspondence. Periodically, we might send you emails, newsletters, or both that specifically advertise using our service or the products and services of third parties. </p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>6. Data management and access.</b> Through your Settings page, you can view, access, edit, or delete your information and information about you for specific aspects of the Service. You may be able to assert certain rights in relation to your information and information about you, depending on the applicable law where you live. In the event that your operating entity or jurisdiction does not grant such rights, Mint-Sea will do so at its sole discretion.</p>
                            <p className="text-md mb-3">We encourage you to get in touch with us first if you think your rights have been violated so we can attempt an informal resolution.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>7. Safety.</b> We are concerned about the security of your information and employ physical, administrative, and technological precautions to ensure the integrity and security of data acquired through our Service. However, no security system is impenetrable, and we cannot guarantee the security of our own or our vendors' systems. If any information under our custody and control is compromised as a result of a breach of security, we will investigate and remediate the situation, and we may notify those individuals whose information may have been compromised in accordance with applicable laws and regulations.</p>
                            <p className="text-md mb-3">You are responsible for the security of your digital wallet, and we advise you to take the necessary precautions to ensure that it is and remains safe. Please contact your wallet provider if you detect a problem with your wallet.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>8. Minors.</b> All users  can be visite  our Mint-sea Platform No restriction for the Child or overage. according to our Terms of Service. <NavLink to='/contact'>contact us</NavLink>. </p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>9. Modifications to This Privacy Policy.</b> This Privacy Statement may be changed at any moment for any reason. We shall post the revised Privacy Policy to alert you of any changes to our Privacy Policy. The date the Privacy Policy was last changed is noted at the top of this document. You are responsible for checking our Service and this Privacy Policy for changes on a regular basis.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3"><b>10. Questions; Contacting Us; Reporting Violations.</b> If you have any questions or concerns or complaints about our Privacy Policy or our data collection or processing practices, or if you want to report any security violations to us, please contact us through the information provided on our <NavLink to='/contact'>Contact Us page</NavLink>. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy