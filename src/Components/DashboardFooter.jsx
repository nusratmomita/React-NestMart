import React from 'react'

const DashboardFooter = () => {
  return (
    <div className='text-center py-4'>
        <h4 className='text-[#909090] font-semibold'>{new Date().getFullYear()} © NestMart</h4>
    </div>
  )
}

export default DashboardFooter