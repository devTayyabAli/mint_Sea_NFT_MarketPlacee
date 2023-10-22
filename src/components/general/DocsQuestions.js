import React from 'react';
import { NavLink } from 'react-router-dom';

const DocsQuestions = ({heading}) => {
    return (
        <div className='col-lg-4'>
            <div className="card" style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "8px"}}>
                <div className="card-body py-4 py-lg-5 px-4 px-lg-5">
                    <h5 className="mb-4">Docs:</h5>
                    <ul className="list-unstyled mb-4">
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                {/* <h6>Company Address</h6> */}
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/how_to_create_an_nft_on_mintsea">How to create an NFT on MintSea?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/how_to_list_an_nft_for_sale_using_mintsea">How to list an NFT for sale using MintSea?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/how_to_buy_an_nft_on_mintsea">How to buy an NFT on MintSea?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/how_to_claim_funds_on_mintsea">How to claim funds on MintSea?</NavLink>
                            </div>
                        </li>
                    </ul>

                    <h5 className="mb-4">General Info:</h5>
                    <ul className="list-unstyled mb-0">
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                {/* <h6>Company Address</h6> */}
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_is_an_nft">What is an NFT?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_is_a_crypto_wallet">What is a crypto wallet?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_is_cryptocurrency">What is cryptocurrency?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_are_blockchain_gas_fees">What are blockchain gas fees?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_is_a_blockchain">What is a blockchain?</NavLink>
                            </div>
                        </li>
                        <li className="d-flex mb-3">
                            <div className="contact-icon bd-3 border-white text-white flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                                <i className="las la-question"></i>
                            </div>
                            <div className="ms-2">
                                <NavLink className="text-md text-white text-decoration-none" to="/docs/what_is_web3">What is web3?</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DocsQuestions;