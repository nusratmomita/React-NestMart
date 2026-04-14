import React from 'react'
import { images } from '../Data/config'

const Features = () => {

  const features = [
    {
      "id": 1,
      "feature_img": images.category1,
      "feature_title": "Best prices & offers",
      "feature_description": "Orders $50 or more"
    },
    {
      "id": 2,
      "feature_img": images.category2,
      "feature_title": "Free delivery",
      "feature_description": "24/7 amazing services"
    },
    {
      "id": 3,
      "feature_img": images.category3,
      "feature_title": "Great daily deal",
      "feature_description": "When you sign up"
    },
    {
      "id": 4,
      "feature_img": images.category4,
      "feature_title": "Wide assortment",
      "feature_description": "Mega Discounts"
    },
    {
      "id": 5,
      "feature_img": images.category2,
      "feature_title": "Easy returns",
      "feature_description": "Within 30 days"
    }
  ]
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-20 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        {
          features.map((feature) => (
            <div key={feature.id} className='flex items-center justify-center md:justify-start lg:justify-start 2xl:justify-start gap-5 bg-[#f4f6fa] rounded-[10px] p-5 group'>
              <img className='transform transition duration-300 group-hover:-translate-y-1' src={feature.feature_img} alt={feature.feature_title} />
              <div>
                <h3 className='text-[#242424] text-[18px] font-semibold'>{feature.feature_title}</h3>
                <p className='text-[#707070]'>{feature.feature_description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features