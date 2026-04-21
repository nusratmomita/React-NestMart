import React from 'react'
import { RiArrowDownWideLine, RiArrowUpWideLine  } from 'react-icons/ri';
import { RxDashboard } from "react-icons/rx";
import { images } from '../../Data/config';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import SingleBrowseCategory from './SingleBrowseCategory';

const HeaderBottom = () => {

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
    return (
        <div className='container'>
            <div className='pb-3 hidden lg:flex justify-between items-center mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
                <div className='flex lg:gap-5 xl:gap-5 items-center'>
                    <div className="relative group">
                        <div className="cursor-pointer flex items-center gap-1 text-[#4c4c4c] font-medium">
                            <div className='bg-[#1d8751] text-white inline-block rounded-[5px] text-[16px] font-semibold'>
                                <button className='flex justify-between items-center gap-2 px-5 py-2 cursor-pointer whitespace-nowrap' ><RxDashboard/> Browse All Categories <RiArrowDownWideLine/> </button>
                            </div>
                        </div>
                        <ul className="hidden group-hover:grid grid-cols-2 gap-4 absolute left-0 top-full menu bg-base-100 rounded-box z-999 w-140 p-4 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
                            {
                                browseCategories.map((category,index) => (
                                    <li key={index} className='border border-[#f2f3f4] cursor-pointer rounded-[5px] py-2.25 px-4.5 flex flex-row items-center hover:bg-white hover:shadow-[5px_5px_15px_rgba(0,0,0,0.05)] hover:border-[#1d8751]'>
                                        <SingleBrowseCategory category={category}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-6'>
                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Home <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
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
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Shop <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
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
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Stores <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
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
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Product <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
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
                        </div>

                        <div className="dropdown dropdown-hover text-[13px] cursor-pointer">
                            <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#000000] font-semibold text-[17px]">Blog <MdKeyboardArrowDown></MdKeyboardArrowDown > </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-9999 w-40 p-2 shadow-sm [&>li>a:hover]:bg-transparent [&>li>a:focus]:bg-transparent">
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
                        </div>
                        <div  className="text-[#000000] font-semibold text-[17px] cursor-pointer">FAQ</div>
                        <div  className="text-[#000000] font-semibold text-[17px] cursor-pointer">Contact</div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='hidden md:hidden lg:hidden xl:block 2xl:block'>
                        <FaHeadset  className='text-3xl xl:text-4xl 2xl:text-4xl text-[#252525]'/>
                    </div>
                    <div>
                    <h3 className='text-[#258751] text-2xl font-bold'>1900 - 888</h3>
                    <h4 className='text-[#4c4c4c] text-[11px] font-medium -mt-2'>24/7 Support Center</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom
