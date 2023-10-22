import React from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import { useSelector } from 'react-redux';

import { useAccount, useChainId } from 'wagmi';
import { Avatar } from '@mui/material';


function ItemAuthor({ creator, owner, User_Probile }) {
    console.log("creator", creator);
    // console.log(typeof creator, typeof owner);
    const user_Profile = useSelector((state) => state.Offers.user_Profile);
    const { address } = useAccount();
    return (
        <div className='row'>
            <div className='col-xl-12'>
                <ul className='list-inline d-flex align-items-center row'>
                    <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                        <h6 className='mb-3 text-white'>Creator</h6>
                        <div className='d-flex align-items-center p-3 card' style={{ background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row" }}>
                            <div style={{ width: '40px', height: '40px' }}>
                                {creator.bidEndTime !== "./images/Avtat.png" ? <> <Avatar alt="creator" size="large" src={`${creator?.bidEndTime}`} /></> : <Jazzicon address={creator.useraddress} />}
                            </div>
                            <p className='ms-2 mb-0 text-white'>
                                {creator?.isOnAuction?.startsWith('0x') ? (creator?.isOnAuction?.substring(0, 4) + "..." + creator?.isOnAuction?.trim()?.substring(creator?.isOnAuction.length -4)) : creator?.isOnAuction  }
                               
                            </p>
                        </div>
                    </li>
                    {  creator?.Owner_Name !==null  &&  <>
                            <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                                <h6 className='mb-3 text-white'>Owner</h6>
                                <div className='d-flex align-items-center p-3 card' style={{ background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row" }}>
                                    <div style={{ width: '40px', height: '40px' }}>
                                        {creator?.Owner_Image !== "./images/Avtat.png" ? <> <Avatar alt="owner" size="large" src={`${creator?.Owner_Image}`} /> </> : <Jazzicon address={creator.owner} />}
                                    </div>
                                    <p className='ms-2 mb-0 text-white'>
                                        {creator?.Owner_Name?.startsWith('0x') ? (creator?.Owner_Name?.substring(0, 4) + "..." + creator?.Owner_Name?.trim()?.substring(creator?.Owner_Name.length -4)): creator?.Owner_Name }
                                    </p>
                                </div>
                            </li>
                        </>

                    }
                </ul>
            </div>
        </div>
    );
}

export default ItemAuthor;
