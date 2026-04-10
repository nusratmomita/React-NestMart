import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const AddToCartStyle1 = () => {
  return (
    <div className='bg-[#1c875133] text-[#1d8751] py-2.5 px-5 text-[14px] font-bold rounded-sm flex justify-center items-center gap-2 hover:bg-[#1d8751] hover:text-white cursor-pointer hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-0.75 transition'>
        <CiShoppingCart className='text-[18px] font-bold'/>
        <span>Add</span>
    </div>
  )
}

export default AddToCartStyle1