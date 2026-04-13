import React from 'react'
import newsletterImage from "../../assets/newsletter-image.png"


const NewsletterImage = () => {
  return (
    <div className=''>
        <img className='max-w-[40%] absolute right-13 top-20' src={newsletterImage} alt="newsletter image" />
    </div>
  )
}

export default NewsletterImage