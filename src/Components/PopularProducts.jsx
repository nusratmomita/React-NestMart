import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { CiShoppingCart } from "react-icons/ci";
import ProductCard from './ProductCard/ProductCard';

const PopularProducts = ({popularProductsData}) => {
  // console.log(popularProductsData)

  return (
    <div className='container'>
      <h3 className='text-[32px] font-bold text-[#253D4E] mt-10 mb-10'>Popular Products</h3>

      <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>
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