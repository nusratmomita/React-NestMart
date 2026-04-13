import React from 'react'
import testimonial_quote from "../assets/testimonial-quote.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {

  const testimonialsPerPerson = [
    {
        "id": 1,
        "description": "Thanks for all your efforts and teamwork over the last several months! Thank you so much",
        "reviewer_image": "https://i.ibb.co.com/bMwJ6Ctt/reviewer-Image1.jpg",
        "reviewer": "James Dopli",
        "reviewer_post": "Developer"
    },
    {
        "id": 2,
        "description": " How you use the city or town name is up to you. All results may be freely used in any work.",
        "reviewer_image": "https://i.ibb.co.com/cXbMn4GZ/reviewer-Image2.jpg",
        "reviewer": "Theodore Handle",
        "reviewer_post": "CoFounder"
    },
    {
        "id": 3,
        "description": " Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
        "reviewer_image": "https://i.ibb.co.com/bMwJ6Ctt/reviewer-Image1.jpg",
        "reviewer": "Shahnewaz Sakil",
        "reviewer_post": "UI/UX Designer"
    },
    {
        "id": 4,
        "description": " Wedding day savior! 5 stars. Their bridal collection is a game-changer. Made me feel like a star.",
        "reviewer_image": "https://i.ibb.co.com/cXbMn4GZ/reviewer-Image2.jpg",
        "reviewer": "Albert Flores",
        "reviewer_post": "Bank of America"
    }
  ]  
  return (
    <div className='container'>
        <h3 className='text-[32px] font-bold text-[#253D4E] mt-10 section_title'>What our Clients say</h3>

        <h5 className='text-[#707070] text-[1rem] my-5'>Customers Review</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                testimonialsPerPerson.map((testimonial) => (
                    <div key={testimonial.id} className='border border-[#ececec] w-full flex flex-col justify-start items-start p-7.5 transform transition duration-300 hover:-translate-y-1 hover:border-t-transparent hover:border-r-transparent hover:border-l-transparent'>
                        <img className='max-w-10 mx-auto mb-5' src={testimonial_quote} alt="testimonial_quote" />
                        <div className='flex justify-start items-start mb-5'>
                            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
                            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
                            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
                            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
                            <FaStar className='text-[#ff9900] text-2xl'></FaStar>
                        </div>
                        <p className='text-[#707070] mb-10'>{testimonial.description}</p>
                        <div className='flex gap-5'>
                            <img className='rounded-full w-12.5 h-12.5' src={testimonial.reviewer_image} alt={testimonial.reviewer} />
                            <div>
                                <h4 className='text-[#253D4E] font-bold'>{testimonial.reviewer}</h4>
                                <h4 className='text-[#707070] text-[13px]'>{testimonial.reviewer_post}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials