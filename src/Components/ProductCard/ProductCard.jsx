import React, { useState } from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt, FaRegEye, FaIdCard } from 'react-icons/fa'
import { CiShoppingCart } from "react-icons/ci";
import Button from '../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem, decreaseQuantity, increaseQuantity } from '../../Features/CartSlice';
import ReviewStar from '../ReviewStar/ReviewStar';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineCompareArrows } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbLocationPin } from 'react-icons/tb';

const ProductCard = ({product,style1,progressBar,companyName,price_side_by_side}) => {

    const [value , setValue] = useState(0);
    
    const [selectedWeight, setSelectedWeight] = useState(null);
    const [selectedBox, setSelectedBox] = useState(null);

    const weights = ["1KG", "2KG", "3KG"];
    const boxes = ["2 Boxes", "3 Boxes", "5 Boxes"];

    const [selectedProduct , setSelectedProduct] = useState(null);
    // console.log(selectedProduct)

    const cartProducts = useSelector((state) => state.myCart.items);

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

                    <div className='group-hover:flex justify-center items-center border border-[#1d87509b] rounded-[3px] mx-12 px-2 hidden absolute top-1/2 z-10 bg-white'>
                        <button
                            onClick={() => 
                                {
                                    setSelectedProduct(product)
                                    document.getElementById(`detailsModal-${product.id}`).showModal()
                                }}>
                            <FaRegEye size={20} className='text-[#1d8751] hover:text-[#fe9931]  cursor-pointer hover:-mt-2 transition-all duration-300'/>
                        </button>
                        <hr className='bg-[#1d87509b] h-8 w-px mx-1'/>
                        <div>
                            <CiHeart size={25} className='text-[#1d8751] hover:text-[#fe9931]  cursor-pointer hover:-translate-y-1 transition-all duration-300'/>
                        </div>
                        <hr className='bg-[#1d87509b] h-8 w-px mx-1'/>
                        <div>
                            <MdOutlineCompareArrows size={25} className='text-[#1d8751] hover:text-[#fe9931] cursor-pointer hover:-translate-y-1 transition-all duration-300'/>
                        </div>
                    </div>

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
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between mb-3'>
                        {
                            price_side_by_side ? 
                            <div className='flex items-center gap-2 mt-2'>
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

            <dialog id={`detailsModal-${product.id}`} className="modal">
                <div className="modal-box max-w-6xl p-6 rounded-xl">
                    {
                        selectedProduct && 
                        <>
                        <div>
                            <RxCross2 className='text-3xl text-[#8c8c8c] hover:text-black ml-auto cursor-pointer' onClick={() => document.getElementById(`detailsModal-${product.id}`).close()}/>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <img className="w-50 h-50" src={selectedProduct?.image} alt={selectedProduct?.product_name} />
                                <img className="w-50 h-50" src={selectedProduct?.hovered_image} alt={selectedProduct?.product_name} />
                            </div>    
                            <div>
                                <h3 className='text-[25px] text-[#253d4e] font-semibold'>{selectedProduct?.product_name}</h3>
                                <div className='flex items-center my-3'>
                                    <div className='flex '>
                                        <ReviewStar rating={product.total_rating}/>
                                    </div>
                                    <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
                                </div>
                                <h2 className='text-[#1d8751] text-4xl font-bold my-5'>${selectedProduct?.current_price}</h2>
                                <h2 className='text-[#4c4c4c] text-lg font-medium mt-5'>Sold By:<span className='text-[#1d8751] hover:text-[#fdc040] cursor-pointer'> {selectedProduct?.sold_by}</span></h2>
                                <p className='text-[#4c4c4c] text-lg font-medium mt-5'>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>
                                <div className='mt-5'>
                                    <div className='flex items-center gap-2'>
                                        <MdOutlineAccessTime className='text-[#1d8751]'/>
                                        <h4 className='text-[#4c4c4c] text-lg font-medium'>1 Year AL Jazeera Brand Warranty</h4>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <TbLocationPin className='text-[#1d8751]'/>
                                        <h4 className='text-[#4c4c4c] text-lg font-medium'>30 Day Return Policy</h4>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaIdCard className='text-[#1d8751]'/>
                                        <h4 className='text-[#4c4c4c] text-lg font-medium'>Cash on Delivery available</h4>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className='mb-2 text-[#4c4c4c] text-lg'>Weight:</h3>

                                    <div className="flex gap-2">
                                        {weights.map((weight) => (
                                        <div
                                            key={weight}
                                            onClick={() => setSelectedWeight(weight)}
                                            className={`relative px-4 py-2 cursor-pointer border transition-all duration-200
                                            ${
                                                selectedWeight === weight
                                                ? "border-[#1d8751]"
                                                : "border-[#ccc]"
                                            }
                                            `}
                                        >
                                            <span className='text-xl text-[#4c4c4c] font-semibold'>
                                                {weight}
                                            </span>

                                            {selectedWeight === weight && (
                                            <span className="absolute bottom-0 right-1 text-[#1d8751] text-lg font-bold">
                                                ✓
                                            </span>
                                            )}
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h3 className='mb-2 text-[#4c4c4c] text-lg'>Boxes:</h3>

                                    <div className="flex gap-2">
                                        {boxes.map((box) => (
                                        <div
                                            key={box}
                                            onClick={() => setSelectedBox(box)}
                                            className={`relative px-4 py-2 cursor-pointer border transition-all duration-200
                                            ${
                                                selectedBox === box
                                                ? "border-[#1d8751]"
                                                : "border-[#ccc]"
                                            }
                                            `}
                                        >
                                            <span className='text-xl text-[#4c4c4c] font-semibold'>
                                                {box}
                                            </span>

                                            {selectedBox === box && (
                                            <span className="absolute bottom-0 right-1 text-[#1d8751] text-md font-bold">
                                                ✓
                                            </span>
                                            )}
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h3 className='mb-2 text-[#4c4c4c] text-lg'>Quantity:</h3>
                                    <div className="flex items-center border border-[#1d8751] rounded-md w-fit">
                                        <input
                                            type="number"
                                            value={value}
                                            onChange={(e) => setValue(Number(e.target.value))}
                                            className="w-12 text-center focus:outline-none text-[#1d8751] font-semibold"
                                        />
                                        <div className='flex flex-col'>
                                            <MdKeyboardArrowUp 
                                                size={16}
                                                className="cursor-pointer text-[#1d8751]"
                                                onClick={() => setValue(prev => prev + 1)}
                                            />

                                            <MdKeyboardArrowDown 
                                                size={16}
                                                className="cursor-pointer text-[#1d8751]"
                                                onClick={() => setValue(prev => Math.max(0, prev - 1))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 mt-5'>
                                    <div className="inline-block mt-3">
                                        {
                                            getQuantity(product.id) === 0 ? (
                                                <Button 
                                                    buttonText="Add To Cart" Icon={CiShoppingCart} variant="primary" onClick={() => addItems(selectedProduct)}
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

                                            }
                                        </div>
                                    <div>
                                        <CiHeart size={25} className='text-[#4c4c4c] h-10 w-10 mt-4 rounded-[5px] border border-gray-400 p-1 cursor-pointer hover:bg-[#1d8751] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300'/>
                                    </div>
                                    <div>
                                        <MdOutlineCompareArrows size={25} className='text-[#4c4c4c] h-10 w-10 mt-4 rounded-[5px] border border-gray-400 p-1 cursor-pointer hover:bg-[#1d8751] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300'/>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[#4c4c4c] font-medium'>SKU: TG-188-A1</h4>
                                    <h4 className='text-[#4c4c4c] font-medium'>Category: <span className='text-[#1d8751] hover:text-[#fdc040] cursor-pointer'>{selectedProduct?.category}</span></h4>
                                    {
                                        selectedProduct?.tag ? 
                                        <h4 className='text-[#4c4c4c] font-medium'>Tag: <span className='text-[#1d8751] hover:text-[#fdc040] cursor-pointer'>{selectedProduct?.tag}</span></h4>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                        </>
                    }
                </div>
            </dialog>
        </div>
    )
}

export default ProductCard