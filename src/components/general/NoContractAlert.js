import React from 'react';

import Web3 from 'web3';

const alertStyle = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '9999',
    textAlign: 'center',
};

const switchToPolygon = async () => {
    console.log("process.env.REACT_APP_NODE_ENV", process.env.REACT_APP_NODE_ENV);
    if (process.env.REACT_APP_NODE_ENV === 'production') {
        const chainId = 137 // Polygon Mainnet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Polygon Mainnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                                rpcUrls: ['https://polygon-rpc.com/']
                            }
                        ]
                    });
                }
            }
        }
    }
    else {
        const chainId = 80001 // Polygon Testnet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Matic Mumbai',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                                rpcUrls: ['https://rpc-mumbai.maticvigil.com/']
                            }
                        ]
                    });
                }
            }
        }
    }
}

const switchToEthereum = async () => {
    if (process.env.REACT_APP_NODE_ENV === 'production') {
        const chainId = 1 // Ethereum Mainnet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Ethereum Mainnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
                                rpcUrls: ['https://mainnet.infura.io/v3/']
                            }
                        ]
                    });
                }
            }
        }
    }
    else {
        const chainId = 5 // Gorili Testnet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Gorili Testnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'GoerliETH', decimals: 18, symbol: 'GoerliETH' },
                                rpcUrls: ['https://goerli.infura.io/v3/']
                            }
                        ]
                    });
                }
            }
        }
    }
}

const switchToBinance = async () => {
    if (process.env.REACT_APP_NODE_ENV === 'production') {
        const chainId = 56 // Binance Smart Chain

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Gorili Testnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'Binance', decimals: 18, symbol: 'BNB' },
                                rpcUrls: ['https://bsc-dataseed.binance.org/']
                            }
                        ]
                    });
                }
            }
        }
    }
    else {
        const chainId = 97 // Binance Smart Chain Testnet

        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(chainId) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Gorili Testnet',
                                chainId: Web3.utils.toHex(chainId),
                                nativeCurrency: { name: 'Binance', decimals: 18, symbol: 'tBNB' },
                                rpcUrls: ['https://endpoints.omniatech.io/v1/bsc/testnet/public']
                            }
                        ]
                    });
                }
            }
        }
    }
}

function NoContractAlert({ network }) {
    // let networkName = network;
    // console.log(networkName);
    // if (network === 'main') {
    //     networkName = 'Mainnet';
    // } else if (network === 'private') {
    //     networkName = 'Private Network';
    // }

    return (
        <div className='alert p-3' style={alertStyle}>
            <div className='row w-100'>
                <div className='col-lg-6 mx-auto'>
                    <div className='alert-inner p-4 p-lg-5 bg-dark rounded shadow'>
                        <img src='images/metamask.png' alt='MetaMask' width='50' className='mb-4' />
                        <h4 className='fw-light'>Contracts not deployed to detected network.</h4>
                        {/* <p className='fw-light text-muted mb-0'>
                            Our contracts are deployed to <span className='text-white text-capitalize'></span>{' '}
                            network, but The network you're connected to is{' '}
                            <span className='text-white text-capitalize'>{networkName}</span>. Connect to Kovan network
                            and try again.
                        </p> */}

                        <p className='fw-light text-muted mb-0'>
                            Our contracts are deployed to <span className='text-white text-capitalize my-text'>Polygon</span>, <span className='text-white text-capitalize my-text'>Ethereum</span> and <span className='text-white text-capitalize my-text'>Binance</span>, but You are connected to unspported network.
                            <br />Connect to <span className='text-white text-capitalize my-text'>Polygon</span>, <span className='text-white text-capitalize my-text'>Ethereum</span> or <span className='text-white text-capitalize my-text'>Binance</span> insted and try again.
                        </p>

                        <div className='mt-4'>
                            <button className="btn btn-gradient-primary me-2" onClick={() => switchToPolygon()}>Switch To Polygon</button>

                            <button className="btn btn-gradient-primary me-2" onClick={() => switchToEthereum()}>Switch To Ethereum</button>

                            <button className="btn btn-gradient-primary" onClick={() => switchToBinance()}>Switch To Binance</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoContractAlert;
