import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { searchByTitle } from "../Redux/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishList from "../pages/WishList";


const Header = () => {
  const dispatch=useDispatch()
  const {WishListData}=useSelector((state)=>state.wishListReducer)

  const{CartData}=useSelector((state)=>state.cartReducer)

  return (
    <div className="bg-blue-900 text-white p-4 font-bold flex justify-between">
      <div className="flex items-center p-1 text-2xl gap-1">
        <IoBagHandle />
        <h1>Daily Cart</h1>
      </div>
      <div className="flex gap-10 items-center">
        <input
          type="text"
          name=""
          id=""
          className="bg-white w-50 text-black  rounded-2xl p-1 text-center"
          placeholder="Search Products Here"
          onChange={(e)=>dispatch(searchByTitle(e.target.value))}
        />
        <Link to={'/wishlist'} className="flex gap-1 items-center">
          <FaClipboardList className="text-red-700" /> WishList <div className="bg-black p-1 rounded-2xl ">{
            WishListData.length}</div>
        </Link>
        <Link to={'/cart'} className="flex gap-1 items-center">
          <FaCartShopping className="text-green-600" /> Cart <div className="bg-black p-1 rounded-2xl ">{
CartData.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
