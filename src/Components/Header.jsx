import React from 'react'
import HeaderMiddle from './HeaderArea/HeaderMiddle'
import HeaderTop from './HeaderArea/HeaderTop'
import HeaderBottom from './HeaderArea/HeaderBottom'


const Header = () => {
  return (
    <>
      <div className='lg:px-5 xl:px-0 2xl:px-0'>
        <HeaderTop/>
      </div>

      <hr className='border-t border-gray-200 my-2 hidden md:hidden lg:block xl:block 2xl:block'/>

      <div className="sticky top-0 z-99 bg-white">
        <HeaderMiddle/>
      </div>

      <hr className='border-t border-gray-200 my-3 hidden md:hidden lg:block xl:block 2xl:block'/>

      <div className='lg:px-5 xl:px-0 2xl:px-0'>
        <HeaderBottom/>
      </div>
    </>
  )
}

export default Header