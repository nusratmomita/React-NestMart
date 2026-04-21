import React from 'react'
import TestimonialSingleCard from './TestimonialSingleCard';

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
        <h3 className='text-[25px] md:text-[32px] lg:text-[32px] 2xl:text-[32px] font-bold text-[#253D4E] mt-10 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>What our Clients say</h3>

        {/* <h5 className='text-[#707070] text-[1rem] my-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>Customers Review</h5> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0'>
            {
                testimonialsPerPerson.map((testimonial) => (
                    <TestimonialSingleCard key={testimonial.id} testimonial={testimonial}/>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials