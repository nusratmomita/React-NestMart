import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import AddToCartStyle1 from '../Buttons/AddToCartStyle1';
import AddToCartStyle2 from '../Buttons/AddToCartStyle2';
import Countdown from 'react-countdown';

const DealsOfTheDay = ({popularProducts}) => {
    console.log(popularProducts);

    const DailyBestSellsData = [
        {
            "id": 11,
            "product_name": "Chen Watermelon",
            "stars": 4,
            "total_reviews": 10,
            "sold_by": "Global Store",
            "current_price": 70.00,
            "previous_price": 942.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/JRVbz7BT/deal-Of-The-Day1.png",
            "days": 256,
            "hours": 20,
            "mins": 56,
            "secs": 20
        },

        {
            "id": 12,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "stars": 3,
            "total_reviews": 10,
            "sold_by": "GoPro",
            "current_price": 1060.00,
            "previous_price": 1638.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/cK3xP35F/deal-Of-The-Day2.png",
            "days": 283,
            "hours": 10,
            "mins": 35,
            "secs": 25
        },

        {
            "id": 13,
            "product_name": "All Natural Italian-Style Chicken Meatballs",
            "stars": 4.5,
            "total_reviews": 10,
            "sold_by": "Global Store",
            "current_price": 744.00,
            "previous_price": 1958.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/kgvb33Cd/deal-Of-The-Day3.png",
            "days": 150,
            "hours": 22,
            "mins": 15,
            "secs": 5
        },

        {
            "id": 14,
            "product_name": "Encore Seafoods Stuffed Alaskan (Digital)",
            "stars": 3,
            "total_reviews": 10,
            "sold_by": "GoPro",
            "current_price": 1065.00,
            "previous_price": 1628.00,
            "dealOfTheDayImage": "https://i.ibb.co.com/qMV66LXB/deal-Of-The-Day4.png",
            "days": 26,
            "hours": 28,
            "mins": 16,
            "secs": 25
        }
    ]

    
    return (
      <div className='container'>
        <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E] mt-10 px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>Deals Of The Day</h3>
        {/* <div>
          {
              popularProducts.map((product) => (
                  <ProductCard key={product.id} product={product} dealsOfTheDay={true}/>
              ))
          }
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-30 md:gap-30 lg:gap-20 xl:gap-15 2xl:gap-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0 pb-20 md:pb-0 xl:pb-0 2xl:pb-0'>
          { 
              DailyBestSellsData.map((product) => {

                const targetDate = new Date();
                  targetDate.setDate(targetDate.getDate() + (product.days || 0));
                  targetDate.setHours(targetDate.getHours() + (product.hours || 0));
                  targetDate.setMinutes(targetDate.getMinutes() + (product.mins || 0));
                  targetDate.setSeconds(targetDate.getSeconds() + (product.secs || 0));

                  return(
                    <div key={product.id} className='cursor-pointer group bordert-3 md:border-black lg:border-red-900 xl:border-blue-900 2xl:border-purple-800'>
                      <img className='rounded-[15px] object-cover w-full' src={product.dealOfTheDayImage} alt="dealOfTheDayImage" />
                        <div className='flex justify-center items-center relative'>
                          <Countdown 
                            date={targetDate}
                            renderer={({ days, hours, minutes, seconds }) => {
                                return (
                                  <div className="flex gap-2 justify-center mb-4 absolute -top-45 md:-top-55 xl:-top-55 2xl:-top-55 transform transition duration-300 group-hover:-translate-y-3 px-5 md:px-0 lg:px-0 2xl:px-0">
                                    <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{days} 
                                      <br />
                                      <span className='text-[#707070] font-medium'>Days</span>
                                    </div>
                                    <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{hours} 
                                      <br />
                                      <span className='text-[#707070] font-medium'>Hours</span>
                                    </div>
                                    <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{minutes} 
                                      <br />
                                      <span className='text-[#707070] font-medium'>Mins</span>
                                    </div>
                                    <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{seconds} 
                                      <br />
                                      <span className='text-[#707070] font-medium'>Sec</span>
                                    </div>
                                  </div>
                                );
                              }
                            }
                          />
                        </div>

                        <div className='flex justify-center items-center relative'>
                          <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.05)] rounded-[10px] px-7.5 py-6.25 absolute -top-25 md:-top-35 2xl:-top-30 w-full max-w-[86%] mx-auto transform transition duration-300 group-hover:-translate-y-3'>
                            <h4 className='truncate text-[16px] font-bold text-[#253d4e] mb-6' title={product?.product_name}>{product.product_name}</h4>
                            <div className='flex items-center'>
                                <div className='my-1.25 flex'>
                                    {[1,2,3,4,5].map((star) => {
                                        if (star <= Math.floor(product?.stars)) {
                                        return <FaStar key={star} className='text-[#fdc040] text-sm' />;
                                        } else if (star === Math.ceil(product?.stars) && product?.stars % 1 !== 0) {
                                        return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
                                        } else {
                                        return <FaRegStar key={star} className='text-sm text-[#707070]' />;
                                        }
                                    })}
                                </div>
                                <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
                            </div>
                            <h4 className='font-semibold mt-1.25'>
                              <span className='text-[#707070]'>Sold By </span>
                              <span className='text-[#1d8751] underline hover:text-[#fdc040] hover:no-underline cursor-pointer'>{product?.sold_by}</span>
                            </h4>
                            <div className='mt-3 flex justify-between'>
                              <div>
                                <h4 className='text-[#1d8751] font-bold'>${product?.current_price.toFixed(2)}</h4>
                                <h4 className='text-[#1d8751] font-bold line-through text-sm'>${product?.previous_price.toFixed(2)}</h4>
                              </div>
                              <AddToCartStyle1/>
                            </div>
                          </div>
                        </div>
                    </div>
                  )
              })
          }
        </div>
      </div>
    )
}

export default DealsOfTheDay