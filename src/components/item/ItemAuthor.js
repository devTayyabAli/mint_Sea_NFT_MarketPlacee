import React, { useEffect, useState } from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import { useSelector } from 'react-redux';

import { useAccount, useChainId } from 'wagmi';
import { Avatar } from '@mui/material';
import axios from 'axios';


function ItemAuthor({ creator }) {

    const { address } = useAccount();
    const [creater_Data, setCreater_Data] = useState([])
    const [owner_Data, setOwner_Data] = useState([])


    // console.log("creator",creator);
    const fetchData = async () => {

        let res = await axios.get(
            `https://sanjhavehra.womenempowerment.online/get_user_profile?address=${creator?.useraddress?.toUpperCase()}`
        );

        if (res?.data.success == false) {
            // history("/Create_User_profile");
        } else {
            console.log("OwnerAddress", res?.data?.data);
            setCreater_Data(res?.data?.data)

        }

        if (creator?.Owner_Address) {
            let res = await axios.get(
                `https://sanjhavehra.womenempowerment.online/get_user_profile?address=${creator?.Owner_Address?.toUpperCase()}`
            );

            if (res?.data.success == false) {
                // history("/Create_User_profile");
            } else {
                console.log("OwnerAddress", res?.data?.data);
                setOwner_Data(res?.data?.data)

            }
        }

    };

    useEffect(() => {
        fetchData()
    }, [address])

    return (
        <div className='row'>
            <div className='col-xl-12'>
                <ul className='list-inline d-flex align-items-center row'>
                    <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                        <h6 className='mb-3 text-white'>Creator</h6>
                        <div className='d-flex align-items-center p-3 card' style={{ background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row" }}>
                            <div style={{ width: '40px', height: '40px' }}>
                                {creater_Data.image !== "" ? <> <Avatar alt="creator" size="large" src={`${creater_Data.image}`} /></> : <Jazzicon address={creator.useraddress} />}
                            </div>
                            <p className='ms-2 mb-0 text-white'>
                                {creater_Data.username == undefined || creater_Data.username == "" ? (creator?.useraddress?.substring(0, 4) + "..." + creator?.useraddress?.trim()?.substring(creator?.useraddress.length - 4)) : creater_Data.username}

                            </p>
                        </div>
                    </li>
                    {creator?.Owner_Address != "" && creator?.Owner_Address !=undefined  && <>
                        <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                            <h6 className='mb-3 text-white'>Owner</h6>
                            <div className='d-flex align-items-center p-3 card' style={{ background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row" }}>
                                <div style={{ width: '40px', height: '40px' }}>
                                {owner_Data.image !== "" ? <> <Avatar alt="creator" size="large" src={`${owner_Data.image}`} /></> : <Jazzicon address={creator.Owner_Address} />}
                                </div>
                                <p className='ms-2 mb-0 text-white'>
                                {owner_Data.username == undefined || owner_Data.username == "" ? (creator?.Owner_Address?.substring(0, 4) + "..." + creator?.Owner_Address?.trim()?.substring(creator?.Owner_Address.length - 4)) : owner_Data.username}

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
