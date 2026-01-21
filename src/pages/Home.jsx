import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SinglePage from "./SinglePage";
import { getAllProducts } from "../Redux/Slices/ProductSlice";


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);



  const { allProducts, loading, error } = useSelector(
    (state) => state.productReducer,
  );
  console.log(allProducts, loading, error);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-3 p-5 ">
        {allProducts.map((data) => (
          <div className="flex flex-col justify-center items-center border  shadow-2xl rounded p-2">
            <img src={data.thumbnail} alt="" />
            <h1 className="font-bold text-xl text-blue-500">{data.title}</h1>
            {/* <h5 className="font-bold">${data.price}</h5>
            <p  className="text-gray-600">{data.description}</p> */}
            <Link to={`${data.id}/singlePage`} className="bg-blue-500 p-2 border rounded text-white">
              View More...
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
