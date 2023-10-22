import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const HowToListAnNFTForSaleUsingMintSea = () => {
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
   
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);

// useEffect(() => {
//   document.getElementById("root").classList.add("bg-docs");
//   return () => {
//       // console.log('clear...')
//       document.getElementById("root").classList.remove("bg-docs");
//   };
// }, []);

  return (
    <>
      {/* <section className='py-5 bg-dark position-relative'>
      <Particles  init={particlesInit}
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
      <DocsBanner heading={"How to list an NFT for sale using Mint-Sea?"} />

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
                    <h2 class="h5 mb-0 ms-3">How to list an NFT for sale using Mint-Sea?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}
                    <p class="text-md mb-3">Selling an NFT using Mint-Sea is simple and user-friendly. Anyone who owns an NFT can list it for sale, whether that’s the creator of the NFT or the person who most recently collected it. Creators and collectors have two main ways to sell using MintSea: via fixed-price sale and in a timed auction.  You can also sell NFTs in bundles. Buyers pay gas fees when purchasing a fixed-price item, sellers pay gas fees when accepting offers in an auction, and MintSea receives 2.5% of the sale price of your NFT.</p>

                    <p class="text-md mb-3 fw-bold">What is an NFT?</p>
                    <p class="text-md mb-3">Non-fungible tokens (NFTs) are digital assets that can represent nearly anything and act as a digital record of ownership. To sell an NFT through MintSea, you need a MintSea account, a crypto wallet, and something cool to sell. The NFT will include two components: a piece of media and what it represents. Examples include 3D digital art, interactive media, or a picture of a card representing membership in an exclusive club.</p>

                    <p class="text-md mb-3 fw-bold">Who can sell an NFT?</p>
                    <p class="text-md mb-3">Selling NFTs isn’t just for the people who create them. An NFT can also be sold by the collector who bought or received it from the original creator, or the collector who bought or received it from the previous collector, and so on and so on. Whoever currently owns the NFT can sell it.</p>

                    <p class="text-md mb-3 fw-bold">What are the different processes for selling NFTs using Mint-Sea?</p>
                    <p class="text-md mb-3">There are a few methods you can use to sell your NFTs using Mint-Sea. You can sell your NFT for a fixed price and allow buyers to purchase it outright, or you can list it for auction. Fixed price sales allow sellers to define exactly how much they want to sell the item for, and auctions provide sellers with the potential for a higher selling price based on how the market perceives your NFT. Think of it like any other auction: there is risk and reward associated with letting your bidders define the price of an item.</p>

                    <p class="text-md mb-3 fw-bold">Which Mint-Sea-compatible chains now support auctions?</p>
                    <p class="text-md mb-3">Currently, Ethereum, Polygon, and Arbitrum all support auctions.</p>
                    
                    <p class="text-md mb-3 fw-bold">Who chooses which payment tokens can be used to acquire an NFT?</p>
                    <p class="text-md mb-3">When a creator makes a collection on Mint-Sea, they decide which payment tokens can be used when selling items in that collection. On future sales (after the initial creator’s sale), the new seller can decide which of the creator-chosen tokens to list their NFT in. The buyer must use the token dictated by the seller when purchasing that NFT, or they can submit an offer in WETH.</p>

                    <p class="text-md mb-3 fw-bold">What is a bundle?</p>
                    <p class="text-md mb-3">You can also sell your NFTs in a bundle. Bundles allow sellers to group several items for sale at a single price. They’re often used for gaming, music, and photography.</p>

                    <p class="text-md mb-3 fw-bold">Can someone make an offer on an NFT that’s not for sale?</p>
                    <p class="text-md mb-3">Yes! Buyers can bid on NFTs even if they aren’t for sale, and sellers can choose to accept or ignore them. If you have your email connected to your Mint-Sea account, you’ll get an email notification that someone has made an offer on your item.</p>

                    <p class="text-md mb-3 fw-bold">How do I list an NFT for sale using Mint-Sea?</p>
                    <p class="text-md mb-3">On MintSea, navigate to the top right of the page and click your Profile icon. Select the NFT you would like to sell from your wallet.</p>
                    <p class="text-md mb-3">On the top right of the item page, click Sell.</p>
                    <p class="text-md mb-3">Choose the type of sale and the price. In a Fixed Price sale, the seller establishes the NFT price.</p>
                    <p class="text-md mb-3">Set a duration for the sale by choosing a default duration or setting a custom duration using the calendar.</p>
                    <p class="text-md mb-3">Lastly, you can choose to reserve the item for a specific buyer. To do so, open the More Options section and enter their wallet address into the Reserve for specific buyer field.</p>
                    <p class="text-md mb-3">In all those options, you’ll see the potential fees from the sale listed at the bottom.</p>

                    <p class="text-md mb-3 fw-bold">What are the costs of selling NFTs through Mint-Sea?</p>
                    <p class="text-md mb-3">Any transaction, including sales, typically includes gas fees and a marketplace fee. Some transactions may also include creator earnings. Sellers pay gas fees when accepting offers. MintSea’s fees are simple and straightforward: Mint-Sea receives 2.5% of the sale price of your NFT.</p>

                    <p class="text-md mb-3 fw-bold">Why should I sell my NFTs using Mint-Sea?</p>
                    <p class="text-md mb-3">At Mint-Sea, we offer a variety of ways to keep costs to a minimum while selling your NFTs. The new protocol for buying and selling NFTs using Mint-Sea significantly lowers gas fees. You can save an estimated 35% in gas fees for transactions using Seaport. It also eliminates the one-time setup fee to use our marketplace. And because Mint-Sea is compatible with Ethereum, Polygon, Klaytn, Arbitrum, Optimism, Avalanche, and BNB Chain, you have 7 blockchains with varying gas fees to choose from. Mint-Sea is proud to continue to offer users the best NFT buying and selling experience in web3.</p>
                    
                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">How should I price my NFTs?</p>
                    <p class="text-md mb-3">Before you set the fixed price or auction of your NFTs, research other similar projects to see what their floor prices are, connect with your community online, get a sense of the appetite for what you’re selling, and use other analytics tools to help guide you to finding the right price. Mint-Sea will also prompt you via pop-up asking you to confirm if you create a listing far below the floor price. This can help you catch any misplaced decimals or an extra 0 you might have missed!</p>

                    <p class="text-md mb-3 fw-bold">What can I sell as an NFT?</p>
                    <p class="text-md mb-3">Almost anything! An NFT is a digital representation of something, whether that something is intellectual property, membership to a group or club, artwork that represents access to the metaverse, or something else!</p>
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

export default HowToListAnNFTForSaleUsingMintSea