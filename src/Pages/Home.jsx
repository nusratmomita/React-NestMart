import React from 'react'
import Banner from '../Components/Banner'
import DemoProducts from '../Components/DemoProducts'
import PopularProducts from '../Components/PopularProducts'
import { useLoaderData } from 'react-router'
import DailyBestSells from '../Components/DailyBestSells'

const Home = () => {
  const popularProducts = useLoaderData();
  // console.log(popularProducts)

  return (
    <div className='quicksand-font'>
      <Banner/>
      <DemoProducts/>
      <PopularProducts popularProductsData={popularProducts}/>
      <DailyBestSells popularProductsData={popularProducts}/>
    </div>
  )
}

export default Home