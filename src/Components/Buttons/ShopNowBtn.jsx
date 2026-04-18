import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ShopNowBtn = () => {
  return (
    <a href='#'>
        <button className='cursor-pointer bg-[#1d8751] text-white text-[12px] font-semibold flex justify-center items-center gap-1 rounded-sm pt-1.75 pr-5 pb-1.75 pl-5 
        mt-10 hover:bg-[#fdc040] hover:text-black group transition-all duration-300'>Shop Now <FaArrowRight className='group-hover:pl-1'/> </button>
    </a>
  )
}

export default ShopNowBtn