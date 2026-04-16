import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiArrowDownWideLine } from 'react-icons/ri';
import { LuFlagTriangleRight } from "react-icons/lu";

const HeaderTop = () => {
  return (
    <div className='container'>
        <div className='lg:flex justify-between items-center pt-3 hidden'>
            <div className='flex gap-3'>
                <a href="#">
                    <h4 className='text-[13px] text-[#4c4c4c] cursor-pointer'>About Us</h4>
                </a>
                <hr className='bg-[#8a8a8a] h-4 w-px'/>
                <a href="#">
                 <h4 className='text-[13px] text-[#4c4c4c] cursor-pointer'>Track Order</h4>
                </a>
            </div>
            <div className='flex items-center gap-1'>
                <FaStarOfLife className='text-[#4c4c4c]'/>
                <h4 className='text-[14px] text-[#4c4c4c]'>Super Value Deals - Save more with coupons</h4>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                    <h4 className='text-[14px] text-[#4c4c4c] font-semibold'>Need Help?</h4>
                    <h4 className='text-[14px] text-[#4c4c4c] font-semibold'>Call Us:  <span className='text-[#1d8751]'>1900 - 888</span></h4>
                </div>
                <hr className='bg-[#8a8a8a] h-4 w-px'/>
                <div className="dropdown dropdown-hover text-[13px] relative cursor-pointer">
                    <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#4c4c4c] font-medium"><LiaFlagUsaSolid className='text-red-700'/> English <RiArrowDownWideLine></RiArrowDownWideLine > </div>
                    <ul tabIndex="-1" className="dropdown-content absolute -left-10 top-full menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                        <li><a href='#'><LuFlagTriangleRight/>Bangla</a></li>
                        <li><a href='#'><LuFlagTriangleRight/>Arabic</a></li>
                        <li><a href='#'><LuFlagTriangleRight/>Spanish</a></li>
                        <li><a href='#'><LuFlagTriangleRight/>French</a></li>
                    </ul>
                </div>
                <hr className='bg-[#8a8a8a] h-4 w-px'/>
                <div className="dropdown dropdown-hover text-[13px] relative cursor-pointer">
                    <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#4c4c4c] font-medium">USD <RiArrowDownWideLine></RiArrowDownWideLine > </div>
                    <ul tabIndex="-1" className="dropdown-content absolute -left-27 top-full menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                        <li><a href='#'>Taka</a></li>
                        <li><a href='#'>Riyal</a></li>
                        <li><a href='#'>Euro</a></li>
                        <li><a href='#'>Penny</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop