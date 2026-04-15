import React from 'react'
import "./DemoProduct.css";
import { FaArrowRight } from "react-icons/fa6";
import ShopNowBtn from './Buttons/ShopNowBtn';

const DemoProducts = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 quicksand-font px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0 mt-20'>
            <div className='product_one pb-20 w-full rounded-[10px] mt-5 md:mt-10 lg:mt-10'>
                <h4 className='pt-20 pl-5 lg:pl-10 text-[24px] font-bold min-h-25 text-[#253D4E] lg:w-full xl:w-[80%]'>Everyday Fresh & Clean with Our Products</h4>
                <div className='pl-5 lg:pl-10'>
                    <ShopNowBtn/>
                </div>
            </div>

            <div className='product_two pb-20 w-full rounded-[10px] mt-5 md:mt-10 lg:mt-10'>
                <h4 className='pt-20 pl-5 lg:pl-10 text-[24px] font-bold min-h-25 text-[#253D4E] lg:w-[95%] xl:w-[75%]'>Make your Breakfast Healthy and Easy</h4>
                <div className='pl-5 lg:pl-10'>
                    <ShopNowBtn/>
                </div>
            </div>

            <div className='product_three pb-20 w-full rounded-[10px] mt-5 md:mt-10 lg:mt-10'>
                <h4 className='pt-20 pl-5 lg:pl-10 text-[24px] font-bold min-h-25 text-[#253D4E] lg:w-[95%] xl:w-[70%]'>The best Organic Products Online</h4>
                <div className='pl-5 lg:pl-10'>
                    <ShopNowBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemoProducts