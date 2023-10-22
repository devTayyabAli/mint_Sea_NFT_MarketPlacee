
import { createSlice } from '@reduxjs/toolkit'
import { toHex } from '../Utils/utils';

const initialState = {

  Offers_Array:{},
  Category: "All",
  user_Profile:{}
}

export const offersSlice = createSlice({
  name: 'Offers',
  initialState,
  reducers: {
   
    LoadOffers: (state,action) => {
   
      // sessionStorage.setItem("NETWORKID", (action.payload));
    state.Offers_Array = action.payload
  },
  setCategory: (state, action) => {
    state.Category = action.payload
  },
  get_UserProfile: (state, action) => {
    state.user_Profile = action.payload
  },
    
  },
})

// Action creators are generated for each case reducer function
export const { LoadOffers,setCategory,get_UserProfile } = offersSlice.actions

export default offersSlice.reducer