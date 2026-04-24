import React, { useState } from 'react'
import siteLogo from "../../assets/logo.png"
import { GiRecycle } from "react-icons/gi";
import { FaBorderAll, FaChevronDown, FaChevronUp, FaFacebookF, FaInstagram, FaPinterestP, FaRegHeart, FaYoutube } from "react-icons/fa";
import { CiShoppingCart, CiTwitter } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
import { CgDetailsMore } from "react-icons/cg";
import { RiArrowDownWideFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineLanguage, MdSpaceDashboard } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { RiHeadphoneLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import SingleCartItem from './SingleCartItem';
import Button from "../Buttons/Button";
import { LuFlagTriangleRight } from 'react-icons/lu';
import SingleBrowseCategory from './SingleBrowseCategory';
import productData from "../../../public/JsonData/PopularProducts.json";
import ResponsiveHeader from './ResponsiveHeader';


const HeaderMiddle = () => {

  const cartItems = useSelector((state) => state.myCart.items);

  const subtotal = cartItems.reduce((total,items) => total + items.productPrice * items.productQuantity , 0) 
  // console.log(cartItems) 

  const [searchTerm,setSearchTerm] = useState("");
  const [suggestions,setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // ?
    if(value.trim() === ""){
      setSuggestions([]);
      return;
    }

    const filtered = productData.filter((product) =>
    product.product_name.toLowerCase().includes(value.toLowerCase())
  );

  setSuggestions(filtered);

  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content mx-5 md:mx-5 lg:mx-8 xl:mx-5 2xl:mx-0">
          <div className='container mx-auto py-5 flex justify-between items-center'>

            <div className='flex items-center justify-between w-full xl:gap-5 2xl:gap-10'>

              <div className='flex items-center gap-3 lg:gap-1 xl:gap-15'>
                <label htmlFor="my-drawer" className="lg:hidden text-2xl cursor-pointer">
                  ☰
                </label>

                <a href="#">
                  <img className='max-w-36 w-full cursor-pointer' src={siteLogo} alt="logo" />
                </a>

                <div className='hidden lg:flex justify-between items-center relative w-70 lg:w-90 xl:w-150 2xl:w-170 border border-[#1D8751] rounded-sm pt-3 pl-5 pb-3'>
                  <div className='flex items-center'>
                    {/* category dropdown */}
                    <div className='w-40 flex items-center cursor-pointer'>
                      <select name="categories" id="categories" className='appearance-none focus:outline-none'>
                        <option value="All Category">All Categories</option>
                        <option value="Diet foods">Diet foods</option>
                        <option value="Pet foods">Pet foods</option>
                        <option value="Coffee & Tea">Coffee & Tea</option>
                        <option value="Cake & Milk">Cake & Milk</option>
                        <option value="Bread & juice">Bread & juice</option>
                        <option value="Fast foods">Fast foods</option>
                        <option value="Fresh Seafoods">Fresh Seafoods</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Pet Toy">Pet Toy</option>
                        <option value="Baking Materials">Baking Materials</option>
                      </select>
                      <RiArrowDownWideFill  className=" text-gray-500 pointer-events-none" />
                    </div>

                    <hr className='bg-[#8a8a8a] h-4 w-px 2xl:mr-3'/>
                    
                    <input type="text"
                      placeholder="Search For Items..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="text-grey-500 focus:outline-none ml-2 lg:w-40 xl:w-100"/>
                      
                      {suggestions.length > 0 && (
                      <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md z-50 max-h-60 overflow-y-auto">
                        {suggestions.map((item) => (
                          <li
                            key={item.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSearchTerm(item.product_name);
                              setSuggestions([]);
                            }}
                          >
                            <div className='flex items-center gap-2'> 
                              <img className='w-10 h-10 rounded-full object-cover' src={item.image} alt={item.product_name} />
                              <div>
                                <h4 className='text-gray-700 font-semibold text-md'>{item.product_name}</h4>
                                <p className='text-gray-500 font-semibold text-md'>${item.current_price}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <IoSearchOutline className='mr-3 text-[#1d8751] text-2xl cursor-pointer inline-block'/>
                </div>
              </div>

              <div className="lg:hidden">
                  <NavLink to="/dashboard" className="cursor-pointer flex gap-1 items-center">
                    <MdOutlineDashboard className='text-2xl'/>
                    <h4 className='text-[#707070] font-semibold'>Dashboard</h4>
                  </NavLink>
              </div>

            </div>

            <div className='hidden lg:flex gap-1 xl:gap-5'>
              <div className='flex items-center gap-4 cursor-pointer'>
                <div className='relative'>
                  <GiRecycle className='text-2xl'/>
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-3'>
                    0
                  </span>
                </div>
                <h4 className='text-[#707070]'>Compare</h4>
              </div>

              <div className='flex items-center gap-4 cursor-pointer'>
                <div className='relative'>
                  <FaRegHeart className='text-2xl'/>
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-3'>
                    0
                  </span>
                </div>
                <h4 className='text-[#707070]'>Wishlist</h4>
              </div>

              <div className='flex items-center gap-4 group relative'>
                <div className='relative cursor-pointer'>
                  <CiShoppingCart className='text-2xl'/>
                  {
                    cartItems.length === 0 ?
                    <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-3'>
                      0
                    </span>
                  :
                  <span className='bg-[#258157] rounded-full text-white w-5 h-5 text-[12px] flex items-center justify-center absolute -top-2 -right-3'>
                    {cartItems.length}
                  </span>
                  }
                </div>
                <h4 className='text-[#707070] cursor-pointer'>Cart</h4>
                <ul className='opacity-0 invisible absolute top-full right-0 py-2 group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-300 ease-out'>
                  {
                    cartItems.length === 0 ?
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] py-6 pl-5 pr-6.75 w-62.5 border border-[#ececec] rounded-sm'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap'>No products in the cart.</h3>
                    </div>
                    :
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] border border-[#ececec] rounded-sm w-80 p-3 pl-0'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap pl-3'>Your Cart</h3>
                      <ul>
                        {
                          cartItems.map((item,index) => (
                            <li key={index}>
                              <SingleCartItem item={item}></SingleCartItem>
                            </li>

                          ))  
                        }
                      </ul>
                      <div className='flex justify-between items-center mt-2 pt-3 pl-3'>
                        <span className='font-semibold text-gray-700'>Subtotal:</span>
                        <span className='font-bold text-[#1d8751]'>
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className='w-full mt-2 block pl-3'>
                        <NavLink to="/dashboard" className="bg-[#1c875133] flex justify-center items-center text-[#1d8751] text-lg font-semibold hover:bg-[#1d8751] hover:text-white rounded-sm py-2">
                          View Cart
                        </NavLink>
                      </div>
                    </div>
                  }
                </ul>
              </div>

              <NavLink to="/dashboard" className="flex items-center gap-1 cursor-pointer">
                <MdOutlineDashboard  className='text-2xl'/>
                <h4 className='text-[#707070] font-semibold'>Dashboard</h4>
              </NavLink>
            </div>

          </div>
        </div>
      
      {/* for small screen */}
      <ResponsiveHeader/>

    </div>
  )
}

export default HeaderMiddle