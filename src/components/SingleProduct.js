import React from 'react'
import {GiVibratingShield} from "react-icons/gi"
import {BsBookmarkPlus} from "react-icons/bs"
const SingleProduct = ({product}) => {
  return (
    <div key={product._id}
    className='flex flex-col rounded my-5 h-[230px] bg-gray-100 text max-sm:pb-2 text-zinc-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
    '
    >
        <div className='object-contain bg-gray-100 '>
            <img src={product.url} alt="" className='w-[100%] '/>
        </div>
       <div className='flex justify-between items-center px-1 border border-b-gray-200 md:border md:border-b-gray-200'>
            <div className='flex flex-col items-start py-2'>
                <p className='justify-items-start font-semibold'>{product.brand}-
                    <span className='text-[15px] font-normal'>
                    {product.model}
                    </span>
                </p>
                
                <p className='justify-items-start font-normal'>
                    <span className='text-[15px] font-semibold'>Fuel-</span>
                    {product.fueltype}
                </p>
            </div>

            <div>
            <p className='font-normal'>
                    <span className='text-[15px] font-semibold'>Price-</span>
                    {product.price}
            </p>
            <p className='flex gap-2'>
                <GiVibratingShield size={15} className='justify-center mt-1'/>
                {product.ncap}
            </p>
            </div>
            
       </div>

        <div className='pt-1 flex justify-between px-3 py-1'>
            <button className='border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800'>
                Add to Cart
            </button>
            <BsBookmarkPlus size={20} className='hover:text-rose-600'/>
        </div>
    </div>
   
  )
}

export default SingleProduct