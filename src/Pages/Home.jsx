import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import DemoProducts from '../Components/DemoProducts'
import PopularProducts from '../Components/PopularProducts'
import { useLoaderData } from 'react-router'
import DailyBestSells from '../Components/DailyBestSells'
import DealsOfTheDay from '../Components/DealsOfTheDay/DealsOfTheDay'
import FourTypesProduct from '../Components/FourTypesProduct'
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'
import Features from '../Components/Features'

const Home = () => {
  const popularProducts = useLoaderData();
  // console.log(popularProducts)

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  return (
    <div className='quicksand-font overflow-hidden'>
      <Banner/>
      <DemoProducts/>
      <PopularProducts popularProductsData={popularProducts}/>
      <DailyBestSells popularProductsData={popularProducts}/>
      {/* <DealsOfTheDay popularProducts={popularProducts}/> */}
      <DealsOfTheDay/>
      <FourTypesProduct/>
      <ShopByCategory/>
      <Testimonials/>
      <Newsletter/>
      <Features/>

      {showTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-[#1d8751] text-white p-3 rounded-full shadow-lg hover:bg-[#145c3a] transition-all duration-300 z-50 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
          }`}
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default Home