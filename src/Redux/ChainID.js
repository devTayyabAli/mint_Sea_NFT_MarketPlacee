
import { createSlice } from '@reduxjs/toolkit'
import { toHex } from '../Utils/utils';

const initialState = {
  chain_Id: 0,
  web3:{}


}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setChain_id: (state, action) => {

      sessionStorage.setItem("NETWORKID", (action.payload));
      state.chain_Id = action.payload
    },
    setWeb3_Provider: (state, action) => {

      state.web3 = action.payload
    }
   


  },
})

// Action creators are generated for each case reducer function
export const { setChain_id,setWeb3_Provider } = counterSlice.actions

export default counterSlice.reducer