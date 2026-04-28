import React from 'react'

const SingleCategory = ({category}) => {
    return (
        <div className='max-h-53.75 h-full max-w-45 w-full bg-[#f4f6fa] border border-[#f4f6fa] rounded-[10px] min-h-53.75 px-10 py-15 mt-5 text-center flex justify-center items-center flex-col hover:bg-white hover:border-[#1d8751] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)]'>
            <img className='cursor-pointer transition-transform duration-300 hover:scale-110' src={category.image} alt={category.cat_name} />
            <h4 className='text-[#1d8751] font-bold mt-5 cursor-pointer'>{category.cat_name}</h4>
        </div>
    )
}

export default SingleCategory