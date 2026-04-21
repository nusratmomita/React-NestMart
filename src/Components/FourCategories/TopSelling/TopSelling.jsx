import React from 'react'
import { images } from '../../../Data/config'

import SingleCategoryCard from '../SingleCategoryCard'

const TopSelling = () => {
    const topSelling = [
        {
            "id": 1,
            "product_name": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 956,
            "image": images.topSelling1
        },
        {
            "id": 2,
            "product_name": "Canada Dry Ginger Ale – 2L Bottle",
            "rating": 3.5,
            "total_reviews": 10,
            "current_price": 810,
            "image": images.topSelling2
        },
        {
            "id": 3,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 1060,
            "previous_price": 2720,
            "image": images.topSelling3
        },
        {
            "id": 4,
            "product_name": "Signature Wood-Fired Mushroom and Caramelized (Digital)",
            "rating": 3,
            "total_reviews": 10,
            "current_price": 896,
            "previous_price": 996,
            "image": images.topSelling4
        }
    ]
    return (
        <div className='mt-10 md:mt-10 lg:mt-10 xl:mt-0'>
            <h3 className='text-[20px] md:text-[24px] lg:text-[24px] 2xl:text-[24px] font-bold text-[#253D4E] section_title'>Top Selling</h3>
            <div className='mt-5 space-y-5'>
                {
                    topSelling.map((product) => (
                        <SingleCategoryCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TopSelling