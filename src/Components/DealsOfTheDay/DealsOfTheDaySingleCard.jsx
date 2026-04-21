import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import Countdown from 'react-countdown';
import Button from '../Buttons/Button';
import ReviewStar from '../ReviewStar/ReviewStar';

const DealsOfTheDaySingleCard = ({product}) => {

    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + (product.days || 0));
    targetDate.setHours(targetDate.getHours() + (product.hours || 0));
    targetDate.setMinutes(targetDate.getMinutes() + (product.mins || 0));
    targetDate.setSeconds(targetDate.getSeconds() + (product.secs || 0));

  return (
    <div className='cursor-pointer group'>
        <img className='rounded-[15px] object-cover w-full h-full' src={product.dealOfTheDayImage} alt="dealOfTheDayImage" />
        <div className='flex justify-center items-center relative'>
            <Countdown 
                date={targetDate}
                renderer={({ days, hours, minutes, seconds }) => {
                    return (
                        <div className="flex gap-2 justify-center mb-4 absolute -top-35 transform transition duration-300 group-hover:-translate-y-3 px-5 md:px-0 lg:px-0 2xl:px-0">
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
                }}
            />
        </div>

        <div className='flex justify-center items-center relative'> 
            <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.05)] rounded-[10px] px-7.5 py-6.25 absolute -top-16 w-full max-w-[86%] mx-auto transform transition duration-300 group-hover:-translate-y-3'>
            <h4 className='truncate text-[14px] font-bold text-[#253d4e] mb-6' title={product?.product_name}>{product.product_name}</h4>
            <div className='flex items-center'>
                <ReviewStar rating={product?.stars}/>
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
                <Button buttonText="Add" Icon={CiShoppingCart} variant="light"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DealsOfTheDaySingleCard