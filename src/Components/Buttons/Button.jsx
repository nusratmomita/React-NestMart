import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const Button = ({buttonText}) => {
  return (
    <div className={`mt-4 md:mt-0 lg:mt-0 xl:mt-0 py-2.5 px-5 text-[14px] font-bold rounded-sm flex justify-center items-center gap-2 cursor-pointer hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:-translate-y-0.75 transition
                    ${
                    buttonText === "Add To Cart" ? 
                    "bg-[#1d8751] text-white hover:bg-[#fdc040] hover:text-white" 
                    : "bg-[#1c875133] text-[#1d8751] hover:bg-[#1d8751] hover:text-white" }
                    `}
                    >
        <CiShoppingCart className='text-[18px] font-bold'/>
        <span>{buttonText}</span>
    </div>
  )
}

export default Button