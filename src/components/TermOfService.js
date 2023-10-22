import React, { useCallback, useEffect } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../helpers/constants';

function TermOfService() {
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
        document.getElementById("root").classList.add("bg-term-of-service");
        return () => {
            document.getElementById("root").classList.remove("bg-term-of-service");
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
                            <h1>Terms of Service</h1>
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
                                Terms of Service
                            </li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5 pt-5'>
                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">Terms of Service</h1>
                            {/* <p className='text-white mb-5' >Opening a New Realm in the Digital Economy</p> */}
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item active text-lg fw-bold'>
                                    Terms of Service
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/term-of-service.webp" alt="term of service" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="card p-5" style={{height: "100%", background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                        <div className='mb-4 text-white'>
                            <h4 className='mb-4 text-center'>Terms of Service</h4>

                            <p className="text-md mb-3 fw-bold">1. Introduction</p>
                            <p className="text-md mb-3">Welcome to Mint-Sea. This document outlines the terms of service for Mint-Sea, which govern access to their website, mobile apps, and live support. It also mentions the use of their services to view, explore, and create NFTs on public blockchains.</p>
                            <p className="text-md mb-3">“User”, "you," and "your" refer to the Service's user, and if using the Service on behalf of an entity, you represent and warrant that you are their authorized representative with authority to bind them to these Terms.</p>
                            <p className="text-md mb-3 fw-bold">Please carefully read the Terms of Service as they contain important information and affect your legal rights. They require Independent Arbitration to resolve disputes between us rather than in court. By clicking to accept, sign, and use the service, you agree to be bound by these terms and may not access or use the service if you do not agree to them.</p>
                            <p className="text-md mb-3">Mint-Sea is a peer-to-peer web3 service that does not act as a wallet provider, exchange, broker, dealer, financial institution, payments processor, money transfer company, or creditor.</p>
                            <p className="text-md mb-3">Mint-Sea does not make any guarantees about the identity, legitimacy, functionality, or authenticity of users or NFTs on the Service. Users bear full responsibility for verifying the identity, legitimacy, and authenticity of NFTs purchased from third-party sellers.</p>
                            <p className="text-md mb-3">We may need to provide additional terms for specific services, which are part of our agreement with you. If there is a discrepancy between the Terms and other applicable terms, the additional terms will take precedence.</p>
                            <p className="text-md mb-3">Mint-Sea has the sole discretion to update or modify these Terms at any time, with reasonable attempts to notify of such changes. By continuing to access or use the Service, you affirm your acceptance of the new Terms and all terms included therein. It is your sole obligation to examine the Terms on a regular basis to see if there have been any changes and to ensure that you understand the terms and conditions.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">2. Accessing the Service</p>
                            <p className="text-md mb-3">Mint-Sea requires a blockchain address and third-party wallet to use the Service. Accounts are associated with the blockchain address, and personalization can be added with a profile photo.</p>
                            <p className="text-md mb-3">Your Account on Mint-Sea will be associated with a linked blockchain address and displayed the NFTs for that blockchain address (and, if applicable, any content associated with such NFTs). By using your wallet in connection with the Service, you agree that you are using that wallet under the terms and conditions of the applicable provisions. Mint-Sea does not have custody or control over the contents of your wallet and has no ability to retrieve or transfer it. You are solely responsible for keeping your wallet secure and should never share your wallet credentials or seed phrase with anyone. If you discover an issue related to your wallet, contact your wallet provider. Mint-Sea is not liable for any acts or omissions by you in connection with your Account or as a result of your Account or wallet being compromised.</p>
                            <p className="text-md mb-3">You also represent and warrant that you will follow all applicable laws (including local, state, federal, and other laws) when using the Service. We may need to restrict, suspend, or cancel your access to the Service in order to comply with our legal obligations and keep our users and platform safe. You acknowledge that Mint-Sea is under no obligation to share the details of its decision with you.</p>
                            <p className="text-md mb-3">In Mint-Sea no age limit restrict any one can vistie our services and utilize our service </p>
                        </div>

                        <div className='mb-4v'>
                            <p className="text-md mb-3 fw-bold">3. Ownership</p>
                            <p className="text-md mb-3">The Service, including its "look and feel" (e.g., text, graphics, images, logos, page headers, button icons, URLs, and scripts), proprietary content, information, and other materials, and all content and other materials contained therein, including, without limitation, the Mint-Sea logo and all designs, text, graphics, pictures, data, software, sound files, and other files, and their selection and arrangement, are the exclusive property of Mint-Sea or our affiliates,  We and our affiliates, licensors, and users, as appropriate, reserve all rights in connection with the Service and its content, including the sole right to make derivative works.</p>
                            <p className="text-md mb-3">Mint-Sea's name, logo, trademarks, and any Mint-Sea product or service names, designs, logos, and slogans are Mint-Sea's or our affiliates' or licensors' intellectual property and may not be duplicated, imitated, or used, in whole or in part, without our prior written consent in each instance. Without our prior written consent, you may not use any metatags or other "hidden text" containing "Mint-Sea" or any other name, trademark, product, or service name of Mint-Sea or our affiliates or licensors. Furthermore, the "look and feel" of the Service is Mint-Sea's service mark, trademark, or trade dress and may not be copied, imitated, or used, in whole or in part, without our prior written permission.</p>
                            <p className="text-md mb-3">All other third-party trademarks, registered trademarks, and product names mentioned on the Service or contained in content linked to or associated with any NFTs displayed on the Service are the property of their respective owners and may not be copied, imitated, or used, in whole or in part, without the express written permission of the applicable intellectual property rights holder. The mention of any products, services, processes, or other information by name, trademark, manufacturer, supplier, or otherwise does not indicate or imply Mint-Sea's endorsement, sponsorship, or recommendation.</p>
                            <p className="text-md mb-3">Mint-Sea reserves the right to use and disclose Feedback without further notice or compensation, and assigns all rights, title, and interest in and to any and all Feedback to Mint-Sea.</p>
                            <p className="text-md mb-3">Mint-Sea has no ownership, custody, or control over third-party NFTs or smart contracts. The creators of these NFTs or smart contracts are exclusively responsible for the operation and functionality of their creations.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">4. License to Access and Use Our Service and Content</p>
                            <p className="text-md mb-3">You are granted a limited, nonexclusive, nontransferable, non-sublicensable, and personal license to access and use the Service. We grant you a non-commercial, personal, non-assignable, non-sublicensable, non-transferable, and non-exclusive right and license to access and display software, content, and materials provided to you as part of the Service.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">5. Third-Party Content, Agreements, and Services</p>
                            <p className="text-md mb-3">Mint-Sea is a peer-to-peer web3 service that allows users to explore third-party NFTs and interact with various blockchains. Users are solely responsible for confirming the legitimacy, authenticity, and legality of NFTs purchased from third-party sellers. Mint-Sea cannot guarantee that any NFTs will always be visible and/or available for purchase, sale, or transfer.</p>
                            <p className="text-md mb-3">The most important details in this text are that Mint-Sea does not set the NFT Terms and is not a party to any such NFT Terms, which are solely between the buyer, seller, and/or creator. Mint-Sea does not set the NFT Terms and is not a party to any such NFT Terms, which are solely between the buyer, seller, and/or creator. The buyer, seller, and/or creator are responsible for communicating, promulgating, agreeing to, and enforcing NFT Terms.</p>
                            <p className="text-md mb-3">The price of an NFT, including of any applicable tax, is exclusively determined and established by the seller. Furthermore, they are solely responsible for any mint count and minting mechanics for NFTs they sell, to the extent applicable.</p>
                            <p className="text-md mb-3">Mint-Sea may be compensated for its services. Mint-Sea does not set, collect, or assess any other related costs, fees, and expenses associated with buying and selling an NFT, such as creator profits, or transaction fees. These costs, fees, and expenses are paid directly to the seller, creator, payment processor, blockchain validator, or other applicable third party. Mint-Sea cannot refund these costs, fees, and expenses because they are not collected by the company.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">6. User Conduct</p>
                            <p className="text-md mb-3">Web3 is committed to offering people from all walks of life and with diverse levels of knowledge with a colourful lens into multiple blockchains. However, we reserve the right to take action if we believe you have violated these Terms or are attempting to use the Service for illegal purposes. This may involve removing or restricting the ability to see or interact with specific NFTs, disabling or restricting the ability to utilise the Service, and/or other actions.</p>
                            <p className="text-md mb-3">You agree that you will not break any law, contract, intellectual property, or other third-party right while using the Service, and that you are entirely responsible for your actions and material. You also agree not to:</p>
                            <ul className="text-md text-muted">
                                <li className="mb-3">Use or attempt to use another user's Account without the user's permission;</li>
                                <li className="mb-3">Pose as another person or company, or utilise a wallet, to conduct a transaction on Mint-Sea that is owned or managed in whole or in part by another individual.</li>
                                <li className="mb-3">Claim a Mint-Sea username with the intent of reselling it, misleading others, stealing others' goodwill.</li>
                                <li className="mb-3">If we've restricted any of your other blockchain addresses from accessing the Service, you must use a different blockchain address to use the Service, unless you receive our explicit permission before hand.</li>
                                <li className="mb-3">Spam may be distributed by sending undesired NFTs to other users.</li>
                                <li className="mb-3">Use the Service in any way that might damage, disable, overburden, or impair the Service's functionality, including by distributing any software or interacting with any API.</li>
                                <li className="mb-3">Use our Service, including our APIs, in any way that is in violation of our developer rules;</li>
                                <li className="mb-3">Use our Service for commercial purposes that are not in accordance with these Terms or any other instructions;</li>
                                <li className="mb-3">Reverse engineer, replicate, decompile, disassemble, or decode any aspect of the Service, or do anything that may lead to the discovery of source code, or bypass or circumvent measures used to block or limit access to any service, area, or code of the Service;</li>
                                <li className="mb-3">Sell or resell the Service, or seek to avoid any Mint-Sea fee scheme;</li>
                                <li className="mb-3">Engage in actions with the intent or effect of artificially causing an item or collection to appear in a specific area of Mint-Sea's site or at the top of search results, or artificially increasing view counts, favourites, or other metrics that Mint-Sea may use to surface or sort items, collections, or search results;</li>
                                <li className="mb-3">Use the Service to create, sell, or buy NFTs or other items that give owners rights to participate in an Blockchain .</li>
                                <li className="mb-3">Use the Service to engage in price manipulation, fraud, or other deceptive, misleading, or manipulative activity;</li>
                                <li className="mb-3">Use the Service to buy, sell, or transfer stolen items, fraudulently obtained items, items taken without authorization, and/or any other illegally obtained items;</li>
                                <li className="mb-3">Create or display NFTs or other items that promote suicide or self-harm, incite hate or violence against others, or dox another individual;</li>
                                <li className="mb-3">Use the Service for any illegal or unauthorized purpose, including creating or displaying illegal content, such as content that may involve child sexual exploitation, or encouraging or promoting any activity that violates the Terms of Service;</li>
                                <li className="mb-3">Use the Service with the proceeds of unlawful activity or with a wallet used to engage in unlawful activity;</li>
                                <li className="mb-3">Use the Service in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Service.</li>
                            </ul>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">7. Intellectual Property Rights</p>
                            <p className="text-md mb-3">You are entirely responsible for the Service and any information you give. By using the Service, you grant Mint-Sea a royalty-free, worldwide, non-exclusive licence to use, copy, alter, and display any content you submit or post on or through the Service for our current and future business purposes. This includes any digital file, artwork, or other content related to or linked to any NFTs shown on the Service.</p>
                            <p className="text-md mb-3">Mint-Sea does not claim ownership of content submitted, posted, or displayed on or through the Service. You must have all rights, licenses, consents, permissions, power, and/or authority to grant the rights granted herein for any content you create, submit, post, promote, or display on or through the Service.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">8. Communication Preferences</p>
                            <p className="text-md mb-3">Mint-Sea requires users to consent to receive electronic communications from them, such as notices about their Account and promotional communications. This consent is not required to use the Service and users can opt out of these communications by through their Account settings.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">9. Disclaimers</p>
                            <p className="text-md mb-3">Mint-Sea and its suppliers make no warranty or representation that the Service will meet your requirements, be available on an uninterrupted, timely, secure, or error-free basis, or be accurate, reliable, complete, legal, or safe. Mint-Sea cannot guarantee the security of any data that you disclose online, and you accept the inherent security risks of providing information and dealing online over the Internet.</p>
                            <p className="text-md mb-3">Mint-Sea Parties is not responsible for any losses or injuries caused by vulnerability, abnormal behavior of software, or late reports of issues with the NFTS. Some jurisdictions do not allow the exclusion of implied warranties in contracts with consumers, so this exclusion may not apply to you.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">10. Acceptance of Risk</p>
                            <p className="text-md mb-3">You accept and acknowledge:</p>
                            <ul className="text-md text-muted">
                                <li className="mb-3">An NFT's worth is subjective. NFT prices are volatile, and movements in the price of cryptocurrencies can potentially have a major and negative impact on NFT prices. You acknowledge that you are fully aware of the subjectivity and volatility involved, as well as the possibility of losing money.</li>
                                <li className="mb-3">You acknowledge that you are responsible for any costs incurred as a result of your use of the Service, including actions taken on the blockchain, regardless of whether a successful transaction happens, and that such fees are final and irreversible.</li>
                                <li className="mb-3">A lack of public interest in the establishment and growth of distributed ecosystems could have a detrimental impact on the development of such ecosystems and related applications, and therefore on the potential value of NFTs.</li>
                                <li className="mb-3">The regulatory regime governing blockchain technologies, non-fungible tokens, cryptocurrency, and other crypto-based items is uncertain, and new regulations or policies may materially adversely affect the development of the Service and the utility of NFTs.</li>
                                <li className="mb-3">You are solely responsible for determining what if any, taxes apply to your transactions and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. Mint-Sea is not responsible for determining, withholding, collecting, reporting, or remitting any taxes that apply to your NFTs or the sale/purchase of your NFTs.</li>
                                <li className="mb-3">There are risks associated with purchasing items associated with third-party content via peer-to-peer transactions, including the risk of purchasing counterfeit items, mislabeled items, items vulnerable to metadata decay, items on smart contracts with bugs, and items that may become untransferable. You represent and warrant that you have conducted an adequate investigation before selling, obtaining, transferring, or otherwise interacting with any NFTs or accounts/collections.</li>
                                <li className="mb-3">We do not own or manage the smart contracts implemented by third parties, and we are not liable for or guarantee their operation and functionality.</li>
                                <li className="mb-3">Mint-Sea is not responsible for any communication failures, disruptions, errors, distortions, or delays experienced when using the Service or any Blockchain network. This includes the risk of hardware, software, and Internet connections, malicious software introduction, and third parties obtaining unauthorized access. Mint-Sea is not responsible for any communication failures, disruptions, errors, distortions, or delays experienced when using the Service or any Blockchain network.</li>
                                <li className="mb-3">Mint-Sea reserves the right to hide collections, contracts, and items affected by any issues or other issues. If you have a dispute with one or more users, you release Mint-Sea from claims, demands, and damages of every kind and nature, known and unknown. In entering into this release, you waive any protections that would otherwise limit the coverage of this release.</li>
                            </ul>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">11. Limitation of Liability</p>
                            <p className="text-md mb-3">Mint-Sea and its service providers are not liable for any lost profits or damages arising from the use of the Service, and products. Access to and use of the Service is at the user's own discretion and risk, and they are solely responsible for any damage to their computer system or mobile device or loss of data resulting from it. Some jurisdictions limit disclaimers or limitations of liability for personal injury from consumer products, so this limitation may not apply to personal injury claims.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">12. Privacy Policy</p>
                            <p className="text-md mb-3">We collect, use, and share information from and/or about you, and by submitting Your Information through our Service, you agree to the terms of our Privacy Policy.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">13. Modifications to the Service</p>
                            <p className="text-md mb-3">We reserve the right, in our sole discretion, to change, suspend, or cancel the Service (or any features or components thereof) at any time and without responsibility.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">14. Termination</p>
                            <p className="text-md mb-3">Mint-Sea reserves the right to suspend, restrict, disable, terminate, or delete your Account and/or access or use the Service at any time and for any reason. If we terminate your Account or restrict your access or use of the Service, you retain ownership of your NFTs and can still access them through public blockchains and other web3 wallets.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">15. Severability</p>
                            <p className="text-md mb-3">If any term, clause, or provision of these Terms is held invalid or unenforceable, then that term, clause, or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause, or provision, or any other term, clause, or provision of these Terms.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">16. Injunctive Relief</p>
                            <p className="text-md mb-3">Mint-Sea is entitled to equitable relief in addition to any remedies it may have without the need for a bond, security, or proof of damages.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">17. Survival</p>
                            <p className="text-md mb-3">Mint-Sea's other rights and remedies will continue in full force and effect despite any termination of these Terms, notwithstanding any termination.</p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">18. Miscellaneous</p>
                            <p className="text-md mb-3">These Terms are the entire agreement between you and Mint-Sea relating to your access to and use of the Service. These Terms may not be transferred or assigned without Mint-Sea's prior written consent, and any failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision. The section headings used herein are for reference only and shall not have any legal effect.</p>
                            <p className="text-md mb-3">These Terms are intended solely for the benefit of the parties and do not confer third-party beneficiary rights.</p>
                        </div>

                        {/* <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold"></p>
                            <p className="text-md mb-3"></p>
                            <p className="text-md mb-3"></p>
                        </div>

                        <div className='mb-4 text-white'>
                            <p className="text-md mb-3 fw-bold">.</p>
                            <p className="text-md mb-3"></p>
                            <ul className="text-md text-muted">
                                <li className="mb-3"></li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default TermOfService