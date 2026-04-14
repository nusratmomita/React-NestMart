import React from 'react'
import "./Banner.css";
import { IoIosSend } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='banner_section'>
        <div className='py-15'>
            <div className="container">
                <div className=''>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        // navigation
                        // pagination={{ clickable: true }}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        effect="fade"
                        speed={1000}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                        }}
                        >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className='banner_one pt-40 pl-4 lg:pl-12 pb-40 rounded-4xl mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
                                <h2 className='text-[45px] lg:text-[72px] font-bold text-[#253D4E] md:w-[60%] lg:w-[50%] leading-12 lg:leading-22.5'>
                                    Fresh Vegetables Big Discount
                                </h2>
                                <h4 className='font-normal text-[20px] lg:text-[24px] text-[#4c4c4c] mt-5'>
                                    Sign Up For The Daily Newsletter
                                </h4>

                                <div className='mt-10 relative w-70 md:w-90 lg:w-105'>
                                    <div className='flex items-center gap-2 bg-white w-full p-4 rounded-4xl'>
                                        <IoIosSend className='text-[#4c4c4c]'/>
                                        <input type="email" placeholder='Enter Your Email' className='text-[16px] outline-none'/>
                                    </div>

                                    <div className='absolute top-px lg:top-0 right-1.25 lg:right-0 mt-px'>
                                        <button className='bg-[#1D8751] text-white p-2 rounded-3xl w-32.5 h-12.5 text-xl font-semibold'>
                                        Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className='banner_two pt-40 pl-4 lg:pl-12 pb-40 rounded-4xl mx-5 md:mx-5 lg:mx-5 xl:mx-5'>
                                <h2 className='text-[45px] lg:text-[72px] font-bold text-[#253D4E] md:w-[60%] lg:w-[50%] leading-12 lg:leading-22.5'>
                                    Don't Miss Amazing Grocery Deals
                                </h2>
                                <h4 className='font-normal text-[20px] lg:text-[24px] text-[#4c4c4c] mt-5'>
                                    Get 50% Off On First Order
                                </h4>

                                <div className='mt-10 relative w-70 md:w-90 lg:w-105'>
                                <div className='flex items-center gap-2 bg-white w-full p-4 rounded-4xl'>
                                    <IoIosSend className='text-[#4c4c4c]'/>
                                    <input type="email" placeholder='Enter Your Email' className='text-sm outline-none'/>
                                </div>

                                <div className='absolute top-px lg:top-0 right-1.25 lg:right-0 mt-px'>
                                    <button className='bg-[#1D8751] text-white p-2 rounded-3xl w-32.5 h-12.5 text-xl font-semibold'>
                                    Subscribe
                                    </button>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <button className="custom-prev"></button>
                        <button className="custom-next"></button> */}

                    </Swiper>
                </div>
                <div className='w-[30%]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner