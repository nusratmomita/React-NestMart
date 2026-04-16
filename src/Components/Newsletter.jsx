import React from 'react'
import NewsletterTextAndForm from './NewsletterTextAndForm/NewsletterTextAndForm'
import NewsletterImage from './NewsletterImage/NewsletterImage'

const Newsletter = () => {
  return (
    <div className='container'>
        <div className='newsletter_section mt-20 flex relative mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-0'>
            <NewsletterTextAndForm/>
            <NewsletterImage/>
        </div>
    </div>
  )
}

export default Newsletter