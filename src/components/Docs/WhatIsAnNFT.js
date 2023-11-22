import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const WhatIsAnNFT = () => {
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
      <DocsBanner heading={"What is an NFT?"} />

      <section className='py-5'>
        <div className='container py-5'>
          <div className='row g-4'>

            <DocsQuestions />

            <div className='col-lg-8'>
              <div className="card" style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px"}}>
                <div className="card-body py-4 py-lg-5 px-4 px-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    {/* <div className="icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white"> */}
                      <i className="las la-question" style={{background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px"}}></i>
                    {/* </div> */}
                    <h2 className="h5 mb-0 ms-3">What is an NFT?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p className="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}
                    <p className="text-md mb-3">An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything, and serve as a digital record of ownership.</p>

                    <p className="text-md mb-3 fw-bold">Fungible vs. non-fungible</p>
                    <p className="text-md mb-3">Before we go into NFTs, it's critical to grasp the "non-fungible" component of the phrase "non-fungible token." When an item is fungible, it means it can be exchanged for another of the same type. A classic example is a $1 bill: you could switch dollars with someone and both of you would still have $1.</p>
                    <p className="text-md mb-3">Non-fungible, on the other hand, signifies that the thing is completely unique and hence has its own distinct worth. Two automobiles of the same make and model, for example, may have varying values depending on how many miles are on the odometer, their accident history, or if they were previously owned by a celebrity. </p>

                    <p className="text-md mb-3 fw-bold">How do NFTs work?</p>
                    <p className="text-md mb-3">NFTs use blockchain technology, which is a massive digital public record distributed across many nodes. This ensures that the blockchain remains immutable and allows node operators to make money. The blockchain is well positioned to transform proven authenticity and digital ownership, as it records and maintains history when someone creates, transfers, buys, sells, or does anything with an NFT.</p>
                    <p className="text-md mb-3">Blockchain offers a secure solution to the issue of proving the authenticity of art and collector's items. NFTs are used to track the history of a piece of artwork, from its original creation to its past owners and sales. Without NFTs, buyers would not know if they were buying a real piece or a fake.</p>

                    <p className="text-md mb-3 fw-bold">The impact of NFT technology</p>
                    <p className="text-md mb-3">Blockchain technology is revolutionary for digital items, allowing them to be provably scarce, openly transferable, and have authenticated ownership. This allows creators to sell unique and authenticated items on a blockchain-based marketplace, with set creator earnings on secondary sales. Additionally, NFTs are revolutionary for collectors, as they provide an undisputed blockchain history for authenticity when buying or selling concert tickets.</p>
                    
                    <p className="text-md mb-3 fw-bold">What are NFTs used for?</p>
                    <p className="text-md mb-3">An NFT can represent anything, but let's look at some of the current applications of NFTs as well as prospective future applications.</p>

                    <p className="text-md mb-3 fw-bold ms-4">Art</p>
                    <p className="text-md mb-3 ms-4">Artists are using NFTs to create beautiful and unique pieces. Damien Hirst used NFTs in his "The Currency" collection, in which he made digital replicas of 10,000 unique physical artworks. Collectors were given a year to pick whether they wanted the digital or physical version of the painting; whichever version they did not choose was destroyed.</p>

                    <p className="text-md mb-3 fw-bold ms-4">Profile pictures (PFPs)</p>
                    <p className="text-md mb-3 ms-4">PFP projects have become an online identity for many people, focusing on holder benefits and community. Examples include Bored Ape Yacht Club (BAYC), Doodles, and World of Women (WoW). WoW donates a portion of its creator earnings to women-centric charities.</p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">Collectibles</p>
                    <p className="text-md mb-3 ms-4">NFTs bring a plus to traditional basketball collectibles, with each card changing based on the player and team's performance.</p>

                    <p className="text-md mb-3 fw-bold ms-4">Domain names</p>
                    <p className="text-md mb-3 ms-4">Naming standards like Ethereum Naming Service (ENS) and Bonfida (the equivalent naming service for Solana) have been used to streamline naming for blockchain applications, making them more user-friendly. </p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">Ticketing and membership</p>
                    <p className="text-md mb-3 ms-4">Ticketing and membership brands like Cameo and Coachella have also implemented NFTs to provide exclusive tickets and passes, including celebrity Q&A sessions and parties.</p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">Gaming</p>
                    <p className="text-md mb-3 ms-4">Gaming NFTs are revolutionary due to their utility, ownership, and interoperability. Aurory Project is a gaming studio that leverages the Solana blockchain to streamline in-game item ownership.</p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">Virtual worlds</p>
                    <p className="text-md mb-3 ms-4">Otherside, Decentraland, and The Sandbox are blockchain-based metaverse projects that allow people to create digital experiences and open economies. NFTs can help platforms like Roblox succeed by allowing users to own their digital objects.</p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">Future applications</p>
                    <p className="text-md mb-3 ms-4">The blockchain is enabling new use cases such as identity verification, intellectual property, and storage solutions such as Courtyard, which allows for the safe storage, sale, and claim of physical assets.</p>
                    
                    <p className="text-md mb-3 fw-bold ms-4">How NFTs are bought and sold?</p>
                    <p className="text-md mb-3 ms-4">Mint-Sea is the largest and most diverse NFT marketplace, supporting various blockchains and hosting millions of NFTs. It caters to the growing need to buy and sell NFTs.</p>

                    <h3 className="h5 my-4">FAQs</h3>

                    <p className="text-md mb-3 fw-bold">Can’t I just right-click and save or screenshot the NFT?</p>
                    <p className="text-md mb-3">Of course, you can save or screenshot an NFT, but that doesn’t make you the owner. Taking a picture of the Mona Lisa doesn’t mean you own it. You could print it out and enjoy the art, but you wouldn’t be able to resell it for its true value. Similarly, you could take a screenshot of a Bored Ape, but that won’t get you on the yacht!</p>

                    <p className="text-md mb-3 fw-bold">Are NFTs harmful to the environment?</p>
                    <p className="text-md mb-3">Ethereum switched to a proof-of-stake method in September 2022, reducing power consumption by 99% over its previous proof-of-work process. Solana transactions consume less energy than Google searches, and Ethereum switched to a proof-of-stake method in September 2022.</p>

                    <p className="text-md mb-3 fw-bold">Is it necessary to have technical or coding expertise to construct NFTs?</p>
                    <p className="text-md mb-3">Nope! There are numerous tools available to help you generate your own NFTs, including the ability to do it directly on Mint-Sea. While you can get as technical as you want, even down to coding your own smart contracts, no coding or other technical skills are required to create an NFT.</p>

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

export default WhatIsAnNFT