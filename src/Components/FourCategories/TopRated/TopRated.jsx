import React from 'react'
import { images } from '../../../Data/config'
import SingleCategoryCard from '../SingleCategoryCard'

const TopRated = () => {
    const topRated = [
        {
            "id": 1,
            "product_name": "Blue Diamond Almonds Lightly",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 282,
            "previous_price": 807,
            "image": images.trendingProducts1
        },
        {
            "id": 2,
            "product_name": "Chobani Complete Vanilla Greek",
            "rating": 4,
            "total_reviews": 10,
            "current_price": 1269,
            "previous_price": 2438,
            "image": images.trendingProducts2
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
            "image": images.topSelling3
        }
    ]
    return (
        <div className='mt-10 md:mt-10 lg:mt-10 xl:mt-0'>
            <h3 className='text-[20px] md:text-[24px] lg:text-[24px] 2xl:text-[24px] font-bold text-[#253D4E] section_title'>Top Rated</h3>
            <div className='mt-5 space-y-5'>
                {
                    topRated.map((product) => (
                        <SingleCategoryCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}


export default TopRated