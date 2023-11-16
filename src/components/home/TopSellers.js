import React, { useContext, useEffect, useState } from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import Web3Context from '../../store/web3-context';
import MarketplaceContext from '../../store/marketplace-context';
import { formatPrice, configEtherScanUrl } from '../../helpers/utils';
import NoDataAlert from '../general/NoDataAlert';
import axios from 'axios';
import useWeb3 from '../Components/useWeb3';
import { API } from '../../API';
import { useAccount } from 'wagmi'
import { Avatar } from '@mui/material';


function TopSellers({ title, description, topSellers }) {
    const { walletAddress } = useWeb3();
    const web3Ctx = useContext(Web3Context);
    const marketplaceCtx = useContext(MarketplaceContext);
    const [topSeller_data, settopSeller_data] = useState([])

    const {address} = useAccount();

    const fetchData = async () => {
        let Array_data = []
        let getUserAddress = await axios.get('https://sanjhavehra.womenempowerment.online/trending_address_marketplace');

        getUserAddress = getUserAddress?.data?.data
        // console.log("Api_Data121", getUserAddress);

        let get_Length = getUserAddress?.length;
        // console.log("get_Length", get_Length);
        for (let i = 0; i < get_Length; i++) {
            let { User_Address } = getUserAddress[i]
            // console.log("User_Address",User_Address?.toUpperCase());
            let res = await axios.get(`https://sanjhavehra.womenempowerment.online/get_user_profile?address=${User_Address?.toUpperCase()}`)
            let responce = await axios.get(`https://sanjhavehra.womenempowerment.online/Get_User_payment_Address?Address=${User_Address.toUpperCase()}`)
            // console.log("Api_Data121", responce?.data?.data[1]?.Eth_Cost);

            Array_data = [...Array_data, { name: res?.data?.data?.username, image: res?.data?.data?.image, address: res?.data?.data?.address,Eth_const:responce?.data?.data[0]?.Eth_Cost,Metic_Cost:responce?.data?.data[0]?.Metic_Cost,BNB_Cost:responce?.data?.data[0]?.BNB_Cost }]

            // console.log("res_user", res);
            settopSeller_data(Array_data)
        }


    };





    useEffect(() => {
        fetchData()
    }, [])
    // console.log("topSeller_data",topSeller_data);

    // Create top sellers template
    const renderTopSellers = topSeller_data.slice(0,10).map((seller, index) => {
        // console.log("seller",seller);

            return (
                <div className='col-xl-3 col-lg-3 col-md-6 mb-4' key={index}>
                    <div className='card top-saller-Card card-hover-minimal position-relative'>
                        <div className='card-body p-1'>
                            <a
                                className='text-reset text-decoration-none stretched-link'
                                // href={configEtherScanUrl(web3Ctx.networkId, seller.address)}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                {/* <p className='fw-bold text-primary mb-0'>{index+1}.</p> */}
                                <div className='h-i-w-Card py-5'>
                                    <div className='d-flex flex-column align-items-center text-white'>
                                        <h3 className='h6 mb-3 text-capitalize'>
                                        {/* <span className='seller-badge ms-2'>{seller?.name}</span> */}
                                        {seller?.name || "Name"}
                                        </h3>
                                        <p className='m-0' style={{fontSize:"14px",fontWeight:"200"}}>  <span>{ seller?.Eth_const==undefined ? 0 :parseFloat(seller?.Eth_const).toFixed(5) || 0 } </span>  ETH</p>
                                        <p className='m-0' style={{fontSize:"14px",fontWeight:"200"}}> <span>{ seller?.Metic_Cost==undefined ? 0 : parseFloat(seller?.Metic_Cost ).toFixed(5) ||0 } </span> MATIC</p>
                                        <p className='m-0' style={{fontSize:"14px",fontWeight:"200"}}>  <span>{seller?.BNB_Cost==undefined ? 0: parseFloat(seller?.BNB_Cost).toFixed(5) ||0 } </span>  BNB</p>
                                            { address?.toUpperCase() === seller?.address?.toUpperCase() ? (
                                                <span className='seller-badge ms-2'>You</span>
                                            ) : null} 
                                        {/* <p className='text-sm text-primary mb-0'>
                                            {formatPrice(seller.value).toFixed(2)} <span className='text-muted'>ETH</span>
                                        </p> */}
                                    </div>
                                    <div className='position-relative mt-3'>
                                        <div className='d-flex justify-content-center'>
                                            {/* {seller?.image ? <>  <Avatar alt=""  size="large" src={`${seller.image}`} /> </>:<><Jazzicon address="0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c" /> </>} */}
                                            <Avatar alt=""  size="large" src={`${seller.image}`} /> 
                                        </div>
                                        {/* <div className='author-img-badge bg-primary text-white'>
                                            <i className='las la-check-double la-xs'></i>
                                        </div> */}
                                    </div>
                                </div>

                                <p className='fw-bold text-white mb-0 py-2 d-flex justify-content-center mx-3 mt-4' style={{borderRadius: "0.4rem", backgroundColor: "#0F1953", boxShadow: "0px 0px 20px 5px #4659CF"}}>{index+1}</p>
                            </a>
                        </div>
                    </div>
                </div>
            );
        });





    return (
        <section className='pt-5'>
            <div className='container pb-4'>
                <header className='mb-5 pb-5'>
                    <div className='row position-relative heading-col'>
                        {/* <div className='col-lg-6'>
                            <h2>{title}</h2>
                            <p className='text-muted text-sm mb-0'>{description}</p>
                        </div> */}

                        {/* <div className="container-xl">
                            <div className="row mt-5 position-relative heading-col"> */}
                        <div className="col-7 text-white heading-left-part">
                            <h3 className="text-white mb-0">{title}</h3>
                            <p className="text-white text-sm mb-0">
                                {description}
                            </p>
                        </div>
                        <div className="col-5 h-100 position-div rounded-pill heading-right-part d-flex align-items-center">
                            <img className="some-css img-fluid mx-auto" src="/images/TOP-seller.webp" alt="" />
                        </div>
                            {/* </div>
                        </div> */}
                    </div>
                </header>

                <div className='row gy-3'>
                    {topSeller_data.length >0 ? (
                        renderTopSellers
                    ) : (
                        <div className='col-lg-12'>
                            <NoDataAlert
                                heading="There're no Sellers at the moment."
                                subheading='Once someone has successfully sell or buy an asset, sellers calculations will take place.'
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TopSellers;
