  import React, { useEffect, useState } from "react";

  import Header from "../components/Header";
  import { useDispatch, useSelector } from "react-redux";
  import { addtoCart, deleteCart, emptyCart, reduceFromCart } from "../Redux/Slices/CartSlice";

  const Cart = () => {
    const {CartData}=useSelector((state)=>state.cartReducer)
    console.log(CartData)
    const[totalCart,setTotalCart]=useState(0)

    useEffect(()=>{
if(CartData.length>0){
  setTotalCart(CartData.reduce((acc,curr)=>acc+curr.totalPrice,0))
}
    },[CartData])

    const dispatch=useDispatch( )
    return (
      <>
        <Header />

        <h1 className="text-center font-bold text-6xl text-blue-500"> MY CART</h1>

        <div className="flex justify-center gap-10 my-20 ">
          <div className="">
          <table className="border w mx-10 text-center bg-gray-700 text-white">
  <tbody>
    <tr className="border">
      <th>Name</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Action</th>
    </tr>

    {CartData.map((dataE) => (
      <tr key={dataE.id} className="border">
        <td>{dataE.title}</td>

        <td>
          <img className="h-30" src={dataE.thumbnail} alt="" />
        </td>

        <td>{dataE.quantity}</td>

        <td>{dataE.price}</td>

        <td>
          <div className="flex gap-2">
            <button onClick={()=>dispatch(reduceFromCart(dataE))} className="border p-1 my-10 bg-violet-700 text-white rounded-xl shadow-2xl border-gray-200">
              -
            </button>

            <button onClick={()=>dispatch(deleteCart(dataE.id))} className="border p-1 my-10 mx bg-violet-700 text-white rounded-xl shadow-2xl border-gray-200">
              Delete
            </button>

            <button
              onClick={() => dispatch(addtoCart(dataE))}
              className="border p-1 my-10 mx bg-violet-700 text-white rounded-xl shadow-2xl border-gray-200"
            >
              +
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>


          <div className="w-100 h-30 border rounded-2xl shadow-2xl border-gray-100">
            <h1 className="text-center  font-bold text-2xl text-sky-700 ">Total Amount :{totalCart}  </h1>
            <hr className="mx-2" /> 
            <button onClick={()=>{
              dispatch(emptyCart())
            setTotalCart(0)
            }} className="border p-1 w-98 bg-green-500  text-white rounded-xl shadow-2xl border-gray-100 my-10">CheckOut</button>

          </div>
        </div>
      </>
    );
  };

  export default Cart;
