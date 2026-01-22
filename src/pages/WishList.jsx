import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slices/WishListSlice'

const WishList = () => {
  const{WishListData}=useSelector((state)=>state.wishListReducer)
  const dispatch=useDispatch()
  return (
    <>
    <Header/>
    <h1 className='text-center text-5xl text-amber-500 font-bold'>My Wishlist</h1>

{
  WishListData?.map((Eachdata)=>(
    <div className='flex justify-center my-6 '>
       <div className='h-fit w-90 border border-gray-200 text-center rounded-2xl shadow-2xl'>
      <img className='' src={Eachdata.thumbnail}alt="" />
      <h1 className='text-3xl text-blue-500'>{Eachdata.title}</h1>
      <div className='flex justify-center gap-10 my-10'>
         <button onClick={()=>dispatch(removeFromWishlist)} className='border  p-1 bg-amber-400 text-white'>remove</button>
      <button  className='border p-1 bg-green-400 text-white'>add to cart</button>

      </div>
    </div>
       
     



    </div>
  ))
}
    </>
  )
}

export default WishList