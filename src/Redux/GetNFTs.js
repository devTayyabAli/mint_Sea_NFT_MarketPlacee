import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getLoarem=createAsyncThunk("lorem/getData",async (arg,{rejectWithValue})=>{
    try {
        // console.log("arg",arg);
       const {data}= await axios.get(`https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=${arg}`)
       
       return data;
        
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})



const NFTSlice = createSlice({
    name: 'GETNFT',
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {
       
     },
    extraReducers:{
        
        [getLoarem.pending]:(state,{payload})=>{
            state.loading=true;
            
        },
        [getLoarem.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.data=payload;
            state.isSuccess=true

        },
        [getLoarem.rejected]:(state,{payload})=>{
            state.loading=false;
            state.message=payload;
            state.isSuccess=false

        },

       

    },
   
})

export default  NFTSlice.reducer