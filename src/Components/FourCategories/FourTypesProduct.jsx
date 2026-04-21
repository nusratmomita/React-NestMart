import React from 'react'
import TopSelling from './TopSelling/TopSelling'
import TrendingProducts from './TrendingProducts/TrendingProducts'
import RecentlyAdded from './RecentlyAdded/RecentlyAdded'
import TopRated from './TopRated/TopRated'


const FourTypesProduct = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
           <TopSelling/>
           <TrendingProducts/>
           <RecentlyAdded/>
           <TopRated/>
        </div>
    </div>
  )
}

export default FourTypesProduct