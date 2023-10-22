import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const HowToCreateAnNFTOnMintSea = () => {
    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);
    // useEffect(() => {
    //     document.getElementById("root").classList.add("bg-docs");
    //     return () => {
    //         // console.log('clear...')
    //         document.getElementById("root").classList.remove("bg-docs");
    //     };
    // }, []);

  return (
    <>
            {/* <section className='py-5 bg-dark position-relative'>
            <Particles  init={particlesInit}s
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
                <div className="container py-5 mt-5 z-index-20">
                    <div className="row">
                        <div className="col-lg-6 text-center mx-auto">
                            <h1>Docs</h1>
                        </div>
                    </div>
                    <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb justify-content-center'>
                            <li className='breadcrumb-item'>
                                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                    {' '}
                                    <i className='las la-home la-sm me-1'></i>Home
                                </Link>
                            </li>
                            <li className='breadcrumb-item active' aria-current='page'>
                                Docs
                            </li>
                        </ol>
                    </nav>
                </div>
            </section> */}
            <DocsBanner heading={"How to Buy an NFT On The Mint-Sea111"} />

            <section className='py-5'>
                <div className='container py-5'>
                    <div className='row g-4'>

                        <DocsQuestions />

                        <div className='col-lg-8'>
                            <div class="card" style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                                <div class="card-body py-4 py-lg-5 px-4 px-lg-5">
                                    <div class="d-flex align-items-center mb-4">
                                        {/* <div class="icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white"> */}
                                            <i class="las la-question" style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                                        {/* </div> */}
                                        <h2 class="h5 mb-0 ms-3">How to Buy an NFT On The Mint-Sea?</h2>
                                    </div>

                                    <div className='mb-4 text-white'>
                                        {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}
                                        <p class="text-md mb-3">In order to buy an NFT, you'll need a crypto wallet and cryptocurrency. Using Mint-Sea, you can buy items listed for sale instantly..</p>

                                        <p class="text-md mb-3 fw-bold">What do you need in order to buy an NFT??</p>
                                        <p class="text-md mb-3">To purchase NFTs, you must first create a crypto wallet. A crypto wallet is a software application that holds your NFTs and cryptocurrency. Not all wallets support all blockchains or store NFTs, so check sure your wallet is suitable. </p>

                                        <ul className="text-md">
                                            {/* <p class="text-md mb-3 fw-bold">Metamask (Ethereum, Polygon, and Binance)</p> */}
                                            <li class= "text-md mb-3 fw-bold">→ Metamask (Ethereum, Polygon, and Binance)</li>
                                            {/* <p class="text-md mb-3 fw-bold">Coinbase (Ethereum, Polygon, and Binance).</p> */}
                                            <li class= "text-md mb-3 fw-bold">→ Coinbase (Ethereum, Polygon, and Binance).</li>
                                        </ul>
                                        <p class="text-md mb-3">NFT purchases take place in Bitcoin, while many NFTs on Mint-Sea can be purchased with a Cryptocurrency. There will be more on this later.</p>

                                        <p class="text-md mb-3 fw-bold">Where to buy NFTs</p>
                                        <p class="text-md mb-3">NFTs can be purchased in two ways: on separate project websites or on NFT marketplaces.</p>
                                        <p class="text-md mb-3">Projects will occasionally create their own websites to sell their NFTs. This is often for a project's "mint" (the very first sale, when the NFT is written to the blockchain), while some projects, such as Coachella and Larva Labs, have their own autonomous marketplaces. When you purchase from a project website, you may usually resell your NFT on other NFT marketplaces</p>
                                        <p class="text-md mb-3">NFT markets will occasionally support primary sales or mints, although they are primarily responsible for secondary sales. Marketplaces differ in terms of the blockchains they support, their fee structure, the types of NFTs they specialize in, and other factors</p>


                                        <p class="text-md mb-3 fw-bold">How to find an NFT you like</p> 
                                        <p class="text-md mb-3 fw-bold">Twitter</p>
                                        <p class="text-md mb-3">Twitter is an excellent location to learn about new NFT projects because it hosts a lot of the debate about them. You can follow accounts, hashtags, and subjects that interest you. It's a terrific way to see not only what's now hot, but also what initiatives are coming up shortly.</p>

                                        <p class="text-md mb-3 fw-bold">Marketplaces</p>
                                        <p class="text-md mb-3">NFT marketplaces are yet another excellent source of NFTs. You can examine "Trending cards" search by category, and more on Mint-Sea.</p>

                                        
                                        <p class="text-md mb-3 fw-bold">How to buy an NFT</p>
                                        <p class="text-md mb-3">How do you buy an NFT if you've found one you like? Mint-Sea offers very easy way to purchase any nft just fill the offer and buy nft.</p>

                                        <p class="text-md mb-3 fw-bold">The purchase process: A step-by-step guide</p>
                                        <p class="text-md mb-3">Let's go over how to buy an NFT:</p>

                                        <p class="text-md mb-2"><b>1.</b> Link your cryptocurrency wallet</p>
                                        <p class="text-md mb-3 ms-4">If you haven't already connected and configured your cryptocurrency wallet, you will be requested to do so during this stage.</p>
                                        <p class="text-md mb-2"><b>2.</b> Select a payment method</p>
                                        <p class="text-md mb-3 ms-4">Following that, you'll be asked whether you want to pay with cryptocurrency. If you wish to buy with cryptocurrency, you must first load your wallet with cryptocurrency.</p>
                                        <p class="text-md mb-2"><b>3.</b> Review fees </p>
                                        <p class="text-md mb-3 ms-4">You may see that your total exceeds the advertised price for that NFT. This is due to network ("gas") expenses and, processing fees. The petrol cost is applied to all blockchain transactions, and the amount varies depending on a number of criteria, including how many users are currently using the network. These fees are not received by Mint-Sea.</p>


                                        <p class="text-md mb-2"><b>4.</b> Your purchase is now complete!</p>
                                        <p class="text-md mb-3 ms-4">Your NFT purchase is completely complete and has been written to the blockchain once you've completed all of the required information and selected "Pay." Congratulations on your purchase of an NFT!</p>

                                        <p class="text-md mb-2"><b>5.</b> Examine your most recent NFT</p>
                                        <p class="text-md mb-3 ms-4">Your brand-new NFT should be visible in your collection after a few seconds. Your new NFT will be visible in your Mint-Sea profile!</p>

                                        <h3 class="h5 my-4">FAQs</h3>

                                        <p class="text-md mb-3 fw-bold">Can I resell an NFT?</p>
                                        <p class="text-md mb-3">Yes! You can list an NFT you own for sale. </p>

                                        <p class="text-md mb-3 fw-bold">Why should I buy NFTs?</p>
                                        <p class="text-md mb-3">There are many reasons to buy an NFT that all depend on what the NFT is. You may like the art, want to support the creator, gain access to exclusive content or events, or find a community you identify with. </p>

                                        <p class="text-md mb-3 fw-bold">How can I know if an NFT is authentic?</p>
                                        <p class="text-md mb-3">Like any purchase, you want to make sure what you’re buying is authentic.Mint-Sea or a verified user created the project. You can also check if the collection is linked to an official Twitter account. Keep the golden rule in mind: if it seems too good to be true, it probably is!</p>

                                        {/* <p class="text-md mb-3">If you want to get into NFTs but don't know where to start, here are some decent places to look:</p> */}
                                        {/* <ul className="text-md text-muted"> */}
                                            {/* <li className='mb-2'>First, you’ll need to create an item.</li> */}
                                            <li className='mb-2'>First visit our Mint-sea.com website.</li>
                                            <li className='mb-2'>Once you’ve done that, click on the connect your deserved wallet.</li>
                                            <li className='mb-2'>Connect your deserve  Chain. Like Ethereum, Polygon, BNB'</li>
                                            <li className='mb-2' >Upload your NFT Give the name of your NFT and description of your NFT, select the category of your NFT, and select the chain.</li>
                                            <li className='mb-2' >After done these steps you hit the mint button so the transaction will be done. and you will get this message"Great! You've successfully minted your NFT" you can see your NFT on your collection page.</li>
                                            {/* <li className='mb-2'>Once you’ve done that, click on the Create Mint NFT Button  in the top right corner of the MintSea website Home page.</li> */}
                                            {/* <li className='mb-2'>Once clicked, you’ll be taken to the NFT item creation page where you can upload the file of your NFT and give it a name and a description.</li> */}
                                            {/* <li className='mb-2'>The NFT can be added to existing user collection.</li> */}
                                            {/* <li className='mb-2'>The most important details are the blockchain of the NFT, which can be either Ethereum or Polygon, BSC.</li> */}
                                        {/* </ul> */}

                                        {/* <h3 class="h5 my-4">FAQs</h3> */}

                                        {/* <p class="text-md mb-3 fw-bold">Why should I create my NFTs using Mint-Sea?</p> */}
                                        {/* <p class="text-md mb-3">Mint-Sea provides creators with an easy-to-use creative process to develop NFT that helps them stand out. They distribute their NFTs to the widest possible audience, making the creation and minting process simple and straightforward for creators.</p> */}

                                        {/* <p class="text-md mb-3 fw-bold">Is it possible for anything to be non-fungible but not an NFT?</p> */}
                                        {/* <p class="text-md mb-3">Yes! Non-fungible items are those that are unique and cannot be interchanged with another of the same type, such as an original work of art or clothing. They must be recorded on the blockchain, which is a transparent, unchangeable, and permanent online ledger that records transactions. This distinguishes an NFT from other NFTs by being both non-fungible and stored on the blockchain.</p> */}
                                        {/*  */}
                                        {/* <p class="text-md mb-3 fw-bold">Will we buy things like cars as NFTs on the blockchain in the future?</p> */}
                                        {/* <p class="text-md mb-3">Very likely, yes! Because NFTs are immutable (which means they’re unable to be changed) and offer sole ownership of an item, they’re a natural fit for purchases that need to be trackable like cars. For example, right now when buying a car, the owner received a paper title. In the future, we can see that being replaced by a smart contract on the blockchain. With a public record of ownership accessible to anyone, the owner can easily and clearly prove ownership of their car, transact with agencies like the DMV, and even sell their car later on.</p> */}

                                        {/* <p class="text-md mb-3 fw-bold">What makes some NFTs more expensive than others?</p> */}
                                        {/* <p class="text-md mb-3">The value of an NFT is subjective, however numerous factors come into play. The rarity of an NFT can raise its value in larger collections. NFTs with unique characteristics tend to be more valuable than their more common counterparts. An NFT created by a well-known inventor or artist will also increase in value. Another aspect that can influence value is utility. There are numerous other factors that can influence the price and resale value of an NFT.</p> */}

                                        {/* <p class="text-md mb-3 fw-bold"></p>
                                        <p class="text-md mb-3"></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
  )
}

export default HowToCreateAnNFTOnMintSea