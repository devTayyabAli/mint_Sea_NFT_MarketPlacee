import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const WhatIsWeb3 = () => {
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
      <DocsBanner heading={"What is Web3?"} />

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
                    <h2 class="h5 mb-0 ms-3">What is Web3?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}

                    <p class="text-md mb-3">The concept of a decentralized internet built on blockchain technology is known as Web3. If Web 1.0 was the birth of the Internet and Web 2.0 was the transition to a social platform-centric Internet, web3 represents a transition to a decentralized, public Internet centered on the concept of ownership.</p>
                    <p class="text-md mb-3">Web3 essentially returns power and ownership to the people who use it, ideally establishing a more level playing field for users with less outside influence from third parties. The phrase web3 has evolved to refer to all of the components of this ecosystem, including cryptocurrencies, blockchain technology, decentralized finance (also known as "DeFi"), NFTs, the metaverse, and decentralized programs ("dApps").</p>
                    <p class="text-md mb-3">Gavin Wood coined the term Web 3.0 in 2014, which is a re-imagination of the web with a different model for interactions between parties. His post focused on the four main components of this third wave of the internet: static content publication, dynamic messages, trustless transactions, and an integrated user interface. Today, much of web3 is built on these principles.</p>

                    <p class="text-md mb-3 fw-bold">What were Web 1.0 and Web 2.0?</p>
                    <p class="text-md mb-3">The internet reached mass adoption in the late ‘90s and early 2000s and was predominantly used as a way to gain information through text. Web 1.0 was filled with personal blogs, company websites, and message boards, and relied on open protocols. Web 2.0 was the next phase of the internet, which has been largely defined by a move to the mobile internet and led by social media platforms and large financial institutions. Web 2.0 saw people co-creating content with the websites and apps they were using, but the images, data, and information they share belong to the corporations that own them. This is now being referred to as the “read-write-own” web.</p>

                    <p class="text-md mb-3 fw-bold">What are the core principles of web3?</p>
                    <p class="text-md mb-3">Web3 is decentralized, allowing users to own their own information and items and distribute them how they see fit. Gavin Wood cited "trustless transactions" as one of the most important aspects of the internet of the future, referring to the trust users had to give to third parties in order to interact online.</p>
                    <p class="text-md mb-3">Blockchain technology is a large, digital, public record distributed across many nodes. It is distributed across a peer-to-peer network, ensuring that it remains immutable. Transactions on the blockchain can be "trustless" and "permissionless" as they don't require the permission of a third party.</p>
                    <p class="text-md mb-3">Web3's use of cryptocurrency provides users with an alternative to the traditional banking system. In reality, many people continue to utilize a combination of government cash held by banks and cryptocurrencies, but it allows them to operate outside of traditional centralized systems.</p>

                    <p class="text-md mb-3 fw-bold">How is web3 being used now?</p>
                    <p class="text-md mb-3">We will likely see web3 develop and evolve in the next years, but for the time being, its principal applications are focused on financial transactions and ownership.</p>

                    <p class="text-md mb-3 fw-bold ms-4">A. NFTs</p>
                    <p class="text-md mb-3 ms-4">A non-fungible token (NFT) is a one-of-a-kind digital asset kept on a blockchain. NFTs can represent nearly anything and act as a digital record of ownership. Art, profile images, collectibles, domain names, ticketing and memberships, games and gaming tools, virtual worlds, and the list goes on. Identity verification, intellectual property, and storage solutions are examples of new and growing use cases.</p>

                    <p class="text-md mb-3 fw-bold ms-4">B. Decentralized Finance (DeFi)</p>
                    <p class="text-md mb-3 ms-4">Decentralized Finance, commonly abbreviated as "DeFi," refers to all financial services that employ blockchain technology. DeFi enables transactions that are trustless, permissionless, and quick.</p>

                    <p class="text-md mb-3 fw-bold ms-4">C. Cryptocurrency</p>
                    <p class="text-md mb-3 ms-4">Cryptocurrency is a digital currency that is supported by the blockchain. This allows a network of computers to verify transactions rather than a centralized institution or authority.</p>

                    <p class="text-md mb-3 fw-bold ms-4">D. DAOs</p>
                    <p class="text-md mb-3 ms-4">DAOs, or decentralized autonomous organizations, are organizations that do not have a single point of contact. Instead, they’re governed by the group of users who comprise the organization. Users within a DAO will frequently create proposals that are voted on to enact changes. DAOs have their own coins that users can use to authenticate their membership and vote. DAOs can be used for a variety of objectives, including philanthropic giving, business networking, and education.</p>

                    <p class="text-md mb-3 fw-bold ms-4">E. dApps</p>
                    <p class="text-md mb-3 ms-4">dApps is an abbreviation for "decentralized applications." Unlike web 2.0 programmes, which are owned by a single entity, dApps use blockchain technology, albeit they do not have to be decentralized themselves. dApps can run on the blockchain utilizing a peer-to-peer network or traditional hierarchical structures, but what distinguishes them is their use of decentralized protocols.</p>

                    <p class="text-md mb-3 fw-bold ms-4">F. Metaverse</p>
                    <p class="text-md mb-3 ms-4">The metaverse is a virtual and augmented reality environment in which users can interact with digital space. The metaverse is essentially less of a place and more of a mode of interaction with the internet; it explains how users engage with the internet rather than where it occurs. Users can play games, change their appearance, interact with other players, and converse in the metaverse. It's a novel method for people to socialize using VR and AR. While not all metaverses use or will use web3 technology, those that do allow their users to own goods within the metaverse.</p>

                    <p class="text-md mb-3 fw-bold">The future of Web3</p>
                    <p class="text-md mb-3">Web3 is a young concept that will evolve over time, with improved digital storage, faster and more secure internet browsers, large-scale changes in the way we interact with financial systems, improved online gaming and social experiences, new social networks, and new desktop and mobile operating systems.</p>

                    <p class="text-md mb-3 fw-bold ms-4"></p>
                    <p class="text-md mb-3 ms-4"></p>

                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">What role does the metaverse play in web3?</p>
                    <p class="text-md mb-3">Metaverses built on web3 technology will have capabilities supported by blockchain technology, allowing users to buy NFTs of game elements and use them across multiple games. The decentralized nature of the blockchain means metaverse experiences are built to be co-created by players, not beholden to a single game developer or brand.</p>

                    <p class="text-md mb-3 fw-bold">Who owns web3?</p>
                    <p class="text-md mb-3">No one. The web3 ecosystem was created to be decentralized, which means it cannot be owned by a single entity, person, or company. It is run by a network of computers that validate transactions, making it easier to authenticate ownership without the intervention of others.</p>

                    <p class="text-md mb-3 fw-bold">Are web 3.0 and web3 the same thing?</p>
                    <p class="text-md mb-3">Web 3.0 refers to the Semantic Web, an internet of linked data, while Web3 refers to the decentralized web as described in this article.</p>

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

export default WhatIsWeb3