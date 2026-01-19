import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    CartData: [],
  },
});

export default CartSlice.reducer;
