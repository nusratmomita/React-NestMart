import React from 'react'
import { RiArrowDownWideLine, RiArrowUpWideLine  } from 'react-icons/ri';
import { RxDashboard } from "react-icons/rx";
import { images } from '../../Data/config';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

const HeaderBottom = () => {

    // const [isOpen , setIsOpen] = useState(false);


    return (
        <div className='container'>
            <div className='pb-3 hidden lg:flex justify-between items-center'>
                <div className='flex gap-15 items-center'>
                    <div className="dropdown dropdown-hover text-[13px] relative cursor-pointer">
                        <div tabIndex={0} role="button" className='bg-[#1d8751] text-white inline-block rounded-[5px] text-[16px] font-semibold'>
                            <a href="#">
                                <button className='flex justify-between items-center gap-2 px-5 py-2 cursor-pointer' ><RxDashboard/> Browse All Categories <RiArrowDownWideLine/> </button>
                            </a>
                        </div>
                        <ul tabIndex="-1" className="grid grid-cols-2 gap-3 dropdown-content menu bg-base-100 rounded-box z-9999 w-120 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent border border-[#1d8751] p-4">
                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category1} alt="category1" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Milks & Diaries</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category2} alt="category2" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category3} alt="category3" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category4} alt="category4" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category5} alt="category52" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category6} alt="category6" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category7} alt="category7" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>

                            <li className='border border-[#f2f3f4] rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <img className='w-12 h-12 hover:bg-transparent' src={images.category8} alt="category8" />
                                <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>Cold Drinks</span>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-6'>
                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Home <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                <li><a href='#'>Home 1</a></li>
                                <li><a href='#'>Home 2</a></li>
                                <li><a href='#'>Home 3</a></li>
                                <li><a href='#'>Home 4</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Shop <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                <li><a href='#'>Shop 1</a></li>
                                <li><a href='#'>Shop 2</a></li>
                                <li><a href='#'>Shop 3</a></li>
                                <li><a href='#'>Shop 4</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Stores <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                <li><a href='#'>Store 1</a></li>
                                <li><a href='#'>Store 2</a></li>
                                <li><a href='#'>Store 3</a></li>
                                <li><a href='#'>Store 4</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Product <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                <li><a href='#'>Product 1</a></li>
                                <li><a href='#'>Product 2</a></li>
                                <li><a href='#'>Product 3</a></li>
                                <li><a href='#'>Product 4</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Blog <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                <li><a href='#'>Blog 1</a></li>
                                <li><a href='#'>Blog 2</a></li>
                                <li><a href='#'>Blog 3</a></li>
                                <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                                    {/* <div tabIndex={0} role="button" className="flex items-center gap-1 font-semibold text-[17px]">Single Blog <RiArrowDownWideLine></RiArrowDownWideLine > </div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                                        <li><a href='#'>Store 1</a></li>
                                        <li><a href='#'>Store 2</a></li>
                                        <li><a href='#'>Store 3</a></li>
                                        <li><a href='#'>Store 4</a></li>
                                    </ul> */}
                                </div>
                            </ul>
                        </div>
                        <div  className="text-[#000000] font-semibold text-[17px] cursor-pointer">FAQ</div>
                        <div  className="text-[#000000] font-semibold text-[17px] cursor-pointer">Contact</div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div>
                    <FaHeadset  className='text-3xl xl:text-4xl 2xl:text-4xl text-[#252525]'/>
                    </div>
                    <div>
                    <h3 className='text-[#258751] text-2xl font-bold'>1900 - 888</h3>
                    <h4 className='text-[#4c4c4c] text-[11px] font-medium -mt-2'>24/7 Support Center</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
