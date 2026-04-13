import React from 'react'
import Banner from '../Components/Banner'
import DemoProducts from '../Components/DemoProducts'
import PopularProducts from '../Components/PopularProducts'
import { useLoaderData } from 'react-router'
import DailyBestSells from '../Components/DailyBestSells'
import DealsOfTheDay from '../Components/DealsOfTheDay/DealsOfTheDay'
import FourTypesProduct from '../Components/FourTypesProduct'
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import Features from '../Components/Features'

const Home = () => {
  const popularProducts = useLoaderData();
  // console.log(popularProducts)

  return (
    <div className='quicksand-font overflow-hidden'>
      <Banner/>
      <DemoProducts/>
      <PopularProducts popularProductsData={popularProducts}/>
      <DailyBestSells popularProductsData={popularProducts}/>
      {/* <DealsOfTheDay popularProducts={popularProducts}/> */}
      <DealsOfTheDay/>
      <FourTypesProduct/>
      <ShopByCategory/>
      <Testimonials/>
      <Newsletter/>
      <Features/>
    </div>
  )
}

export default Home