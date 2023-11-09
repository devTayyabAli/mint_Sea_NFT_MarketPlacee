import React, { useEffect, useContext, useState } from 'react';
//import PageBanner from './general/PageBanner';
import FullScreenLoader from './general/FullScreenLoader';
import axios from 'axios';
import { useAccount } from 'wagmi';
import usePagination from '../helpers/Pagination';
import { Avatar, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';


function Authors({ sellers }) { 
    const [show_Authers, setShow_Authers] = useState([])
    const { address } = useAccount();
    const [currentPage, setPage] = useState(1);
    const [itemsPerPage] = useState(25);


    const get_All_Authors = async () => {
        try {
            let res = await axios.get("https://newflash.womenempowerment.online/get_All_user_profile")
            res = res.data.data
            let Array_data = []
            res.forEach(async(element) => {
                let responce = await axios.get(`https://newflash.womenempowerment.online/Get_User_payment_Address?Address=${element.address.toUpperCase()}`)
                // console.log("Authers",responce.data.data[0]);
                Array_data = [...Array_data, { name: element.username, image: element.image, address: element.address,Eth_const:responce.data.data[0]?.Eth_Cost,Metic_Cost:responce.data.data[0]?.Metic_Cost,BNB_Cost:responce.data.data[0]?.BNB_Cost }]
                setShow_Authers(Array_data)
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_All_Authors()
        document.title = 'All Authors | NFT Marketplace';

        document.getElementById("root").classList.add("bg-complete");
        return () => {
            document.getElementById("root").classList.remove("bg-complete");
        };
    }, []);

    // Pagination
    console.log("show_Authers",show_Authers);
    const count = Math.ceil(show_Authers?.length / itemsPerPage);
        const _DATA = usePagination(show_Authers, itemsPerPage);
    
        const handleChange = (e, p) => {
            setPage(p);
            _DATA.jump(p);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    
    const renderSellers = _DATA.currentData().map((seller, index) => {
            console.log("seller",seller)
        
            return (
                <div className='col-10 col-sm-6 col-xl-3 col-lg-3 col-md-4 mb-4 mx-auto mx-sm-0' key={index}>
                    <div className='card top-saller-Card card-hover-minimal position-relative'>
                        <div className='card-body p-1'>
                            <a
                                className='text-reset text-decoration-none stretched-link'
                                // href={configEtherScanUrl(web3Ctx.networkId, seller.address)}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                {/* <p className='fw-bold text-primary mb-0'>{index+1}.</p> */}
                                <div className='h-i-w-Card py-3 py-lg-5'>
                                    <div className='d-flex flex-column align-items-center text-white'>
                                        <h3 className='h6 mb-3 text-capitalize'>
                                        {/* <span className='seller-badge ms-2'>{seller?.name}</span> */}
                                        {seller?.username || "Name"}
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
        }
    );
       

    return (
        <>
            {show_Authers.length < 0 ? <FullScreenLoader heading='loading' /> : null}
            {/* <PageBanner heading={'All Our Authors'} /> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5'>

                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">All Our Authors</h1>
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
                                    <Link className='text-white fs-5' to='/authors' style={{textDecoration: "none"}}>
                                        All Our Authors
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-75' src="/images/authors.webp" alt="authors" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='row gy-4 mb-5 align-items-stretch'>{renderSellers}</div>

                    {show_Authers?.length > itemsPerPage && (
                        <div className='d-flex justify-content-center'>
                            <Pagination
                                count={count}
                                page={currentPage}
                                onChange={handleChange}
                            />
                        </div>


                    )
                    } 
                </div>
            </section>
        </>
    );
}

export default Authors;
