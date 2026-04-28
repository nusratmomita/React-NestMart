import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Features/CartSlice';

const SingleCartItem = ({item}) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <div className='mt-3 pb-3 pl-0 xl:pl-3 flex items-center gap-2 border-b border-gray-300 w-full'>
            <img src={item.productImage} alt="product Image" className='rounded-full w-15 h-15 border border-gray-300 p-2'/>
            <div>
                <h4 className='text-gray-600 font-semibold truncate w-34 md:w-32 lg:w-34 xl:w-45' title={item.productName}>{item.productName}</h4>
                <h5 className='text-gray-600 font-medium'>{item.productQuantity} X ${item.productPrice}</h5>
            </div>
            <button onClick={() => handleDelete(item.productId)} className='hidden lg:block ml-4'>
                <RxCross2 className='text-gray-600 cursor-pointer'/>
            </button>
        </div>
    )
}

export default SingleCartItem