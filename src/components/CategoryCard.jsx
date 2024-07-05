import React from 'react'

function CategoryCard({img, category}) {
  return (
    <div className='w-[9vw] h-[9vw] border-[1px] border-gray-300 border-collapse hover:border-gray-600 cursor-pointer'>
        <div className='w-[60%] items-center m-auto mt-5'>
            <img src={img}/>
        </div>
        <div className='py-2 flex justify-center items-center'>
            <h1>{category}</h1>
        </div>
    </div>
  )
}

export default CategoryCard