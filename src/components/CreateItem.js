import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Select from 'react-dropdown-select';
import Web3Context from '../store/web3-context';
import CollectionContext from '../store/collection-context';
import PageBanner from './general/PageBanner';
import ItemPreview from './create/ItemPreview';
import SuccessMessage from './general/SuccessMessage';
import FullScreenLoader from './general/FullScreenLoader';
import { BlockChainOptions, categoryOptions } from '../helpers/constants';
import { useAddress } from "@thirdweb-dev/react";
import useWeb3 from './Components/useWeb3';
import { Contract, errors, ethers } from "ethers";
import { toast } from 'react-hot-toast';
import { useWeb3React } from '@web3-react/core';
import { toHex } from '../Utils/utils';
import { useAccount, useChainId, useSwitchNetwork } from 'wagmi';

import { Contract_Addresss } from '../Utils/Contract';
import { FaEthereum } from 'react-icons/fa';
import {
    prepareWriteContract,
    waitForTransaction,
    writeContract,
} from "@wagmi/core";

import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getLoarem } from '../Redux/GetNFTs';

const ipfsClient = require('ipfs-http-client');
//const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const auth = 'Basic ' + Buffer.from(`${process.env.REACT_APP_INFURA_PROJECTID}:${process.env.REACT_APP_INFURA_APIKEY}`).toString('base64');
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', apiPath: '/api/v0', headers: { authorization: auth, } });

