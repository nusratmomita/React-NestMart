import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { CiShoppingCart } from "react-icons/ci";
import ProductCard from '../ProductCard/ProductCard';

const PopularProducts = ({popularProductsData}) => {
  // console.log(popularProductsData)

  return (
    <div className='container'>
      <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E] mt-10 mb-10 px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>Popular Products</h3>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
        {
          popularProductsData.map((product) => (
            <ProductCard key={product.id} product={product} style1={true} companyName={true}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopularProducts