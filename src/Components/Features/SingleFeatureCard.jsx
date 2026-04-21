import React from 'react'

const SingleFeatureCard = ({feature}) => {
  return (
    <div key={feature.id} className='flex items-center justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start gap-5 bg-[#f4f6fa] rounded-[10px] p-5 group'>
        <img className='transform transition duration-300 group-hover:-translate-y-1' src={feature.feature_img} alt={feature.feature_title} />
        <div>
        <h3 className='text-[#242424] text-[18px] font-semibold'>{feature.feature_title}</h3>
        <p className='text-[#707070] font-semibold'>{feature.feature_description}</p>
        </div>
    </div>
  )
}

export default SingleFeatureCard