import React, { useEffect, useState, useContext } from 'react';
import { formatCategory, truncate, configEtherScanUrl } from '../../helpers/utils';
import reactImageSize from 'react-image-size';
import Web3Context from '../../store/web3-context';
import { useChainId } from 'wagmi';

function ItemInfoPanel({ img, dateCreated, name, description, category, creator }) {
    const [imgSize, setImgSize] = useState('');
    const web3Ctx = useContext(Web3Context);
    const chainId = useChainId();
console.log("ItemInfoPanel",creator);

    useEffect(() => {
        async function getImageSize(x) {
            try {
                const { width, height } = await reactImageSize(x);
                setImgSize(`${width} x ${height}`);
            } catch {
                setImgSize('Not detected');
            }
        }

        getImageSize(img);
    }, [img]);

    return (
        <>
            {/* <p className='d-inline-block fw-normal text-primary bg-dark px-3 py-2 rounded-sm text-sm mb-0'>
                <i className='las la-image me-2 mb-1 align-middle'></i>
                {formatCategory(category)}
            </p>

            <h1>{name}</h1> */}

            <div className='row mb-4'>
                <div className='col-xl-12'>
                    <div className='card' style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                        <div className='card-body'>
                            <p className='mb-0 d-flex align-items-center'>
                                <i className='text-white las la-align-justify' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                <span className='text-white ms-2 fs-5 fw-bold'>Description</span>
                            </p>

                            <p className='text-white my-4'>{creator.Description !== "" ? creator.Description : "Description not provided"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mb-4'>
                <div className='col-xl-12'>
                    <div className='card' style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                        <div className='card-body p-4'>
                            <ul className='list-unstyled text-sm text-white mb-0'>
                                <li className='d-flex align-items-center justify-content-between mb-2 pb-1'>
                                    <p className='mb-0 d-flex align-items-center'>
                                        <i className='text-white las la-user-circle' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <span className='ms-2 fs-6'>Item Artist</span>
                                    </p>
                                    <p className='mb-0 text-white'>
                                        <a
                                           href={creator.Blockchain == "Binance" ? `https://testnet.bscscan.com/address/${creator.nftContract}` : creator.Blockchain == "Ethereum" ? `https://sepolia.etherscan.io/address/${creator.nftContract}` : `https://mumbai.polygonscan.com/address/${creator.nftContract}`}
                                            className='text-white fs-6 text-decoration-none'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {creator !== undefined && truncate(creator.nftContract, 10)}
                                        </a>
                                    </p>
                                </li>
                                <li className='d-flex align-items-center justify-content-between mb-2 pb-1'>
                                    <p className='mb-0 d-flex align-items-center'>
                                        <i className='text-white las la-clock' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <span className='ms-2 fs-6'>Created at</span>
                                    </p>
                                    <p className='mb-0 fs-6'>{new Date(dateCreated).toLocaleDateString('en-US')}</p>
                                </li>
                                <li className='d-flex align-items-center justify-content-between mb-2 pb-1'>
                                    <p className='mb-0 d-flex align-items-center'>
                                        <i className='text-white las la-crop-alt' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <span className='ms-2 fs-6'>Item Dimensions</span>
                                    </p>
                                    <p className='mb-0 fs-6'>{imgSize}</p>
                                </li>
                                <li className='d-flex align-items-center justify-content-between mb-2 pb-1'>
                                    <p className='mb-0 d-flex align-items-center'>
                                        <i className='text-white las la-photo-video' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <span className='ms-2 fs-6'>Category</span>
                                    </p>
                                    <p className='mb-0 fs-6'>{formatCategory(category)}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemInfoPanel;
