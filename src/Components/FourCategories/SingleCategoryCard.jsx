import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import ReviewStar from '../ReviewStar/ReviewStar'

const SingleCategoryCard = ({product}) => {
  return (
    <div className='mt-2 space-y-1 flex items-center gap-4 transform transition duration-300 hover:-translate-y-1'>
        <img className='w-24 h-24 rounded-[10px] cursor-pointer' src={product?.image} alt="top product image" />
        <div className='space-y-1.5'>
            <h4 className='text-[#1d8751] font-bold truncate hover:text-[#fdc040] cursor-pointer max-w-[60%] w-full' title={product?.product_name}>{product?.product_name} </h4>
            <div className='flex items-center'>
                <div className='flex'>
                    <ReviewStar rating={product.rating}/>
                </div>
                <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
            </div>
            {
                product.previous_price ? 
                <div>
                    {
                        <div className='flex items-center gap-2'>
                            <h4 className='text-[#1d8751] font-semibold text-md mt-px'>${product?.current_price.toFixed(2)}</h4>
                            <h4 className='text-[#1d8751] font-semibold line-through text-md mt-px'>${product?.previous_price.toFixed(2)}</h4>
                        </div>

                    }
                </div>
                :
                <div>
                    <h4 className='text-[#1d8751] font-semibold text-md mt-px'>${product.current_price.toFixed(2)}</h4>
                </div>
            }
        </div>
    </div>
  )
}

export default SingleCategoryCard