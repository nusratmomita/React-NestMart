import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiArrowDownWideLine } from 'react-icons/ri';
import { LuFlagTriangleRight } from "react-icons/lu";

const HeaderTop = () => {

    const languageDropdown = [
        {
            languageName: "Bangla",
            languageIcon: <LuFlagTriangleRight />,
            href: "#"
        },
        {
            languageName: "Arabic",
            languageIcon: <LuFlagTriangleRight />,
            href: "#"
        },
        {
            languageName: "Spanish",
            languageIcon: <LuFlagTriangleRight />,
            href: "#"
        },
        {
            languageName: "French",
            languageIcon: <LuFlagTriangleRight />,
            href: "#"
        }
    ]

    const currencyDropdown = [
        {
            currencyName: "Taka",
            href: "#"
        },
        {
            currencyName: "Riyal",
            href: "#"
        },
        {
            currencyName: "Euro",
            href: "#"
        },
        {
            currencyName: "Penny",
            href: "#"
        }
    ]

    return (
        <div className='container'>
            <div className='lg:flex justify-between items-center pt-3 hidden mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
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
                    <div className="relative group">
                        <div className="cursor-pointer flex items-center gap-1 text-[#4c4c4c] font-medium"><LiaFlagUsaSolid className='text-red-700'/> English <RiArrowDownWideLine></RiArrowDownWideLine > </div>
                        <ul className="hidden group-hover:block absolute -left-10 top-full menu bg-base-100 rounded-box z-999 w-40 p-4 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                        {
                            languageDropdown.map((language,index)=> (
                                <li key={index}>
                                    <a href={language.href}>
                                        {language.languageIcon} {language.languageName}
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <hr className='bg-[#8a8a8a] h-4 w-px'/>
                    <div className="relative group">
                        <div className="cursor-pointer flex items-center gap-1 text-[#4c4c4c] font-medium">USD<RiArrowDownWideLine></RiArrowDownWideLine > </div>
                        <ul className="hidden group-hover:block absolute -left-30 top-full menu bg-base-100 rounded-box z-999 w-40 p-4 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                            {
                                currencyDropdown.map((currency,index)=>(
                                    <li key={index}>
                                        <a href={currency.href}>
                                            {currency.currencyName}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop