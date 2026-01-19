import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa";

const SinglePage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 p-5  ">
        <div className="shadow p-2">
          <img
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
            alt=""
            className="w-100"
          />

          <div className="flex justify-between gap-10 text-white">
            <button className="bg-blue-700 p-2 rounded">
              Add to wishlist
            </button>
            <button className="bg-green-700 p-2 rounded">Add to cart</button>
          </div>
        </div>
        <div className="px-4">
          <p className="font-bold">PID:1</p>
          <h1 className="text-5xl font-bold">Essence Mascara Lash Princess</h1>
          <p className="text-red-600 font-mono text-2xl">$ 9.99</p>

          <p>
            <span className="font-bold">Brand :</span>Essence
          </p>

          <p>
            <span className="font-bold">Category :</span>beauty
          </p>

          <p className="text-xl">
            <span className="font-bold">Description :</span>The Essence Mascara
            Lash Princess is a popular mascara known for its volumizing and
            lengthening effects. Achieve dramatic lashes with this long-lasting
            and cruelty-free formula.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <h1 className="font-bold">Client Reviews</h1>
            <div className="p-2 border rounded">
              <p className="font-light">
                <span className="font-bold">Eleanor Collins:</span> Would not
                recommend!
              </p>
              <p className="flex items-center">
                <span className="font-bold">rating :</span> 3
                <FaStar className="text-yellow-400" />
              </p>
            </div>

            <div className="p-2 border rounded">
              <p className="font-light">
                <span className="font-bold">Lucas Gordon:</span>  Very satisfied!
              </p>
              <p className="flex items-center">
                <span className="font-bold">rating :</span> 4
                <FaStar className="text-yellow-400" />
              </p>
            </div>

            <div className="p-2 border rounded">
              <p className="font-light">
                <span className="font-bold">Eleanor Collins:</span>  Highly impressed!
              </p>
              <p className="flex items-center">
                <span className="font-bold">rating :</span> 5
                <FaStar className="text-yellow-400" />
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
