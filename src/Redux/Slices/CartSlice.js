import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    CartData: [],
  },
  reducers:{
    addtoCart:((state,argToAdd)=>{
      let existingData=state.CartData.find((eachPro)=>eachPro.id==argToAdd.payload.id)
      if(existingData){
        existingData.quantity++
        existingData.totalPrice=existingData.quantity*existingData.price

        let remainingProduct=state.CartData.filter((dataEach)=>dataEach.id!=existingData.id)
        state.CartData=[...remainingProduct,existingData]
      }else{
        // state.CartData.push(argToAdd.payload)
        state.CartData=[...state.CartData,{...argToAdd.payload,quantity:1,totalPrice:argToAdd.payload.price}]
        alert('successfully Added')
      }
    }),
     reduceFromCart:((state,removeCart)=>{
      let existingData=state.CartData.find((state)=>state.id==removeCart.payload.id)
       if(existingData){
        existingData.quantity--
        existingData.totalPrice=existingData.quantity*existingData.price

        let remainingProduct=state.CartData.filter((dataEach)=>dataEach.id!=existingData.id)
        state.CartData=[...remainingProduct,existingData]
      }else{
        // state.CartData.push(argToAdd.payload)
        state.CartData=[...state.CartData,{...argToAdd.payload,quantity:1,totalPrice:argToAdd.payload.price}]
     
      }
     }),
     deleteCart:((state,iddel)=>{
      let remP=state.CartData.filter((eachP)=>{
        eachP.id!=iddel.payload
      })
     }),
     emptyCart:((state,idEmp)=>{
      state.CartData=[]
     })
  }
});
export const {addtoCart,reduceFromCart,deleteCart,emptyCart}=CartSlice.actions
export default CartSlice.reducer;
