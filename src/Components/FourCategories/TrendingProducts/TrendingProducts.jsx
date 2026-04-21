import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import { images } from '../../../Data/config'
import SingleCategoryCard from '../SingleCategoryCard'

const TrendingProducts = () => {
    const trendingProducts = [
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
            "image": images.trendingProducts1
        },
        {
            "id": 4,
            "product_name": "Nestle Original Coffee-Mate Coffee Creamer",
            "rating": 5,
            "total_reviews": 10,
            "current_price": 896,
            "previous_price": 996,
            "image": images.topSelling2
        }
    ]
    return (
        <div className='mt-10 md:mt-10 lg:mt-10 xl:mt-0'>
            <h3 className='text-[20px] md:text-[24px] lg:text-[24px] 2xl:text-[24px] font-bold text-[#253D4E] section_title'>Trending Products</h3>
            <div className='mt-5 space-y-5'>
                {
                    trendingProducts.map((product) => (
                        <SingleCategoryCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts