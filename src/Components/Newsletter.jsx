import React from 'react'
import NewsletterTextAndForm from './NewsletterTextAndForm/NewsletterTextAndForm'
import NewsletterImage from './NewsletterImage/NewsletterImage'

const Newsletter = () => {
  return (
    <div className='container'>
        <div className='newsletter_section mt-20 flex relative'>
            <NewsletterTextAndForm/>
            <NewsletterImage/>
        </div>
    </div>
  )
}

export default Newsletter