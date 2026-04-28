import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, useLoaderData } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbSortDescending2 } from "react-icons/tb";
import ProductCard from '../../Components/ProductCard/ProductCard';
import { FaCheck } from 'react-icons/fa';
import { images } from '../../Data/config';
// import "./Shop.css"

const Shop = () => {
  const data = useLoaderData();

  const [itemsPerFilter , setItemsPerFilter] = useState(12);
  
  const [animation , setAnimation] = useState(false);

  const [sortingOption , setSortingOption] = useState("Default");

  const [selectedCategory , setSelectedCategory] = useState(null);

  const [selectedSeller , setSelectedSeller] = useState([]);

  const [selectedTag , setSelectedTag] = useState([]);

  const [selectedPrice , setSelectedPrice] = useState({ min: 0, max:1500 });

  const [selectedDiscount , setSelectedDiscount] = useState(false);

  const handleAnimation = (totalProduct) => {
    setAnimation(true);
    setItemsPerFilter(totalProduct)

    setTimeout(() => {
      setAnimation(false)
    },200)
  }

  // true -> returns everything
  const filteredData = data.filter((item) => {
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;

    const matchSeller = selectedSeller.length > 0 ? selectedSeller.includes(item.sold_by) : true

    const matchTag = selectedTag.length > 0 ? selectedTag.includes(item.tag) : true

    const matchPrice = item.current_price >= selectedPrice.min && item.current_price <= selectedPrice.max

    const matchDiscount = selectedDiscount ? item.discount > 0 : true;

    return matchCategory && matchSeller && matchTag && matchPrice && matchDiscount
  })
  

  const sortedData = [...filteredData].sort((a,b) => {
    switch(sortingOption) {
      case "Price Low To High":
        return a.current_price - b.current_price;

      case "Price High To Low":
        return b.current_price - a.current_price;

      case "A To Z":
        return a.product_name.localeCompare(b.product_name);

      case "Z To A":
        return b.product_name.localeCompare(a.product_name);

      case "Rating Low To High":
        return a.total_rating - b.total_rating;

      case "Rating High To Low":
        return b.total_rating - a.total_rating;

      default:
        return 0;
    }
  })

  const visibleProducts = sortedData.slice(0,itemsPerFilter);

  const categoryFilter = [
    {
      "category_name": "Diet food",
      "image": images.category1
    },
    {
      "category_name": "Pet food",
      "image": images.category2
    },
    {
      "category_name": "Coffee & Teas",
      "image": images.category3
    },
    {
      "category_name": "Cake & Milk",
      "image": images.category4
    },
    {
      "category_name": "Milk & Dairies",
      "image": images.category5
    },
    {
      "category_name": "Clothing & Beauty",
      "image": images.category6
    },
    {
      "category_name": "Baking Materials",
      "image": images.category7
    },
    {
      "category_name": "Pet Toy",
      "image": images.category8
    },
    {
      "category_name": "Fruits",
      "image": images.category9
    },
    {
      "category_name": "Drinks",
      "image": images.category10
    }
  ]

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(prev => prev === categoryName ? null :categoryName);
  }

  const handleSellerFilter = (seller) => {
    setSelectedSeller((prev) => 
      prev.includes(seller) ? prev.filter((s) => s !== seller) : [...prev , seller]
    )
  }

   const handleTag = (tag) => {
    setSelectedTag((prev) => 
      prev.includes(tag) ? prev.filter((s) => s !== tag) : [...prev , tag]
    )
  }


  return (
    <div  className='container'>
      <hr className='border-t border-gray-200 my-2 hidden md:hidden lg:block xl:block 2xl:block'/>
      <div className='flex gap-2 items-center px-8 py-5 font-semibold'>
        <NavLink to="/"
          className='text-[14px] text-[#1d8751] hover:text-[#FDC040]'>Home
        </NavLink>
        <MdKeyboardArrowRight className=' text-[#212519bf] mt-1'/>
        <h4 className='text-[14px] text-[#212519bf]'>Products</h4>
      </div>
      <hr className='border-t border-gray-200 my-2 hidden md:hidden lg:block xl:block 2xl:block mb-5'/>

      <div className='flex gap-5'>
        {/* text, filter , product cards */}
        <div className='w-full lg:w-[75%]'>
          {/* text nd filter */}
          <div className='flex items-center justify-between'>
            <h4 className='font-semibold text-[#4c4c4c]'>We found <span className='text-lg text-[#1d8751]'>{itemsPerFilter}</span> items for you!</h4>
            <div>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-[#777] text-[13px] rounded-[10px] border border-[#ececec] hover:border-[#ececec]"><RxDashboard size={20} className='text-[#ababab] mr-0.75'/> Show: <span className='text-[#4c4c4c] text-[13px] flex justify-center items-center'>{itemsPerFilter}<MdKeyboardArrowDown className='ml-2'/></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-34 shadow-sm text-left p-0 m-0">
                  <li onClick={() => handleAnimation(12)} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2 flex totalPageCSS'>
                    {/* {itemsPerFilter === 12 && <FaCheck size={12} className='debug hover:text-white text-[#4c4c4c]'/>} */}
                  12</li>
                  <li onClick={() => handleAnimation(24)} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5'>
                    {/* {itemsPerFilter === 24 && <FaCheck/>} */}
                    24</li>
                  <li onClick={() => handleAnimation(36)} className='hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mb-2'>
                    {/* {itemsPerFilter === 36 && <FaCheck/>} */}
                    36</li>
                </ul>
              </div>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-[#777] text-[13px] rounded-[10px] border border-[#ececec] hover:border-[#ececec]"><TbSortDescending2 size={20} className='text-[#ababab] mr-0.75'/> Sort By: <span className='text-[#4c4c4c] text-[13px] flex justify-center items-center'>{sortingOption}<MdKeyboardArrowDown className='ml-2'/></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-45 shadow-sm text-left p-0 m-0">
                  <li onClick={() => setSortingOption("Default")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Default</li>
                  <li onClick={() => setSortingOption("Price Low To High")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Price: Low to High</li>
                  <li onClick={() => setSortingOption("Price High To Low")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Price: High to Low</li>
                  <li onClick={() => setSortingOption("A To Z")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Name: A To Z</li>
                  <li onClick={() => setSortingOption("Z To A")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Name: Z To A</li>
                  <li onClick={() => setSortingOption("Rating Low To High")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Rating: Low To High</li>
                  <li onClick={() => setSortingOption("Rating High To Low")} className='mb-3 hover:bg-[#1d8751] hover:text-white cursor-pointer pl-5 mt-2'>Rating: High To Low</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 transition-all duration-300
            ${ animation ? "opacity-0 scale-95" : "opacity-100 scale-100"}
            `}>
            {
              visibleProducts.map((item => (
                <ProductCard key={item.id} product={item} style1={true}/>
              )))
            }
          </div>
        </div>

        {/* advance filters */}
        <div className='w-full lg:w-[25%]'>
            {/* category */}
            <div className='bg-[#f5f5f5] p-5'>
              <h3 className='text-[#253D4E] font-bold text-[18px] border-b border-[#eee] pb-1.25'>Categories</h3>
              <ul className='mt-3'>
                <li
                  onClick={() => setSelectedCategory(null)}
                  className={`flex gap-1 items-center mb-2 cursor-pointer ${
                    selectedCategory === null ? "" : ""
                  }`}
                >
                  <span className="text-[14px] font-semibold text-[#55585b] flex items-center gap-1">
                    <img className='w-5 h-5' src={images.category12} alt="All" />
                    All
                  </span>
                </li>
                {
                  categoryFilter.map((category,index) => 
                  <li key={index} className={`flex gap-1 items-center mb-2 cursor-pointer ${ selectedCategory === category.category_name ? "text-[#fdc040]" : "text-[#55585b]"}`} onClick={() => handleCategoryFilter(category.category_name)}>
                    <img className='w-5 h-5' src={category.image} alt={category.category_name} />
                    <span className='text-[14px] font-semibold hover:text-[#fdc040]'>{category.category_name}</span>
                  </li>
                  )
                }
              </ul>
            </div>

            {/* sold by */}
            <div className='bg-[#f5f5f5] p-5 mt-5'>
              <h3 className='text-[#253D4E] font-bold text-[18px] border-b border-[#eee] pb-1.25'>Sold by</h3>
              <div className='mt-3'>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSeller.includes("GoPro")}
                    onChange={() => handleSellerFilter("GoPro")}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedSeller.includes("GoPro")
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedSeller.includes("GoPro") && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">GoPro</span>
                </label>
                <br />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSeller.includes("Global Store")}
                    onChange={() => handleSellerFilter("Global Store")}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedSeller.includes("Global Store")
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedSeller.includes("Global Store") && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">Global Store</span>
                </label>
              </div>
            </div>

             {/* tag */}
            <div className='bg-[#f5f5f5] p-5 mt-5'>
              <h3 className='text-[#253D4E] font-bold text-[18px] border-b border-[#eee] pb-1.25'>Tags</h3>
              <div className='mt-3'>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTag.includes("Hot")}
                    onChange={() => handleTag("Hot")}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedTag.includes("Hot")
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedTag.includes("Hot") && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">Hot</span>
                </label>
                <br />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTag.includes("Sale")}
                    onChange={() => handleTag("Sale")}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedTag.includes("Sale")
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedTag.includes("Sale") && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">Sale</span>
                </label>
                <br />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTag.includes("New")}
                    onChange={() => handleTag("New")}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedTag.includes("New")
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedTag.includes("New") && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">New</span>
                </label>
              </div>
            </div>

            {/* price range */}
            <div className='bg-[#f5f5f5] p-5 mt-5 relative'>
              <h3 className='text-[#253D4E] font-bold text-[18px] border-b border-[#eee] pb-1.25'>
                Price
              </h3>

              <div className="relative mt-5">
                {/* min */}
                <input
                  type="range"
                  min="0"
                  max="1500"
                  value={selectedPrice.min}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= selectedPrice.max) {
                      setSelectedPrice({ ...selectedPrice, min: value });
                    }
                  }}
                  className="absolute w-full pointer-events-none appearance-none bg-transparent z-20"
                />

                {/* max */}
                <input
                  type="range"
                  min="0"
                  max="1500"
                  value={selectedPrice.max}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= selectedPrice.min) {
                      setSelectedPrice({ ...selectedPrice, max: value });
                    }
                  }}
                  className="absolute w-full pointer-events-none appearance-none bg-transparent z-20"
                />

                {/* sliders */}
                <div className="h-2 bg-gray-300 rounded-full relative z-10">
                  <div
                    className="absolute h-2 bg-[#1d8751] rounded-full"
                    style={{
                      left: `${(selectedPrice.min / 1500) * 100}%`,
                      right: `${100 - (selectedPrice.max / 1500) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* text */}
              <p className="mt-6 font-semibold=">
                <span className="text-[#253D4E] font-bold">
                  ${selectedPrice.min} - ${selectedPrice.max}
                </span>
              </p>
            </div>

            {/* discount */}
            <div className='bg-[#f5f5f5] p-5 mt-5 relative'>
              <h3 className='text-[#253D4E] font-bold text-[18px] border-b border-[#eee] pb-1.25'>On Sale</h3>

              <label className="flex items-center gap-2 cursor-pointer mt-3">
                  <input
                    type="checkbox"
                    checked={selectedDiscount}
                    onChange={() => setSelectedDiscount(prev => !prev)}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center transition-all
                      ${
                        selectedDiscount
                          ? "bg-[#1d8751] border-[#1d8751]"
                          : "border-gray-400"
                      }`}
                  >
                    {selectedDiscount && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>

                  <span className="text-[#55585b] font-semibold">Show only discounted products</span>
                </label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop