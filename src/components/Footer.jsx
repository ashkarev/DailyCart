import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white grid grid-cols-5 gap-10 p-10  ">
      <div className=" flex flex-col gap-2">
        <h1 className="text-cyan-400 text-2xl flex gap-1 items-center"> <FaCartShopping/> Daily Cart</h1>
        <p>
          Designed and built with all the love in the world by the Luminar team
          with the help of our Contributors
        </p>
        <p>Code licensed Luminar, docs CC BY 3.0</p>
        <p>Currently V5.3.2.0</p>
      </div>
      <div>
        <h1 className="text-xl mb-2">Links</h1>
        <div className="flex flex-col gap-2">
          <Link>Home</Link>
          <Link>WishList</Link>
          <Link>Cart</Link>
        </div>
      </div>
      <div>
        <h1 className="text-xl mb-2">Guides</h1>
        <div className="flex flex-col gap-2">
          <Link>React</Link>
          <Link>React Router</Link>
          <Link>React Bootstrap</Link>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-cyan-400 text-2xl  mb-2">Contact</h1>
        <div className="flex items-center">
            <input type="text" name="" id="" className="border border-blue-400 text-cyan-400  p-2 w-100" placeholder="Enter Your Email" />
            <div className="border border-blue-400 p-3"><FaLongArrowAltRight  /></div>
        </div>
        <div className="flex gap-2 text-xl mt-3">
            <FaXTwitter />
            <FaInstagram />
            <FaFacebookF />
            <FaGithub />
            <FaLinkedinIn />
            <FaPhoneAlt />
        </div>
      </div>
    </div>
  );
};

export default Footer;
