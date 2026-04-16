import React from 'react'
import { images } from '../../Data/config'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'

const TrendingProducts = () => {
    const topSelling = [
        {
            "id": 1,
            "product_name": "Simply Lemonade with Raspberry Juice",
            "rating": 4,
            "total_reviews": 10,
            "current_price": 956,
            "previous_price": 2720,
            "image": images.trendingProducts1
        },
        {
            "id": 2,
            "product_name": "Signature Wood-Fired Mushroom and Caramelized (Digital)",
            "rating": 3.5,
            "total_reviews": 10,
            "current_price": 810,
            "previous_price": 2720,
            "image": images.topSelling4
        },
        {
            "id": 3,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "rating": 4,
            "total_reviews": 10,
            "current_price": 1060,
            "previous_price": 2720,
            "image": images.topSelling3
        },
        {
            "id": 4,
            "product_name": "Nestle Original Coffee-Mate Coffee Creamer",
            "rating": 5,
            "total_reviews": 10,
            "current_price": 896,
            "previous_price": 996,
            "image": images.trendingProducts2
        }
    ]
    return (
        <div className='mt-20 xl:mt-30 2xl:mt-30'>
            <h3 className='text-[20px] md:text-[24px] lg:text-[24px] 2xl:text-[24px] font-bold text-[#253D4E] section_title'>Trending Products</h3>
            <div className='mt-5 space-y-5'>
                {
                    topSelling.map((product) => (
                        <div key={product?.id} className='flex gap-4 transform transition duration-300 hover:-translate-y-1'>
                            <img className='w-24 h-24 rounded-[10px] cursor-pointer' src={product?.image} alt="top product image" />
                            <div className='mt-2 space-y-1'>
                                <h4 className='text-[#1d8751] font-bold truncate hover:text-[#fdc040] cursor-pointer max-w-[60%] w-full' title={product?.product_name}>{product?.product_name} </h4>
                                <div className='flex items-center'>
                                    <div className='flex'>
                                        {[1,2,3,4,5].map((star) => {
                                            if (star <= Math.floor(product?.rating)) {
                                            return <FaStar key={star} className='text-[#fdc040] text-sm' />;
                                            } else if (star === Math.ceil(product?.total_rating) && product?.total_rating % 1 !== 0) {
                                            return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
                                            } else {
                                            return <FaRegStar key={star} className='text-sm text-[#707070]' />;
                                            }
                                        })}
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
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts