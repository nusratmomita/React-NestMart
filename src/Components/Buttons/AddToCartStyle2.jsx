import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const AddToCartStyle2 = () => {
  return (
    <div className='bg-[#1d8751] text-white py-1.25 px-2.5 text-[14px] font-bold rounded-sm flex justify-center items-center gap-2 hover:bg-[#FDC040] hover:text-white  cursor-pointer hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-0.75 transition'>
        <CiShoppingCart className='text-[18px] font-bold'/>
        <span>Add To Cart</span>
    </div>
  )
}

export default AddToCartStyle2