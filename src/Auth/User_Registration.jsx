import React, { useEffect, useRef, useState } from "react";
import "./Auth_style.css";
import axios from "axios";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import { useDispatch, useSelector } from "react-redux";
import { Jazzicon } from "@ukstv/jazzicon-react";
import { Link, useHistory } from "react-router-dom";
import { Contract_Addresss } from "../Utils/Contract";
import FullScreenLoader from "../components/general/FullScreenLoader";
import { formatDate } from "../helpers/utils";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useAccount, useChainId } from "wagmi";
import Web3 from "web3";
import { useToasts } from "react-toast-notifications";
import Avatar from "@mui/material/Avatar";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { readContract } from "@wagmi/core";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import usePagination from "../helpers/Pagination";
import { Pagination } from "@mui/material";
import Loader from "../components/general/Loader";
import { getLoarem } from "../Redux/GetNFTs";
import { getTranding } from "../Redux/tranding_NFTs";
import NoDataAlert from "../components/general/NoDataAlert";

export default function User_Registration() {
  const [IsSpinner, setIsSpinner] = useState(false);
  const [CollectionArray, setCollectionArray] = useState([]);
  const [getOfferPrice, setgetOfferPrice] = useState(0);
  const [copied, setcopied] = useState(false);
  const [BNB, setBNB] = useState(0);
  const [polygonchain, setpolygonchain] = useState(0);
  const [ethereumchain, setethereumchain] = useState(0);
  const [selectChain, setselectChain] = useState(null);
  const [chainSort, setchainSort] = useState([]);
  const [Loading_Spinner, setLoading_Spinner] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();
  const { address } = useAccount();
  const chainId = useChainId();
  const user_Profile = useSelector((state) => state.Offers.user_Profile);

  const vidRef = useRef(null);
  const vidButtonRef = useRef(null);
  const [currentPage, setPage] = useState(1);
  const [itemsPerPage] = useState(24);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlay = () => {
    vidRef.current.play();
    // hide overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.add("is-playing");
  };
  const handlePause = () => {
    vidRef.current.pause();
    // show overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.remove("is-playing");
  };
  const handleToggleVideo = () =>
    vidRef.current.paused ? handlePlay() : handlePause();

  const runApp = async () => {
    let imageArray = [];
    try {
      setLoading_Spinner(true);
      let chain;
      if (chainId == 11155111) {
        chain = EvmChain.SEPOLIA;
      } else if (chainId == 80001) {
        chain = EvmChain.MUMBAI;
      } else if (chainId == 97) {
        chain = EvmChain.BSC_TESTNET;
      }
      const chains = [EvmChain.BSC_TESTNET, EvmChain.MUMBAI, EvmChain.SEPOLIA];
      if (!Moralis.Core.isStarted) {
        await Moralis.start({
          apiKey:
            "gI4QFVnQgnpOIG0CdMSUq7wLkrbEaypx8p28wx2Pohw1EWJUY6Ongt3vHIuovT4Z",
          // ...and any other configuration
        });
      }

      const allNFTs = [];
      // console.log("Chain", address);
      for (const chain of chains) {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address,
          chain,
        });
        allNFTs.push(response.jsonResponse?.result);
      }

      //   let res = await Moralis.EvmApi.nft.getWalletNFTs({
      //     address,
      //     chain,
      //   });

      // console.log("Test",res.jsonResponse);

      //   res = res?.jsonResponse?.result;
      if (allNFTs[0] && allNFTs[1] && allNFTs[2].length == 0) {
        setCollectionArray([]);
        setLoading_Spinner(false);
      } else {
        let name;
        let symbol;
        let created_date;
        let category;
        let Image_type = "image";
        let owner_of = null;
        let token_address = null;
        let amount = null;
        let token_id = null;
        let count = 0;
        for (let j = 0; j < allNFTs.length; j++) {
          // console.log("UrlallNFTs", allNFTs[j]);
          for (let i = 0; i < allNFTs[j]?.length; i++) {
            let jsonUsrl = allNFTs[j][i]?.token_uri;

            Image_type = "image";
            if (jsonUsrl == undefined) {
              if(allNFTs[j][i].name =="MintSea Collection"){
                // console.log("jsonUsrl", allNFTs[j][i]);
                imageArray = [
                  ...imageArray,
                  {
                    url: "images/user_profile_placeholder.webp",
                    name: allNFTs[j][i].name,
                    owner_of: allNFTs[j][i].owner_of,
                    token_address: allNFTs[j][i].token_address,
                    amount: allNFTs[j][i].amount,
                    symbol: symbol,
                    token_id: allNFTs[j][i].token_id,
                    jsonUsrl: "images/user_profile_placeholder.webp",
                    created_date: allNFTs[j][i].last_token_uri_sync,
                    category: "Art",
                    Image_type: "image/png",
                    description: "Null",
                    Block_chain: "Binance",
                  },
                ];
                
                setCollectionArray(imageArray);
              }
            } else {
              if (
                allNFTs[j][i].token_address.toUpperCase() ==
                  Contract_Addresss[0].CreateNFT.toUpperCase() ||
                allNFTs[j][i].token_address.toUpperCase() ==
                  Contract_Addresss[1].CreateNFT.toUpperCase() ||
                allNFTs[j][i].token_address.toUpperCase() ==
                  Contract_Addresss[2].CreateNFT.toUpperCase()
              ) {
                // if(allNFTs[j][i].token_address=="0xF766Ad06a71C51B7dbbb2e3C717A52BD354155d2" || allNFTs[j][i].token_address=="0xb0EfbDd0826FB657Dbb5b10161EB0533EA6220Bf" || allNFTs[j][i].token_address=="0x58C7dC293906Afe7Ae4fC719Ae54DBB18DA73dE4" )
                // {

                let data = `https://skywalker.infura-ipfs.io/ipfs/${jsonUsrl}`;
                let Response = await axios.get(data);
                // console.log("Response", Response.data.properties.name.description);
                jsonUsrl = `https://skywalker.infura-ipfs.io/ipfs/${Response.data.properties.image.description}`;
                name = Response.data.properties.name.description;
                category = Response.data.properties.category.description;
                Image_type = Response.data.properties.image.type;
                owner_of = allNFTs[j][i].owner_of;
                token_address = allNFTs[j][i].token_address;
                amount = allNFTs[j][i].amount;
                created_date = allNFTs[j][i].last_token_uri_sync;
                token_id = allNFTs[j][i].token_id;
                let finalUrl;
                let Block_chain = Response.data.properties.category.chain;
                // console.log("Image_type", Block_chain);
                let description =
                  Response.data.properties.description.description;

                imageArray = [
                  ...imageArray,
                  {
                    url: finalUrl,
                    name: name,
                    owner_of: owner_of,
                    token_address: token_address,
                    amount: amount,
                    symbol: symbol,
                    token_id: token_id,
                    jsonUsrl: jsonUsrl,
                    created_date: created_date,
                    category: category,
                    Image_type: Image_type,
                    Block_chain: Block_chain,
                    description: description,
                  },
                ];

                setCollectionArray(imageArray);
              }
            }
            // console.log("Addressj", allNFTs[j][i].token_address.toUpperCase()==Contract_Addresss[0].CreateNFT.toUpperCase() || allNFTs[j][i].token_address.toUpperCase()==Contract_Addresss[1].CreateNFT.toUpperCase() || allNFTs[j][i].token_address.toUpperCase()==Contract_Addresss[2].CreateNFT.toUpperCase());

            // }
          }
        }
        setLoading_Spinner(false);
      }
    } catch (error) {
      setLoading_Spinner(false);

      console.log(error);
    }
  };

  useEffect(() => {
    runApp();
    document.getElementById("root").classList.add("bg-complete");
    return () => {
      document.getElementById("root").classList.remove("bg-complete");
    };
  }, [address, chainId]);

  const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");
  const makeOffer = async (id, items) => {
    try {
      let blockChain_Id = 0;
      if (items.Block_chain == "Ethereum") {
        blockChain_Id = 11155111;
      } else if (items.Block_chain == "Binance") {
        blockChain_Id = 97;
      } else {
        blockChain_Id = 80001;
      }
      if (getOfferPrice != 0) {
        if (blockChain_Id == chainId) {
          setIsSpinner(true);
          // let provider = new ethers.providers.Web3Provider(window.ethereum);
          // let signer = provider.getSigner();
          let contract = null;
          let nftContract = null;
          let MarketPlace_Address = null;
          let NFT_Addresss = null;

          if (chainId == 97) {
            MarketPlace_Address = Contract_Addresss[0].nftMarketContractAddress;
            NFT_Addresss = Contract_Addresss[0].CreateNFT;
          } else if (chainId == 11155111) {
            MarketPlace_Address = Contract_Addresss[1].nftMarketContractAddress;
            NFT_Addresss = Contract_Addresss[1].CreateNFT;
            console.log("MarketPlace_Address", MarketPlace_Address);
          } else {
            MarketPlace_Address = Contract_Addresss[2].nftMarketContractAddress;
            NFT_Addresss = Contract_Addresss[2].CreateNFT;
          }
          const { request } = await prepareWriteContract({
            address:
              chainId == 97
                ? Contract_Addresss[0].CreateNFT
                : chainId == 11155111
                ? Contract_Addresss[1].CreateNFT
                : Contract_Addresss[2].CreateNFT,
            abi:
              chainId == 97
                ? Contract_Addresss[0].CreateNFT_ABI
                : chainId == 11155111
                ? Contract_Addresss[1].CreateNFT_ABI
                : Contract_Addresss[2].CreateNFT_ABI,
            functionName: "setApprovalForAll",
            args: [MarketPlace_Address.toString(), true],
            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });

          // console.log("hash", hash);

          // const tx = await contract.setApprovalForAll(MarketPlace_Address, true);
          // await tx.wait();

          // let value = webSupply.utils.toWei(getOfferPrice.toString());
          let value = getOfferPrice * 1000000000000000000;
          setTimeout(() => {
            addToast("Approve Successful", {
              appearance: "success",
            });
            const makeOffer = async () => {
              try {
                const { request } = await prepareWriteContract({
                  address:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress
                      : Contract_Addresss[2].nftMarketContractAddress,
                  abi:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress_Abi
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress_Abi
                      : Contract_Addresss[2].nftMarketContractAddress_Abi,
                  functionName: "makeOffer",
                  args: [id, value],
                  account: address,
                });
                const { hash } = await writeContract(request);
                const data = await waitForTransaction({
                  hash,
                });

                addToast("Please Wait a Moment!", {
                  appearance: "success",
                });

                console.log("OfferCount", hash);
                let OfferCount = await readContract({
                  address:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress
                      : Contract_Addresss[2].nftMarketContractAddress,
                  abi:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress_Abi
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress_Abi
                      : Contract_Addresss[2].nftMarketContractAddress_Abi,
                  functionName: "offerCount",
                  // args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
                });
                // console.log("Dta1",parseInt(OfferCount));
                // let OfferCount = await nftContract.offerCount();
                OfferCount = parseInt(OfferCount);
                console.log("OfferCount", OfferCount);
                let Offer = await readContract({
                  address:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress
                      : Contract_Addresss[2].nftMarketContractAddress,
                  abi:
                    chainId == 97
                      ? Contract_Addresss[0].nftMarketContractAddress_Abi
                      : chainId == 11155111
                      ? Contract_Addresss[1].nftMarketContractAddress_Abi
                      : Contract_Addresss[2].nftMarketContractAddress_Abi,
                  functionName: "offers",
                  args: [OfferCount],
                });

                Offer = parseInt(Offer);
                console.log("Offer", Offer);

                let postapiPushdata = await axios.post(
                  "https://sanjhavehra.womenempowerment.online/open_marketplace",
                  {
                    itemId: Offer,
                    nftContract: NFT_Addresss,
                    tokenId: id,
                    owner: items.owner_of,
                    price: getOfferPrice,
                    sold: items.Image_type,
                    name: items.name,
                    url: items.jsonUsrl,
                    txn: hash,
                    category: items.category,
                    edate: new Date(),
                    Description: items.description,
                    Blockchain:
                      chainId == 97
                        ? "Binance"
                        : chainId == 11155111
                        ? "Ethereum"
                        : "Polygon",
                  }
                );
                console.log("postapiPushdata", postapiPushdata);

                let payment = await axios.post(
                  "https://sanjhavehra.womenempowerment.online/User_payment",
                  {
                    Eth_Cost: chainId == 11155111 ? getOfferPrice : 0,
                    BNB_Cost: chainId == 97 ? getOfferPrice : 0,
                    Metic_Cost: chainId == 80001 ? getOfferPrice : 0,
                    Address: address.toUpperCase(),
                  }
                );
                console.log("payment", payment);
                addToast("Transaction Successful", {
                  appearance: "success",
                });

                setIsSpinner(false);
                dispatch(getLoarem("All"));
                dispatch(getTranding());

                history.push("/explore");
              } catch (error) {
                setIsSpinner(false);

                console.log(error);
              }
            };
            makeOffer();
          }, 5000);
        } else {
          addToast(`Please Connect To ${items.Block_chain} Chain`, {
            appearance: "error",
          });
          setIsSpinner(false);
        }

        // let hasha = await nftContract.makeOffer(id, value);
        // await hash.wait();
      } else {
        toast.error("Please Enter Amount First!");
        setIsSpinner(false);
      }
    } catch (error) {
      setIsSpinner(false);

      console.log(error);
    }
  };

  const webSupply_BNB = new Web3(
    "https://bsc-testnet.blockpi.network/v1/rpc/public"
  );
  const webSupply_Eth = new Web3(
    "https://endpoints.omniatech.io/v1/eth/sepolia/public"
  );
  const webSupply_Polygon = new Web3("https://rpc-mumbai.maticvigil.com");

  useEffect(() => {
    const get_user_NFt_Balance = async () => {
      try {
        // setLoading_Spinner(true);

        let contract = null;
        contract = new webSupply_BNB.eth.Contract(
          Contract_Addresss[0].CreateNFT_ABI,
          Contract_Addresss[0].CreateNFT
        );

        let contract_Ether = new webSupply_Eth.eth.Contract(
          Contract_Addresss[1].CreateNFT_ABI,
          Contract_Addresss[1].CreateNFT
        );

        let contract_Polygon = new webSupply_Polygon.eth.Contract(
          Contract_Addresss[2].CreateNFT_ABI,
          Contract_Addresss[2].CreateNFT
        );

        const tx = await contract.methods
          .balanceOf(address)
          .call();

        setBNB(parseInt(tx));

        let Ethereum_value = await contract_Ether.methods
          .balanceOf(address)
          .call();
        Ethereum_value = parseInt(Ethereum_value).toString();
        setethereumchain(parseInt(Ethereum_value));

        let polygon_value = await contract_Polygon.methods
          .balanceOf(address)
          .call();
        // polygon_value = parseInt(polygon_value).toString();
        setpolygonchain(parseInt(polygon_value));
        // setLoading_Spinner(false);

        // let BNB_balace = await readContract({
        //   address: Contract_Addresss[0].CreateNFT,
        //   abi: Contract_Addresss[0].CreateNFT_ABI,
        //   functionName: "balanceOf",
        //   args: [address],
        // });

        // BNB_balace = parseInt(BNB_balace);
        // console.log("BNB_balace", BNB_balace);

        // setBNB(BNB_balace);

        // let Ethereum_value = await readContract({
        //   address: Contract_Addresss[1].CreateNFT,
        //   abi: Contract_Addresss[1].CreateNFT_ABI,
        //   functionName: "balanceOf",
        //   args: [address],
        // });

        // Ethereum_value = parseInt(Ethereum_value);
        // console.log("Ethereum_value", Ethereum_value);

        // setethereumchain(Ethereum_value);

        // let polygon_value = await readContract({
        //   address: Contract_Addresss[2].CreateNFT,
        //   abi: Contract_Addresss[2].CreateNFT_ABI,
        //   functionName: "balanceOf",
        //   args: [address],
        // });

        // polygon_value = parseInt(polygon_value);
        // console.log("polygon_value", polygon_value);
        // setpolygonchain(polygon_value);
      } catch (error) {
        console.log(error);
        // setLoading_Spinner(false);
      }
    };

    get_user_NFt_Balance();

    const found = _DATA
      .currentData()
      .filter((element) => element.Block_chain == selectChain);
    // console.log("Found",found);
    setchainSort(found);
  }, [selectChain, address, chainId]);

  const count = Math.ceil(CollectionArray?.length / itemsPerPage);
  const _DATA = usePagination(CollectionArray, itemsPerPage);

  return (
    <div>
      {IsSpinner ? <FullScreenLoader heading="loading" /> : null}
      <main className="pt-[5.5rem] lg:mt-18">
        {/* Banner */}

        <div className="relative">
          <img
            src={
              Object.keys(user_Profile).length != 0
                ? user_Profile.Cover_image !== "" &&
                  user_Profile.Cover_image !== undefined
                  ? `${user_Profile?.Cover_image}` ||
                    "images/user_profile_placeholder.webp"
                  : "images/user_profile_placeholder.webp"
                : "images/user_profile_placeholder.webp"
            }
            alt="banner"
            className="h-[18.75rem] object-cover"
            width="100%"
          />
        </div>
        {/* end banner */}
        {/* Profile */}
        <section className="relative pb-12 pt-28">
          {/* Avatar */}

          <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <figure className="relative">
              <img
                src={
                  Object.keys(user_Profile).length != 0
                    ? user_Profile?.image !== "" &&
                      user_Profile.Cover_image !== undefined
                      ? `${user_Profile?.image}` ||
                        "images/profile_placeholder.webp"
                      : "images/profile_placeholder.webp"
                    : "images/profile_placeholder.webp"
                }
                alt="collection avatar"
                className="object-cover rounded"
                width="100%"
                style={{ objectPosition: "center top", height: "30vh" }}
              />
              {/* <div
                className="absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                data-tippy-content="Verified Collection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-[.875rem] w-[.875rem] fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </div> */}
            </figure>
          </div>
          <div className="container">
            <div className="text-center">
              <h2 className="mb-2 font-display text-4xl font-medium text-white">
                {Object.keys(user_Profile).length != 0
                  ? user_Profile?.username
                  : "UserName"}
              </h2>
              <div
                className="mb-8 inline-flex items-center justify-center py-1.5 px-4"
                style={{
                  background: "#030B3C",
                  border: "1px solid #131DFF",
                  borderRadius: "8px",
                }}
              >
                <button
                  className="js-copy-clipboard max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap"
                  data-tippy-content="Copy"
                >
                  <span className=" text-white">
                    <CopyToClipboard
                      text={
                        Object.keys(user_Profile).length != 0
                          ? user_Profile?.address
                          : address
                      }
                      onCopy={() => setcopied(true)}
                    >
                      <span>
                        {Object.keys(user_Profile).length != 0
                          ? user_Profile?.address.substring(0, 4) +
                            "..." +
                            user_Profile?.address
                              .trim()
                              ?.substring(user_Profile?.address.length - 4)
                          : address.substring(0, 4) +
                            "..." +
                            address.trim()?.substring(address.length - 4)}
                      </span>
                    </CopyToClipboard>
                    {copied ? toast.success("Copied") : null}
                  </span>
                </button>
              </div>
              <p className="mx-auto mb-2 max-w-xl text-white text-md">
                I make art with the simple goal of giving you something pleasing
                to look at for a few seconds.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 pt-20">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <div>
              <div className="innerdiv_chains mb-4">
                <h5 className="mb-3 mb-md-0 d-flex text-white align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="mr-3 transition-colors"
                    style={{ fill: "#ffffff" }}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z" />
                  </svg>
                  Your NFT's on all chains
                </h5>
                <div className="all_chain_icons">
                  <div
                    className="chains_icons mx-2"
                    onClick={() => setselectChain("Ethereum")}
                    style={{
                      background: "#030B3C",
                      border: "1px solid #131DFF",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzI1MjkyRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTguMTkgMTQuNzcgMTQgMTguMjFsNS44LTMuNDQtNS44IDguMTktNS44MS04LjE5WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNCAxNi45My01LjgxLTMuNDRMMTQgNC4zNGw1LjgxIDkuMTVMMTQgMTYuOTNaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTQuNzciIHkyPSIyMi45NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K"
                      alt=""
                    />
                    <p className="text-white">{ethereumchain}</p>
                  </div>
                  <div
                    className="chains_icons mx-2"
                    onClick={() => setselectChain("Binance")}
                    style={{
                      background: "#030B3C",
                      border: "1px solid #131DFF",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjRjBCOTBCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCAwYzcuNzMzIDAgMTQgNi4yNjcgMTQgMTRzLTYuMjY3IDE0LTE0IDE0UzAgMjEuNzMzIDAgMTQgNi4yNjcgMCAxNCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTcuNjk0IDE0IC4wMSAzLjcwMiAzLjE0NiAxLjg1djIuMTY4bC00Ljk4Ni0yLjkyNHYtNS44NzhMNy42OTQgMTRabTAtMy43MDJ2Mi4xNTdsLTEuODMyLTEuMDgzVjkuMjE0bDEuODMyLTEuMDgzIDEuODQxIDEuMDgzLTEuODQgMS4wODRabTQuNDctMS4wODQgMS44MzItMS4wODMgMS44NCAxLjA4My0xLjg0IDEuMDg0LTEuODMyLTEuMDg0WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjAxOCAxNi45MzV2LTIuMTY4bDEuODMyIDEuMDg0djIuMTU3bC0xLjgzMi0xLjA3M1ptMy4xNDYgMy4zOTQgMS44MzIgMS4wODQgMS44NC0xLjA4NHYyLjE1N2wtMS44NCAxLjA4NC0xLjgzMi0xLjA4NFYyMC4zM1ptNi4zLTExLjExNSAxLjgzMi0xLjA4MyAxLjg0IDEuMDgzdjIuMTU4bC0xLjg0IDEuMDgzdi0yLjE1N2wtMS44MzItMS4wODRabTEuODMyIDguNDg4LjAxLTMuNzAyIDEuODMxLTEuMDg0djUuODc5bC00Ljk4NiAyLjkyNHYtMi4xNjdsMy4xNDUtMS44NVoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMTguOTgyIDE2LjkzNS0xLjgzMiAxLjA3M3YtMi4xNTdsMS44MzItMS4wODR2Mi4xNjhaIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTE4Ljk4MiAxMS4wNjUuMDEgMi4xNjgtMy4xNTUgMS44NXYzLjcxMmwtMS44MzEgMS4wNzMtMS44MzItMS4wNzN2LTMuNzExbC0zLjE1NS0xLjg1MXYtMi4xNjhsMS44NC0xLjA4MyAzLjEzNSAxLjg2IDMuMTU1LTEuODYgMS44NCAxLjA4M2gtLjAwN1ptLTkuOTY0LTMuNyA0Ljk3Ny0yLjkzNSA0Ljk4NyAyLjkzNS0xLjgzMiAxLjA4My0zLjE1NC0xLjg2LTMuMTQ2IDEuODYtMS44MzItMS4wODNaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyOHYyOEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=="
                      alt=""
                    />
                    <p className="text-white">{BNB}</p>
                  </div>
                  <div
                    className="chains_icons mx-2"
                    onClick={() => setselectChain("Polygon")}
                    style={{
                      background: "#030B3C",
                      border: "1px solid #131DFF",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iQSIgeDE9Ii0xOC4yNzUlIiB4Mj0iODQuOTU5JSIgeTE9IjguMjE5JSIgeTI9IjcxLjM5MyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhMjI5YzUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3YjNmZTQiLz48L2xpbmVhckdyYWRpZW50PjxjaXJjbGUgaWQ9IkIiIGN4PSIxNCIgY3k9IjE0IiByPSIxNCIvPjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJDIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNCIi8+PC9tYXNrPjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbD0idXJsKCNBKSIgZD0iTS0xLjMyNi0xLjMyNmgzMC42NTF2MzAuNjUxSC0xLjMyNnoiIG1hc2s9InVybCgjQykiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDQ5IDE3LjAyMWwzLjk2LTIuMjg3YS42ODEuNjgxIDAgMCAwIC4zNC0uNTg5VjkuNTcyYS42ODMuNjgzIDAgMCAwLS4zNC0uNTlsLTMuOTYtMi4yODZhLjY4Mi42ODIgMCAwIDAtLjY4IDBsLTMuOTYgMi4yODdhLjY4Mi42ODIgMCAwIDAtLjM0LjU4OXY4LjE3M0wxMC4yOSAxOS4zNWwtMi43NzctMS42MDR2LTMuMjA3bDIuNzc3LTEuNjA0IDEuODMyIDEuMDU4VjExLjg0bC0xLjQ5Mi0uODYxYS42ODEuNjgxIDAgMCAwLS42OCAwbC0zLjk2IDIuMjg3YS42ODEuNjgxIDAgMCAwLS4zNC41ODl2NC41NzNjMCAuMjQyLjEzLjQ2OC4zNC41OWwzLjk2IDIuMjg2YS42OC42OCAwIDAgMCAuNjggMGwzLjk2LTIuMjg2YS42ODIuNjgyIDAgMCAwIC4zNC0uNTg5di04LjE3NGwuMDUtLjAyOCAyLjcyOC0xLjU3NSAyLjc3NyAxLjYwM3YzLjIwOGwtMi43NzcgMS42MDMtMS44My0xLjA1NnYyLjE1MWwxLjQ5Ljg2YS42OC42OCAwIDAgMCAuNjggMHoiLz48L2c+PC9nPjwvc3ZnPg=="
                      alt=""
                    />
                    <p className="text-white">{polygonchain}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              {/* On Sale Tab */}
              <div
                className="tab-pane fade show active"
                id="on-sale"
                role="tabpanel"
                aria-labelledby="on-sale-tab"
              >
                {/* Filters */}
                {/* <div className="mb-8 flex flex-wrap items-center justify-between">
                  <div className="flex flex-wrap items-center">
                    <div className="my-1 mr-2.5">
                      <button className=" group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors "
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z" />
                        </svg>
                        <span>Collections</span>
                      </button>
                      <div
                        className="dropdown-menu z-10 hidden min-w-[280px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="onSaleCollectionsFilter"
                      ></div>
                    </div>
                  </div>
                </div> */}

                {Loading_Spinner == true && _DATA.currentData()?.length == 0 ? (
                  <>
                    <>
                      <h6 className="fw-normal text-muted text-center mb-0">
                        Fetching data from the blockchain please wait...
                      </h6>
                      <Loader />
                    </>
                  </>
                ) : Loading_Spinner == false && CollectionArray?.length == 0 ? (
                  <>
                    <div className="col-12">
                      <NoDataAlert
                        heading="There're no NFTs at the moment."
                        subheading="Try to mint some assets to see how are we rendering them."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row mixitUpContainer gy-4 mb-5 align-items-stretch">
                      {
                        // selectChain !=null ? chainSort:
                        _DATA.currentData().map((items, index) => {
                          return (
                            <>
                              <div
                                className={`col-xl-3 col-lg-4 col-md-6 mix `}
                                key={index}
                              >
                                <div
                                  className={`card top-saller-Card card-hover-minimal`}
                                >
                                  <div className="card-body m-1 p-2 h-i-w-Card position-relative">
                                    <div className="z-index-20 mb-2 d-flex align-items-center">
                                      <Link
                                        className="text-reset"
                                        to={`/assets/${items.name}/${items.Block_chain}`}
                                      >
                                        <p className="fw-bold mb-0 w-100 px-2 cursor-pointer text-white text-md">
                                          {items.name.length > 25
                                            ? items.name.substr(0, 25) + "..."
                                            : items.name}
                                        </p>
                                      </Link>
                                    </div>

                                    <div
                                      className="Blockchain"
                                      style={{ right: "10px" }}
                                    >
                                      <div className="inner_blockchain">
                                        {items.Block_chain == "Binance" ? (
                                          <SiBinance className="fa-brands fa-ethereum" />
                                        ) : items.Block_chain == "Ethereum" ? (
                                          <FaEthereum />
                                        ) : items.Block_chain == "Polygon" ? (
                                          <>
                                            <svg
                                              fill="white"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                              style={{
                                                width: "18px",
                                                height: "20px",
                                              }}
                                            >
                                              <path
                                                d="M16.5828 8.90039C16.2516 8.70599 15.8196 8.70599 15.4524 8.90039L12.8604 10.4016L11.1 11.3808L8.508 12.882C8.1768 13.0764 7.7448 13.0764 7.3776 12.882L5.3184 11.7084C4.9872 11.514 4.7532 11.154 4.7532 10.7616V8.44679C4.7532 8.05439 4.9512 7.69799 5.3184 7.49999L7.3452 6.35879C7.6764 6.16439 8.1084 6.16439 8.4756 6.35879L10.5024 7.49999C10.8336 7.69439 11.0676 8.05439 11.0676 8.44679V9.94799L12.828 8.93639V7.43519C12.828 7.04279 12.63 6.68639 12.2628 6.48839L8.5116 4.33559C8.1804 4.14119 7.7484 4.14119 7.3812 4.33559L3.5652 6.48839C3.198 6.68279 3 7.04279 3 7.43519V11.7732C3 12.1656 3.198 12.522 3.5652 12.72L7.3848 14.8728C7.716 15.0672 8.148 15.0672 8.5152 14.8728L11.1072 13.404L12.8676 12.3924L15.4596 10.9236C15.7908 10.7292 16.2228 10.7292 16.59 10.9236L18.6168 12.0648C18.948 12.2592 19.182 12.6192 19.182 13.0116V15.3264C19.182 15.7188 18.984 16.0752 18.6168 16.2732L16.59 17.4468C16.2588 17.6412 15.8268 17.6412 15.4596 17.4468L13.4328 16.3056C13.1016 16.1112 12.8676 15.7512 12.8676 15.3588V13.8576L11.1072 14.8692V16.3704C11.1072 16.7628 11.3052 17.1192 11.6724 17.3172L15.492 19.47C15.8232 19.6644 16.2552 19.6644 16.6224 19.47L20.442 17.3172C20.7732 17.1228 21.0072 16.7628 21.0072 16.3704V12.0324C21.0072 11.64 20.8092 11.2836 20.442 11.0856L16.5828 8.90039Z"
                                                fill="white"
                                              ></path>
                                            </svg>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </div>

                                    <div className="position-relative mb-2 shadow">
                                      {/* <div className="author z-index-20">
                                        <div className="ms-3 rounded-circle bd-3 border-dark">
                                          {user_Profile != null ? (
                                            <>
                                              <Avatar
                                                alt=""
                                                size="large"
                                                src={`${user_Profile?.image}`}
                                              />
                                            </>
                                          ) : (
                                            <>
                                              <Jazzicon
                                                address={items.owner_of}
                                              />
                                            </>
                                          )}
                                        </div>
                                        <span className="icon bg-primary text-white me-1">
                                          <i className="las la-check-double"></i>
                                        </span>
                                      </div> */}
                                      {/* <Link
                                        className="text-reset"
                                        to={`/assets/${items.name}/${items.Block_chain}`}
                                      > */}
                                      <div className="card-img-holder rounded overflow-hidden">
                                        {/* <Link className="text-reset" to={`/assets}`}> */}
                                        {items.Image_type.startsWith(
                                          "image"
                                        ) ? (
                                          <>
                                            <Link
                                              className="text-reset"
                                              to={`/assets/${items.name}/${items.Block_chain}`}
                                            >
                                              <img
                                                className="img-fluid rounded w-100"
                                                src={items.jsonUsrl}
                                                // alt={title}
                                              />{" "}
                                            </Link>
                                          </>
                                        ) : items.Image_type.startsWith(
                                            "video"
                                          ) ? (
                                          <>
                                            <div
                                              ref={vidButtonRef}
                                              className="c-mm"
                                            >
                                              <details>
                                                <summary className="c-mm__play">
                                                  <span
                                                    data-css-icon="play"
                                                    onClick={handleToggleVideo}
                                                  >
                                                    <i></i>
                                                  </span>
                                                </summary>
                                                <span hidden></span>
                                              </details>
                                              <Link
                                                className="text-reset"
                                                to={`/assets/${items.name}/${items.Block_chain}`}
                                              >
                                                <video
                                                  src={items.jsonUsrl}
                                                  ref={vidRef}
                                                  loop
                                                  width="100%"
                                                ></video>
                                              </Link>
                                            </div>
                                          </>
                                        ) : items.Image_type.startsWith(
                                            "audio"
                                          ) ? (
                                          <>
                                            <div
                                              ref={vidButtonRef}
                                              className="c-mm"
                                            >
                                              <details>
                                                <summary
                                                  className="c-mm__play"
                                                  onClick={handleToggleVideo}
                                                >
                                                  <span data-css-icon="play">
                                                    <i></i>
                                                  </span>
                                                </summary>
                                                <span hidden></span>
                                              </details>
                                              <Link
                                                className="text-reset"
                                                to={`/assets/${items.name}/${items.Block_chain}`}
                                              >
                                                <div
                                                  className="c-mm__inner"
                                                  style={{
                                                    position: "relative",
                                                  }}
                                                >
                                                  <img
                                                    src="https://deliverysources.web.app/IstanbulMUN/images/redenx-min.jpg"
                                                    width="100%"
                                                    style={{
                                                      width: "30rem",
                                                      height: "13rem",
                                                    }}
                                                    alt=""
                                                  />
                                                  <figure
                                                    data-filter="grainy text"
                                                    className="c-mm__frame"
                                                  ></figure>
                                                </div>
                                                <audio
                                                  src={items.jsonUsrl}
                                                  ref={vidRef}
                                                  loop
                                                ></audio>
                                              </Link>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <Link
                                              className="text-reset"
                                              to={`/assets/${items.name}/${items.Block_chain}`}
                                            >
                                              <img
                                                className="img-fluid rounded w-100"
                                                src={items.jsonUsrl}
                                                // alt={title}
                                              />
                                            </Link>
                                          </>
                                        )}
                                      </div>
                                      {/* </Link> */}
                                    </div>
                                    {/* <p className="fw-bold mb-3">
                                      <Link
                                        className="text-reset"
                                        to={`/assets`}
                                      >
                                        {items?.name}
                                      </Link>
                                    </p> */}
                                    <div className="d-flex justify-content-between">
                                      <p className="fw-bold mb-3 text-white">
                                        Token ID
                                      </p>{" "}
                                      <p className="fw-bold mb-3">
                                        <Link
                                          className="text-white text-decoration-none"
                                          to={`/assets`}
                                        >
                                          {items?.token_id}
                                        </Link>
                                      </p>
                                    </div>

                                    {/* <NftCategory category={category} /> */}
                                    <p
                                      className="text-white mb-2"
                                      style={{
                                        backgroundColor: "#090E2D",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        padding: "7px 10px",
                                        borderRadius: "8px",
                                        border: "1px solid #0F1953",
                                        boxShadow: "0 0 10px 5px #2c1cb5",
                                      }}
                                    >
                                      This is your item, you can put it on sale
                                    </p>
                                    <div
                                      className="input-group"
                                      // onSubmit={(e) =>
                                      //   makeOfferHandler(e, id, nftKey)
                                      // }
                                    >
                                      <button
                                        type="submit"
                                        className="btn btn-primary rounded-sm me-2"
                                        onClick={() =>
                                          makeOffer(items?.token_id, items)
                                        }
                                        style={{
                                          background: "#1ADFBB",
                                          boxShadow:
                                            "0px 0px 10px 5px #4659CF77",
                                        }}
                                      >
                                        Offer
                                      </button>
                                      <input
                                        type="number"
                                        step="0.001"
                                        min="0.0000000000000000000000001"
                                        placeholder={
                                          items.Block_chain == "Binance"
                                            ? "BNB..."
                                            : items.Block_chain == "Ethereum"
                                            ? "ETH..."
                                            : "MATIC..."
                                        }
                                        className="form-control py-1 rounded-sm"
                                        onChange={(e) =>
                                          setgetOfferPrice(e.target.value)
                                        }
                                        style={{
                                          border: "1px solid #131DFF",
                                          borderRadius: "8px",
                                          background: "#070630",
                                          color: "white",
                                        }}
                                        // ref={priceRefs.current[nftKey]}
                                      />
                                    </div>

                                    {/* <div className="mt-3 mb-2 pt-1 bg-body rounded-pill"></div> */}
                                    <div className="mt-3 mb-2 pt-1 section-seprator"></div>
                                    {/* <p className="text-muted fw-normal mb-0 text-sm d-flex align-items-center">
                                      <i className="la-sm text-primary las la-clock mx-1 mt-1 text-primary"></i>
                                      Created
                                      <span className="text-primary mx-2">
                                        {formatDate(items.created_date)}
                                      </span>{" "}
                                      ago
                                    </p> */}

                                    <p className="nft-text-mini d-flex align-items-center m-0">
                                      <span className="nft-icons-mini">
                                        <i className="las la-clock"></i>
                                      </span>
                                      <span className="ms-1 nft-text-mini">
                                        Created {formatDate(items.created_date)}{" "}
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })
                      }
                    </div>
                  </>
                )}
                {CollectionArray?.length > 25 && (
                  <>
                    <div className="d-flex justify-content-center">
                      <Pagination
                        count={count}
                        page={currentPage}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
