import React from 'react'
import i5 from "../../src/assets/hero-images/i5.jpg"
const CategoryCard = ({category}) => {
  return (
    <div className='h-[220px] w-[350px] max-sm:my-5 hover:opacity-90 relative '>
        <img src={i5} className='object-fill group-hover:opacity-50'/>
        <p className='absolute top-[20%] left-[37%] text-white text-2xl'>{category.categoryName}</p>
    </div>
  )
}

export default CategoryCard