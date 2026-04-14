import React from 'react'
import { images } from '../../Data/config'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'

const RecentlyAdded = () => {
    const topSelling = [
        {
            "id": 1,
            "product_name": "Blue Diamond Almonds Lightly",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 282,
            "previous_price": 807,
            "image": images.trendingProducts2
        },
        {
            "id": 2,
            "product_name": "Chobani Complete Vanilla Greek",
            "rating": 4,
            "total_reviews": 10,
            "current_price": 1269,
            "previous_price": 2438,
            "image": images.topSelling3
        },
        {
            "id": 3,
            "product_name": "Canada Dry Ginger Ale – 2 L Bottle",
            "rating": 4.5,
            "total_reviews": 10,
            "current_price": 110,
            "image": images.topSelling1
        },
        {
            "id": 4,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 1065,
            "previous_price": 1628,
            "image": images.topSelling2
        }
    ]
    return (
        <div>
            <h3 className='text-[32px] font-bold text-[#253D4E] mt-30 md:mt-30 lg:mt-30 2xl:mt-45 section_title'>Recently Added</h3>
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

export default RecentlyAdded