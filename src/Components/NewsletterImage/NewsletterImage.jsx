import React from 'react'
import newsletterImage from "../../assets/newsletter-image.png"


const NewsletterImage = () => {
  return (
    <div className='hidden lg:block xl:block 2xl:block'>
      <img className='max-w-[40%] absolute right-13 lg:top-0 xl:top-27 2xl:top-21' src={newsletterImage} alt="newsletter image" />
    </div>
  )
}

export default NewsletterImage