import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaHome, FaLuggageCart, FaRegMoon, FaUser } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router'
import siteLogo from "../assets/logo.png"
import DashboardHeader from '../Components/DashboardHeader'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { BiErrorAlt, BiLogOutCircle } from "react-icons/bi";
import { MdOutlineNotificationsActive, MdProductionQuantityLimits } from "react-icons/md";
import { TbListDetails, TbReorder } from "react-icons/tb";
import { IoIosMoon, IoIosSettings } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { CiSearch } from 'react-icons/ci'
import DashboardFooter from '../Components/DashboardFooter'
import { ToastContainer } from 'react-toastify'

const DashboardLayout = () => {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

   const [openDropdown, setOpenDropdown] = useState(null);
  
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="drawer lg:drawer-open">
      <ToastContainer></ToastContainer>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
          {/* Navbar for small screen*/}
          <div className="navbar bg-base-300 w-full lg:hidden">
              <div className="flex-none ">
                  <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block h-6 w-6 stroke-current"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                      </svg>
                  </label>
              </div>
              <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
              <div className='flex justify-center items-center gap-3'>
                <div className='bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                  <FaRegMoon className='text-xl text-[#7a7a7a]'/>
                </div>
      
                <div className='relative'>
                  <div 
                    onClick={() => toggleDropdown("notification")}
                    className='bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative'
                  >
                    <MdOutlineNotificationsActive className='text-xl text-[#7a7a7a]'/>
                    <div className='absolute top-0 right-5'>
                      <span className='flex justify-center items-center bg-red-600 text-sm text-white w-5 h-5 rounded-full absolute'>3</span>
                    </div>
                  </div>
              
                  {openDropdown === "notification" && (
                    <div className='absolute right-0 mt-2 w-65 bg-white shadow-lg rounded-lg z-50 overflow-y-auto max-h-80'>
                      <div className='flex justify-between items-center bg-gray-100 p-2 pt-3'>
                        <h4 className='font-semibold text-[#253d4e]'>Notifications(3)</h4>
                        <a href="#" className='underline text-[13px] text-[#7a7a7a]'>Clear All</a>
                      </div>
                      <ul className='text-sm space-y-2 p-2 pb-0'>
                        <li className='flex items-start gap-2'> 
                          <div className='bg-[#253d4e] w-8 h-8 rounded-full flex justify-center items-center'>
                            <h4 className='text-white text-xl font-bold'>S</h4>
                          </div>
                          <div>
                            <h3 className='text-md font-bold text-[#5a5a5a]'>Shelly</h3>
                            <p>Say Hi To Her.</p>
                          </div>
                        </li>
                        <hr className='border-t border-[#cfcfcf] -mx-2'/>
                        <li className='flex items-start gap-2'> 
                          <div className='bg-[#253d4e] w-8 h-8 rounded-full flex justify-center items-center'>
                            <h4 className='text-white text-xl font-bold'>P</h4>
                          </div>
                          <div>
                            <h3 className='text-md font-bold text-[#5a5a5a]'>Penny</h3>
                            <p>Penny started following you.</p>
                          </div>
                        </li>
                        <hr className='border-t border-[#cfcfcf] -mx-2'/>
                        <li className='flex items-start gap-2'> 
                          <div className='bg-[#253d4e] w-8 h-8 rounded-full flex justify-center items-center shrink-0'>
                            <h4 className='text-white text-xl font-bold'>J</h4>
                          </div>
                          <div>
                            <h3 className='text-md font-bold text-[#5a5a5a]'>Jacob</h3>
                            <p>Jacob sent a message. Reply him now.</p>
                          </div>
                        </li>
                        <hr className='border-t border-[#cfcfcf] -mx-2'/>
                      </ul>
                      <div className='bg-[#253d4e] cursor-pointer text-white font-bold flex justify-center items-center p-2'>
                        <button className='cursor-pointer'>View All Messages</button>
                      </div>
                    </div>
                    )}
                  </div>
        
                  <div className='relative'>
                    <div 
                      onClick={() => toggleDropdown("user")}
                      className='bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                      <FaUser className='text-xl text-[#7a7a7a]'/>
                    </div>
        
                    {openDropdown === "user" && (
                      <div className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50 text-[#5d7187] font-semibold'>
                        <h5>Welcome!</h5>
                        <ul className='text-sm mt-2'>
                          <a href="/dashboard">
                            <li className='p-1 hover:bg-gray-100 cursor-pointer rounded flex items-center gap-2'><FaUser/> Profile</li>
                          </a>
                          <a href="#">
                            <li className='p-1 hover:bg-gray-100 cursor-pointer rounded flex items-center gap-2'><IoIosSettings/> Settings</li>
                          </a>
                          <a href="#">
                            <li className='p-1 hover:bg-gray-100 cursor-pointer rounded flex items-center gap-2'><TbReorder/> My Order</li>
                          </a>
                          <hr className='w-full my-2'/>
                          <a href="#">
                            <li className='p-1 hover:bg-gray-100 cursor-pointer rounded flex items-center gap-2 text-red-600'><BiLogOutCircle/> Logout</li>
                          </a>
                        </ul>
                        </div>
                      )}
                    </div>
              </div>
          </div>
          <div className="sticky top-0 z-50 bg-white ">
            <DashboardHeader/>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
          {/* Page content here */}
          <DashboardFooter/>

      </div>
      <div className="drawer-side border-r border-[#e6e6e6]">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay overflow-y-scroll"></label>
          <ul className="menu bg-white text-md min-h-full w-80 lg:w-60 p-4 flex flex-col justify-between"> 
            <div>
            {/* this one manages opening and closing the drawer */}
            <label htmlFor="my-drawer-2" className="cursor-pointer block lg:hidden">
              <RxCross2 className='bg-[#def9ec] rounded-full text-2xl p-1 mb-2  ml-auto hover:bg-[#1d8751] hover:text-white transition' />
            </label>

            <div className='-ml-15 mb-5 flex justify-center items-center gap-2 lg:mb-10 lg:mt-5'>
                <img className='w-[40%]' src={siteLogo} alt="siteLogo" />
            </div>

            <div className='flex gap-3 items-center bg-[#f8f7fa] p-2 relative w-full my-3 rounded-2xl lg:hidden'>
              <CiSearch className='text-gray-600'/>
              <input
                type="text"
                placeholder='Search For Items...'
                className='w-full text-[12px] font-semibold outline-none'
              />
            </div>

            <li>
                <NavLink to="/dashboard" className="hover:bg-transparent" end>
                    <LuLayoutDashboard className='text-[#6e708c] font-semibold' />
                    <span className='text-[#6e708c] font-semibold'>Dashboard</span>
                </NavLink>
            </li>
              
            <li className='mt-2'>
                <NavLink to="/" className="hover:bg-transparent">
                    <FaHome className="dashboardNavLinks inline-block text-[#6e708c] font-semibold'" />
                    <span className='text-[#6e708c] font-semibold'>Home</span>
                </NavLink>
            </li>

            <li className='mt-2'>
              <div 
                  onClick={() => toggleMenu("auth")}
                  className='flex justify-between items-center cursor-pointer hover:bg-transparent'
                >
                  <div className='flex items-center gap-2 '>
                    <FaRegUser className='text-[#6e708c] font-semibold'/>
                    <span className='text-[#6e708c] font-semibold'>Authentication</span>
                  </div>

                  {openMenu === "auth" ? <FaChevronUp className='text-[#6e708c] opacity-60' /> : <FaChevronDown className='text-[#6e708c] opacity-60' />}
                </div>

                {openMenu === "auth" && (
                  <ul className='ml-6 mt-2 space-y-2'>
                    <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/login">Login</NavLink></li>
                    <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/register">Register</NavLink></li>
                  </ul>
                )}
            </li>

            <li className='mt-2'>
              <div 
                onClick={() => toggleMenu("error")}
                className='flex justify-between items-center cursor-pointer hover:bg-transparent'
              >
                <div className='flex items-center gap-2 '>
                  <BiErrorAlt className='text-[#6e708c] font-semibold'/>
                  <span className='text-[#6e708c] font-semibold'>Error Pages</span>
                </div>

                {openMenu === "error" ? <FaChevronUp className='text-[#6e708c] opacity-60' /> : <FaChevronDown className='text-[#6e708c] opacity-60' />}
              </div>

              {openMenu === "error" && (
                <ul className='ml-6 mt-2 space-y-2'>
                  <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/404">404</NavLink></li>
                  <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/500">500</NavLink></li>
                </ul>
              )}
            </li>

            <li className='mt-2'>
              <div 
                onClick={() => toggleMenu("product")}
                className='flex justify-between items-center cursor-pointer hover:bg-transparent'
              >
                <div className='flex items-center gap-2 group '>
                  <MdProductionQuantityLimits className='text-[#6e708c] font-semibold'/>
                  <span className='text-[#6e708c] font-semibold'>Product Pages</span>
                </div>

                {openMenu === "product" ? <FaChevronUp className='text-[#6e708c] opacity-60' /> : <FaChevronDown className='text-[#6e708c] opacity-60' />}
              </div>

              {openMenu === "product" && (
                <ul className='ml-6 mt-2 space-y-2'>
                  <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/products">All Products</NavLink></li>
                  <li><NavLink className='text-[#6e708c] font-semibold' to="/dashboard/add-product">Add Product</NavLink></li>
                </ul>
              )}
            </li>

            <li className='mt-2'>
              <div 
                onClick={() => toggleMenu("details")}
                className='flex justify-between items-center cursor-pointer hover:bg-transparent'
              >
                <div className='flex items-center gap-2 '>
                  <TbListDetails className='text-[#6e708c] font-semibold'/>
                  <span className='text-[#6e708c] font-semibold'>Product Details</span>
                </div>

                {openMenu === "details" ? <FaChevronUp className='text-[#6e708c] opacity-60' /> : <FaChevronDown className='text-[#6e708c] opacity-60' />}
              </div>

              {openMenu === "details" && (
                <ul className='ml-6 mt-2 space-y-2'>
                  <li><NavLink to="/dashboard/details" className='text-[#6e708c] font-semibold'>Details Page</NavLink></li>
                </ul>
              )}
            </li>

            <li className='mt-2'>
              <div 
                onClick={() => toggleMenu("cart")}
                className='flex justify-between items-center cursor-pointer hover:bg-transparent'
              >
                <div className='flex items-center gap-2 '>
                  <FaLuggageCart className='text-[#6e708c] font-semibold' />
                  <span className='text-[#6e708c] font-semibold'>My Cart Pages</span>
                </div>

                {openMenu === "cart" ? <FaChevronUp className='text-[#6e708c] opacity-60'/> : <FaChevronDown className='text-[#6e708c] opacity-60' />}
              </div>

              {openMenu === "cart" && (
                <ul className='ml-6 mt-2 space-y-2'>
                  <li><NavLink to="/dashboard" className='text-[#6e708c] font-semibold'>Cart</NavLink></li>
                </ul>
              )}
            </li>
          </div>

        </ul>
      </div>
    </div>
  )
}

export default DashboardLayout