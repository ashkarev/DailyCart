import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "WishList",
  initialState: {
    WishListData: [],
  },
});

export default WishListSlice.reducer;
