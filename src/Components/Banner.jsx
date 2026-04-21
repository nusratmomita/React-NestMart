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
import EmailInput from './EmailInput/EmailInput';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight  } from "react-icons/md";
import { TiArrowRight } from 'react-icons/ti';
import Button from './Buttons/Button';


const Banner = () => {
  return (
    <div className='banner_section quicksand-font'>
        <div>
            <div className="container">
                <div className='flex lg:gap-0 xl:gap-1 2xl:gap-5 py-10'>
                    <div className='w-full lg:w-[65%] 2xl:w-[65%] relative'>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            pagination={{ 
                                el: ".swiper_pagination",
                                clickable: true  
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".banner-swiper-btn-next",
                                prevEl: ".banner-swiper-btn-prev"
                            }}
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
                                <div className='banner_one pt-15 pb-20 pl-4 lg:pl-12 rounded-4xl mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
                                    <h2 className='text-[45px] lg:text-[72px] font-bold text-[#253D4E] leading-12 lg:leading-22.5'>
                                        Fresh Vegetables <br className='hidden lg:block 2xl:block'/> Big Discount
                                    </h2>
                                    <h4 className='font-semibold text-[20px] lg:text-[30px] text-[#4c4c4c] mt-10 mb-15'>
                                        Sign Up For The Daily Newsletter
                                    </h4>

                                    <EmailInput/>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className='banner_two pt-15 pb-20 pl-4 lg:pl-12 rounded-4xl mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
                                    <h2 className='text-[45px] lg:text-[72px] font-bold text-[#253D4E] leading-12 lg:leading-22.5'>
                                        Don't Miss Amazing <br className='hidden lg:block 2xl:block'/> Grocery Deals
                                    </h2>
                                    <h4 className='font-semibold text-[20px] lg:text-[30px] text-[#4c4c4c] mt-10 mb-15'>
                                        Get 50% Off On First Order
                                    </h4>

                                    <EmailInput/>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="swiper_pagination"></div>

                        <div className="banner_swiper_nav">
                            <button className="banner-swiper-btn-prev bg-[#f2f3f4] w-11.25 h-11.25 rounded-full hover:bg-[#1d8751] flex justify-center items-center group cursor-pointer absolute top-[50%] left-8 z-40">
                                <MdOutlineKeyboardArrowLeft className='text-[22px] group-hover:text-white text-[#4c4c4c]'/>
                            </button>
                
                            <button className="banner-swiper-btn-next bg-[#f2f3f4] w-11.25 h-11.25 rounded-full hover:bg-[#1d8751] flex justify-center items-center group cursor-pointer absolute top-[50%] right-8 z-40">
                                <MdOutlineKeyboardArrowRight className='text-[22px] group-hover:text-white text-[#4c4c4c]'/>
                            </button>
                        </div>

                    </div>
                    <div className='hidden lg:w-[45%] xl:w-[45%] 2xl:w-[45%] lg:block xl:block 2xl:block lg:mr-5 '>
                        <div className='banner_three rounded-[10px] pt-35 pb-52 pl-13'>
                            <h3 className='text-[24px] text-[#253d4e] font-bold transform transition duration-300 hover:-translate-y-3 cursor-pointer'>Delivered to your home</h3>
                            <div className='mt-22 '>
                                <Button buttonText="Shop Now" Icon={TiArrowRight} iconPosition="right" href="#" variant="shop"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner