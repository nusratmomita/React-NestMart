import React from 'react'
import testimonial_quote from "../../assets/testimonial-quote.png";
import { FaStar } from "react-icons/fa";

const TestimonialSingleCard = ({testimonial}) => {
  return (
    <div key={testimonial.id} className='border border-[#ececec] w-full flex flex-col justify-start items-start p-7.5 transform transition duration-300 hover:-translate-y-1 hover:border-t-transparent hover:border-r-transparent hover:border-l-transparent'>
        <img className='max-w-10 mx-auto mb-5' src={testimonial_quote} alt="testimonial_quote" />
        <div className='flex justify-start items-start mb-5'>
            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
        </div>
        <p className='text-[#707070] mb-10'>{testimonial.description}</p>
        <div className='flex gap-5'>
            <img className='rounded-full w-12.5 h-12.5' src={testimonial.reviewer_image} alt={testimonial.reviewer} />
            <div>
                <h4 className='text-[#253D4E] font-bold'>{testimonial.reviewer}</h4>
                <h4 className='text-[#707070] text-[13px]'>{testimonial.reviewer_post}</h4>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSingleCard