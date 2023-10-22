import React, { useCallback } from 'react'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { Link, NavLink } from 'react-router-dom';
// import { particlesOptions } from '../../helpers/constants';
import DocsBanner from '../general/DocsBanner';
import DocsQuestions from '../general/DocsQuestions';

const WhatIsABlockchain = () => {
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
      <DocsBanner heading={"What is a blockchain?"} />

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
                    <h2 class="h5 mb-0 ms-3">What is a blockchain?</h2>
                  </div>

                  <div className='mb-4 text-white'>
                    {/* <p class="text-md mb-3 fw-bold">2. Use of Your Data.</p> */}

                    <p class="text-md mb-3">A blockchain is a decentralised network that stores transactions and information in a digitally distributed ledger. There are various sorts of blockchains. Mint-Sea is compatible with the blockchains Ethereum, Polygon and BNB Chain.</p>
                    <p class="text-md mb-3">A blockchain is a decentralized record that derives its name from the manner in which it saves data. When a collection of transaction data reaches a given size, it is referred to as a "block." Every transaction on a blockchain is validated and then permanently recorded here. A blockchain's "chain" is a series of consecutive blocks linked together to form an immutable ledger.</p>

                    <p class="text-md mb-3 fw-bold">What distinguishes a blockchain from a typical database?</p>
                    <p class="text-md mb-3">A blockchain is distinguished from a typical database in two ways: how it runs and who is in charge of it. A blockchain runs without the supervision of a company or financial institution, whereas a traditional database is normally owned and controlled by a single entity. It enables transactions that are both trustless and permissionless.</p>
                    <p class="text-md mb-3">The following are five distinct characteristics of blockchain technology: </p>

                    <p class="text-md mb-3">A. Decentralization</p>
                    <p class="text-md mb-3 ms-4">Each blockchain or the underlying technology is not owned by a single party (like a central bank or business might). Instead, each blockchain is supported by a network of computers called "nodes" that validate transactions. </p>

                    <p class="text-md mb-3 fw-bold ms-4">B. Validated by multiple independent nodes</p>
                    <p class="text-md mb-3 ms-4">A consensus process validates any digital assets or information kept on the blockchain by using multiple independent nodes (or computers). Proof-of-Stake and Proof-of-Work are the two basic forms of consensus procedures. A new block is added to the blockchain after a certain number of these transactions have been validated and recorded. </p>
                    
                    <p class="text-md mb-3 fw-bold ms-4">C. Public and transparent</p>
                    <p class="text-md mb-3 ms-4">Blockchain is a decentralised mechanism that allows the ledger to be public and visible while being anonymous. Fabricio Santos described it as a bank vault with rows of glass deposit boxes that allow everyone to see the contents but not access them. When a person opens a new deposit box, they receive a unique key that does not duplicate the contents.</p>
                    
                    <p class="text-md mb-3 fw-bold ms-4">D. Immutable</p>
                    <p class="text-md mb-3 ms-4">When a block is joined to a chain, it becomes immutable (or unable to be modified). A block can only be updated if the majority of independent nodes agree to validate the change, making it difficult for anyone to falsify the record. </p>
                    
                    <p class="text-md mb-3 fw-bold ms-4">E. Trustless and permissionless</p>
                    <p class="text-md mb-3 ms-4">The blockchain records and preserves the history and acts as an unbiased party in transactions. For that reason, it’s “trustless” in that it doesn’t require you to put your trust in another organization or entity in order to transact. Similarly, because the transactions are carried out by a network of computers, they are “permissionless” in that they don’t require the permission of a third party.</p>

                    <p class="text-md mb-3 fw-bold">Types of blockchains</p>
                    <p class="text-md mb-3">There are different types of blockchains, and each has varying gas fees and scalability.</p>

                    <p class="text-md mb-3 fw-bold ms-4">A. Layer 1 blockchains</p>
                    <p class="text-md mb-3 ms-4">Layer 1 (also known as "L1") blockchains are the primary, or foundational, blockchains. This implies they perform and validate transactions entirely on their own. Layer 1 chains include Ethereum, Solana, and Avalanche. All three of these L1 chains operate independently of other systems and have their own coins.</p>

                    <p class="text-md mb-3 fw-bold ms-4">B. Layer 2 blockchains</p>
                    <p class="text-md mb-3 ms-4">Layer 2 (or "L2") blockchains function as scaling solutions for Layer 1 blockchains. Layer 2 chains execute transactions on their chain before storing a summary of the completed operations on the Layer 1 chain. Optimism and Arbitrum are classified as Layer 2 "rollups" since their transactions take place off-chain and are then added to the Layer 1 (or base) chain when finished. This drastically reduces the blockchain's demands, improving scalability and cutting petrol fees.</p>

                    <p class="text-md mb-3 fw-bold ms-4">C. Sidechains</p>
                    <p class="text-md mb-3 ms-4">Finally, a "sidechain" is a distinct, independent blockchain that is linked to the Layer 1 chain via a two-way bridge. Polygon and other sidechains are meant to process transactions quickly and are effectively self-contained blockchains that are responsible for their own security. Their ability to transfer digital items to the main blockchain is what connects them to the main blockchain. Polygon, an Ethereum-compatible chain, provides users with an experience comparable to Ethereum, but with potentially reduced gas fees and faster transaction speeds.</p>

                    <p class="text-md mb-3 fw-bold">Consensus mechanisms</p>
                    <p class="text-md mb-3">Consensus techniques are used to validate blockchain transactions, such as Proof of Stake and Proof of Work, by all network nodes.</p>

                    <p class="text-md mb-3 fw-bold ms-4">A. The Proof-of-Stake method</p>
                    <p class="text-md mb-3 ms-4">Blockchains that use Proof-of-Stake verify transactions using validators, who randomly select a validator to be a block proposer and create a new block and send it to other nodes. An example of a blockchain that uses this method is Ethereum.</p>

                    <p class="text-md mb-3 fw-bold ms-4">B. The Proof-of-Work method</p>
                    <p class="text-md mb-3 ms-4">Proof-of-Work blockchains use extreme computational output and consensus to verify transactions. When a new transaction is added to the blockchain, miners race to solve a complex math equation and verify that their answer is correct. If everyone agrees that the fastest miner's output is correct, the transaction will be recorded and the miner will be awarded a fee for the energy used to complete the computation. This method is complex, time-consuming, and ensures the security of the blockchain, so gas fees are awarded to the operators.</p>

                    <p class="text-md mb-3 fw-bold">Gas fees</p>
                    <p class="text-md mb-3">The "gas fee" is the payment needed to execute transactions on the blockchain, which compensates the node operators who keep the blockchain functioning. Each blockchain compatible with Mint-Sea has different gas fees depending on how it validates transactions.</p>

                    <p class="text-md mb-3 fw-bold">How is the blockchain regularly used? </p>
                    <p class="text-md mb-3">Transferring money, purchasing stuff, storing items, and tracking items as they move from point A to point B are four typical use cases for blockchains. </p>
                    <p class="text-md mb-3">Many of these use cases are made possible by newer blockchains such as Ethereum and Polygon. Bitcoin is designed as a ledger and does not support smart contracts.</p>

                    <p class="text-md mb-3 fw-bold ms-4">A. Cryptocurrency</p>
                    <p class="text-md mb-3 ms-4">A virtual currency that lives on a blockchain is known as cryptocurrency. On the Ethereum blockchain, for example, Ether (ETH) is used. Cryptocurrency is a catch-all phrase for all digital currencies that may be accessible through your crypto wallet. Your wallet is a programme that allows you to buy, sell, and access cryptocurrency and (in many situations) NFTs.</p>

                    <p class="text-md mb-3 fw-bold ms-4">B. DeFi</p>
                    <p class="text-md mb-3 ms-4">Decentralised Finance, sometimes abbreviated as "DeFi," refers to financial services and exchanges that employ blockchain technology. Earning interest, borrowing, lending, and trading are all common services. DeFi enables transactions that are trustless, permissionless, and quick.</p>

                    <p class="text-md mb-3 fw-bold ms-4">C. Smart contracts</p>
                    <p class="text-md mb-3 ms-4">Smart contracts are computer programmes that enforce their pre-programmed restrictions. Smart contracts power NFTs and dApps by utilising "if this, then that" logic. Using Mint-Sea to buy and sell NFTs is powered by the different smart contracts protocol.</p>

                    <p class="text-md mb-3 fw-bold ms-4">D. NFTs</p>
                    <p class="text-md mb-3 ms-4">Non-fungible tokens (NFTs) are one-of-a-kind digital assets with blockchain ownership. They are purchased and sold using cryptocurrency. Digital art, collectibles, virtual reality goods, crypto domain names, ownership records for actual items, and other items are examples of NFTs. </p>

                    <p class="text-md mb-3 fw-bold ms-4">E. Supply chain</p>
                    <p class="text-md mb-3 ms-4">Supply chain data kept on the blockchain assists businesses in keeping track of commodities ranging from food to medications. Organizations utilise blockchain technology in their supply chains to detect counterfeit medications and track contaminated food for recalls. IBM Food Trust, for example, has prioritized the use of blockchain for supply chain assistance. </p>

                    <p class="text-md mb-3 fw-bold">Blockchain’s future potential uses</p>
                    <p class="text-md mb-3">Blockchain took over two decades to move from theory to practise, but many more applications are already being created. One of the most talked-about prospective applications of blockchain is utilising it to store and preserve medical information or to exchange medical research. Many people believe that blockchain will one day disrupt the real estate, insurance, and automotive industries, to name a few.</p>

                    <p class="text-md mb-3 fw-bold ms-4"></p>
                    <p class="text-md mb-3 ms-4"></p>

                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md mb-3 fw-bold">What’s the history of blockchain technology?</p>
                    <p class="text-md mb-3">In 1991, Stuart Haber and W. Scott Stornetta envisioned what is now known as blockchain. Their initial project included creating a cryptographically safe chain of blocks that ensured no one could tamper with the timestamps of the papers. Bitcoin was first introduced as a blockchain application in 2008.</p>

                    <p class="text-md mb-3 fw-bold">What is a DAO, and how does it use the blockchain?</p>
                    <p class="text-md mb-3">A decentralised autonomous organisation (DAO) is a decentralised autonomous organisation that uses blockchain technology to stay decentralised without the requirement for a typical hierarchical structure or a leading administrative entity. DAO members work towards a similar purpose and vote to create, amend, or enact rules. Because of the blockchain, all decisions taken by the DAO are public and irreversible.</p>

                    <p class="text-md mb-3 fw-bold">So, the blockchain is supposed to be public. Where exactly can you see it?</p>
                    <p class="text-md mb-3">Chains typically feature a webpage where you can view all of the transactions that have occurred on that blockchain. Polygonscan, for example, or Etherscan, for Ethereum. If you've sold something on Ethereum, you can look up your wallet address to see your token balance or input a transaction hash to see the history of your transactions. It's a quick way to see if a transaction was completed.</p>

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

export default WhatIsABlockchain