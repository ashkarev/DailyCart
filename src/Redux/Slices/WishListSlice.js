import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "WishList",
  initialState: {
    WishListData: [],
  },
  reducers:{
    addToWishList:((state,argToWish)=>{
        state.WishListData.push(argToWish.payload)
    })
  }
});

export const {addToWishList}=WishListSlice.actions

export default WishListSlice.reducer;
