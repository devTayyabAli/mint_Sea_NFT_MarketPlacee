import React, {
  useContext,
  useRef,
  createRef,
  useState,
  useEffect,
} from "react";
import { Jazzicon } from "@ukstv/jazzicon-react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import web3 from "../../connection/web3";
import Web3Context from "../../store/web3-context";
import CollectionContext from "../../store/collection-context";
import MarketplaceContext from "../../store/marketplace-context";

import { formatDate } from "../../helpers/utils";
import NftCategory from "./NftCategory";
import useWeb3 from "../Components/useWeb3";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { toHex } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { Contract, errors, ethers } from "ethers";
import { readContract } from "@wagmi/core";
import {
  Contract_Addresss,
  nftMarketContractAddress,
  nftMarketContractAddress_Abi,
} from "../../Utils/Contract";
import FullScreenLoader from "./FullScreenLoader";
import { API } from "../../API";
import { useAccount, useChainId } from "wagmi";
import { useAddress } from "@thirdweb-dev/react";
import Web3 from "web3";
import { API_URL } from "../../config";
import axios from "axios";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useBalance } from "wagmi";
import "./App.css";
import { getLoarem } from "../../Redux/GetNFTs";
import { getTranding } from "../../Redux/tranding_NFTs";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function NftItem({
  NFT,
  img,
  title,
  owner,
  price,
  category,
  dateCreated,
  id,
  index,
  nftKey,
}) {
  const web3Ctx = useContext(Web3Context);
  const { web3, walletAddress } = useWeb3();
  const count = useSelector((state) => state.counter.chain_Id);
  const Offers_Loader = useSelector((state) => state.Offers.Offers_Array);
  const dispatch = useDispatch();
  const collectionCtx = useContext(CollectionContext);
  const [IsFavorite, setIsFavorite] = useState(false);
  const marketplaceCtx = useContext(MarketplaceContext);
  const [MktIsLoading, setMktIsLoading] = useState(false);
  const [favrouteName, setfavrouteName] = useState(null);
  const chainId = useChainId();
  const { address } = useAccount();
  const { addToast } = useToasts();
  const history = useHistory();
  const priceRefs = useRef([]);
  const vidRef = useRef(null);
  const vidButtonRef = useRef(null);
  const { data, isError, isLoading } = useBalance({
    address: address,
  });
  const user_Profile = useSelector((state) => state.Offers.user_Profile);

  // console.log("data",data.formatted);
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

  if (priceRefs.current.length !== collectionCtx.collection.length) {
    priceRefs.current = Array(collectionCtx.collection.length)
      .fill()
      .map((_, i) => priceRefs.current[i] || createRef());
  }

  const makeOfferHandler = (event, id, nftKey) => {
    event.preventDefault();

    const enteredPrice = web3.utils.toWei(
      priceRefs.current[nftKey].current.value,
      "ether"
    );

    collectionCtx.contract.methods
      .approve(marketplaceCtx.contract.options.address, id)
      .send({ from: web3Ctx.account })
      .on("transactionHash", (hash) => {
        marketplaceCtx.setMktIsLoading(true);
      })
      .on("receipt", (receipt) => {
        marketplaceCtx.contract.methods
          .makeOffer(id, enteredPrice)
          .send({ from: web3Ctx.account })
          .on("error", (error) => {
            addToast("Something went wrong when pushing to the blockchain", {
              appearance: "error",
            });
            marketplaceCtx.setMktIsLoading(false);
          });
      });
  };

  const detect_Offer_card = async () => {
    try {
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
        args: [NFT.itemId],
      });
      // let Offer = await nftContract.offers(OfferCount);
      // Offer = parseInt(Offer);

      // console.log("OfferitemId",Offer);
      if (Offer[4] || Offer[5]) {
        // console.log("OfferitemId",Number(Offer)==Number(NFT.itemId), NFT.itemId,Offer);
        let DeleteItems = await axios.post(
          "https://sanjhavehra.womenempowerment.online/update_sell_status",
          {
            tokenid: NFT.tokenId,
            Blockchain: NFT.Blockchain,
          }
        );
        let TrandingItems = await axios.post(
          "https://sanjhavehra.womenempowerment.online/update_Tranding",
          {
            tokenId: NFT.tokenId,
            Blockchain: NFT.Blockchain,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   let intveral = setInterval(() => {
  //     detect_Offer_card();
  //   }, 1000);

  //   return () => clearInterval(intveral);
  // });

  const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");
  const buyHandler = async (event, id, chain) => {
    try {
      event.preventDefault();
      let CurruntChain =
        chainId == 97 ? "Binance" : chainId == 80001 ? "Polygon" : "Ethereum";
      if (address) {
        if (CurruntChain == chain) {
          if (data.formatted > NFT.price) {
            setMktIsLoading(true);
            let ethAmount = webSupply.utils.toWei(NFT.price);

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
              functionName: "fillOffer",
              args: [NFT.itemId],
              value: ethAmount,
              account: address,
            });
            const { hash } = await writeContract(request);
            const data = await waitForTransaction({
              hash,
            });

            // let DeleteItems = await axios.post(
            //   "https://sanjhavehra.womenempowerment.online/update_sell_status",
            //   {
            //     tokenid: NFT.tokenId,
            //     Blockchain: NFT.Blockchain,
            //   }
            // );
            // console.log("DeleteItems", DeleteItems);
            let payment = await axios.post(
              "https://sanjhavehra.womenempowerment.online/User_payment",
              {
                Eth_Cost: chainId == 11155111 ? NFT.price : 0,
                BNB_Cost: chainId == 97 ? NFT.price : 0,
                Metic_Cost: chainId == 80001 ? NFT.price : 0,
                Address: address,
              }
            );
            let TrandingItems = await axios.post(
              "https://sanjhavehra.womenempowerment.online/update_Tranding",
              {
                tokenId: NFT.tokenId,
                Blockchain: NFT.Blockchain,
              }
            );
            console.log("TrandingItems", TrandingItems);
            let update_Favorite = await axios.post(
              `https://sanjhavehra.womenempowerment.online/update_Favorite`,
              {
                name: NFT.name,
              }
            );
            console.log("get_Favorite", update_Favorite.data);
            let postapiPushdata = await axios.post(
              "https://sanjhavehra.womenempowerment.online/open_marketplace",
              {
                useraddress: address,
                itemId: "01000000000000000",
                nftContract:
                  chainId == 97
                    ? Contract_Addresss[0].CreateNFT
                    : chainId == 11155111
                    ? Contract_Addresss[1].CreateNFT
                    : Contract_Addresss[2].CreateNFT,
                tokenId: "01000000000000000",
                owner: "",
                price: "01000000000000000",
                sold: NFT?.sold,
                Description: NFT?.Description,

                name: NFT.name,
                url: NFT.url,
                txn: NFT.txn,
                category: NFT.category,
                edate: NFT.edate,
                Blockchain: NFT.Blockchain,
                Owner_Name: user_Profile?.username,
                Owner_Image: user_Profile?.image,
              }
            );
            addToast("You Buy This NFT SuccessFully!", {
              appearance: "success",
            });
            dispatch(getLoarem("All"));
            dispatch(getTranding());

            setMktIsLoading(false);
          } else {
            addToast(`You have insufficient Funds in your Wallet`, {
              appearance: "error",
            });
            setMktIsLoading(false);
          }
        } else {
          addToast(`Please Connect To ${chain} Chain`, {
            appearance: "error",
          });
          setMktIsLoading(false);
        }
      } else {
        addToast(`Please Connect Wallet First!`, {
          appearance: "error",
        });
        setMktIsLoading(false);
      }
    } catch (error) {
      addToast("Something went wrong when pushing to the blockchain", {
        appearance: "error",
      });
      console.log(error);
      setMktIsLoading(false);
    }
  };

  const cancelHandler = async (event, chain) => {
    try {
      let CurruntChain =
        chainId == 97 ? "Binance" : chainId == 80001 ? "Polygon" : "Ethereum";
      if (address) {
        if (CurruntChain == chain) {
          setMktIsLoading(true);

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
            functionName: "cancelOffer",
            args: [NFT.itemId],

            account: address,
          });
          const { hash } = await writeContract(request);
          const data = await waitForTransaction({
            hash,
          });
          // let DeleteItems = await axios.post(
          //   "https://sanjhavehra.womenempowerment.online/update_sell_status",
          //   {
          //     tokenid: NFT.tokenId,
          //     Blockchain: NFT.Blockchain,
          //   }
          // );

          let TrandingItems = await axios.post(
            "https://sanjhavehra.womenempowerment.online/update_Tranding",
            {
              tokenid: NFT.tokenId,
              Blockchain: NFT.Blockchain,
            }
          );
          let update_Favorite = await axios.post(
            `https://sanjhavehra.womenempowerment.online/update_Favorite`,
            {
              name: NFT.name,
            }
          );
          console.log("get_Favorite", update_Favorite.data);

          let postapiPushdata = await axios.post(
            "https://sanjhavehra.womenempowerment.online/open_marketplace",
            {
              useraddress: address,
              itemId: "01000000000000000",
              nftContract:
                chainId == 97
                  ? Contract_Addresss[0].CreateNFT
                  : chainId == 11155111
                  ? Contract_Addresss[1].CreateNFT
                  : Contract_Addresss[2].CreateNFT,
              tokenId: "01000000000000000",
              owner: "",
              price: "01000000000000000",
              Description: NFT?.Description,
              sold: NFT?.sold,
              name: NFT.name,
              url: NFT.url,
              txn: NFT.txn,
              category: NFT.category,
              edate: NFT.edate,
              Blockchain: NFT.Blockchain,
            }
          );
          console.log("postapiPushdata", postapiPushdata);

          addToast("Owner CancelOffer SuccessFully!", {
            appearance: "success",
          });
          dispatch(getLoarem("All"));
          dispatch(getTranding());
          setMktIsLoading(false);
        } else {
          addToast(`Please Connect To ${chain} Chain`, {
            appearance: "error",
          });
          setMktIsLoading(false);
        }
      } else {
        addToast(`Please Connect Wallet First!`, {
          appearance: "error",
        });
        setMktIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMktIsLoading(false);
    }
  };

  const Add_to_favorite = async () => {
    try {
      if (!address) {
        toast.error("Please Connect Metamask First!");
        setIsFavorite(false);
      } else {
        let res = await axios.post(
          "https://sanjhavehra.womenempowerment.online/Add_Favorite",
          {
            useraddress: address,
            itemId: NFT.itemId,
            nftContract: NFT.nftContract,
            tokenId: NFT.tokenId,
            owner: NFT.owner,
            price: NFT.price,
            sold: NFT.sold,
            Description: NFT?.Description,
            name: NFT.name,
            url: NFT.url,
            txn: NFT.txn,
            category: NFT.category,
            edate: NFT.edate,
            Blockchain: NFT.Blockchain,
          }
        );
        console.log("Add_Favorite", res.data.success);
        if (res.data.success == true) {
          toast.success("NFT Add into Favorite SuccessFull🎉");
          get_Favorite();
          setIsFavorite(true);
        }
      }
    } catch (error) {
      console.log(error);
      setIsFavorite(false);
    }
  };
  const update_Favorite = async () => {
    try {
      let res = await axios.post(
        `https://sanjhavehra.womenempowerment.online/update_Favorite`,
        {
          name: NFT.name,
          useraddress: address,
        }
      );
      console.log("get_Favorite", res.data);
      if (res.data.success == true) {
        toast.success("NFT Remove Fron Favorite Successfully");
        get_Favorite();
        setIsFavorite(false);
        setfavrouteName(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const get_Favorite = async () => {
    try {
      let res = await axios.get(
        `https://sanjhavehra.womenempowerment.online/get_One_Favorite?useraddress=${address}&&name=${NFT.name}`
      );
      // console.log("get_Favorite", res);
      if (res.data.success == true) {
        let Res_data = res.data.data.name;
        if (Res_data == NFT.name) {
          setfavrouteName(Res_data);
          setIsFavorite(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_Favorite();
  }, [favrouteName]);

  return (
    <>
      <div className={`card top-saller-Card card-hover-minimal ${category}`}>
        <div className="card-body m-1 p-2 h-i-w-Card position-relative">
          {MktIsLoading ? <FullScreenLoader heading="loading" /> : null}
          {/* <div className="position-relative mb-2 shadow"> */}
          <div className="z-index-20 mb-2 d-flex align-items-center">
            <div className="rounded-circle">
              { NFT.Owner_Image !== null && NFT.Owner_Image !==undefined && NFT.Owner_Image !==""   ? (
                <>
                  <img
                    src={
                      NFT.Owner_Image != null
                        ? `${NFT.Owner_Image}`
                        : "img/user/banner.jpg"
                    }
                    style={{
                      borderRadius: "50%",
                      width: "2rem",
                      height: "2rem",
                    }}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    src={
                      NFT.bidEndTime != null
                        ? `${NFT.bidEndTime}`
                        : "img/user/banner.jpg"
                    }
                    style={{
                      borderRadius: "50%",
                      width: "2rem",
                      height: "2rem",
                    }}
                    alt=""
                  />
                  {/* <Jazzicon address={NFT.owner} /> */}
                </>
              )}
            </div>
            <Link
              className="text-reset"
              to={`/assets/${NFT.name}/${NFT.Blockchain}`}
            >
              <p
                className="fw-bold mb-0 w-100 px-2 cursor-pointer text-white text-md"
                // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
              >
                {NFT.name}
              </p>
            </Link>
            {/* <span className="icon bg-primary text-white me-1">
                <i className
                ="las la-check-double"></i>
              </span> */}
            {/* <div className="Blockchain">
              <div className="inner_blockchain">
                {NFT.Blockchain == "Binance" ? (
                  <SiBinance className="fa-brands fa-ethereum" />
                ) : NFT.Blockchain === "Ethereum" ? (
                  <FaEthereum />
                ) : (
                  <>
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "18px", height: "20px" }}
                    >
                      <path
                        d="M16.5828 8.90039C16.2516 8.70599 15.8196 8.70599 15.4524 8.90039L12.8604 10.4016L11.1 11.3808L8.508 12.882C8.1768 13.0764 7.7448 13.0764 7.3776 12.882L5.3184 11.7084C4.9872 11.514 4.7532 11.154 4.7532 10.7616V8.44679C4.7532 8.05439 4.9512 7.69799 5.3184 7.49999L7.3452 6.35879C7.6764 6.16439 8.1084 6.16439 8.4756 6.35879L10.5024 7.49999C10.8336 7.69439 11.0676 8.05439 11.0676 8.44679V9.94799L12.828 8.93639V7.43519C12.828 7.04279 12.63 6.68639 12.2628 6.48839L8.5116 4.33559C8.1804 4.14119 7.7484 4.14119 7.3812 4.33559L3.5652 6.48839C3.198 6.68279 3 7.04279 3 7.43519V11.7732C3 12.1656 3.198 12.522 3.5652 12.72L7.3848 14.8728C7.716 15.0672 8.148 15.0672 8.5152 14.8728L11.1072 13.404L12.8676 12.3924L15.4596 10.9236C15.7908 10.7292 16.2228 10.7292 16.59 10.9236L18.6168 12.0648C18.948 12.2592 19.182 12.6192 19.182 13.0116V15.3264C19.182 15.7188 18.984 16.0752 18.6168 16.2732L16.59 17.4468C16.2588 17.6412 15.8268 17.6412 15.4596 17.4468L13.4328 16.3056C13.1016 16.1112 12.8676 15.7512 12.8676 15.3588V13.8576L11.1072 14.8692V16.3704C11.1072 16.7628 11.3052 17.1192 11.6724 17.3172L15.492 19.47C15.8232 19.6644 16.2552 19.6644 16.6224 19.47L20.442 17.3172C20.7732 17.1228 21.0072 16.7628 21.0072 16.3704V12.0324C21.0072 11.64 20.8092 11.2836 20.442 11.0856L16.5828 8.90039Z"
                        fill="white"
                      ></path>
                    </svg>
                  </>
                )}
              </div>
            </div> */}
            <div
              className="favroute ms-auto"
              onClick={() =>
                favrouteName != NFT.name
                  ? (setIsFavorite(!IsFavorite), Add_to_favorite())
                  : update_Favorite()
              }
            >
              <div className="inner_blockchain">
                <div className="like_hrt">
                  {favrouteName == NFT.name ? (
                    <>
                      {" "}
                      <MdFavorite style={{ color: "red" }} />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <MdFavoriteBorder style={{ color: "#f00" }} />
                    </>
                  )}
                  {/* < { IsFavorite ? MdFavorite :MdFavoriteBorder}   style={{color:"red"}} /> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-img-holder rounded overflow-hidden cursor-pointer "
            // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
          >
            {NFT?.sold?.startsWith("image") ? (
              <>
                {" "}
                <Link
                  className="text-reset"
                  to={`/assets/${NFT.name}/${NFT.Blockchain}`}
                >
                  <img
                    className="img-fluid rounded w-100"
                    style={{ height: "300px", width: "100%" }}
                    src={NFT.url}
                    alt={title}
                    target="_blank"
                    // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
                  />
                </Link>
              </>
            ) : NFT?.sold?.startsWith("video") ? (
              <>
                <div ref={vidButtonRef} class="c-mm">
                  <details>
                    <summary class="c-mm__play" style={{ top: "11rem" }}>
                      <span data-css-icon="play" onClick={handleToggleVideo}>
                        <i></i>
                      </span>
                    </summary>
                    <span hidden></span>
                  </details>

                  <Link
                    className="text-reset"
                    to={`/assets/${NFT.name}/${NFT.Blockchain}`}
                  >
                    <video
                      src={NFT.url}
                      ref={vidRef}
                      loop
                      width="100%"
                      style={{ height: "20rem" }}
                    ></video>
                  </Link>
                </div>
              </>
            ) : NFT?.sold == "true" ? (
              <>
                <Link
                  className="text-reset"
                  to={`/assets/${NFT.name}/${NFT.Blockchain}`}
                >
                  <img
                    className="img-fluid rounded w-100"
                    style={{ height: "300px", width: "100%" }}
                    src={NFT.url}
                    alt={title}
                    // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
                  />
                </Link>
              </>
            ) : NFT?.sold?.startsWith("audio") ? (
              <>
                {/* <audio controls={true} loop muted={true}
                      autoPlay={true} className="audio-element" src={NFT.url} /> */}
                <div ref={vidButtonRef} class="c-mm">
                  <details>
                    <summary class="c-mm__play" onClick={handleToggleVideo}>
                      <span data-css-icon="play">
                        <i></i>
                      </span>
                    </summary>
                    <span hidden></span>
                  </details>
                  <Link
                    className="text-reset"
                    to={`/assets/${NFT.name}/${NFT.Blockchain}`}
                  >
                    <div
                      class="c-mm__inner"
                      style={{ position: "relative" }}
                      // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
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
                        class="c-mm__frame"
                      ></figure>
                    </div>
                  </Link>
                  <audio src={NFT.url} ref={vidRef} loop></audio>
                </div>
              </>
            ) : (
              <>
                <Link
                  className="text-reset"
                  to={`/assets/${NFT.name}/${NFT.Blockchain}`}
                >
                  <img
                    className="img-fluid rounded w-100"
                    style={{ height: "300px", width: "100%" }}
                    src={NFT.url}
                    alt={title}
                    // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
                  />
                </Link>
              </>
            )}
          </div>
          {/* </div> */}
          <div className="d-flex">
            <div className="Blockchain">
              <div className="inner_blockchain">
                {NFT.Blockchain == "Binance" ? (
                  <SiBinance className="fa-brands fa-ethereum" />
                ) : NFT.Blockchain === "Ethereum" ? (
                  <FaEthereum />
                ) : (
                  <>
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "18px", height: "20px" }}
                    >
                      <path
                        d="M16.5828 8.90039C16.2516 8.70599 15.8196 8.70599 15.4524 8.90039L12.8604 10.4016L11.1 11.3808L8.508 12.882C8.1768 13.0764 7.7448 13.0764 7.3776 12.882L5.3184 11.7084C4.9872 11.514 4.7532 11.154 4.7532 10.7616V8.44679C4.7532 8.05439 4.9512 7.69799 5.3184 7.49999L7.3452 6.35879C7.6764 6.16439 8.1084 6.16439 8.4756 6.35879L10.5024 7.49999C10.8336 7.69439 11.0676 8.05439 11.0676 8.44679V9.94799L12.828 8.93639V7.43519C12.828 7.04279 12.63 6.68639 12.2628 6.48839L8.5116 4.33559C8.1804 4.14119 7.7484 4.14119 7.3812 4.33559L3.5652 6.48839C3.198 6.68279 3 7.04279 3 7.43519V11.7732C3 12.1656 3.198 12.522 3.5652 12.72L7.3848 14.8728C7.716 15.0672 8.148 15.0672 8.5152 14.8728L11.1072 13.404L12.8676 12.3924L15.4596 10.9236C15.7908 10.7292 16.2228 10.7292 16.59 10.9236L18.6168 12.0648C18.948 12.2592 19.182 12.6192 19.182 13.0116V15.3264C19.182 15.7188 18.984 16.0752 18.6168 16.2732L16.59 17.4468C16.2588 17.6412 15.8268 17.6412 15.4596 17.4468L13.4328 16.3056C13.1016 16.1112 12.8676 15.7512 12.8676 15.3588V13.8576L11.1072 14.8692V16.3704C11.1072 16.7628 11.3052 17.1192 11.6724 17.3172L15.492 19.47C15.8232 19.6644 16.2552 19.6644 16.6224 19.47L20.442 17.3172C20.7732 17.1228 21.0072 16.7628 21.0072 16.3704V12.0324C21.0072 11.64 20.8092 11.2836 20.442 11.0856L16.5828 8.90039Z"
                        fill="white"
                      ></path>
                    </svg>
                  </>
                )}
              </div>
            </div>
            <div
              className="favroute d-none"
              onClick={() =>
                favrouteName != NFT.name
                  ? (setIsFavorite(!IsFavorite), Add_to_favorite())
                  : update_Favorite()
              }
            >
              <div className="inner_blockchain">
                <div className="like_hrt">
                  {favrouteName == NFT.name ? (
                    <>
                      {" "}
                      <MdFavorite style={{ color: "red" }} />{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <MdFavoriteBorder />
                    </>
                  )}
                  {/* < { IsFavorite ? MdFavorite :MdFavoriteBorder}   style={{color:"red"}} /> */}
                </div>
              </div>
            </div>
          </div>

          {/* <Link
            className="text-reset"
            to={`/assets/${NFT.name}/${NFT.Blockchain}`}
          >
            <p
              className="fw-bold mb-3 cursor-pointer text-muted"
              // onClick={() => (history.push(`/assets/${NFT.name}/${NFT.Blockchain}`, { state: NFT }))}
            >
              {NFT.name}
            </p>
          </Link> */}

          <div class="continer mb-2">
            <div class="row mx-0 my-1">
              <div class="col-7 px-0">
                <NftCategory category={NFT.category} />
              </div>
              {NFT.price == "01000000000000000" ? (
                <div class="col-5 px-0 text-end">
                  <span className="nft-text-mini">Chain</span>
                </div>
              ) : (
                <div class="col-5 px-0 text-end">
                  <span className="nft-text-mini">Current Price </span>
                </div>
              )}
              {/* <div class="col-5 px-0 text-end">
                <span className="nft-text-mini">Current Price </span>
              </div> */}
            </div>

            <div class="row mx-0">
              <div class="col-7 px-0">
                <p className="nft-text-mini d-flex align-items-center m-0">
                  <span className="nft-icons-mini">
                    <i className="las la-clock"></i>
                  </span>
                  <span className="ms-1 nft-text-mini">
                    Created {formatDate(NFT.edate)} ago
                  </span>
                </p>
              </div>
              <div class="col-5 px-0">
                <p className="d-flex align-items-center justify-content-end m-0">
                  <span className="nft-icons-mini me-1">
                    {NFT.Blockchain === "Binance" ? (
                      <SiBinance className="fa-brands fa-ethereum" />
                    ) : NFT.Blockchain === "Ethereum" ? (
                      <FaEthereum />
                    ) : (
                      <>
                        <svg
                          fill="white"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "18px", height: "20px" }}
                        >
                          <path
                            d="M16.5828 8.90039C16.2516 8.70599 15.8196 8.70599 15.4524 8.90039L12.8604 10.4016L11.1 11.3808L8.508 12.882C8.1768 13.0764 7.7448 13.0764 7.3776 12.882L5.3184 11.7084C4.9872 11.514 4.7532 11.154 4.7532 10.7616V8.44679C4.7532 8.05439 4.9512 7.69799 5.3184 7.49999L7.3452 6.35879C7.6764 6.16439 8.1084 6.16439 8.4756 6.35879L10.5024 7.49999C10.8336 7.69439 11.0676 8.05439 11.0676 8.44679V9.94799L12.828 8.93639V7.43519C12.828 7.04279 12.63 6.68639 12.2628 6.48839L8.5116 4.33559C8.1804 4.14119 7.7484 4.14119 7.3812 4.33559L3.5652 6.48839C3.198 6.68279 3 7.04279 3 7.43519V11.7732C3 12.1656 3.198 12.522 3.5652 12.72L7.3848 14.8728C7.716 15.0672 8.148 15.0672 8.5152 14.8728L11.1072 13.404L12.8676 12.3924L15.4596 10.9236C15.7908 10.7292 16.2228 10.7292 16.59 10.9236L18.6168 12.0648C18.948 12.2592 19.182 12.6192 19.182 13.0116V15.3264C19.182 15.7188 18.984 16.0752 18.6168 16.2732L16.59 17.4468C16.2588 17.6412 15.8268 17.6412 15.4596 17.4468L13.4328 16.3056C13.1016 16.1112 12.8676 15.7512 12.8676 15.3588V13.8576L11.1072 14.8692V16.3704C11.1072 16.7628 11.3052 17.1192 11.6724 17.3172L15.492 19.47C15.8232 19.6644 16.2552 19.6644 16.6224 19.47L20.442 17.3172C20.7732 17.1228 21.0072 16.7628 21.0072 16.3704V12.0324C21.0072 11.64 20.8092 11.2836 20.442 11.0856L16.5828 8.90039Z"
                            fill="white"
                          ></path>
                        </svg>
                      </>
                    )}
                  </span>
                  {NFT.price !== "01000000000000000" && (
                    <>
                      <span className="nft-text-mini me-1">{NFT.price}</span>
                      <span className="nft-text-mini">
                        {NFT.Blockchain == "Binance"
                          ? "BNB"
                          : NFT.Blockchain === "Ethereum"
                          ? "ETH"
                          : "MATIC"}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* <p className="text-sm text-muted fw-normal mb-2 d-flex align-items-center mt-2">
            {NFT.price !== "01000000000000000" && (
              <>
                <span className="icon bg-primary text-white me-2">
                  <i className="lab la-ethereum fa-fw"></i>
                </span>
                <span>Price: </span>
                <span className="text-primary ms-2">{NFT.price}</span>
                <span className="ms-2">
                  {NFT.Blockchain == "Binance"
                    ? "BNB"
                    : NFT.Blockchain === "Ethereum"
                    ? "ETH"
                    : "MATIC"}
                </span>
              </>
            )}
          </p> */}

          {NFT.price == "01000000000000000" ? (
            <>
              <p
                className="mb-0 text-center mx-3"
                style={{
                  backgroundColor: "#090E2D",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "7px 10px",
                  borderRadius: "8px",
                  border: "1px solid #0F1953",
                  boxShadow: "0 0 10px 5px #2c1cb5",
                }}
              >
                Item owner hasn't put an offer yet
              </p>
            </>
          ) : (
            <>
              {NFT.owner?.toUpperCase() == address?.toUpperCase() ? (
                <>
                  <button
                    type="button"
                    value={nftKey}
                    className="btn btn-danger w-100 rounded-pill"
                    style={{ boxShadow: "0px 0px 10px 5px #e9191977" }}
                    onClick={(e) => cancelHandler(e, NFT.Blockchain)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    value={nftKey}
                    className="btn-buynow w-100"
                    style={{ boxShadow: "0px 0px 10px 5px #4659CF77" }}
                    onClick={(e) => buyHandler(e, NFT.tokenId, NFT.Blockchain)}
                  >
                    BUY NFT
                  </button>
                </>
              )}
            </>
          )}
          {/* <div className="my-3 pt-1 bg-body rounded-pill"></div>
          <p className="text-muted fw-normal mb-0 text-sm d-flex align-items-center">
            <i className="la-sm text-primary las la-clock mx-1 mt-1 text-primary"></i>
            Created
            <span className="text-primary mx-2">
              {formatDate(NFT.edate)}
            </span>{" "}
            ago
          </p> */}
        </div>
      </div>
    </>
  );
}

export default NftItem;
