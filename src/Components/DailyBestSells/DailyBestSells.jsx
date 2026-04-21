import React from 'react'
import DailyBestSellsImage from './DailyBestSellsImage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const DailyBestSells = ({popularProductsData}) => {
  return (
    <div className='container'>
      <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E] mt-10 mb-10 px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>Daily Best Sells</h3>
      <div className='flex gap-5 flex-col lg:flex-row px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        <div className='w-full lg:w-[25%]'>
          <DailyBestSellsImage/>
        </div>
        <div className='w-full lg:w-[75%] relative'>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation,Autoplay]}
            navigation={{
              nextEl: ".product-swiper-btn-next",
              prevEl: ".product-swiper-btn-prev"
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: {slidesPerView: 1},
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
          >
            {
              popularProductsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} progressBar={true} style1={false} companyName={false} price_side_by_side={true}></ProductCard>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="daily_prod_swiper_nav flex gap-3 mt-4">
            <button className="product-swiper-btn-prev bg-[#f2f3f4] rounded-full hover:bg-[#1d8751] group cursor-pointer absolute top-[30%] left-3 z-100">
              <FaArrowLeftLong className='w-8 h-8 p-2 group-hover:text-white text-[#4c4c4c]'/>
            </button>

            <button className="product-swiper-btn-next bg-[#f2f3f4] rounded-full hover:bg-[#1d8751] group cursor-pointer absolute top-[30%] right-3 z-100">
              <FaArrowRightLong className='w-8 h-8 p-2 group-hover:text-white text-[#4c4c4c]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyBestSells