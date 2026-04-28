import React from 'react'
import {  FaPlus, FaShippingFast } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaBowlFood } from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';
import { NavLink, useLoaderData } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid, LineChart, Line} from "recharts";
import { BiGlobeAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {  decreaseQuantity, increaseQuantity , removeItem } from '../../Features/CartSlice';
import Swal from 'sweetalert2';
import { FiMinus } from 'react-icons/fi';
import { IoTrashBinOutline } from 'react-icons/io5';
import Button from '../../Components/Buttons/Button';
import { PiShoppingCartBold } from 'react-icons/pi';

const DashboardDefault = () => {

    const cartItems = useSelector((state) => state.myCart.items);

    const data = useLoaderData();

    const formattedData = data.map(item => ({
        name: item.product_name.length > 10 
        ? item.product_name.slice(0, 10) + "..." 
        : item.product_name,
        price: item.current_price
    }));

    const dispatch = useDispatch();

     // for deleting item
    const handleDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success"
            });
            dispatch(removeItem(id));
            toast.success("Item deleted successfully!")
        }
        });
    }

    // for updating quantity
    const updateQuantity = (productId , type) => {
        if(type === 'increase'){
            dispatch(increaseQuantity(productId));
            toast.info("Quantity increased", { autoClose: 1000 });
        } 
        else {
            dispatch(decreaseQuantity(productId));
            toast.warn("Quantity decreased", { autoClose: 1000 });
        }
    }
    
    const totalPrice = cartItems.reduce((total,item) => total + item.productQuantity * item.productPrice , 0 );


    return (
        <div className='bg-base-200 px-5'>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center'>
                <h3 className='my-5 text-gray-700 text-lg font-bold'>Dashboard</h3>
                <div className='text-gray-600 font-semibold text-md flex items-center gap-2 mb-3 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0'>
                    <a href="#">
                        <h4>NestMart</h4>
                    </a>
                    <MdKeyboardArrowRight/>
                    <a href="#">
                        <h4>Dashboard</h4>
                    </a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                <div className='bg-white shadow-[0_3px_4px_0_rgba(0, 0, 0, .03)] border-2 border-[#25875115] rounded-lg'>
                    <div className='flex justify-between items-center gap-8 px-6 pt-3 pb-6'>
                        <div className='flex justify-center items-center bg-[#dcecff] w-14 h-14 rounded-full'>
                            <BiGlobeAlt className='w-14 h-14 text-blue-500 p-3'/>
                        </div>
                        <div>
                            <h3 className='text-[15px] text-left font-semibold text-gray-500'>Revenue</h3>
                            <h4 className='text-right text-[22px] font-bold '>$2,034</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4 py-2'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-md font-semibold text-[#1d8751]'>40% <span className=' text-gray-500'>Up then last year</span></h4>
                    </div>
                </div>

                <div className='bg-white shadow-[0_3px_4px_0_rgba(0, 0, 0, .03)] border-2 border-[#25875115] rounded-lg'>
                    <div className='flex justify-between items-center gap-8 px-6 pt-3 pb-6'>
                        <div className='flex justify-center items-center bg-[#dcecff] w-14 h-14 rounded-full'>
                            <FaShippingFast className='w-14 h-14 text-blue-500 p-3'/>
                        </div>
                        <div>
                            <h3 className='text-[15px] text-left font-semibold text-gray-500'>Total Sells</h3>
                            <h4 className='text-right text-[22px] font-bold '>$4,000</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4 py-2'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-md font-semibold text-[#1d8751]'>60% <span className=' text-gray-500'>Up then last year</span></h4>
                    </div>
                </div>

                <div className='bg-white shadow-[0_3px_4px_0_rgba(0, 0, 0, .03)] border-2 border-[#25875115] rounded-lg'>
                    <div className='flex justify-between items-center gap-8 px-6 pt-3 pb-6'>
                        <div className='flex justify-center items-center bg-[#dcecff] w-14 h-14 rounded-full'>
                            <FaBowlFood className='w-14 h-14 text-blue-500 p-3'/>
                        </div>
                        <div>
                            <h3 className='text-[15px] text-left font-semibold text-gray-500'>New Items</h3>
                            <h4 className='text-right text-[22px] font-bold '>200</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4 py-2'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-md font-semibold text-[#1d8751]'>20% <span className=' text-gray-500'>Up then last year</span></h4>
                    </div>
                </div>

                <div className='bg-white shadow-[0_3px_4px_0_rgba(0, 0, 0, .03)] border-2 border-[#25875115] rounded-lg'>
                    <div className='flex justify-between items-center gap-8 px-6 pt-3 pb-6'>
                        <div className='flex justify-center items-center bg-[#dcecff] w-14 h-14 rounded-full'>
                            <MdDiscount className='w-14 h-14 text-blue-500 p-3'/>
                        </div>
                        <div>
                            <h3 className='text-[15px] text-left font-semibold text-gray-500'>Max Discount</h3>
                            <h4 className='text-right text-[22px] font-bold '>40%</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4 py-2'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-md font-semibold text-[#1d8751]'>30% <span className=' text-gray-500'>Up then last year</span></h4>
                    </div>
                </div>
            </div>

            <div className="w-full h-100 bg-white p-6 rounded-2xl shadow-md mt-10 pb-10 border border-gray-100 ">
                <h2 className="text-lg font-semibold text-[#253D4E] mb-4">
                    Product Prices Overview
                </h2>

                <ResponsiveContainer width="100%" height="100%" className=" pb-5 -ml-7" >
                    <LineChart data={formattedData}>

                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#258751" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#258751" stopOpacity={0}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                        <XAxis 
                            dataKey="name"
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis 
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip 
                            contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            border: "1px solid #eee",
                            }}
                            formatter={(value) => [`$${value}`, "Price"]}
                        />

                        <Line 
                            type="monotone"
                            dataKey="price"
                            stroke="#258751"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow overflow-x-auto mt-10 mb-10">
                <h2 className="text-xl font-bold mb-4">Your Purchases</h2>

                {
                    cartItems.length === 0 ?
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-lg md:text-lg lg:text-xl font-semibold text-black'>There is no item in the cart</h3>
                        <NavLink to="/" className="my-2">
                            <Button buttonText="Home" iconPosition='left' Icon={PiShoppingCartBold} variant="primary"></Button>
                        </NavLink>
                    </div>
                    :
                    <>
                    <div className='overflow-x-auto'>
                        <table className="table w-full table-zebra my-5 border border-gray-300 rounded-sm p-2 mb-3 ml-0">
                            <thead>
                                <tr>
                                    <th className="p-3 text-center">Image</th>
                                    <th className="p-3 text-left">Product</th>
                                    <th className="p-3 text-center">Price</th>
                                    <th className="p-3 text-center">Quantity</th>
                                    <th className="p-3 text-center">Added On</th>
                                    <th className='p-3 text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                cartItems.map((item) => (
                                <tr key={item.productId} className='text-center'>
                                    <td className="p-3 border border-transparent">
                                        <span className='flex justify-center items-center'>
                                            <img
                                                src={item.productImage}
                                                alt={item.productImage}
                                                className="w-12 h-12 object-cover rounded border-none"
                                            />
                                        </span>
                                    </td>

                                    <td className="p-3 font-semibold text-[#253D4E] truncate text-left border border-transparent" title={item?.productName}>
                                        {item.productName} 
                                    </td>


                                    <td className="p-3 border border-transparent">
                                        <span className="text-[#253D4E] font-bold">
                                            ${item.productPrice}
                                        </span>
                                    </td>

                                    <td className='text-lg text-center whitespace-nowrap border border-transparent'>
                                        <div className='flex justify-center items-center gap-2 whitespace-nowrap'>
                                            <span>
                                                <FiMinus onClick={() => updateQuantity(item.productId , "decrease")} className='bg-gray-200 rounded-sm text-[#253D4E] cursor-pointer text-xl lg:text-2xl p-1'></FiMinus>
                                            </span>
                                            <span>{item.productQuantity}</span>
                                            <span>
                                                <FaPlus onClick={() => updateQuantity(item.productId , "increase")} className='bg-gray-200 rounded-sm text-[#253D4E] cursor-pointer text-xl lg:text-2xl p-1'></FaPlus>
                                            </span>
                                        </div>
                                    </td>

                                    <td className="p-3 border border-transparent">
                                        <span className="text-[#253D4E] font-bold whitespace-nowrap">
                                            {item.added_time}
                                        </span>
                                    </td>
                                
                                    <td className="text-lg flex gap-2 justify-center items-center whitespace-nowrap border border-transparent">
                                        <Button buttonText="Delete" iconPosition='left' variant="primary" Icon={IoTrashBinOutline} onClick={() => handleDelete(item.productId)}></Button>
                                    </td>
                                </tr>
                                )
                                )}
                            <tr className="font-bold text-lg bg-gray-200">
                                <td colSpan="1" className="text-left">Total</td>
                                <td colSpan="5" className="text-right">${totalPrice}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </>
                }
            </div>
        </div>

    )
}

export default DashboardDefault