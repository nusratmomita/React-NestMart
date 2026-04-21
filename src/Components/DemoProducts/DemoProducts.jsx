import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { images } from '../../Data/config';
import DemoProductSingleCard from './DemoProductSingleCard';

const DemoProducts = () => {

    const DemoProductsData = [
        {
            "id": 1,
            "image": images.demoProductImage1,
            "text": "Everyday Fresh & Clean with Our Products"
        },
        {
            "id": 2,
            "image": images.demoProductImage2,
            "text": "Make your Breakfast Healthy and Easy"
        },
        {
            "id": 3,
            "image": images.demoProductImage3,
            "text": "The best Organic Products Online"
        }
    ];

    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 quicksand-font px-10 md:px-5 lg:px-5 xl:px-5 2xl:px-0 mt-20'>
            {
                DemoProductsData.map((demoProduct) => (
                    <DemoProductSingleCard key={demoProduct.id} demoProduct={demoProduct}/>
                ))
            }
            </div>
        </div>
    )
}

export default DemoProducts