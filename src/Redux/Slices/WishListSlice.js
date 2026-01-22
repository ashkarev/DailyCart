import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "WishList",
  initialState: {
    WishListData: [],
  },
  reducers:{
    addToWishList:((state,argToWish)=>{
        let existingProduct=state.WishListData.find((eachData)=>eachData.id==argToWish.payload.id)

        if(existingProduct){
    alert('already there in ur wishlist')
        }else{
          state.WishListData.push(argToWish.payload)
          alert("successfully addded")
        }
    }),
    removeFromWishlist:(state,idforRemove)=>{
    state.WishListData=state.WishListData.filter((data)=>data.id!=idforRemove.payload)
}
  }
});



export const {addToWishList,removeFromWishlist}=WishListSlice.actions

export default WishListSlice.reducer;
