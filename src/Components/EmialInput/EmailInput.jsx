import React from 'react'
import { FiSend } from "react-icons/fi";

const EmailInput = () => {
  return (
    <div className='mt-10 max-w-120 w-full relative'>
        <div className='flex items-center gap-2 bg-white w-full p-4 rounded-4xl'>
            <FiSend className='text-[#4c4c4c]'/>
            <input type="email" placeholder='Enter Your Email' className='text-[16px] outline-none font-semibold'/>
        </div>

        <div className='absolute right-px top-px'>
            <button className='bg-[#1D8751] text-white p-2 flex justify-center items-center rounded-4xl w-38 h-13.5 2xl:px-10 2xl:py-3.75 md:text-xl lg:text-xl 2xl:text-xl font-semibold cursor-pointer'>
            Subscribe
            </button>
        </div>
    </div>
  )
}

export default EmailInput