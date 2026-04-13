import React from 'react'
import { IoIosSend } from 'react-icons/io'

const NewsletterTextAndForm = () => {
  return (
    <div>
        <h2 className='text-[#253d4e] text-[40px] font-bold mb-5 w-[60%] leading-12.5'>Stay home & get your daily needs from our shop</h2>
        <p className='text-[#4c4c4c] text-[18px] font-normal'>Start Your Daily Shopping with Nest Mart</p>
        <div className='mt-10 relative w-120 '>
            <div className='flex items-center gap-2 bg-white w-full p-4 rounded-4xl'>
                <IoIosSend className='text-[#4c4c4c]'/>
                <input type="email" placeholder='Enter Your Email' className='text-[16px] outline-none'/>
            </div>

            <div className='absolute top-0 right-0 mt-px'>
                <button className='bg-[#1D8751] text-white p-2 rounded-3xl w-32.5 h-12.5 text-xl font-semibold'>
                Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewsletterTextAndForm