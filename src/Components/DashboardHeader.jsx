import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { IoIosMoon } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";

const DashboardHeader = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };


  return (
    <div className='bg-white p-2 shadow-md lg:flex justify-between items-center hidden'>
      <div>
        <div className='block relative w-70 lg:w-100 border border-[#1D8751] rounded-2xl ml-5 mb-2 mt-2'>
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

      <div className='flex justify-center items-center gap-3'>
          <div className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <IoIosMoon className='text-2xl text-[#373737]'/>
          </div>

         <div className='relative'>
            <div 
              onClick={() => toggleDropdown("notification")}
              className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <MdOutlineNotificationsActive className='text-2xl text-[#373737]'/>
            </div>

            {openDropdown === "notification" && (
              <div className='absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-3 z-50'>
                <h4 className='font-semibold mb-2'>Notifications</h4>
                <ul className='text-sm space-y-2'>
                  <li>🔔 New order received</li>
                  <li>📦 Product shipped</li>
                  <li>💬 New message</li>
                </ul>
              </div>
            )}
          </div>

          <div className='relative'>
            <div 
              onClick={() => toggleDropdown("user")}
              className='bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <FaUser className='text-2xl text-[#373737]'/>
            </div>

            {openDropdown === "user" && (
              <div className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 z-50'>
                <ul className='text-sm'>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Profile</li>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Settings</li>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer rounded'>Logout</li>
                </ul>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default DashboardHeader