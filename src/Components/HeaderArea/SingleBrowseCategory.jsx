import React from 'react'

const SingleBrowseCategory = ({category}) => {
  return (
    <div className='hover:bg-transparent flex justify-center items-center md:flex-none lg:flex-none xl:flex-none'>
      <img className='w-8 h-8 md:w-13 md:h-10 lg:w-13 lg:h-10 xl:w-13 xl:h-10 hover:bg-transparent' src={category.image} alt="category8" />
      <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>{category.categoryName}</span>
    </div>
  )
}

export default SingleBrowseCategory