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
import { images } from '../../Data/config';
import { GoHome } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { RiHeadphoneLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import SingleCartItem from './SingleCartItem';
import Button from "../Buttons/Button";
import { LuFlagTriangleRight } from 'react-icons/lu';
import SingleBrowseCategory from './SingleBrowseCategory';

const HeaderMiddle = () => {

  const cartItems = useSelector((state) => state.myCart.items);
  // console.log(cartItems) 

  const [openMenu, setOpenMenu] = useState(null);

  const subtotal = cartItems.reduce((total,items) => items.productPrice * items.productQuantity , 0) 
  // console.log(subtotal)
  
  const languageDropdown = [
    {
        languageName: "Bangla",
        href: "#"
    },
    {
        languageName: "Arabic",
        href: "#"
    },
    {
        languageName: "Spanish",
        href: "#"
    },
    {
        languageName: "French",
        href: "#"
    }
  ]

  const currencyDropdown = [
    {
        currencyName: "Taka",
        href: "#"
    },
    {
        currencyName: "Riyal",
        href: "#"
    },
    {
        currencyName: "Euro",
        href: "#"
    },
    {
        currencyName: "Penny",
        href: "#"
    }
  ]

  const homeOptions = [
    {
      homeName: "Home 1",
      href: "#"
    },
    {
      homeName: "Home 2",
      href: "#"
    },
    {
      homeName: "Home 3",
      href: "#"
    },
    {
      homeName: "Home 4",
      href: "#"
    }
  ]

  const shopOptions = [
    {
      shopName: "Shop 1",
      href: "#"
    },
    {
      shopName: "Shop 2",
      href: "#"
    },
    {
      shopName: "Shop 3",
      href: "#"
    },
    {
      shopName: "Shop 4",
      href: "#"
    }
  ]

  const storeOptions = [
    {
      storeName: "Store 1",
      href: "#"
    },
    {
      storeName: "Store 2",
      href: "#"
    },
    {
      storeName: "Store 3",
      href: "#"
    },
    {
      storeName: "Store 4",
      href: "#"
    }
  ]

  const productOptions = [
    {
      productName: "Product 1",
      href: "#"
    },
    {
      productName: "Product 2",
      href: "#"
    },
    {
      productName: "Product 3",
      href: "#"
    },
    {
      productName: "Product 4",
      href: "#"
    }
  ]

  const blogOptions = [
    {
      blogName: "Blog 1",
      href: "#"
    },
    {
      blogName: "Blog 2",
      href: "#"
    },
    {
      blogName: "Blog 3",
      href: "#"
    },
    {
      blogName: "Blog 4",
      href: "#"
    }
  ]

  const browseCategories = [
    {
      image: images.category1,
      categoryName: "Milks & Diaries"
    },
    {
      image: images.category2,
      categoryName: "Cold Drinks"
    },
    {
      image: images.category3,
      categoryName: "Pet Foods"
    },
    {
      image: images.category4,
      categoryName: "Diet Foods"
    },
    {
      image: images.category5,
      categoryName: "Vegetable"
    },
    {
      image: images.category6,
      categoryName: "Baking Materials"
    },
    {
      image: images.category7,
      categoryName: "Pet Toys"
    },
    {
      image: images.category8,
      categoryName: "Fruits"
    }

  ]

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content mx-5 md:mx-5 lg:mx-8 xl:mx-5 2xl:mx-0">
          <div className='container mx-auto py-5 flex justify-between items-center'>

            <div className='flex items-center justify-between w-full xl:gap-5 2xl:gap-10'>

              <div className='flex items-center gap-3 lg:gap-1 xl:gap-5'>
                <label htmlFor="my-drawer" className="lg:hidden text-2xl cursor-pointer">
                  ☰
                </label>

                <a href="#">
                  <img className='max-w-36 w-full cursor-pointer' src={siteLogo} alt="logo" />
                </a>

                <div className='hidden lg:flex justify-between items-center relative w-70 lg:w-100 xl:w-170 border border-[#1D8751] rounded-sm pt-3 pl-5 pb-3'>
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
                    <hr className='bg-[#8a8a8a] h-4 w-px'/>
                    <input type="text" name="searching" id="searching" placeholder='Search For Items...' className='text-grey-500 focus:outline-none ml-4'/>
                  </div>
                  <IoSearchOutline className='mr-3 text-[#1d8751] text-2xl cursor-pointer'/>
                </div>
              </div>

              <div className="lg:hidden">
                  <NavLink to="/dashboard" className="cursor-pointer flex gap-1 items-center">
                    <MdOutlineDashboard className='text-2xl'/>
                    <h4 className='text-[#707070] font-semibold'>Dashboard</h4>
                  </NavLink>
              </div>

            </div>

            <div className='hidden lg:flex gap-5'>
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

              <div className='flex items-center gap-4 cursor-pointer group relative'>
                <div className='relative'>
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
                <h4 className='text-[#707070]'>Cart</h4>
                <ul className='hidden group-hover:block absolute top-full right-0 py-2'>
                  {
                    cartItems.length === 0 ?
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] py-6 pl-5 pr-6.75 w-62.5 border border-[#ececec] rounded-sm'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap'>No products in the cart.</h3>
                    </div>
                    :
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] border border-[#ececec] rounded-sm w-80 pl-2 pr-2 pt-5 pb-5'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap mb-1 ml-2'>Your Cart</h3>
                      <ul>
                        <li>
                          {
                            cartItems.map((item,index) => (
                              <SingleCartItem key={index} item={item}/>
                            ))
                          }
                        </li>
                      </ul>
                      <div className='flex justify-between items-center mt-2 pt-3'>
                        <span className='font-semibold text-gray-700'>Subtotal:</span>
                        <span className='font-bold text-[#1d8751]'>
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className='w-full mt-2 block'>
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
      <div className="drawer-side z-9999">
        <label htmlFor="my-drawer" className="drawer-overlay"><RxCross2 className='bg-[#def9ec] rounded-[30px] text-2xl debug'/></label>

        <div className="bg-white w-80 h-screen p-5 overflow-y-auto">

          <div className='flex items-center justify-between mb-5'>
            <img src={siteLogo} className="w-[40%]" alt="logo"/>

            {/* this one manages opening and closing the drawer */}
            <label htmlFor="my-drawer" className="cursor-pointer">
              <RxCross2 className='bg-[#def9ec] rounded-full text-2xl p-1 hover:bg-[#1d8751] hover:text-white transition' />
            </label>
          </div>
          <div className="dropdown dropdown-hover"></div>
          
          <div className='flex justify-between mb-5 relative'>
            <input type="text" name="searching" id="searching" placeholder='Search For Items...' className='text-grey-500 focus:outline-none w-full border border-[#1D8751] rounded-sm pt-3 pl-5 pb-3'/>
            <IoSearchOutline className='mr-3 text-[#1d8751] text-2xl cursor-pointer absolute right-2 top-4'/>
          </div>

          <div>
            <ul className='space-y-4 mb-4 overflow-y-scroll'>
              <li>
                <div 
                    onClick={() => toggleMenu("browseCategories")}
                    className='flex justify-between items-center cursor-pointer'
                  >
                    <div className='flex items-center gap-2'>
                      <MdSpaceDashboard />
                      <span className='text-[#1d8751] text-xl font-semibold'>Browse Categories</span>
                    </div>

                    {openMenu === "browseCategories" ? <FaChevronUp className='text-[#707070]' /> : <FaChevronDown className='text-[#707070]' />}
                  </div>

                  {openMenu === "browseCategories" && (
                    <ul className='mt-2 space-y-2 flex flex-col items-center'>
                      {
                        browseCategories.map((category,index) => (
                            <li key={index} className='border border-[#f2f3f4] w-full cursor-pointer rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                <SingleBrowseCategory category={category}/>
                            </li>
                        ))
                      }
                    </ul>
                  )}
              </li>

              <li>
                <div 
                  onClick={() => toggleMenu("home")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    {
                      openMenu === "home" ? <span className='text-[#1d8751] font-semibold'><GoHome/></span> : <span><GoHome/></span>
                    }
                    {
                      openMenu === "home" ? <span className='text-[#1d8751] font-semibold'>Home</span> : <span>Home</span>
                    }
                  </div>

                  {openMenu === "home" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "home" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                {
                  homeOptions.map((home,index) => (
                      <li key={index}>
                          <a href={home.href}>
                              {home.homeName}
                          </a>
                      </li>
                  ))
                }
                </ul>
              </li>
              
              <hr className='border-t border-gray-300 my-3'/>

              <li>
                <div 
                  onClick={() => toggleMenu("shop")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    {
                      openMenu === "shop" ? <span className='text-[#1d8751] font-semibold'>Shop</span> : <span>Shop</span>
                    }
                  </div>

                  {openMenu === "shop" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "shop" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                {
                  shopOptions.map((shop,index) => (
                      <li key={index}>
                          <a href={shop.href}>
                              {shop.shopName}
                          </a>
                      </li>
                  ))
                }
                </ul>
              </li>

              <hr className='border-t border-gray-300 my-3'/>
              
              <li>
                <div 
                  onClick={() => toggleMenu("stores")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    {
                      openMenu === "stores" ? <span className='text-[#1d8751] font-semibold'>Stores</span> : <span>Stores</span>
                    }
                  </div>

                  {openMenu === "stores" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "stores" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                {
                  storeOptions.map((store,index) => (
                      <li key={index}>
                          <a href={store.href}>
                              {store.storeName}
                          </a>
                      </li>
                  ))
                }
                </ul>
              </li>

              <hr className='border-t border-gray-300 my-3'/>
              
              <li>
                <div 
                  onClick={() => toggleMenu("product")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    {
                      openMenu === "product" ? <span className='text-[#1d8751] font-semibold'>Product</span> : <span>Product</span>
                    }
                  </div>

                  {openMenu === "product" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "product" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                {
                  productOptions.map((product,index) => (
                    <li key={index}>
                        <a href={product.href}>
                            {product.productName}
                        </a>
                    </li>
                  ))
                }
                </ul>
              </li>

              <hr className='border-t border-gray-300 my-3'/>
              
              <li>
                <div 
                  onClick={() => toggleMenu("blogs")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    {
                      openMenu === "blogs" ? <span className='text-[#1d8751] font-semibold'>Blogs</span> : <span>Blogs</span>
                    }
                  </div>

                  {openMenu === "blogs" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "blogs" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                {
                  blogOptions.map((blog,index) => (
                    <li key={index}>
                        <a href={blog.href}>
                            {blog.blogName}
                        </a>
                    </li>
                  ))
                }
                </ul>
              </li>
              <hr className='border-t border-gray-300 my-3'/>
              
              <li className='font-semibold'>FAQ</li>

              <hr className='border-t border-gray-300 my-3'/>
              
              <li className='font-semibold'>Contact</li>
            </ul>
          </div>
          
          <div className='border border-[#a5a5a5] rounded-sm p-4'>
            <ul className='space-y-2 text-[#253D4E] font-semibold'>
              <li className='flex items-center gap-2'><GiRecycle  className='text-[#1d8751]'/> Compare</li>
              <li className='flex items-center gap-2'><FaRegHeart className='text-[#1d8751]'/> Wishlist</li>
              <li>
                <div 
                  onClick={() => toggleMenu("cart")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    <CiShoppingCart className='text-[#1d8751]'/>
                    <span>Cart</span>
                  </div>

                  {openMenu === "cart" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>
                <div className={`space-y-2 transition-all duration-300 ease-in-out 
                  ${openMenu === "cart" ? "max-h-140 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}>
                  {
                    cartItems.length === 0 ?
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] py-6 pl-5 pr-6.75 w-62.5 border border-[#ececec] rounded-sm'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap'>No products in the cart.</h3>
                    </div>
                    :
                    <div className='bg-white shadow-[5px_5px_15px_rgba(0,0,0,.05)] border border-[#ececec] rounded-sm w-60 pl-2 pr-2 pt-5 pb-5'>
                      <h3 className='text-gray-600 font-semibold whitespace-nowrap mb-1 ml-2'>Your Cart</h3>
                      <ul>
                        <li>
                          {
                            cartItems.map((item,index) => (
                              <SingleCartItem key={index} item={item}/>
                            ))
                          }
                        </li>
                      </ul>
                      <div className='flex justify-between items-center mt-2 pt-3'>
                        <span className='font-semibold text-gray-700'>Subtotal:</span>
                        <span className='font-bold text-[#1d8751]'>
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className='w-full mt-2 block'>
                        <NavLink to="/dashboard" className="bg-[#1c875133] flex justify-center items-center text-[#1d8751] text-lg font-semibold hover:bg-[#1d8751] hover:text-white rounded-sm py-2">
                          View Cart
                        </NavLink>
                      </div>
                    </div>
                    }
                  </div>
              </li>
              <li className='flex items-center gap-2'><IoPeopleSharp className='text-[#1d8751]'/> About Us</li>
              <li className='flex items-center gap-2'><FaBorderAll className='text-[#1d8751]'/> Track Order</li>
              <li>
                <div 
                  onClick={() => toggleMenu("language")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    <MdOutlineLanguage className='text-[#1d8751]'/>
                    <span>Language</span>
                  </div>

                  {openMenu === "language" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "language" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                  {
                    languageDropdown.map((language,index)=> (
                        <li key={index}>
                            <a href={language.href}>
                                {language.languageName}
                            </a>
                        </li>
                    ))
                  }
                </ul>
              </li>
              <li>
                <div 
                  onClick={() => toggleMenu("currency")}
                  className='flex justify-between items-center cursor-pointer'
                >
                  <div className='flex items-center gap-2 font-semibold'>
                    <PiCurrencyCircleDollarLight className='text-[#1d8751]'/>
                    <span>Currency</span>
                  </div>

                  {openMenu === "currency" 
                    ? <FaChevronUp className='text-[#707070]' /> 
                    : <FaChevronDown className='text-[#707070]' />}
                </div>

                <ul
                  className={`ml-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
                  ${openMenu === "currency" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                >
                  {
                    currencyDropdown.map((currency,index)=> (
                        <li key={index}>
                            <a href={currency.href}>
                                {currency.currencyName}
                            </a>
                        </li>
                    ))
                  }
                </ul>
              </li>
              <li className='flex items-center gap-2'><RiHeadphoneLine className='text-[#1d8751]'/> 1900-888</li>
            </ul>
          </div>
          <div className='mt-4 mb-4'>
            <h4 className='font-bold mb-3'>Follow Us</h4>
            <div className='flex gap-2'>
              <a href="www.facebook.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaFacebookF className='text-[14px]'/>
                </div>
              </a>
              <a href="www.x.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <CiTwitter className='text-[14px]'/>
                </div>
              </a>
              <a href="www.instagram.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaInstagram className='text-[14px]'/>
                </div>
              </a>
              <a href="www.pinterest.com"  target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaPinterestP className='text-[14px]'/>
                </div>
              </a>
              <a href="www.youtube.com" target='_blank'>
                <div className='bg-[#1d8751] text-white w-8.5 h-8.5 text-center rounded-[3px] flex justify-center items-center cursor-pointer border border-transparent hover:border-[#1d8751] hover:bg-white hover:text-[#1d8751] transform transition duration-300 hover:-translate-y-1'>
                  <FaYoutube className='text-[14px]'/>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h4 className='text-[14px] text-[#4c4c4c]'>Copyright © {new Date().getFullYear()} Nest all rights reserved. Powered by Botble.</h4>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeaderMiddle