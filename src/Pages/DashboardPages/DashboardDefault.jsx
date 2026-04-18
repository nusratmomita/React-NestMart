import React from 'react'
import {  FaShippingFast } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaBowlFood } from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid, LineChart, Line} from "recharts";
import { BiGlobeAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const DashboardDefault = () => {

    const data = useLoaderData();

    const formattedData = data.map(item => ({
        name: item.product_name.length > 10 
        ? item.product_name.slice(0, 10) + "..." 
        : item.product_name,
        price: item.current_price
    }));


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
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-xl font-semibold text-[#1d8751]'>40% <span className='text-[12px] text-gray-500'>Up then last year</span></h4>
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
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-xl font-semibold text-[#1d8751]'>60% <span className='text-[12px] text-gray-500'>Up then last year</span></h4>
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
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-xl font-semibold text-[#1d8751]'>20% <span className='text-[12px] text-gray-500'>Up then last year</span></h4>
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
                    <div className='flex justify-center items-center gap-2 bg-gray-100 mx-2 mb-4'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4 className='whitespace-nowrap text-xl font-semibold text-[#1d8751]'>30% <span className='text-[12px] text-gray-500'>Up then last year</span></h4>
                    </div>
                </div>
            </div>

            <div className="w-full h-100 bg-white p-6 rounded-2xl shadow-md mt-10 pb-10 border border-gray-100">
                <h2 className="text-lg font-semibold text-[#253D4E] mb-4">
                    Product Prices Overview
                </h2>

                <ResponsiveContainer width="100%" height="100%">
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
                <h2 className="text-xl font-bold mb-4">Product Details</h2>

                <table className="w-full text-sm text-left border border-gray-200">
                    
                    <thead className="bg-[#258751] text-white">
                    <tr>
                        <th className="p-3">Image</th>
                        <th className="p-3">Product</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Rating</th>
                        <th className="p-3">Seller</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map((product) => (
                        <tr key={product.id} className="border-b border-gray-300 hover:bg-gray-50">

                            <td className="p-3">
                                <img
                                src={product.image}
                                alt={product.product_name}
                                className="w-12 h-12 object-cover rounded"
                                />
                            </td>

                            <td className="p-3 font-semibold text-[#253D4E]">
                                {product.product_name}
                            </td>

                            <td className="p-3">{product.category}</td>

                            <td className="p-3">
                                <span className="text-[#258751] font-bold">
                                ${product.current_price}
                                </span>
                                <br />
                                {product.previous_price && (
                                <span className="line-through text-gray-400 text-xs">
                                    ${product.previous_price}
                                </span>
                                )}
                            </td>

                            <td className="p-3">
                                ⭐ {product.total_rating} ({product.total_reviews})
                            </td>

                            <td className="p-3 text-[#258751]">
                                {product.sold_by}
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default DashboardDefault