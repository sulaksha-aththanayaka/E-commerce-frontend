import React, { useState } from 'react'
import { IoStarOutline } from "react-icons/io5";
import ItemPopup from '../Popups/ItemPopup';

function ItemCard({img, type, name, price, description}) {

  const [display, setDisplay] = useState(false);

  const showItem = () => {
    setDisplay(!display);
  }

  return (
    <div onClick={showItem} className='text-sm min-h-20 rounded-xl border-2 border-transparent hover:border-gray-300 transition ease-in-out duration-400'>
        
        {display && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/2 h-3/4">
              <ItemPopup showItem={showItem} img={img} type={type} name={name} price={price} description={description}/>
            </div>
          </div>
        )}
        
        <div className='h-[200px] flex justify-center'>
            <img src={img} className='h-full object-cover rounded-t-xl'/>
        </div>
        <div className='p-2'>
            <p className='tracking-widest text-gray-600 text-sm py-2'>{type}</p>
            <p className='text-lg leading-5'>{name}</p>
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

export default ItemCard