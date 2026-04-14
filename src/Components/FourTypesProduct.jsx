import React from 'react'
import TopProducts from './TopProducts/TopProducts'
import TrendingProducts from './TrendingProducts/TrendingProducts'
import RecentlyAdded from './RecentlyAdded/RecentlyAdded'
import TopRated from './TopRated/TopRated'

const FourTypesProduct = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
            <TopProducts/>
            <TrendingProducts/>
            <RecentlyAdded/>
            <TopRated/>
        </div>
    </div>
  )
}

export default FourTypesProduct