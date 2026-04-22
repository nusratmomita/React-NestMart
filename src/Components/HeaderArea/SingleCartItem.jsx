import React from 'react'

const SingleCartItem = ({item}) => {
    console.log(item)
    return (
        <div className='mt-3 pb-1 flex items-center gap-2 border-b border-gray-300 w-full'>
            <img src={item.productImage} alt="product Image" className='rounded-full w-15 h-15 border border-gray-300 p-2 mb-3'/>
            <div>
                <h4 className='text-gray-600 font-semibold truncate w-28 sm:w-36 md:w-48 lg:w-50' title={item.productName}>{item.productName}</h4>
                <h5 className='text-gray-600 font-medium'>{item.productQuantity} X ${item.productPrice}</h5>
            </div>
        </div>
    )
}

export default SingleCartItem