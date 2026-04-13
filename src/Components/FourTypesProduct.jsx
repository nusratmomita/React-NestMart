import React from 'react'
import TopProducts from './TopProducts/TopProducts'
import TrendingProducts from './TrendingProducts/TrendingProducts'
import RecentlyAdded from './RecentlyAdded/RecentlyAdded'
import TopRated from './TopRated/TopRated'

const FourTypesProduct = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15'>
            <TopProducts/>
            <TrendingProducts/>
            <RecentlyAdded/>
            <TopRated/>
        </div>
    </div>
  )
}

export default FourTypesProduct