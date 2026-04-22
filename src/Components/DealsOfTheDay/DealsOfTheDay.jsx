import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import DealsOfTheDaySingleCard from './DealsOfTheDaySingleCard';

const DealsOfTheDay = () => {
    const DealOfTheDayData = [
        {
            "id": 101,
            "product_name": "Chen Watermelon",
            "stars": 4,
            "total_reviews": 10,
            "sold_by": "Global Store",
            "current_price": 70.00,
            "total_selling": 6,
            "previous_price": 942.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/JRVbz7BT/deal-Of-The-Day1.png",
            "days": 256,
            "hours": 20,
            "mins": 56,
            "secs": 20
        },

        {
            "id": 102,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "stars": 3,
            "total_reviews": 10,
            "sold_by": "GoPro",
            "current_price": 1060.00,
            "total_selling": 7,
            "previous_price": 1638.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/cK3xP35F/deal-Of-The-Day2.png",
            "days": 283,
            "hours": 10,
            "mins": 35,
            "secs": 25
        },

        {
            "id": 103,
            "product_name": "All Natural Italian-Style Chicken Meatballs",
            "stars": 4.5,
            "total_reviews": 10,
            "sold_by": "Global Store",
            "current_price": 744.00,
            "total_selling": 5,
            "previous_price": 1958.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/kgvb33Cd/deal-Of-The-Day3.png",
            "days": 150,
            "hours": 22,
            "mins": 15,
            "secs": 5
        },

        {
            "id": 104,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "stars": 3,
            "total_reviews": 10,
            "sold_by": "GoPro",
            "current_price": 1065.00,
            "total_selling": 4,
            "previous_price": 1628.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/qMV66LXB/deal-Of-The-Day4.png",
            "days": 26,
            "hours": 28,
            "mins": 16,
            "secs": 25
        }
    ]

    return (
      <div className='container pb-30 md:pb-45'>
        <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E] mt-10 px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>Deals Of The Day</h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 lg:gap-y-40 md:gap-y-40 gap-50 md:gap-10 lg:gap-5 xl:gap-5 2xl:gap-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0 pb-20 md:pb-0 xl:pb-0 2xl:pb-0'>
          { 
            DealOfTheDayData.map((product) => (
              <DealsOfTheDaySingleCard key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
    )
}

export default DealsOfTheDay