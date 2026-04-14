import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaHome, FaLuggageCart, FaUser } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router'
import siteLogo from "../assets/logo.png"
import DashboardHeader from '../Components/DashboardHeader'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { BiErrorAlt } from "react-icons/bi";
import { MdOutlineNotificationsActive, MdProductionQuantityLimits } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoIosMoon } from 'react-icons/io'

const DashboardLayout = () => {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="drawer lg:drawer-open">
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
                    
                </div>
                <DashboardHeader/>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay overflow-y-scroll"></label>
                  <ul className="menu bg-base-200 text-md min-h-full w-80 p-4 flex flex-col justify-between dashboardNavLinks"> 
                    <div className='mt-10'>
                      <div>
                          <div className='block lg:hidden relative w-70 lg:w-100 border border-[#1D8751] rounded-2xl mb-2'>
                            <div className='flex items-center bg-white w-full p-2 rounded-2xl'>
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
                      <li>
                          <NavLink to="/dashboard" end>
                              <LuLayoutDashboard className="dashboardNavLinks inline-block" />
                              Dashboard
                          </NavLink>
                      </li>
                      
                      <li className='mt-2'>
                          <NavLink to="/">
                              <FaHome className="dashboardNavLinks inline-block" />
                              Home
                          </NavLink>
                      </li>

                      <li className='mt-2'>
                        <div 
                            onClick={() => toggleMenu("auth")}
                            className='flex justify-between items-center cursor-pointer'
                          >
                            <div className='flex items-center gap-2'>
                              <FaRegUser />
                              <span>Authentication</span>
                            </div>

                            {openMenu === "auth" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                          </div>

                          {openMenu === "auth" && (
                            <ul className='ml-6 mt-2 space-y-2'>
                              <li><NavLink to="/dashboard/login">Login</NavLink></li>
                              <li><NavLink to="/dashboard/register">Register</NavLink></li>
                            </ul>
                          )}
                      </li>

                      <li className='mt-2'>
                        <div 
                          onClick={() => toggleMenu("error")}
                          className='flex justify-between items-center cursor-pointer'
                        >
                          <div className='flex items-center gap-2'>
                            <BiErrorAlt />
                            <span>Error Pages</span>
                          </div>

                          {openMenu === "error" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                        </div>

                        {openMenu === "error" && (
                          <ul className='ml-6 mt-2 space-y-2'>
                            <li><NavLink to="/dashboard/404">404</NavLink></li>
                            <li><NavLink to="/dashboard/500">500</NavLink></li>
                          </ul>
                        )}
                      </li>

                      <li className='mt-2'>
                        <div 
                          onClick={() => toggleMenu("product")}
                          className='flex justify-between items-center cursor-pointer'
                        >
                          <div className='flex items-center gap-2'>
                            <MdProductionQuantityLimits />
                            <span>Product Pages</span>
                          </div>

                          {openMenu === "product" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                        </div>

                        {openMenu === "product" && (
                          <ul className='ml-6 mt-2 space-y-2'>
                            <li><NavLink to="/dashboard/products">All Products</NavLink></li>
                            <li><NavLink to="/dashboard/add-product">Add Product</NavLink></li>
                          </ul>
                        )}
                      </li>

                      <li className='mt-2'>
                        <div 
                          onClick={() => toggleMenu("details")}
                          className='flex justify-between items-center cursor-pointer'
                        >
                          <div className='flex items-center gap-2'>
                            <TbListDetails />
                            <span>Product Details</span>
                          </div>

                          {openMenu === "details" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                        </div>

                        {openMenu === "details" && (
                          <ul className='ml-6 mt-2 space-y-2'>
                            <li><NavLink to="/dashboard/details">Details Page</NavLink></li>
                          </ul>
                        )}
                      </li>

                      <li className='mt-2'>
                        <div 
                          onClick={() => toggleMenu("cart")}
                          className='flex justify-between items-center cursor-pointer'
                        >
                          <div className='flex items-center gap-2'>
                            <FaLuggageCart />
                            <span>My Cart Pages</span>
                          </div>

                          {openMenu === "cart" ? <FaChevronUp className='text-[#707070]'/> : <FaChevronDown className='text-[#707070]' />}
                        </div>

                        {openMenu === "cart" && (
                          <ul className='ml-6 mt-2 space-y-2'>
                            <li><NavLink to="/dashboard/cart">Cart</NavLink></li>
                          </ul>
                        )}
                      </li>

                    <div className="lg:hidden">
                      <div className=''>
                          <li className='mt-2'>
                            <div 
                                onClick={() => toggleMenu("notification")}
                                className='flex justify-between items-center cursor-pointer'
                              >
                                <div className='flex items-center gap-2'>
                                  <MdOutlineNotificationsActive  />
                                  <span>Notification</span>
                                </div>

                                {openMenu === "notification" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                              </div>

                              {openMenu === "notification" && (
                                <ul className='text-sm space-y-2'>
                                  <li>🔔 New order received</li>
                                  <li>📦 Product shipped</li>
                                  <li>💬 New message</li>
                                </ul>
                              )}
                          </li>
                
                          <li className='mt-2'>
                            <div 
                                onClick={() => toggleMenu("profile")}
                                className='flex justify-between items-center cursor-pointer'
                              >
                                <div className='flex items-center gap-2'>
                                  <FaRegUser />
                                  <span>Profile</span>
                                </div>

                                {openMenu === "profile" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                              </div>

                              {openMenu === "profile" && (
                                <ul className='text-sm'>
                                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Profile</li>
                                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Settings</li>
                                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Logout</li>
                                </ul>
                              )}
                          </li>
                      </div>
                  </div>
                </div>


                  <div className='-ml-15 flex justify-center items-center gap-2'>
                      <img className='w-[40%]' src={siteLogo} alt="siteLogo" />
                  </div>
                  </ul>
            </div>
    </div>
  )
}

export default DashboardLayout