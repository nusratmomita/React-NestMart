import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { CiShoppingCart } from "react-icons/ci";
import AddToCartStyle1 from '../Buttons/AddToCartStyle1';
import AddToCartStyle2 from '../Buttons/AddToCartStyle2';

const ProductCard = ({product,style1,progressBar,companyName,price_side_by_side}) => {
  return (
    <div>
        <div key={product.id} className='border border-[#ececec] rounded-[15px] hover:border-[#1d87509b] hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)]'>
            <div className='relative'>
                <img src={product.image} alt="product image" className='pl-5 pr-5' />

                <div>
                    {
                        product.discount ? 
                        <span className='bg-[#d03868] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>-{product.discount}%</span>
                        :
                        ""
                    }
                </div>

                <div>
                    {
                        product.tag === "Hot" ? 
                        <span className='bg-[#d03868] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                        :
                        ""
                    }
                </div>

                <div>
                    {
                        product.tag === "New" ? 
                        <span className='bg-[#02856e] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                        :
                        ""
                    }
                </div>

                <div>
                    {
                        product.tag === "Sale" && !companyName ? 
                        <span className='bg-[#fe9931] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                        :
                        ""
                    }
                </div>
        
            </div>
            <div className='px-5'>
                <h4 className='mb-1.25 text-[12px] text-[#707070]'>{product.category}</h4>
                <h3 className='truncate text-[#253D4E] text-[16px] font-bold'>{product.product_name}</h3>
                {
                    companyName ? 
                        <div className='flex items-center'>
                            <div className='my-1.25 flex'>
                                {[1,2,3,4,5].map((star) => {
                                    if (star <= Math.floor(product.total_rating)) {
                                    return <FaStar key={star} className='text-[#fdc040] text-sm' />;
                                    } else if (star === Math.ceil(product.total_rating) && product.total_rating % 1 !== 0) {
                                    return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
                                    } else {
                                    return <FaRegStar key={star} className='text-sm text-[#707070]' />;
                                    }
                                })}
                            </div>
                            <h4 className='text-[#707070] font-semibold ml-1.25'>({product.total_reviews})</h4>
                        </div>
                        :
                        <div className='flex items-center my-3'>
                            <div className='flex'>
                                {[1,2,3,4,5].map((star) => {
                                    if (star <= Math.floor(product.total_rating)) {
                                    return <FaStar key={star} className='text-[#fdc040] text-sm' />;
                                    } else if (star === Math.ceil(product.total_rating) && product.total_rating % 1 !== 0) {
                                    return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
                                    } else {
                                    return <FaRegStar key={star} className='text-sm text-[#707070]' />;
                                    }
                                })}
                            </div>
                            <h4 className='text-[#707070] font-semibold ml-1.25'>({product.total_reviews})</h4>
                        </div>
                }
                {
                    companyName ? 
                    <h4 className='font-semibold mt-1.25 mb-6'>
                        <span className='text-[#707070]'>Sold By </span>
                        <span className='text-[#1d8751] underline'>{product.sold_by}</span>
                    </h4>
                    :
                    ""
                }
                <div className='flex justify-between mb-6'>
                    {
                        price_side_by_side ? 
                        <div className='flex items-center gap-2 mt-4'>
                            <h4 className='text-[#1d8751] font-semibold text-[18px]'>${product.current_price.toFixed(2)}</h4>
                            {
                                product.previous_price ? 
                                <h4 className='text-[#1d8751] font-semibold line-through text-md mt-px'>${product.previous_price.toFixed(2)}</h4>
                                :
                                ""
                            }
                        </div>
                        :
                        <div>
                            <h4 className='text-[#1d8751] font-semibold'>${product.current_price.toFixed(2)}</h4>
                            {
                                product.previous_price ? 
                                <h4 className='text-[#1d8751] font-semibold line-through text-sm'>${product.previous_price.toFixed(2)}</h4>
                                :
                                ""
                            }
                        </div>
                    }

                    {
                        style1 ? 
                        <AddToCartStyle1/>
                        :
                        ""
                    }
                </div>
                <div>
                    {
                        product.total_selling && progressBar === true ? 
                        <div className='mt-2'>
                            <div className='w-full bg-gray-200 rounded-full h-2'>
                                <div className='bg-[#1d8751] h-2 rounded-full' style={{ width: `${(product.total_selling / 10) * 100}%` }}></div>
                            </div>

                            <p className='text-[13px] text-[#253d4e] mt-3 font-semibold'>
                                Sold: {product.total_selling}
                            </p>
                        </div>
                        :
                        ""
                    }
                </div>
                <div className='my-4'>
                    {
                        style1 ? 
                        ""
                        :
                        <AddToCartStyle2/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard