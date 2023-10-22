import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const WhatIsACryptoWallet = () => {
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
      <DocsBanner heading={"What is a crypto wallet?"} />

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
                    <h2 class="h5 mb-0 ms-3">What is a crypto wallet?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}

                    <p class="text-md mb-3">A cryptocurrency wallet is a program that allows you to purchase, sell, and store Bitcoin and (in many situations) NFTs. Consider it your blockchain address—you can send and receive stuff from it, it holds your items, and you want to keep it protected and safe. In this article, we'll go through the different types of cryptocurrency wallets and how to set one up.</p>

                    <p class="text-md mb-3 fw-bold">Types of crypto wallets</p>
                    <p class="text-md mb-3 fw-bold ms-4">A. Custodial vs. non-custodial</p>
                    <p class="text-md mb-3 ms-4">Crypto wallets are divided into two types: custodial and non-custodial. Custodial wallets are similar to storing belongings in a storage facility, while non-custodial wallets are similar to storing belongings in a house safe. Custodial wallets require less responsibility but are vulnerable to a third party. Non-custodial wallets provide complete autonomy but require more caution.</p>

                    <p class="text-md mb-3 fw-bold ms-4">B. Software vs. hardware</p>
                    <p class="text-md mb-3 ms-4">Software and hardware wallets are examples of non-custodial wallets. </p>
                    <p class="text-md mb-3 ms-4">A software wallet is a program that runs on your computer or web browser. This makes software wallets an excellent choice for rapidly and easily purchasing, trading, and transferring NFTs and Bitcoin. </p>
                    <p class="text-md mb-3 ms-4">A hardware wallet is a physical device that you can use by plugging it into your computer. Because it isn't always connected to your computer or browser, it's ideal for long-term secure storage but less convenient for quick or frequent transactions.</p>
                    <p class="text-md mb-3 ms-4">Different wallets support different blockchains, and not all wallets support NFTs. Here are some wallets compatible with Mint-Sea:</p>
                    <ul className="text-md ms-5">
                      <li className='mb-2'>Metamask (Ethereum, Polygon, BNB)</li>
                      <li className='mb-2'>Coinbase Wallet (Ethereum, Polygon, BNB)</li>
                    </ul>

                    <p class="text-md mb-3 fw-bold">How to set up a crypto wallet?</p>
                    <p class="text-md mb-3">The process of setting up a crypto wallet differs from wallet to wallet, but for this example, we’re going to walk through the flow of setting up a Metamask wallet. Metamask is a non-custodial software wallet that’s popular for NFTs.</p>

                    <p class="text-md mb-3 fw-bold">1. Get the wallet browser extension.</p>
                    <p class="text-md mb-3">Metamask, like many wallets, has a browser extension, an iOS app, and an Android app. To get started, you only need to download the browser extension.</p>

                    <p class="text-md mb-3 fw-bold">2. Launch the browser extension and follow the on-screen instructions.</p>
                    <p class="text-md mb-3">Once installed, launch the extension. You will be prompted to begin. Select the option to create a new wallet and follow the on-screen instructions.</p>

                    <p class="text-md mb-3 fw-bold">3. Create and save your seed phrase in a safe place.</p>
                    <p class="text-md mb-3">You'll be given your seed phrase throughout the setup procedure. Keep your wallet safe by adhering to recommended practises. Keep your seed phrase in a secure location that no one else can access. Never reveal your seed phrase to anyone.</p>

                    <p class="text-md mb-3 fw-bold">4. Link your cryptocurrency wallet to Mint-Sea.</p>
                    <p class="text-md mb-3">Once your wallet is configured, you can connect it to Mint-Sea!</p>

                    <p class="text-md mb-3 fw-bold">How to fund your crypto wallet?</p>
                    <p class="text-md mb-3">Now that your wallet is ready, you can purchase NFTs!you may need cryptocurrency in your wallet in cases where that is not an option. </p>
                    <p class="text-md mb-3">Each wallet is unique, but there are two major ways to fund your cryptocurrency wallet:</p>

                    <p class="text-md mb-3 fw-bold">1. Adding money to your wallet immediately</p>
                    <p class="text-md mb-3">Many NFT-compatible wallets allow you to deposit cryptocurrency directly into your wallet using a service like Moonpay or Wyre. These are built into the wallet and allow you to buy cryptocurrency with a credit or debit card rather than using a cryptocurrency exchange. During this process, you may be asked to verify your identity.</p>

                    <p class="text-md mb-3 fw-bold">2. cryptocurrency from a cryptocurrency exchange</p>
                    <p class="text-md mb-3">The most important details are that when purchasing cryptocurrency through an exchange, the cryptocurrency is typically deposited in a custodial wallet managed by the exchange, which is incompatible with NFTs. To finance your crypto wallet for NFTs, you must move the cryptocurrency from the custodial exchange wallet to your other wallet.</p>

                    <p class="text-md mb-3 fw-bold">How to protect your crypto wallet?</p>
                    <p class="text-md mb-3">These tips will help keep your crypto wallet safe.</p>
                    <ul className="text-md ms-3">
                      <li className='mb-2'>Don't reuse passwords</li>
                      <li className='mb-2'>Protect seed phrase</li>
                      <li className='mb-2'>Don't click links you don't recognize</li>
                      <li className='mb-2'>Store seed phrase somewhere safe</li>
                      <li className='mb-2'>Don't share seed phrase</li>
                      <li className='mb-2'>Don't click links you don't recognize!</li>
                    </ul>

                    <p class="text-md mb-3 fw-bold">Connecting your crypto wallet to Mint-Sea</p>
                    <p class="text-md mb-3">Connecting a crypto wallet to Mint-Sea is easy;</p>
                    <p class="text-md mb-3">Click the wallet icon in the top right corner of the Mint-Sea site and fill out the rest of your profile. Any time you try to take an action that gets recorded on the blockchain, you must connect your wallet and authorize the action.</p>

                    <p class="text-md mb-3 fw-bold"></p>
                    <p class="text-md mb-3"></p>

                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">Are all crypto wallets NFT-compatible?</p>
                    <p class="text-md mb-3">No. Some cryptocurrency wallets exclusively accept cryptocurrencies. If you're configuring a wallet to use with NFTs, double-check that it supports NFTs.</p>

                    <p class="text-md mb-3 fw-bold">Mint-Sea accepts which cryptocurrency wallets?</p>
                    <p class="text-md mb-3">Mint-Sea Support a wide range of crypto wallets across our 3 main chain Ethereum,Polygon and Binance smart chain.</p>

                    <p class="text-md mb-3 fw-bold">Can I have more than one cryptocurrency wallet?</p>
                    <p class="text-md mb-3">Yes! Many people, in fact. You may require separate wallets for different blockchains, for as a Metamask wallet for Ethereum NFTs and a Phantom wallet for Solana NFTs. You should also have both a software and a hardware wallet for easy transactions and secure long-term storage.</p>

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
export default WhatIsACryptoWallet