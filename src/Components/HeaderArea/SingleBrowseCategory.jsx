import React from 'react'

const SingleBrowseCategory = ({category}) => {
  return (
    <div className='hover:bg-transparent'>
      <img className='w-13 h-10 hover:bg-transparent' src={category.image} alt="category8" />
      <span className='text-[#253d4e] text-[14px] font-semibold hover:bg-transparent'>{category.categoryName}</span>
    </div>
  )
}

export default SingleBrowseCategory