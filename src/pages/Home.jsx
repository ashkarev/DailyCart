import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-3 p-5">
        <div className="flex flex-col justify-center items-center border rounded p-2">
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <h1 className="font-bold text-xl">Essence Mascara Lash Princess</h1>
            <button className="bg-yellow-500 p-2 border rounded">View More...</button>
        </div>
        <div className="flex flex-col justify-center items-center border rounded p-2">
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <h1 className="font-bold text-xl">Essence Mascara Lash Princess</h1>
            <button className="bg-yellow-500 p-2 border rounded">View More...</button>
        </div>
        <div className="flex flex-col justify-center items-center border rounded p-2">
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <h1 className="font-bold text-xl">Essence Mascara Lash Princess</h1>
            <button className="bg-yellow-500 p-2 border rounded">View More...</button>
        </div>
        <div className="flex flex-col justify-center items-center border rounded p-2">
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
            <h1 className="font-bold text-xl">Essence Mascara Lash Princess</h1>
            <button className="bg-yellow-500 p-2 border rounded">View More...</button>
        </div>  
        

      </div>
      <Footer />
    </div>
  );
};

export default Home;
