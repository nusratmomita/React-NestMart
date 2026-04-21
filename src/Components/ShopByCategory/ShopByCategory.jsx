import React from 'react'
import { images } from '../../Data/config'
import SingleCategory from './SingleCategory'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ShopByCategory = () => {

    const categories = [
        {
            "id": 1,
            "image": images.category1,
            "cat_name": "Diet foods"
        },
        {
            "id": 2,
            "image": images.category2,
            "cat_name": "Pet foods"
        },
        {
            "id": 3,
            "image": images.category3,
            "cat_name": "Coffee & Tea"
        },
        {
            "id": 4,
            "image": images.category4,
            "cat_name": "Cake & Milk"
        },
        {
            "id": 5,
            "image": images.category5,
            "cat_name": "Bread & juice"
        },
        {
            "id": 6,
            "image": images.category6,
            "cat_name": "Vegetables"
        },
        {
            "id": 7,
            "image": images.category7,
            "cat_name": "Fast foods"
        },
        {
            "id": 8,
            "image": images.category8,
            "cat_name": "Fresh Seafoods"
        },
        {
            "id": 9,
            "image": images.category9,
            "cat_name": "Diet foods"
        },
        {
            "id": 10,
            "image": images.category10,
            "cat_name": "Pet foods"
        },
        {
            "id": 11,
            "image": images.category11,
            "cat_name": "Coffee & Tea"
        },
        {
            "id": 12,
            "image": images.category12,
            "cat_name": "Cake & Milk"
        },
        {
            "id": 13,
            "image": images.category13,
            "cat_name": "Bread & juice"
        }
    ]

    return (
        <div className='container'>
            <div className='flex justify-between items-center mt-10 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
                <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E]'>Shop By Category</h3>
                <div className="category_swiper_nav inline-block">
                    <button className="category-swiper-btn-prev mr-3 bg-[#f2f3f4] rounded-full hover:bg-[#1d8751] group cursor-pointer">
                        <FaArrowLeftLong className='w-8 h-8 p-2 group-hover:text-white text-[#4c4c4c]'/>
                    </button>

                    <button className="category-swiper-btn-next bg-[#f2f3f4] rounded-full hover:bg-[#1d8751] group cursor-pointer">
                        <FaArrowRightLong className='w-8 h-8 p-2 group-hover:text-white text-[#4c4c4c]'/>
                    </button>
                </div>
            </div>
            <div className='relative px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0 '>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".category-swiper-btn-next",
                        prevEl: ".category-swiper-btn-prev"
                    }}
                    breakpoints={{
                        320: { slidesPerView: 3},
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 8 },
                    }}
                >

                
                {
                    categories.map((category)=>(
                        <SwiperSlide key={category.id}>
                            <SingleCategory category={category}/>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
                
            </div>
        </div>
    )
}

export default ShopByCategory