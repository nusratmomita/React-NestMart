import React from 'react'
import DailyBestSellsImage from './DailyBestSells/DailyBestSellsImage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard/ProductCard'

const DailyBestSells = ({popularProductsData}) => {
  return (
    <div className='container'>
      <h3 className='text-[32px] font-bold text-[#253D4E] mt-10 mb-10'>Daily Best Sells</h3>
      <div className='flex gap-5'>
        <div className='w-[25%]'>
          <DailyBestSellsImage/>
        </div>
        <div className='w-[75%]'>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
          >
            {
              popularProductsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} progressBar={true} style={false}></ProductCard>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default DailyBestSells