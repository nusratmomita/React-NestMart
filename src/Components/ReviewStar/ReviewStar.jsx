import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewStar = ({rating}) => {
  return (
    <div className='my-1.25 flex'>
        {[1,2,3,4,5].map((star) => {
            if (star <= Math.floor(rating)) {
            return <FaStar key={star} className='text-[#fdc040] text-sm' />;
            } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
            return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
            } else {
            return <FaRegStar key={star} className='text-sm text-[#707070]' />;
            }
        })}
    </div>
  )
}

export default ReviewStar