import React from 'react'
import Button from '../Buttons/Button'
import { TiArrowRight } from "react-icons/ti";

const DemoProductSingleCard = ({demoProduct}) => {
  return (
    <div style={{ backgroundImage: `url(${demoProduct.image})`}} className='bg-cover bg-center bg-no-repeat rounded-[10px]'>
        <div className='pb-20 w-full'>
            <h4 className='pt-20 pl-5 lg:pl-10 text-[24px] font-bold min-h-25 text-[#253D4E] lg:w-full xl:w-[80%]'>{demoProduct.text}</h4>
            <div className='pl-5 lg:pl-10'>
              <Button buttonText="Shop Now" Icon={TiArrowRight} iconPosition='right' variant="shop"/>
            </div>
        </div>
    </div>

  )
}

export default DemoProductSingleCard