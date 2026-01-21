import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 export const getAllProducts=createAsyncThunk('products/getAllProducts',async()=>{
   let apires=await axios.get('https://dummyjson.com/products')
   return apires.data.products
})

export const getSingleProduct=createAsyncThunk('products/getSingleProduct',async(id)=>{
  let apires=await axios.get(`https://dummyjson.com/products/${id}`)
  return apires.data
})

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    copyOfAllProducts:[],

    loading:false,
    error:'',
    singleProduct:{}
  },
  reducers:{
    searchByTitle:(state,searchingArg)=>{
      state.allProducts=state.copyOfAllProducts.filter((eachPro)=>eachPro.title.toLowerCase().includes(searchingArg.payload.toLowerCase()))
    }
  },

extraReducers:(builder)=>{
  builder.addCase(getAllProducts.pending,(state,apires)=>{
    state.allProducts=[],
    state.loader=true,
    state.error=''
    //show loader
  }),
  builder.addCase(getAllProducts.fulfilled,(state,apires)=>{
    state.allProducts=apires.payload
    state.loader=false,
    state.error='',
    state.copyOfAllProducts=apires.payload

    //show data
  }),
  builder.addCase(getAllProducts.rejected,(state,apires)=>{
    //show err
       state.allProducts=[],
    state.loader=false,
    state.error='Sommething went wrong'
  })





  builder.addCase(getSingleProduct.pending,(state,apires)=>{
    state.singleProduct=[],
    state.loader=true,
    state.error=''
    //show loader
  }),
  builder.addCase(getSingleProduct.fulfilled,(state,apires)=>{
    state.singleProduct=apires.payload
    state.loader=false,
    state.error=''
    //show data
  }),
  builder.addCase(getSingleProduct.rejected,(state,apires)=>{
    //show err
       state.singleProduct=[],
    state.loader=false,
    state.error='Sommething went wrong'
  })
}





});


export const {searchByTitle}=ProductSlice.actions

export default ProductSlice.reducer;
