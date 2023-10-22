import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const WhatIsCryptocurrency = () => {
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
      <DocsBanner heading={"What is Cryptocurrency?"} />      

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
                    <h2 class="h5 mb-0 ms-3">What is Cryptocurrency?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}
                    <p class="text-md mb-3">Cryptocurrency is a digital currency that resides on the blockchain, a decentralized system. Cryptocurrency is a catch-all phrase for all digital currencies. These can be accessed by using a crypto wallet.</p>

                    <p class="text-md mb-3 fw-bold">How are cryptocurrency and the blockchain related?</p>
                    <p class="text-md mb-3">Fabricio Santos described the blockchain concept in 2016 as a bank vault with rows of glass deposit boxes. Each box has a unique key that allows access to the contents, but copying the key does not replicate the contents. Transactions are permanently etched into the blockchain, and the recorded history cannot be changed. Cryptocurrency relies on the blockchain's decentralized network of computers to authenticate and verify ownership.</p>

                    <p class="text-md mb-3 fw-bold">The advantages of cryptocurrency</p>
                    <p class="text-md mb-3 ms-4 fw-bold">a. Transactions that are safe and quick</p>
                    <p class="text-md mb-3 ms-5">The foundation of cryptocurrency is privacy. This implies you don't have to submit your personal information to every firm with which you do business. Using cryptocurrency protects your financial and personal data because it is not shared with third parties that may want to access it (for example, advertising and other entities with which you did not engage). Additionally, cryptocurrency enables near-instant transactions. Because users have instant access to the contents of their crypto wallets, the 3-4 day wait time for a transfer from a traditional bank is reduced. </p>

                    <p class="text-md mb-3 ms-4">b. The option to keep your Bitcoin in your own hands.</p>
                    <p class="text-md mb-3 ms-5">In a traditional banking system, you must trust the entity that has your money. These centralized organizations, whether a bank or another payment service, keep and protect your currency, but they may also use it in other ways. It is also possible that they will close down, modify their rules, or encounter policy changes that will limit your ability to utilize or access your funds. </p>
                    <p class="text-md mb-3 ms-5">Cryptocurrency eliminates middlemen in decentralized finance, making transactions trustless and permissionless. Non-custodial wallets allow users to keep their cryptocurrencies in their own hands, allowing them to access them anytime.</p>
                    <p class="text-md mb-3 ms-5">However, centralized exchanges like Coinbase and Binance act as intermediaries, providing convenience for those who don't want the responsibility of a non-custodial wallet.</p>

                    <p class="text-md mb-3 ms-4">c. Privacy and anonymity</p>
                    <p class="text-md mb-3 ms-5">Cryptocurrencies offer privacy, with transactions being "pseudonymous" and linked to the wallet's address. This is a valuable tool for people who belong to historically marginalized groups, especially those with limited access to cryptocurrency.</p>

                    <p class="text-md mb-3 fw-bold">Things to remember when utilizing cryptocurrencies</p>
                    <p class="text-md mb-3 ms-4">a. New and ever-changing</p>
                    <p class="text-md mb-3 ms-5">Blockchain technology was developed in the 1990s, but Bitcoin was only launched in 2009. This means that everyone is learning how to use it simultaneously and experiencing growing pains at the same time. </p>

                    <p class="text-md mb-3 ms-4">b. It’s decentralized</p>
                    <p class="text-md mb-3 ms-5">Blockchain technology is decentralized, meaning there is no central bank to fix problems. Non-custodial wallets give you full control and responsibility, so it is important to protect your access key. Custodial wallets are managed by a third-party company, while non-custodial wallets are not.</p>

                    <p class="text-md mb-3 fw-bold">How do people use cryptocurrency now?</p>
                    <p class="text-md mb-3">Cryptocurrencies have grown significantly since Bitcoin's introduction in 2009. They can be used to purchase NFTs, physical goods, and real-world services. In the future, merchants and industries are likely to accept cryptocurrencies as a form of payment for any purchase, and blockchain technology is being adopted by additional industries. Future applications could range from medical records to mortgages.</p>
                    
                    <p class="text-md mb-3 fw-bold">Types of cryptocurrency</p>
                    <p class="text-md mb-3">There are a few fundamental differences between coins and tokens when it comes to Bitcoin. </p>

                    <p class="text-md mb-3 ms-4">a. Coins</p>
                    <p class="text-md mb-3 ms-5">Coins are linked to a specific blockchain and operate purely on the blockchain's decentralized system, making them more volatile. (This differs from stablecoins, which are set against a more fixed entity). </p>
                    <p class="text-md mb-3 ms-5">These are some of the most widely used tokens:</p>
                    <p class="text-md mb-3 ms-5"><b>Bitcoin (BTC) –</b> The original cryptocurrency, and the one with the greatest market cap today. Used to purchase things in select retail outlets, car dealerships, and through PayPal. </p>
                    <p class="text-md mb-3 ms-5"><b>Ethereum (ETH) –</b> The decentralized, open-source blockchain is most known for its smart contract capabilities, which has led to its prominence in the world of NFTs.</p>
                    <p class="text-md mb-3 ms-5"><b>Polygon (MATIC) –</b> As an Ethereum sidechain that supports EVM, Polygon enables developers to create scalable dApps with cheap transaction fees.</p>
                    <p class="text-md mb-3 ms-5"><b>SOL (Solana) –</b> Solana, which has minimal petrol fees and rapid transactions, also allows developers to create decentralized apps (dApps). Solana employs the Proof-of-History technique.</p>
                    <p class="text-md mb-3 ms-5"><b>Avalanche (AVAX) –</b> An environmentally friendly cryptocurrency based on smart contracts.</p>

                    <p class="text-md mb-3 ms-4">b. Tokens</p>
                    <p class="text-md mb-3 ms-5">Tokens are constructed on top of blockchains. Stablecoins are a popular sort of token that differs from coins in that they are anchored to an external reference to lessen the volatility of the cryptocurrency.</p>
                    <p class="text-md mb-3 ms-5"><b>Tether (USDT) —</b> The third largest cryptocurrency and the largest stablecoin, linked to the US dollar. </p>
                    <p class="text-md mb-3 ms-5"><b>USD Coin (USDC) —</b> USDC is a digital US dollar that exists natively online and is available on multiple blockchains. USDC can be exchanged for US dollars at a 1:1 ratio. </p>
                    <p class="text-md mb-3 ms-5"><b>Dai (DAI) —</b> A stablecoin that works on the Ethereum blockchain and is identical to USDC, DAI enables easy conversion to US dollars. </p>
                    
                    <p class="text-md mb-3 fw-bold">What are the advantages of decentralization?</p>
                    <p class="text-md mb-3">Blockchain technology is not controlled by a single entity, but is upheld by the multitude of computer systems (nodes) that support it. The responsibility of keeping it secure falls on those validating or mining the blockchain through a consensus mechanism. Cryptocurrency is often described as secure, but it is still important to employ best practices for keeping it safe. Never share your wallet's seed phrase, be careful when taking actions using your wallet, and thoroughly evaluate NFTs before buying.</p>

                    <p class="text-md mb-3 fw-bold">How do I access my cryptocurrency?</p>
                    <p class="text-md mb-3">Cryptocurrency is stored on the blockchain and can be accessed through a crypto wallet. To buy cryptocurrency, you can use an exchange like Binance or Coinbase, but many NFT-compatible wallets support adding cryptocurrency directly using your wallet through services such as Moonpay or Wyre. You may be prompted to verify your identity during this process.</p>
                    
                    <p class="text-md mb-3 fw-bold">How are cryptocurrency and NFTs related?</p>
                    <p class="text-md mb-3">Blockchain technology is used by both cryptocurrency and NFTs, with cryptocurrencies being "fungible" and NFTs being "non-fungible". To buy an NFT, you'll need cryptocurrency and a crypto wallet. NFT purchases take place in Bitcoin, while many can be purchased with a credit or debit card.</p>
                    
                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">Can’t I just right-click and save or screenshot the NFT?</p>
                    <p class="text-md mb-3">Of course, you can save or screenshot an NFT, but that doesn’t make you the owner. Taking a picture of the Mona Lisa doesn’t mean you own it. You could print it out and enjoy the art, but you wouldn’t be able to resell it for its true value. Similarly, you could take a screenshot of a Bored Ape, but that won’t get you on the yacht!</p>

                    <p class="text-md mb-3 fw-bold">Are NFTs harmful to the environment?</p>
                    <p class="text-md mb-3">Ethereum switched to a proof-of-stake method in September 2022, reducing power consumption by 99% over its previous proof-of-work process. Solana transactions consume less energy than Google searches, and Ethereum switched to a proof-of-stake method in September 2022.</p>

                    <p class="text-md mb-3 fw-bold">Is it necessary to have technical or coding expertise to construct NFTs?</p>
                    <p class="text-md mb-3">Nope! There are numerous tools available to help you generate your own NFTs, including the ability to do it directly on Mint-Sea. While you can get as technical as you want, even down to coding your own smart contracts, no coding or other technical skills are required to create an NFT.</p>

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

export default WhatIsCryptocurrency