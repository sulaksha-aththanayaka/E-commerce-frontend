import React from 'react'
import { IoStarOutline } from "react-icons/io5";

function FeaturedItemCard({img, type, name, price, index}) {
  return (
    <div className='text-sm min-h-20 hover:shadow-lg rounded-xl border-2 sm:hover:scale-110 duration-300 transition ease-in-out' key={index}>
        <div className='h-[200px] flex justify-center'>
            <img src={img} className='h-full object-cover rounded-t-xl'/>
        </div>
        <div className='p-2'>
            <p className='tracking-widest text-gray-600 text-xs sm:text-sm py-2'>{type}</p>
            <p className='text-md sm:text-lg leading-5'>{name}</p>
            <div className='flex py-1'>
                <IoStarOutline color='orange'/>
                <IoStarOutline color='orange'/>
                <IoStarOutline color='orange'/>
                <IoStarOutline color='orange'/>
                <IoStarOutline color='orange'/>
            </div>
            <h1 className='py-2 font-bold'>{price}</h1>
        </div>
    </div>
  );
}

export default FeaturedItemCard