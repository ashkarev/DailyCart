import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
});

export default ProductSlice.reducer;
