import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { CiShoppingCart } from "react-icons/ci";
import Button from '../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem, decreaseQuantity, increaseQuantity } from '../../Features/CartSlice';
import ReviewStar from '../ReviewStar/ReviewStar';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";

const ProductCard = ({product,style1,progressBar,companyName,price_side_by_side}) => {

    const cartProducts = useSelector((state) => state.myCart.items);
    // console.log(cartProducts)

    const dispatch = useDispatch();

    const addItems = (product) => {
        const existingProducts = cartProducts.find((item) => product.id === item.productId);

        const newProduct = {
            productId: product.id,
            productName: product.product_name,
            productPrice: product.current_price,
            productImage: product.image,
            productInStock: (10 - product.total_selling),
            productQuantity: 1,
            added_time: new Date().toISOString().split("T")[0]
        }

        
        if(existingProducts && existingProducts.productQuantity >= existingProducts.productInStock){
            toast.error("Product Out Of Stock.");
            return;
        }
        
        if(existingProducts){
            toast.error("You already added this product");
        }
        else{
            toast.success("Product added successfully!");
            dispatch(addItem(newProduct));
        }

    }

    const getQuantity = (id) => {
        const item = cartProducts.find((item) => item.productId === id)

        return item ? item.productQuantity : 0;
    }
    

    const updateQuantity = (productId,type) => {
        if(type === "increase"){
            dispatch(increaseQuantity(productId));
        }
        else{
            dispatch(decreaseQuantity(productId));
        }
    }

    return (
        <div>
            <div className="border border-[#ececec] rounded-[15px] hover:border-[#1d87509b] hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] group transition-all duration-300">
                <div className='relative'>
                    {
                        product?.image &&
                        <img src={product.image} alt="product image" className="xl:pl-5 xl:pr-5 w-full block group-hover:hidden cursor-pointer"  />
                    }
                    {
                        product?.hovered_image &&
                        <img src={product.hovered_image} alt="hovered product image" className="xl:pl-5 xl:pr-5 w-full hidden group-hover:block cursor-pointer" />
                    }

                    <div>
                        {
                            product?.discount ? 
                            <span className='bg-[#d03868] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>-{product.discount}%</span>
                            :
                            ""
                        }
                    </div>

                    <div>
                        {
                            product?.tag === "Hot" ? 
                            <span className='bg-[#d03868] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                            :
                            ""
                        }
                    </div>

                    <div>
                        {
                            product?.tag === "New" ? 
                            <span className='bg-[#02856e] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                            :
                            ""
                        }
                    </div>

                    <div>
                        {
                            product?.tag === "Sale" && !companyName ? 
                            <span className='bg-[#fe9931] text-white rounded-[15px_0_20px_0] text-[12px] font-semibold pt-2.25 px-5 pb-2.5 absolute top-0'>{product.tag}</span>
                            :
                            ""
                        }
                    </div>
            
                </div>
                <div className='px-5'>
                    <h4 className='mb-1.25 text-[12px] text-[#707070]'>{product?.category}</h4>
                    {
                        <h3 className='truncate text-[#253D4E] text-[16px] font-bold' title={product?.product_name}>{product?.product_name}</h3>
                    }
                    {
                        companyName ? 
                            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row xl:items-center'>
                                <div className='my-1.25 flex'>
                                    {[1,2,3,4,5].map((star) => {
                                        if (star <= Math.floor(product?.total_rating)) {
                                        return <FaStar key={star} className='text-[#fdc040] text-sm' />;
                                        } else if (star === Math.ceil(product?.total_rating) && product?.total_rating % 1 !== 0) {
                                        return <FaStarHalfAlt key={star} className='text-[#fdc040] text-sm' />;
                                        } else {
                                        return <FaRegStar key={star} className='text-sm text-[#707070]' />;
                                        }
                                    })}
                                </div>
                                <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
                            </div>
                            :
                            <div className='flex items-center my-3'>
                                <div className='flex '>
                                    <ReviewStar rating={product.total_rating}/>
                                </div>
                                <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
                            </div>
                    }
                    {
                        companyName ? 
                        <h4 className='font-semibold mt-1.25 mb-6'>
                            <span className='text-[#707070]'>Sold By </span>
                            <span className='text-[#1d8751] underline hover:text-[#fdc040] hover:no-underline cursor-pointer'>{product?.sold_by}</span>
                        </h4>
                        :
                        ""
                    }
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between mb-6'>
                        {
                            price_side_by_side ? 
                            <div className='flex items-center gap-2 mt-4'>
                                <h4 className='text-[#1d8751] font-semibold text-[18px]'>${product?.current_price.toFixed(2)}</h4>
                                {
                                    product?.previous_price ? 
                                    <h4 className='text-[#1d8751] font-semibold line-through text-md mt-px'>${product?.previous_price.toFixed(2)}</h4>
                                    :
                                    ""
                                }
                            </div>
                            :
                            <div>
                                <h4 className='text-[#1d8751] font-semibold'>${product?.current_price.toFixed(2)}</h4>
                                {
                                    product?.previous_price ? 
                                    <h4 className='text-[#1d8751] font-semibold line-through text-sm'>${product?.previous_price.toFixed(2)}</h4>
                                    :
                                    ""
                                }
                            </div>
                        }

                        {
                            style1 ? 
                            (
                                getQuantity(product.id) === 0 ? (
                                    <Button 
                                        buttonText="Add" Icon={CiShoppingCart} variant="light" onClick={() => addItems(product)}
                                    />
                                )
                                :
                                <div className='bg-[#1c875133] flex justify-center items-center gap-2 whitespace-nowrap  px-4 py-1 text-sm font-medium rounded-sm border-none'>
                                    <span>
                                        <FiMinus onClick={() => updateQuantity(product.id,"decrease")} className='bg-gray-200 rounded-sm text-[#1d8751] cursor-pointer text-lg p-1' />
                                    </span>
                                    <span className='text-lg text-[#1d8751]'>
                                        {getQuantity(product.id)}
                                    </span>
                                    <span>
                                        <FaPlus onClick={() => updateQuantity(product.id,"increase")} className='bg-gray-200 rounded-sm text-[#1d8751] cursor-pointer text-lg p-1' />
                                    </span>
                                </div>
                            )
                            :
                            ""
                        }
                    </div>
                    <div>
                        {
                            product?.total_selling && progressBar === true ? 
                            <div className='mt-2'>
                                <div className='w-full bg-gray-200 rounded-full h-2'>
                                    <div className='bg-[#1d8751] h-2 rounded-full' style={{ width: `${(product?.total_selling / 10) * 100}%` }}></div>
                                </div>

                                <p className='text-[13px] text-[#253d4e] mt-3 font-semibold'>
                                    Sold: {product?.total_selling}
                                </p>
                            </div>
                            :
                            ""
                        }
                    </div>
                    <div className='my-4'>
                        {
                            !style1 ? 
                            (
                                getQuantity(product.id) === 0 ? (
                                    <Button 
                                        buttonText="Add To Cart" Icon={CiShoppingCart} variant="primary" onClick={() => addItems(product)}
                                    />
                                )
                                :
                                <div className='bg-[#1c875133] flex justify-center items-center gap-2 whitespace-nowrap  px-4 py-1 text-sm font-medium rounded-sm border-none'>
                                    <span>
                                        <FiMinus onClick={() => updateQuantity(product.id,"decrease")} className='bg-gray-200 rounded-sm text-[#1d8751] cursor-pointer text-lg p-1' />
                                    </span>
                                    <span className='text-lg text-[#1d8751]'>
                                        {getQuantity(product.id)}
                                    </span>
                                    <span>
                                        <FaPlus onClick={() => updateQuantity(product.id,"increase")} className='bg-gray-200 rounded-sm text-[#1d8751] cursor-pointer text-lg p-1' />
                                    </span>
                                </div>
                            )
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard