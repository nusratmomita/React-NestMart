import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import Countdown from 'react-countdown';
import Button from '../Buttons/Button';
import ReviewStar from '../ReviewStar/ReviewStar';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem, decreaseQuantity, increaseQuantity } from '../../Features/CartSlice';

const DealsOfTheDaySingleCard = ({product}) => {
    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + (product.days || 0));
    targetDate.setHours(targetDate.getHours() + (product.hours || 0));
    targetDate.setMinutes(targetDate.getMinutes() + (product.mins || 0));
    targetDate.setSeconds(targetDate.getSeconds() + (product.secs || 0));


    const cartProducts = useSelector((state) => state.myCart.items);

    const dispatch = useDispatch();

    const addItems = (product) => {
        const existingProducts = cartProducts.find((item) => product.id === item.productId);

        const newProduct = {
            productId: product.id,
            productName: product.product_name,
            productPrice: product.current_price,
            productImage: product.dealOfTheDayImage,
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
    <div className='cursor-pointer group'>
        <img className='rounded-[15px] object-cover w-full h-full' src={product.dealOfTheDayImage} alt="dealOfTheDayImage" />
        <div className='flex justify-center items-center relative'>
            <Countdown 
                date={targetDate}
                renderer={({ days, hours, minutes, seconds }) => {
                    return (
                        <div className="flex gap-2 justify-center mb-4 absolute -top-35 transform transition duration-300 group-hover:-translate-y-3 px-5 md:px-0 lg:px-0 2xl:px-0">
                        <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{days} 
                            <br />
                            <span className='text-[#707070] font-medium'>Days</span>
                        </div>
                        <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{hours} 
                            <br />
                            <span className='text-[#707070] font-medium'>Hours</span>
                        </div>
                        <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{minutes} 
                            <br />
                            <span className='text-[#707070] font-medium'>Mins</span>
                        </div>
                        <div className="bg-white px-2 py-1 rounded text-xl text-[#1d8751] font-medium text-center">{seconds} 
                            <br />
                            <span className='text-[#707070] font-medium'>Sec</span>
                        </div>
                        </div>
                    );
                }}
            />
        </div>

        <div className='flex justify-center items-center relative'> 
            <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.05)] rounded-[10px] px-7.5 py-6.25 absolute -top-16 w-full max-w-[86%] mx-auto transform transition duration-300 group-hover:-translate-y-3'>
            <h4 className='truncate text-[14px] font-bold text-[#253d4e] mb-6' title={product?.product_name}>{product.product_name}</h4>
            <div className='flex items-center'>
                <ReviewStar rating={product?.stars}/>
                <h4 className='text-[#707070] font-semibold ml-1.25'>({product?.total_reviews})</h4>
            </div>
            <h4 className='font-semibold mt-1.25'>
                <span className='text-[#707070]'>Sold By </span>
                <span className='text-[#1d8751] underline hover:text-[#fdc040] hover:no-underline cursor-pointer'>{product?.sold_by}</span>
            </h4>
            <div className='mt-3 flex justify-between'>
                <div>
                    <h4 className='text-[#1d8751] font-bold'>${product?.current_price.toFixed(2)}</h4>
                    <h4 className='text-[#1d8751] font-bold line-through text-sm'>${product?.previous_price.toFixed(2)}</h4>
                </div>
                {
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
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default DealsOfTheDaySingleCard