import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';


const WhatAreBlockchainGasFees = () => {
//   const particlesInit = useCallback(async engine => {
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
      <DocsBanner heading={"What are blockchain gas fees?"} />

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
                    <h2 class="h5 mb-0 ms-3">What are blockchain gas fees?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}

                    <p class="text-md mb-3">The word "gas fee" in web3 refers to the money required to perform transactions on the blockchain. These payments are intended to repay the node operators who keep the blockchain running. This validation contributes to the blockchain having a permanent, unchangeable record.</p>
                    <p class="text-md mb-3">We'll go into the purpose of gas fees, what influences them, how to avoid paying large fees, how fees vary by blockchain, and how Mint-Sea makes it simple to keep expenses low. Let's get started.</p>

                    <p class="text-md mb-3 fw-bold">What is the purpose of gas fees?</p>
                    <p class="text-md mb-3">Gas is the fuel that allows Ethereum to operate, and fees are paid to node operators or network validators who validate blockchain transactions. The two primary methods of validation are Proof-of-Stake and Proof-of-Work, which are used to verify transactions;</p>
                    <p class="text-md mb-3 fw-bold ms-4">A. Proof-of-Stake</p>
                    <p class="text-md mb-3 ms-4">Validators are used by blockchains that use the Proof-of-Stake mechanism to verify transactions. Users who stake large amounts of the blockchain's cryptocurrency are known as validators. These validators validate each transaction and monitor all blockchain activity to guarantee it is correct. Validators vote on the outcome in this manner. </p>

                    <p class="text-md mb-3 fw-bold ms-4">B. Proof-of-Work</p>
                    <p class="text-md mb-3 ms-4">Miners are used to verify transactions on blockchains that use the Proof-of-Work mechanism. Miners must solve difficult arithmetic calculations to validate each transaction. Both of these methods are complex and time-consuming, but they ultimately ensure the security of the blockchain, which is why the operators are paid gas fees.</p>
                    
                    <p class="text-md mb-3 fw-bold">What impacts gas fees and how are they calculated?</p>
                    <p class="text-md mb-3">Gas fees increase when more people use blockchain-based applications, such as Uber's surge pricing model. These fees are incurred when data is stored, tokens are transferred, and NFTs are minted, sold, or purchased. They don't change the price of the NFT, but the overall price of the transaction, so buying an NFT during a busy time can result in an overall higher cost.</p>

                    <p class="text-md mb-3 fw-bold">How can you avoid high gas fees?</p>
                    <p class="text-md mb-3">Mint-Sea has no control over gas fees, does not determine them, and does not receive any of the gas fees spent by platform users. They all go to network validators or miners instead.</p>
                    <p class="text-md mb-3">To avoid paying large gas prices, attempt to make your transactions when there are fewer people on the network (for example, in the middle of the day when everyone is at work, or early in the morning). When you begin the NFT purchase process with Mint-Sea, your wallet provider will break down the gas fee, allowing you to watch the fee refresh and complete the transaction when it is low. </p>

                    {/* <p class="text-md mb-3 fw-bold">What is lazy minting and how does it affect gas fees?</p> */}
                    {/* <p class="text-md mb-3">Mint-Sea provides lazy minting, a method for creating and selling NFTs on the Ethereum or Polygon blockchains without incurring gas fees. The majority of Mint-Sea actions are free of charge, such as browsing, favoriting, lazy minting, making a collection, initializing an account, putting an additional NFT in a collection, and lowering the price of a listed NFT. Gas-required actions are often those recorded on the blockchain.</p> */}

                    <p class="text-md mb-3 fw-bold">‍How do gas fees differ by chain?</p>
                    <p class="text-md mb-3">Mint-Sea is now compatible with the Ethereum, Polygon and BNB Chain blockchains, and each of these blockchains has its own set of gas fees for transactions on its network.</p>

                    <p class="text-md mb-3 fw-bold ms-3">A. Chain gas fees that are EVM-compatible</p>
                    <p class="text-md mb-3 ms-3">Polygon, Arbitrum, and Optimism are EVM-compatible chains, which means they are theoretically compatible with Ethereum and may transfer tokens between them. EVM-compliant chains are more efficient and frequently offer reduced transaction fees.</p>
                    
                    {/* <p class="text-md mb-3 fw-bold ms-3">B. Fees for gas in Klaytn</p> */}
                    {/* <p class="text-md mb-3 ms-3">Klaytn is a blockchain that is compatible with Ethereum and is intended primarily for use in the metaverse. Klaytn provides users with a set of tools designed exclusively for usage in the metaverse, making it a one-stop shop for individuals interested in that element of web3. It's quite fast and has low gas prices. This is important for stuff like NFT drops in-game.</p> */}

                    <p class="text-md mb-3 fw-bold">Why use Mint-Sea for your NFT transactions?</p>
                    <p class="text-md mb-3">Mint-Sea works with several chains and has minimal gas fees. We understand that each chain has its own advantages and that they are all continually evolving, so Mint-Sea is here to provide you with a variety of options when minting, purchasing, or selling NFTs.</p>
                    {/* <p class="text-md mb-3">Mint-Sea's new protocol, Seaport, also drastically reduces gas prices for NFT transactions. Since the launch of Seaport, we've helped users save an estimated 35% on transaction gas fees.</p> */}
                    {/* <p class="text-md mb-3">If you're checking out and realize you don't have enough Bitcoin to finish your transaction, you can load up your wallet with a credit or debit card. This expedites and simplifies the purchasing process.</p> */}
                    {/* <p class="text-md mb-3">Finally, we offer free NFT creation using Lazy Minting. Mint-Sea, the largest and most diverse NFT marketplace, is here to provide you with the best range of NFTs on several blockchains.</p> */}

                    <p class="text-md mb-3 fw-bold"></p>
                    <p class="text-md mb-3"></p>

                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">Can Mint-Sea refund my gas fees?</p>
                    <p class="text-md mb-3">No, Mint-Sea cannot refund gas fees because we are not the business that receives or retains the payments. Any gas used while attempting to complete a transaction that lacks sufficient cryptocurrency is spent on that transaction and cannot be repaid.</p>

                    <p class="text-md mb-3 fw-bold">Does the buyer or seller pay gas fees on Mint-Sea?</p>
                    <p class="text-md mb-3">No, In Mint-sea you don't give any fess, If you have mint your nft and a make offer in your nft and you want to sell your nft just give any offer and the buyer will buy this nft and you will claim your funds in your wallet using are Mint-sea project. whatever you give prize for your nft you will get back same..</p>

                    <p class="text-md mb-3 fw-bold">What are the node operators who receive gas fees?</p>
                    <p class="text-md mb-3">Node operators are entities that operate nodes in exchange for payments from network transactions. These service providers supply the computational power that serves as the foundation of a blockchain and enables all types of transactions to take place on it.</p>

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

export default WhatAreBlockchainGasFees