function CreateItem() {
    const history = useHistory();
    const web3Ctx = useContext(Web3Context);
    const { web3, setWeb3, walletAddress, provider, resetApp, setWalletAddress, onConnect } = useWeb3();
    const user_Profile = useSelector((state) => state.Offers.user_Profile);
    const collectionCtx = useContext(CollectionContext);
    const [mintSuccess, setMintSuccess] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [descriptionIsValid, setDescriptionIsValid] = useState(true);
    const [enteredDescription, setEnteredDescription] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [selectedFile, setSelectedFile] = useState();
    const [fileIsValid, setFileIsValid] = useState(true);
    const [preview, setPreview] = useState();
    const [enteredCategory, setEnteredCategory] = useState('Not Specified');
    const [enteredBlockCahin, setEnteredBlockCahin] = useState('Not Specified');
    const [filename, setfilename] = useState("image")
    const { address } = useAccount();
    const [mintLoading, setMintLoading] = useState(false);
    const { addToast } = useToasts();
    const chainId = useChainId();
    const { switchNetwork } =
        useSwitchNetwork()
    const today = new Date();
    const dispatch = useDispatch()
    const vidRef = useRef(null);
    const vidButtonRef = useRef(null);

    useEffect(() => {
        document.getElementById("root").classList.add("bg-mint");
        //document.getElementById("root").style.backgroundImage = "url('/images/bg-mint.jpg')";
      
        return () => {
            document.getElementById("root").classList.remove("bg-mint");
            //document.getElementById("root").style.backgroundImage = "none";
        };
    }, []);

    const handlePlay = () => {
        vidRef.current.play();
        // hide overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.add('is-playing');
    };
    const handlePause = () => {
        vidRef.current.pause();
        // show overlay play button styles, set by 'video__play-button'
        vidButtonRef.current.classList.remove('is-playing');
    };
    const handleToggleVideo = () => (vidRef.current.paused ? handlePlay() : handlePause());
    // console.log("user_Profile?.image",user_Profile?.image);
    useEffect(() => {
        document.title = 'Mint an NFT | NFT Marketplace';
    }, []);

    // useEffect(() => {
    //     if (mintLoading === true) {
    //         document.body.style.overflowY = 'hidden';
    //     } else if (mintLoading === false) {
    //         document.body.style.overflowY = 'auto';
    //     }
    // }, [mintLoading]);

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        console.log("objectUrl", selectedFile.type);
        setfilename(selectedFile.type)
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const enteredDescriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    };


    // let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    // 🟢 SUBMISSION => submit create form
    const submissionHandler = (event) => {
        console.log("user_Profile", user_Profile?.username);
        event.preventDefault();
    

        // 🟢 Validate form fields
        enteredName ? setNameIsValid(true) : setNameIsValid(false);
        enteredDescription ? setDescriptionIsValid(true) : setDescriptionIsValid(false);
        selectedFile ? setFileIsValid(true) : setFileIsValid(false);
        const formIsValid = enteredName && enteredDescription && selectedFile;
        // 🧊 Upload file to IPFS and push to the blockchain
        const mintNFT = async () => {

            try {
                if (address) {


                    setMintLoading(true);

                    // Add file to the IPFS
                    const fileAdded = await ipfs.add(selectedFile);
                    if (!fileAdded) {
                        console.error('Something went wrong when updloading the file');
                        return;
                    }


                    const metadata = {
                        title: 'Asset Metadata',
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                description: enteredName,
                            },
                            description: {
                                type: 'string',
                                description: enteredDescription,
                            },
                            image: {
                                type: 'string',
                                description: fileAdded.path,
                                type: filename
                            },
                            category: {
                                type: 'string',
                                description: enteredCategory,
                                chain: chainId == 97
                                    ? "Binance"
                                    : chainId == 11155111
                                        ? "Ethereum"
                                        : "Polygon",
                            },
                            dateCreated: {
                                type: 'string',
                                description: today,
                            },

                        },
                    };

                    const metadataAdded = await ipfs.add(JSON.stringify(metadata));
                    if (!metadataAdded) {
                        console.error('Something went wrong when updloading the file');
                        return;
                    }

                    // let provider = new ethers.providers.Web3Provider(window.ethereum);
                    // let signer = provider.getSigner()
                    // let contract=null
                    // if(chainId==97){

                    //     contract = new Contract(  Contract_Addresss[0].CreateNFT, Contract_Addresss[0].CreateNFT_ABI, signer);
                    // }else if(chainId==11155111){
                    //     contract = new Contract(  Contract_Addresss[1].CreateNFT, Contract_Addresss[1].CreateNFT_ABI, signer);

                    // }else{
                    //     contract = new Contract(  Contract_Addresss[2].CreateNFT, Contract_Addresss[2].CreateNFT_ABI, signer);

                    // }

                    console.log("metadataAdded.path", metadataAdded.path);


                    const { request } = await prepareWriteContract({
                        address: chainId == 97 ? Contract_Addresss[0].CreateNFT : chainId == 11155111 ? Contract_Addresss[1].CreateNFT : Contract_Addresss[2].CreateNFT,
                        abi: chainId == 97 ? Contract_Addresss[0].CreateNFT_ABI : chainId == 11155111 ? Contract_Addresss[1].CreateNFT_ABI : Contract_Addresss[2].CreateNFT_ABI,
                        functionName: "safeMint",
                        args: [metadataAdded.path],
                        account: address,
                    });
                    const { hash } = await writeContract(request);
                    const data = await waitForTransaction({
                        hash,
                    });
                    // let nftContractOf = new web3.eth.Contract(CreateNFT_ABI, CreateNFT);
                    // const tx =  await contract.safeMint(metadataAdded.path)
                    // await tx.wait();
                    setTimeout(async () => {

                        let API_url = `https://skywalker.infura-ipfs.io/ipfs/${metadataAdded.path}`;
                        let Response = await axios.get(API_url);
                        console.log("Response", Response);
                        let jsonUsrl = `https://skywalker.infura-ipfs.io/ipfs/${Response.data.properties.image.description}`;
                        let name = Response.data.properties.name.description;
                        let category = Response.data.properties.category.description;
                        let Image_type = Response.data.properties.image.type;



                        let postapiPushdata = await axios.post("https://newflash.womenempowerment.online/open_marketplace", {
                            useraddress: address,
                            itemId: "01000000000000000",
                            nftContract: chainId == 97 ? Contract_Addresss[0].CreateNFT : chainId == 11155111 ? Contract_Addresss[1].CreateNFT : Contract_Addresss[2].CreateNFT,
                            tokenId: "01000000000000000",
                            owner: "",
                            price: "01000000000000000",
                            sold: Image_type,
                            isOnAuction: user_Profile?.username == undefined ? address : user_Profile?.username ,
                            bidEndTime: user_Profile?.image == undefined ? "./images/Avtat.png" : user_Profile?.image || "./images/Avtat.png",
                            name: name,
                            url: jsonUsrl,
                            Description: enteredDescription,
                            txn: null,
                            category: category,
                            Owner_Name:null,
                            Owner_Image:null,
                            edate: new Date(),
                            Blockchain:
                                chainId == 97
                                    ? "Binance"
                                    : chainId == 11155111
                                        ? "Ethereum"
                                        : "Polygon",
                        });

                        if(user_Profile?.address==undefined){
                            let res= await axios.post('https://newflash.womenempowerment.online/create_user_profile',{
                                address:address?.toUpperCase()
                            })
                            // console.log("Profile_Updated",res);
                        }



                        console.log("postapiPushdata", postapiPushdata);
                        setMintLoading(false);
                        setMintSuccess(true)
                        dispatch(getLoarem("All"))

                        setTimeout(() => {
                            history.push('/User_Collection');
                        }, 2000);
                    }, 2000);



                } else {
                    addToast('Please Connect Wallet First', {
                        appearance: 'error',
                    });
                    // toast.error("Please Connect Wallet First")
                    // return (
                    //     <SuccessMessage
                    //         heading="Please Connect Wallet First"
                    //         subheading="Click To connect Wallet Button on Header"
                    //     />
                    // );
                }
            } catch (error) {
                console.log(error);
                addToast('Something went wrong when pushing to the blockchain', {
                    appearance: 'error',
                });
                setMintLoading(false);
            }
        };
        // mintNFT()
        formIsValid && mintNFT();
    };

    // Inject validation classes to input fields
    const nameClass = nameIsValid ? 'form-control' : 'form-control is-invalid';
    const descriptionClass = descriptionIsValid ? 'form-control' : 'form-control is-invalid';
    const fileClass = fileIsValid ? 'form-control' : 'form-control is-invalid';

    // console.log("mintLoading", mintLoading);

    if (mintSuccess)
        return (
            <SuccessMessage
                heading="Great! You've successfully minted your NFT"
                subheading="We're redirecting to your collection"
            />
        );



    const SwitchNetwork = async (value) => {
        try {
            // console.log("value", value);
            if (value == "Binance_testnet") {
                switchNetwork?.(97)
            } else if (value == "Mumbai") {
                switchNetwork?.(80001)

            } else if (value == "Sepolia") {
                switchNetwork?.(11155111)

            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {mintLoading ? <FullScreenLoader heading='loading' /> : null}
            {/* <PageBanner heading='Mint an NFT' /> */}

            {/* <section className='pt-5 header-section-2'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5'>

                        <div className='col-12 col-sm-8 mx-auto text-center'>
                            <h1 className="text-white h-b-t-fs">Mint an NFT</h1>
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item mb-0'>
                                    <Link className='text-white fs-5' to='/mint' style={{textDecoration: "none"}}>
                                        Mint an NFT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='py-5 position-relative'>
                <div className='container z-index-10 position-relative'>
                    <div className='row align-items-center mt-5'>

                        <div className='col-lg-6'>                        
                            <h1 className="text-white h-b-t-fs">Mint an NFT</h1>
                            {/* <h2 className='text-white ms-5 ps-3 mb-5' >                            
                                Our NFTs
                            </h2> */}
                            {/* style={{fontSize: "2.8rem", fontWeight: "500"}} */}
                            <ul className='list-inline'>
                                <li className='list-inline-item' style={{borderRight: "1px solid white"}}>
                                    <Link className='text-muted me-2 fs-5' to='/' style={{textDecoration: "none"}}>
                                        Home
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link className='text-white fs-5' to='/mint' style={{textDecoration: "none"}}>
                                        Mint an NFT
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-6 ms-auto d-none d-lg-block'>
                            <img className='img-fluid mx-auto w-50' src="/images/mint.webp" alt="mint" style={{filter: "drop-shadow(0px 0px 20px #141dec)"}}></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-sm-5'>
                <div className='container py-sm-5'>
                    <div className='row'>
                        <div className='col-lg-8 order-2 order-sm-1 rounded'>
                            {/* NFT INFORMATION */}

                            <form className='p-5' onSubmit={(e) => submissionHandler(e)} style={{height: "100%", borderRadius: "8px", background: "#070630", boxShadow: "0 0 10px 5px #2c1cb5aa"}}>
                                <div className='d-flex align-items-center mb-4'>
                                    <div className='d-block'>
                                        <i className='las la-image text-white' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <label className='form-label text-white fs-5 fw-bold ms-2 mb-0'>Upload Assets</label>
                                    </div>
                                </div>

                                <div className='row mb-5'>
                                    <div className='col-lg-12'>
                                        <input
                                            className={`form-control shadow-0 bg-transparent custom-file-upload ${fileClass}`}
                                            type='file'
                                            autoComplete='off'
                                            name='nft_image'
                                            id='nft_image'
                                            placeholder='e.g. Crypto Funk'
                                            onChange={onSelectFile}
                                        />
                                        <label
                                            className={`form-label text-gray-400 text-center ${selectedFile ? 'p-3' : 'p-5'
                                                }`}
                                            htmlFor='nft_image'
                                            style={{background: "#030B3C"}}
                                        >
                                            {!selectedFile ? (
                                                <div className='my-5'>                                                    
                                                    <i className='las la-plus mb-2' style={{ filter: "drop-shadow(0px 0px 15px #131DFF)", border: "1px dashed gray", borderRadius: "5px", padding: "5px 10px", color: "blue"}}></i>
                                                    <h6 className='mb-0 fw-normal text-white myh6'>
                                                        Click here to upload
                                                    </h6>
                                                    <p className='text-white mb-0'>Waiting to catch your cool image</p>
                                                </div>
                                            ) : <>
                                                {
                                                    filename.startsWith("audio") ? <>
                                                        {/* <audio controls={true} loop muted={true}
                                                        autoPlay={true} className="audio-element" src={preview} /> */}
                                                        <div ref={vidButtonRef} class="c-mm" style={{ height: "16rem" }} >
                                                            <details>
                                                                <summary class="c-mm__play" style={{ top: "12rem" }} onClick={handleToggleVideo} ><span data-css-icon="play"><i></i></span></summary>
                                                                <span hidden></span>
                                                            </details>
                                                            <div class="c-mm__inner">
                                                                <figure data-filter="grainy text" class="c-mm__frame" style={{ height: "16rem" }} >
                                                                    <img src="https://deliverysources.web.app/IstanbulMUN/images/redenx-min.jpg" width="100%" alt="" />
                                                                </figure>
                                                            </div>
                                                            <audio src={preview} ref={vidRef} loop></audio>
                                                        </div>



                                                    </> : filename.startsWith("video") ? <>

                                                        <div ref={vidButtonRef} class="c-mm">
                                                            <details>
                                                                <summary class="c-mm__play"

                                                                ><span data-css-icon="play" onClick={handleToggleVideo}><i></i></span></summary>
                                                                <span hidden></span>
                                                            </details>

                                                            <video src={preview} ref={vidRef} loop width="100%" style={{ height: "20rem" }} ></video>
                                                        </div>

                                                        {/* <video
                                                        className="VideoInput_video"
                                                        width="100%"
                                                        style={{ height: "400px" }}
                                                        muted={true}
                                                        loop
                                                        autoPlay={true}

                                                        controls={true}
                                                        src={preview}
                                                    />  */}
                                                    </>
                                                        :
                                                        <>

                                                            <img className='img-fluid rounded w-100' src={preview} style={{ height: "400px" }} />
                                                        </>
                                                }
                                                {/* <img src={preview} className='img-fluid' alt={enteredName} /> */}
                                            </>}
                                        </label>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <div className='d-block'>
                                        <i className='las la-icons text-white' style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        <label className='form-label text-white fs-5 fw-bold ms-2 mb-0'>Add Info</label>
                                    </div>
                                </div>

                                <div className='p-4 p-lg-4'>
                                    <div className='row gy-3 has-field-icons'>
                                        <div className='col-lg-12'>
                                            <label className='form-label text-white' htmlFor='nft_title'>
                                                Title
                                            </label>
                                            <div className='input-icon'>
                                                <div className='input-icon-text bg-none'>
                                                    <i className='text-white las la-user-edit'></i>
                                                </div>
                                                <input
                                                    className={`form-control ps-5 ${nameClass}`}
                                                    style={{ borderRadius: "5px", border: "1px solid #49E6FB", background: "#030B3C"}}
                                                    type='text'
                                                    autoComplete='off'
                                                    name='nft_title'
                                                    id='nft_title'
                                                    placeholder='e.g. Crypto Funk'
                                                    value={enteredName}
                                                    onChange={enteredNameHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <label className='form-label text-white' htmlFor='nft_description'>
                                                Description
                                            </label>
                                            <div className='input-icon'>
                                                <div className='input-icon-text bg-none'>
                                                    <i className='las la-align-left text-white'></i>
                                                </div>
                                                <textarea
                                                    rows='6'
                                                    className={`form-control ps-5 ${descriptionClass}`}
                                                    style={{ borderRadius: "5px", border: "1px solid #49E6FB", background: "#030B3C"}}
                                                    name='nft_description'
                                                    id='nft_description'
                                                    placeholder='Provide some good description about your asset'
                                                    value={enteredDescription}
                                                    onChange={enteredDescriptionHandler}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='col-lg-12 mb-2'>
                                            <label className='form-label text-white' htmlFor='nft_category'>
                                                Category
                                            </label>
                                            <div className='input-icon flex-nowrap category-select' style={{background: "#030B3C"}}>
                                                <div className='input-icon-text bg-transparent'>
                                                    <i className='las la-icons text-white'></i>
                                                </div>
                                                <Select
                                                    searchable={false}
                                                    options={categoryOptions}
                                                    className='form-select shadow-0 ps-5 bg-transparent'
                                                    value={enteredCategory}
                                                    style={{ borderRadius: "5px", border: "1px solid #49E6FB"}}
                                                    onChange={(values) =>
                                                        setEnteredCategory(values.map((el) => el.value).toString())
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-12 mb-3'>
                                            <label className='form-label text-white' htmlFor='nft_category'>
                                                Blockchain
                                            </label>
                                            <div className='input-icon flex-nowrap category-select' style={{background: "#030B3C"}}>
                                                <div className='input-icon-text bg-transparent'>
                                                    <i className='lab la-ethereum text-white'></i>
                                                    {/* <img src="img/chains/ETH.png" alt="" width="10%" /> */}
                                                </div>
                                                <Select
                                                    searchable={false}
                                                    options={BlockChainOptions}
                                                    className='form-select shadow-0 ps-5 bg-transparent'
                                                    value={enteredBlockCahin}
                                                    style={{ borderRadius: "5px", border: "1px solid #49E6FB"}}
                                                    getOptionLabel={BlockChainOptions}
                                                    onChange={(values) =>
                                                        SwitchNetwork(values.map((el) => el.value).toString())
                                                    }
                                                />

                                                {/* <select class="form-select" aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="1" data-icon={<><FaEthereum/></>}>0  </option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select> */}


                                            </div>
                                        </div>

                                        {/* SUBMIT */}
                                        <div className='col-12'>
                                            <button className='btn-buynow' type='submit' style={{boxShadow: "0px 0px 10px 5px #4659CF77"}}>
                                                {/* <i className='lab la-ethereum me-2'></i> */}
                                                <img src="/images/ethereum.png" alt="ethereum symbol" className='d-inline me-2' style={{width: "30px", height: "30px"}}/>Mint NFT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* PREVIEW ITEM */}
                        <div className='col-lg-4 order-1 order-sm-2 px-4 pb-4 pt-5'>
                            <ItemPreview
                                heading='Preview Item'
                                preview={preview}
                                title={enteredName}
                                category={enteredCategory}
                                author={web3Ctx.account}
                                filename={filename}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateItem;
