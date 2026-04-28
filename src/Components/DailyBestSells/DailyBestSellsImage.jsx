import React from 'react'
import Button from '../Buttons/Button'
import { TiArrowRight } from "react-icons/ti";

const DailyBestSellsImage = () => {
  return (
    <div className='bg-[url("assets/dailyBestSells.png")] bg-cover h-130 bg-no-repeat bg-center rounded-[15px]'>
        <h3 className='text-[#253D4E] text-[40px] font-bold px-12.5 pt-12.5 leading-[1.2] mb-15 md:mb-15 xl:mb-25'>Bring nature into your home</h3>
        <div className='pl-12 max-w-50 w-full'>
            <Button buttonText="Shop Now" Icon={TiArrowRight} variant="primary" iconPosition='right'/>
        </div>
    </div>
  )
}

export default DailyBestSellsImage