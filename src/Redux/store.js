import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import WishListSlice from "./Slices/WishListSlice";
import CartSlice from "./Slices/CartSlice";

const store = configureStore({
  reducer: {
    productReducer: ProductSlice,
    wishListReducer: WishListSlice,
    cartReducer: CartSlice,
  },
});

export default store;
