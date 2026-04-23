import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { TbReorder } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";

const DashboardHeader = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };


  return (
    <div className='bg-white p-2 border-b border-[#e6e6e6] lg:flex justify-between items-center hidden px-5'>
      <div className='flex gap-3 items-center bg-[#f8f7fa] p-2 relative w-40 lg:w-50 rounded-2xl'>
        <CiSearch className='text-gray-600 text-[24px]'/>
        <input
          type="text"
          placeholder='Search For Items...'
          className='w-full text-[12px] font-semibold outline-none'
        />
      </div>

      <div className='flex justify-center items-center gap-3'>
          <div className='bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <FaRegMoon className='text-xl text-[#7a7a7a]'/>
          </div>

         <div className='relative'>
            <div 
              onClick={() => toggleDropdown("notification")}
              className='bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <MdOutlineNotificationsActive className='text-xl text-[#7a7a7a]'/>
              <div className='absolute -top-1 right-4'>
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
  )
}

export default DashboardHeader