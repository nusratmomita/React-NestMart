import React from 'react'
import siteLogo from "../assets/logo.png"
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { RiTimer2Line } from "react-icons/ri";
import playStore from "../assets/app-store.jpg";
import googleStore from "../assets/google-play.jpg";
import payment from "../assets/payment-methods.png";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        <div className='mt-15 max-w-75 w-full'>
          <img className='max-w-[50%] w-full' src={siteLogo} alt="siteLogo" />
          <p className='text-[#253D4E] font-medium text-[16px] mt-5'>Awesome grocery store website template</p>
          <div className='mt-5 space-y-2 2xl:space-y-3'>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <CiLocationOn className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-semibold text-[14px]'>Address: </h4>
                <span className='text-black font-medium text-[14px]'>5171 W Campbell Ave undefined</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-black font-medium text-[14px]'>Kent, Utah 53127 United States</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex gap-1'>
                <TfiHeadphoneAlt className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-semibold text-[14px]'>Call Us:</h4>
                <span className='text-black font-medium text-[14px]'>(+91) - 540-025-124553</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <IoIosSend className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-semibold text-[14px]'>Email:</h4>
                <span className='text-black font-medium text-[14px]'>sale@Nest.com</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <RiTimer2Line className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-semibold text-[14px]'>Working Hours: :</h4>
                <span className='text-black font-medium text-[14px]'>10:00 - 18:00, Mon - Sat</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 2xl:mt-15 ml-0 md:ml-0 lg:ml-6 2xl:ml-6'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Company</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>About Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Affiliate</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Career</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Contact Us</li>
          </ul>
        </div>  

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Categories</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Milk & Dairy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Clothing & beauty</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Pet Toy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Baking</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Fresh Foods</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Diet Foods</li>
          </ul>
        </div>  

        <div className='mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Information</h3>
          <ul>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Contact Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>About Us</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Cookie Policy</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Terms & Conditions</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Return & Exchange</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Shipping & Delivery</li>
            <li className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>Privacy Policy</li>
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
      <hr className='border-t border-[#63bd8e] my-10'/>
      <div className='flex justify-between items-center pb-10'>
        <div>
          <h4 className='text-[14px] text-[#4c4c4c]'>Copyright © {new Date().getFullYear()} Nest all rights reserved. Powered by Botble.</h4>
        </div>

        <div className='flex justify-center items-center gap-2 mr-15'>
          <div>
            <FiPhoneCall  className='text-4xl text-[#4c4c4c]'/>
          </div>
          <div>
            <h3 className='text-[#258751] text-2xl font-bold'>1900 - 888</h3>
            <h4 className='text-[#4c4c4c] text-[11px] font-medium -mt-2'>24/7 Support Center</h4>
          </div>
        </div>

        <div>
          <div className='flex gap-1'>
            <h4 className='font-bold'>Follow Us</h4>
            <div className='flex gap-2'>
              <a href="www.facebook.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaFacebookF className='text-[14px]'/>
                </div>
              </a>
              <a href="www.x.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <CiTwitter className='text-[14px]'/>
                </div>
              </a>
              <a href="www.instagram.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaInstagram className='text-[14px]'/>
                </div>
              </a>
              <a href="www.pinterest.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaPinterestP className='text-[14px]'/>
                </div>
              </a>
              <a href="www.youtube.com" target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaYoutube className='text-[14px]'/>
                </div>
              </a>
            </div>
          </div>
          <h4 className='text-[#4c4c4c] text-[14px] font-medium leading-6'>Up to 15% discount on your first subscribe</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer