import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './ChainID'
import offersReducer from './Load_offers'
import NFTSliceReducer from './GetNFTs'
import trandingCard from './tranding_NFTs'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    GETNFT: NFTSliceReducer,
    Offers: offersReducer,
    getTrandingNFTs:trandingCard

  },
});
