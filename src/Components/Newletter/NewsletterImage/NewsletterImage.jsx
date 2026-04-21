import React from 'react'
import newsletterImage from "../../../assets/newsletter-image.png"


const NewsletterImage = () => {
  return (
    <div className='hidden md:hidden lg:block xl:block 2xl:block'>
      <img className='max-w-[40%] absolute right-13 lg:bottom-0 xl:bottom-0 2xl:bottom-0' src={newsletterImage} alt="newsletter image" />
    </div>
  )
}

export default NewsletterImage