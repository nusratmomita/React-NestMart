import React from 'react'
import siteLogo from "../assets/logo.png"
import { GiRecycle } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <div className='container mx-auto py-5 flex justify-between items-center'>

            <div className='flex items-center justify-between w-full px-10'>

              <div className='flex items-center gap-3'>
                <label htmlFor="my-drawer" className="lg:hidden text-2xl cursor-pointer">
                  ☰
                </label>

                <img className='max-w-28 w-full' src={siteLogo} alt="logo" />
              </div>

              <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="cursor-pointer flex gap-1 items-center">
                    <IoPersonOutline className='text-2xl'/>
                    <h4 className='text-[#707070]'>Account</h4>
                  </div>

                  <ul className="dropdown-content menu bg-base-100 rounded-box w-32 p-2 shadow z-50">
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                  </ul>
                </div>
              </div>

              <div className='hidden lg:block relative w-100 border border-[#1D8751] rounded-2xl mr-10'>
                <div className='flex items-center bg-white w-full p-3 rounded-2xl'>
                  <input
                    type="text"
                    placeholder='Search For Items....'
                    className='w-full text-[16px] outline-none'
                  />
                </div>

                <button className='absolute top-0 right-0 h-full px-6 border-l border-[#1D8751] text-[#1D8751]'>
                  Search
                </button>
              </div>

            </div>

            <div className='hidden lg:flex gap-5 lg:px-10'>
              <div className='flex items-center gap-2'>
                <div className='relative'>
                  <GiRecycle className='text-2xl'/>
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-1'>
                    0
                  </span>
                </div>
                <h4 className='text-[#707070]'>Compare</h4>
              </div>

              <div className='flex items-center gap-2'>
                <div className='relative'>
                  <FaRegHeart className='text-2xl'/>
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-1'>
                    0
                  </span>
                </div>
                <h4 className='text-[#707070]'>Wishlist</h4>
              </div>

              <div className='flex items-center gap-2'>
                <div className='relative'>
                  <CiShoppingCart className='text-2xl'/>
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-1'>
                    0
                  </span>
                </div>
                <h4 className='text-[#707070]'>Cart</h4>
              </div>

              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer">
                  <IoPersonOutline className='text-2xl'/>
                  <h4 className='text-[#707070]'>More</h4>
                </div>

                <ul className="dropdown-content menu bg-base-100 rounded-box p-2 shadow">
                  {/* <li><a>Login</a></li>
                  <li><a>Register</a></li> */}
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="bg-white w-80 min-h-full p-5">

          <img src={siteLogo} className="mb-6" alt="logo"/>

          <div className="dropdown dropdown-hover"></div>

          <div className='relative border border-[#1D8751] rounded-xl mb-6'>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-[#1D8751]">
              🔍
            </button>
          </div>

          <ul className='space-y-4 text-[#253D4E] font-semibold'>
            <li className='flex items-center gap-2'>
              <GiRecycle /> Compare
            </li>
            <li className='flex items-center gap-2'>
              <FaRegHeart /> Wishlist
            </li>
            <li className='flex items-center gap-2'>
              <CiShoppingCart /> Cart
            </li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default Header