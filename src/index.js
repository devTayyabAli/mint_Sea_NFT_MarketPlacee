import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from './App';
import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import MarketplaceProvider from './store/MarketplaceProvider';
import { ToastProvider } from 'react-toast-notifications';
import * as bootstrap from 'bootstrap';
import { Web3ContextProvider } from './components/Components/web3Context';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
    connectorsForWallets
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    sepolia,
    bscTestnet,
    polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
    injectedWallet,
    rainbowWallet,
    walletConnectWallet,
    coinbaseWallet,
    metaMaskWallet,
    trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const projectId = 'ae64d2d938316ce3350fea4c10f6cc79'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [bscTestnet, polygonMumbai, sepolia],
    [alchemyProvider({ apiKey: "gbnhSoSy4pQ2eiWkI2KQoAxiFgAQWVf9" }),
        publicProvider()]
);
const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            injectedWallet({chains}),
            rainbowWallet({ projectId, chains }),
            metaMaskWallet({ projectId, chains }),
            coinbaseWallet({ projectId, chains }),
            walletConnectWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),

        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});


const queryClient = new QueryClient()



window.bootstrap = bootstrap;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <>

        <Provider store={store}>
            <Web3Provider>
                <CollectionProvider>
                    <MarketplaceProvider>
                        <Web3ContextProvider>
                            <ToastProvider autoDismiss autoDismissTimeout={6000} placement='top-center'>
                            <QueryClientProvider client={queryClient}>
                                <WagmiConfig config={wagmiConfig}>
                                    <RainbowKitProvider chains={chains}  modalSize="compact" >
                                        <App />
                                    </RainbowKitProvider>
                                </WagmiConfig>
                                </QueryClientProvider>
        
                            </ToastProvider>

                        </Web3ContextProvider>
                    </MarketplaceProvider>
                </CollectionProvider>
            </Web3Provider>

        </Provider>

    </>



);
