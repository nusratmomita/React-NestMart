import React from 'react'
import siteLogo from "../assets/logo.png"
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { RiTimer2Line } from "react-icons/ri";
import playStore from "../assets/app-store.jpg";
import googleStore from "../assets/google-play.jpg";
import payment from "../assets/payment-methods.png";

const Footer = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pb-20 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        <div className='mt-15'>
          <div>
            <img className='max-w-[50%] w-full' src={siteLogo} alt="siteLogo" />
            <p className='text-[#253D4E] font-medium text-[16px] mt-5'>Awesome grocery store website template</p>
            <div className='mt-5 space-y-2 2xl:space-y-3'>
              <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
                <div className='flex'>
                  <CiLocationOn className='text-[#1d8751] text-2xl'/>
                  <h4 className='text-black font-semibold text-[14px]'>Address:</h4>
                </div>
                <div className='flex items-center'>
                  <span className='text-black font-medium text-[14px]'>5171 W Campbell Ave undefined Kent</span>
                </div>
              </div>
              <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
                <div className='flex gap-1'>
                  <TfiHeadphoneAlt className='text-[#1d8751] text-2xl'/>
                  <h4 className='text-black font-semibold text-[14px]'>Call Us:</h4>
                </div>
                <div className='flex items-center'>
                  <span className='text-black font-medium text-[14px]'>(+91) - 540-025-124553</span>
                </div>
              </div>
              <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
                <div className='flex'>
                  <IoIosSend className='text-[#1d8751] text-2xl'/>
                  <h4 className='text-black font-semibold text-[14px]'>Email:</h4>
                </div>
                <div className='flex items-center'>
                  <span className='text-black font-medium text-[14px]'>sale@Nest.com</span>
                </div>
              </div>
              <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
                <div className='flex'>
                  <RiTimer2Line className='text-[#1d8751] text-2xl'/>
                  <h4 className='text-black font-semibold text-[14px]'>Working Hours: :</h4>
                </div>
                <div className='flex items-center'>
                  <span className='text-black font-medium text-[14px]'>10:00 - 18:00, Mon - Sat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Company</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>About Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Affiliate</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Career</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Contact Us</li>
          </ul>
        </div>  

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Categories</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Milk & Dairy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Clothing & beauty</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Pet Toy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Baking</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Fresh Foods</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Diet Foods</li>
          </ul>
        </div>  

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Information</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Contact Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>About Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Cookie Policy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Terms & Conditions</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Return & Exchange</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Shipping & Delivery</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-2 transition-all duration-300 cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>  

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Install App</h3>
          <p className='text-black font-medium text-[16px]'>From App Store or Google Play</p>
          <div className='mt-5 flex'>
            <img className='max-w-32 w-full' src={playStore} alt="playStore" />
            <img className='max-w-32 w-full' src={googleStore} alt="googleStore" />
          </div>
          <p className='text-black font-medium text-[16px] mt-5'>Secured Payment Gateways</p>
          <img className='mt-2' src={payment} alt="payment" />
        </div>  
      </div>
    </div>
  )
}

export default Footer