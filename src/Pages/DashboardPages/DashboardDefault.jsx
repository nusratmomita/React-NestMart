import React from 'react'
import { FaGlobeAsia, FaShippingFast } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaBowlFood } from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";

const DashboardDefault = () => {

    const data = useLoaderData();

    const formattedData = data.map(item => ({
        name: item.product_name.length > 10 
        ? item.product_name.slice(0, 10) + "..." 
        : item.product_name,
        price: item.current_price
    }));


    return (
        <div>
            <div className='mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5'>
                <div className='bg-white shadow-md border-2 border-[#25875115] p-8 rounded-[5px]'>
                    <div className='flex justify-between items-center gap-3 '>
                        <FaGlobeAsia className='w-9 h-9 rounded-full'/>
                        <div>
                            <h3 className='text-[13px] font-semibold'>Total Shippings</h3>
                            <h4 className='text-right text-[18px] font-bold '>$2,034</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-4 bg-gray-100'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4>40% Up then last month</h4>
                    </div>
                </div>

                <div className='bg-white shadow-md border-2 border-[#25875115] p-8 rounded-[5px]'>
                    <div className='flex justify-between items-center gap-3 '>
                        <FaShippingFast className='w-9 h-9 rounded-full'/>
                        <div>
                            <h3 className='text-[13px] font-semibold'>Total Sells</h3>
                            <h4 className='text-right text-[18px] font-bold '>$1,034</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-4 bg-gray-100'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4>20% Up then last year</h4>
                    </div>
                </div>

                <div className='bg-white shadow-md border-2 border-[#25875115] p-8 rounded-[5px]'>
                    <div className='flex justify-between items-center gap-3 '>
                        <FaBowlFood  className='w-9 h-9 rounded-full'/>
                        <div>
                            <h3 className='text-[13px] font-semibold'>New Products</h3>
                            <h4 className='text-right text-[18px] font-bold '>4000</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-4 bg-gray-100'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4>10% Up then last year</h4>
                    </div>
                </div>

                <div className='bg-white shadow-md border-2 border-[#25875115] p-8 rounded-[5px]'>
                    <div className='flex justify-between items-center gap-3 '>
                        <MdDiscount className='w-9 h-9 rounded-full'/>
                        <div>
                            <h3 className='text-[13px] font-semibold'>Max Discount</h3>
                            <h4 className='text-right text-[18px] font-bold '>40%</h4>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-4 bg-gray-100'>
                        <FaCaretUp className='text-[#258751]'/>
                        <h4>30% Up then last year</h4>
                    </div>
                </div>
            </div>

            <div className="w-full h-100 bg-white p-4 rounded-xl shadow mt-10">
                <h2 className="text-xl font-bold mb-4">Product Prices</h2>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={formattedData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />
                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="price" fill="#258751" barSize={20}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow mt-6 overflow-x-auto mt-10">
                <h2 className="text-xl font-bold mb-4">Product Details</h2>

                <table className="w-full text-sm text-left border border-gray-200">
                    
                    {/* HEADER */}
                    <thead className="bg-[#258751] text-white">
                    <tr>
                        <th className="p-3">Image</th>
                        <th className="p-3">Product</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Rating</th>
                        <th className="p-3">Seller</th>
                        <th className="p-3">Sold</th>
                    </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                    {data.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">

                        {/* IMAGE */}
                        <td className="p-3">
                            <img
                            src={product.image}
                            alt={product.product_name}
                            className="w-12 h-12 object-cover rounded"
                            />
                        </td>

                        {/* NAME */}
                        <td className="p-3 font-semibold text-[#253D4E]">
                            {product.product_name}
                        </td>

                        {/* CATEGORY */}
                        <td className="p-3">{product.category}</td>

                        {/* PRICE */}
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

                        {/* RATING */}
                        <td className="p-3">
                            ⭐ {product.total_rating} ({product.total_reviews})
                        </td>

                        {/* SELLER */}
                        <td className="p-3 text-[#258751]">
                            {product.sold_by}
                        </td>

                        {/* TOTAL SELLING */}
                        <td className="p-3">
                            {product.total_selling}
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