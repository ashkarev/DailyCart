import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
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
        />
        <div className="flex gap-1 items-center">
          <FaClipboardList className="text-red-700" /> WishList <div className="bg-black p-1 rounded-2xl ">0</div>
        </div>
        <div className="flex gap-1 items-center">
          <FaCartShopping className="text-green-600" /> Cart <div className="bg-black p-1 rounded-2xl ">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
