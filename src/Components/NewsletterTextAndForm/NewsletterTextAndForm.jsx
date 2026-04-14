import React from 'react'
import { IoIosSend } from 'react-icons/io'
import EmailInput from '../EmialInput/EmailInput'

const NewsletterTextAndForm = () => {
  return (
    <div>
        <h2 className='text-[#253d4e] text-[25px] lg:text-[40px] font-bold mb-5 lg:w-[60%] leading-12.5'>Stay home & get your daily needs from our shop</h2>
        <p className='text-[#4c4c4c] text-[18px] font-normal w-[70%] lg:w-full'>Start Your Daily Shopping with Nest Mart</p>
        
        <EmailInput/>
    </div>
  )
}

export default NewsletterTextAndForm