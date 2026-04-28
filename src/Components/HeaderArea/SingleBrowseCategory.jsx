import React from 'react'

const SingleBrowseCategory = ({category}) => {
  return (
    <div className='hover:bg-transparent flex gap-2 justify-center items-center md:flex-none lg:flex-none xl:flex-none'>
      <div className='w-5 h-5 md:w-13 md:h-10 lg:w-13 lg:h-10 xl:w-10 xl:h-10 pl-0'>
        <img className='w-auto h-auto hover:bg-transparent' src={category.image} alt="category8" />
      </div>
      <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>{category.categoryName}</span>
    </div>
  )
}

export default SingleBrowseCategory