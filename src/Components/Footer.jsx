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

  const companyOptions = [
    {
      option: "About Us",
      href: "#"
    },
    {
      option: "Affiliate",
      href: "#"
    },
    {
      option: "Career",
      href: "#"
    },
    {
      option: "Contact Us",
      href: "#"
    }
  ]

  const categoryOptions = [
    {
      option: "Milk & Dairy",
      href: "#"
    },
    {
      option: "Clothing & Beauty",
      href: "#"
    },
    {
      option: "Pet Toy",
      href: "#"
    },
    {
      option: "Baking",
      href: "#"
    },
    {
      option: "Fresh Foods",
      href: "#"
    },
    {
      option: "Diet Foods",
      href: "#"
    }
  ]

  const informationOptions = [
    {
      option: "Contact Us",
      href: "#"
    },
    {
      option: "About Us",
      href: "#"
    },
    {
      option: "Cookie Policy",
      href: "#"
    },
    {
      option: "Terms & Conditions",
      href: "#"
    },
    {
      option: "Return & Exchange",
      href: "#"
    },
    {
      option: "Shipping & Delivery",
      href: "#"
    },
    {
      option: "Privacy Policy",
      href: "#"
    }
  ]

  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        <div className='mt-10 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-15'>
          <img className='max-w-[35%] lg:max-w-[50%] w-full' src={siteLogo} alt="siteLogo" />
          <p className='text-[#253D4E] font-medium text-[16px] mt-5'>Awesome grocery store website <br /> template</p>
          <div className='mt-5 space-y-2 2xl:space-y-3'>
            <div className='flex flex-col md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <CiLocationOn className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-bold text-[14px]'>Address: </h4>
                <span className='text-black font-medium text-[14px]'>5171 W Campbell Ave undefined</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-black font-medium text-[14px]'>Kent, Utah 53127 United States</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <TfiHeadphoneAlt className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-bold text-[14px]'>Call Us:</h4>
                <span className='text-black font-medium text-[14px]'>(+91) - 540-025-124553</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <IoIosSend className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-bold text-[14px]'>Email:</h4>
                <span className='text-black font-medium text-[14px]'>sale@Nest.com</span>
              </div>
            </div>
            <div className='flex flex-row md:flex-col lg:flex-col 2xl:flex-col gap-1'>
              <div className='flex'>
                <RiTimer2Line className='text-[#1d8751] text-2xl mr-1'/>
                <h4 className='text-black font-bold text-[14px]'>Working Hours:</h4>
                <span className='text-black font-medium text-[14px]'>10:00 - 18:00, Mon - Sat</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-15 xl:ml-10'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Company</h3>
          <ul>
            {
              companyOptions.map((company,index) => (
                <li key={index} className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>
                  <a href={company.href}>
                    {company.option}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>  

        <div className='mt-5 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Categories</h3>
          <ul>
            {
              categoryOptions.map((category,index) => (
                <li key={index} className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>
                  <a href={category.href}>
                    {category.option}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>  

        <div className='mt-5 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-15'>
          <h3 className='text-[#253d4e] text-[24px] font-semibold mb-5'>Information</h3>
          <ul>
            {
              informationOptions.map((information,index) => (
                <li key={index} className='text-black hover:text-[#1d8751] hover:ml-2 font-medium text-[14px] mb-4 transition-all duration-300 cursor-pointer'>
                  <a href={information.href}>
                    {information.option}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>  

        <div className='mt-5 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-15'>
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
      <div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between md:items-center lg:items-center xl:items-center 2xl:items-center gap-6 pb-10 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        <div>
          <h4 className='text-[14px] text-[#4c4c4c]'>Copyright © {new Date().getFullYear()} Nest all rights reserved. Powered by Botble.</h4>
        </div>

        <div className='flex xl:justify-center 2xl:justify-center items-center gap-2 xl:mr-15 2xl:mr-15'>
          <div>
            <FiPhoneCall  className='text-3xl xl:text-4xl 2xl:text-4xl text-[#4c4c4c]'/>
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