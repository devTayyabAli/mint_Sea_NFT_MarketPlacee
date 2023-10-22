import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketplaceContext from './store/marketplace-context';

// COMPONENTS
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import ScrollTopButton from './components/general/ScrollTopButton';
import NotFound from './components/general/NotFound';

// PAGES
import Home from './components/Home';
import Contact from './components/Contact';
import CreateItem from './components/CreateItem';
import Explore from './components/Explore';
import Authors from './components/Authors';
import MyAssets from './components/MyAssets';
import NoMetaMaskAlert from './components/general/NoMetaMaskAlert';
import NoContractAlert from './components/general/NoContractAlert';
import ScrollToTop from './components/general/ScrollToTop';

import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermOfService from './components/TermOfService';
import Docs from './components/Docs';
import Web3 from "web3";
import HowToCreateAnNFTOnMintSea from "./components/Docs/HowToCreateAnNFTOnMintSea";
import HowToListAnNFTForSaleUsingMintSea from "./components/Docs/HowToListAnNFTForSaleUsingMintSea";
import HowToBuyAnNFTOnMintSea from "./components/Docs/HowToBuyAnNFTOnMintSea";
import HowToClaimFundsOnMintSea from "./components/Docs/HowToClaimFundsOnMintSea";
import WhatIsAnNFT from "./components/Docs/WhatIsAnNFT";
import WhatIsWeb3 from "./components/Docs/WhatIsWeb3";
import WhatIsCryptocurrency from "./components/Docs/WhatIsCryptocurrency";
import WhatIsACryptoWallet from "./components/Docs/WhatIsACryptoWallet";
import WhatIsABlockchain from "./components/Docs/WhatIsABlockchain";
import WhatAreBlockchainGasFees from "./components/Docs/WhatAreBlockchainGasFees";

// Main Style
import './App.css';
import Search from './components/Search';
import ItemSingle from './components/ItemSingle';
import Category from './components/Category';
import useWeb3 from './components/Components/useWeb3';
import toast, { Toaster } from 'react-hot-toast';
import User_Registration from './Auth/User_Registration';
import Edit_User_Profile from './Auth/Edit_User_Profile';
import { Contract_Addresss, nftMarketContractAddress, nftMarketContractAddress_Abi } from './Utils/Contract';
import { useDispatch, useSelector } from 'react-redux';
import { LoadOffers, get_UserProfile } from './Redux/Load_offers';
import { useAccount, useChainId } from 'wagmi';
import axios from 'axios';
import Favorite from './components/Components/Favorite/Favorite';
import { getLoarem } from './Redux/GetNFTs';
import { getTranding } from './Redux/tranding_NFTs';
import io from 'socket.io-client';
import { Contract, ethers } from 'ethers';
const socket = io('https://sanjhavehra.womenempowerment.online/');


function App() {
    const [noMetaMask, setNoMetaMask] = useState(false);
    const [noContract, setNoContract] = useState(false);
    const marketplaceCtx = useContext(MarketplaceContext);
    const [networkType, setNetworkType] = useState(null);
    const [topSellers, setTopSellers] = useState([]);
    const { setFilter_ShowData,web3,walletAddress,setSpinner,setShowData } = useWeb3();
    let Category_All = useSelector((state) => state.Offers.Category)
    const { address } = useAccount();
    const chainId = useChainId();
    const dispatch = useDispatch()
    const [userFunds_ClaimAble, setUserFunds_ClaimAble] = useState(0)


    useEffect(() => {
        if (marketplaceCtx.sellers) {
            const sellersAddress = marketplaceCtx.sellers['0'];
            const sellersEth = marketplaceCtx.sellers['1'];

            let values = [];
            for (let i = 0; i < sellersAddress.length; i++) {
                values.push({
                    address: sellersAddress[i],
                    value: parseInt(sellersEth[i]),
                });
            }
            var calcTopSellers = [];
            values.forEach(function (item) {
                var existing = calcTopSellers.filter(function (v, i) {
                    return v.address === item.address;
                });
                if (existing.length) {
                    var existingIndex = calcTopSellers.indexOf(existing[0]);
                    calcTopSellers[existingIndex].value = calcTopSellers[existingIndex].value.concat(item.value);
                } else {
                    if (typeof item.value === 'number') item.value = [item.value];
                    calcTopSellers.push(item);
                }
            });

            setTopSellers(
                calcTopSellers.map((seller) => {
                    return { address: seller.address, value: seller.value.reduce((a, b) => a + b, 0) };
                })
            );
        }
    }, [marketplaceCtx.sellers]);

    useEffect(() => {
        const getCahinId = async () => {
            if (walletAddress) {
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    // await window.ethereum.enable();
                    await window.web3.eth.getChainId((err, netId) => {
                        console.log("netId", netId);
                        if (netId == 97 || netId == 11155111 || netId == 80001) {
                            setNoContract(false)
                        } else {
                            setNoContract(true)
                        }
                    }
                    )
                }
            }
        }
        getCahinId()
        const loadBlockchainData = async () => {
            try {

                if (walletAddress) {
                    let Offers_Array = []
                    let nftMarketContractOf = new web3.eth.Contract(
                        nftMarketContractAddress_Abi,
                        nftMarketContractAddress
                    );
                    let OfferCount = await nftMarketContractOf.methods.offerCount().call()
                    for (let i = 1; i <= OfferCount; i++) {
                        let Offer = await nftMarketContractOf.methods.offers(i).call()
                        Offers_Array = [...Offers_Array, Offer]

                    }
                    dispatch(LoadOffers(Offers_Array))
                }
            } catch (error) {
                console.log(error);
            }

        }
        loadBlockchainData()
    }, [walletAddress]);
    const fetchData = async () => {
        if (address) {
            let res = await axios.get(
                `https://sanjhavehra.womenempowerment.online/get_user_profile?address=${address?.toUpperCase()}`
            );

            if (res?.data.success == false) {
                // history("/Create_User_profile");
            } else {
                // console.log("get_user_profile", res);
                dispatch(get_UserProfile(res?.data?.data))
            }
        }
    };
    useEffect(() => {
        const getAllNFts = async () => {
            try {
                setSpinner(true)
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=All`
                );
                setShowData(res.data.data)
                setSpinner(false)

                // console.log("UU", res);

            } catch (error) {
                console.log(error);
                setSpinner(false)

            }
        }
       
        getAllNFts()
        fetchData()
        dispatch(getLoarem("All"))
        dispatch(getTranding())
    }, [address])


    useEffect(() => {
        const getAllNFts = async () => {
            try {
                setSpinner(true)
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=${Category_All}`
                );
                setFilter_ShowData(res?.data?.data)
                setSpinner(false)

                // console.log("UU", res);

            } catch (error) {
                console.log(error);
                setSpinner(false)

            }
        }
        getAllNFts()
    }, [Category_All])
    useEffect(() => {
        socket.on("updateNFT", (uNFT) => {
            dispatch(getLoarem("All"))
        })
        socket.on("TrandingListiner", (uNFT) => {
            dispatch(getTranding())
        }) 
         socket.on("ProfileListiner", (uNFT) => {
            fetchData()
        })
        fetchData()

    },[address])

    useEffect(() => {
        const claim_Able = async () => {
            try {
                let provider = new ethers.providers.Web3Provider(window.ethereum);
                let signer = provider.getSigner()
                let contract = null
                if (chainId == 97) {
                    contract = new Contract(Contract_Addresss[0].nftMarketContractAddress, Contract_Addresss[0].nftMarketContractAddress_Abi, signer);
                } else if (chainId == 11155111) {
                    contract = new Contract(Contract_Addresss[1].nftMarketContractAddress, Contract_Addresss[1].nftMarketContractAddress_Abi, signer);
                } else {
                    contract = new Contract(Contract_Addresss[2].nftMarketContractAddress, Contract_Addresss[2].nftMarketContractAddress_Abi, signer);
                }
                const tx = await contract.userFunds(address)
                let Claim_Amount = parseInt(tx).toString()
                // Claim_Amount = webSupply.utils.fromWei(Claim_Amount.toString())
                Claim_Amount = Claim_Amount / 1000000000000000000
                // console.log("claim_Able", Claim_Amount);
                setUserFunds_ClaimAble(Claim_Amount)

            } catch (error) {
                console.log(error);
            }
        }
        if (address) {
            socket.on("updateNFT", (uNFT) => {
                claim_Able()
             
            })
            socket.on("TrandingListiner", (uNFT) => {
                claim_Able()
                
            })
            socket.on("ProfileListiner", (uNFT) => {
                claim_Able()
                

            })

            claim_Able()
            // return clearInterval(intveral)
        }

    },[address,chainId]);

    return (
        <div className='container-xxxl'>
            <BrowserRouter>
                <Toaster />
                {noMetaMask && <NoMetaMaskAlert />}
                {!noContract && <Header userFunds_ClaimAble={userFunds_ClaimAble} setUserFunds_ClaimAble={setUserFunds_ClaimAble} />}
                {noContract ? <NoContractAlert network={networkType} /> : null}
                <ScrollToTop>
                    <Switch>
                        <Route path='/' exact>
                            <Home topSellers={topSellers} />
                            <ScrollTopButton />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/mint'>
                            <CreateItem />
                        </Route>
                        <Route path='/explore'>
                            <Explore />
                        </Route>
                        <Route path='/assets/:id/:chainid'>
                            <ItemSingle />
                        </Route>
                        <Route path='/categories/:category'>
                            <Category />
                        </Route>
                        <Route path='/my-assets'>
                            <MyAssets />
                        </Route>
                        <Route path='/search'>
                            <Search />
                        </Route>
                        <Route path='/authors'>
                            <Authors sellers={topSellers} />
                        </Route>
                        <Route path='/about-us'>
                            <About />
                        </Route>
                        <Route path='/privacy-policy'>
                            <PrivacyPolicy />
                        </Route>
                        <Route path='/terms-of-service'>
                            <TermOfService />
                        </Route>
                        <Route path='/docs/how_to_create_an_nft_on_mintsea'>
                            <HowToCreateAnNFTOnMintSea />
                        </Route>
                        <Route path='/docs/how_to_list_an_nft_for_sale_using_mintsea'>
                            <HowToListAnNFTForSaleUsingMintSea />
                        </Route>
                        <Route path='/docs/how_to_buy_an_nft_on_mintsea'>
                            <HowToBuyAnNFTOnMintSea />
                        </Route>
                        <Route path='/docs/how_to_claim_funds_on_mintsea'>
                            <HowToClaimFundsOnMintSea />
                        </Route>
                        <Route path='/docs/what_is_an_nft'>
                            <WhatIsAnNFT />
                        </Route>

                        <Route path='/docs/what_is_an_nft'>
                            <WhatIsAnNFT />
                        </Route>
                        <Route path='/docs/what_is_a_crypto_wallet'>
                            <WhatIsACryptoWallet />
                        </Route>
                        <Route path='/docs/what_is_cryptocurrency'>
                            <WhatIsCryptocurrency />
                        </Route>
                        <Route path='/docs/what_are_blockchain_gas_fees'>
                            <WhatAreBlockchainGasFees />
                        </Route>
                        <Route path='/docs/what_is_a_blockchain'>
                            <WhatIsABlockchain />
                        </Route>
                        <Route path='/Favorite'>
                            <Favorite />
                        </Route>
                        <Route path='/docs/what_is_web3'>
                            <WhatIsWeb3 />
                        </Route>
                        <Route path='/User_Collection'>
                            <User_Registration />
                        </Route>

                        <Route path='/User_Profile'>
                            <Edit_User_Profile />
                        </Route>

                        <Route path='/docs'>
                            <Docs />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </ScrollToTop>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
