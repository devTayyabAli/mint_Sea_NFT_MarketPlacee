import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'




export const getTranding=createAsyncThunk("lorem/getTrandingData",async (arg,{rejectWithValue})=>{
    try {
        const {data}= await axios.get(`https://sanjhavehra.womenempowerment.online/get_trending_NFTs`)
      
       
       return data;
        
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


const TrandingNFTSlice = createSlice({
    name: 'getTrandingNFTs',
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
     
    },
    reducers: {
       
     },
    extraReducers:{
        
        [getTranding.pending]:(state,{payload})=>{
            state.loading=true;
        },
        [getTranding.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true

        },
        [getTranding.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message=payload;
            state.isSuccess=false
        
        },
    },
   
})

export default  TrandingNFTSlice.reducer