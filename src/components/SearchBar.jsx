import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function SearchBar() {
  return (
    <div className='flex px-40 justify-between h-[60px]'>
        <div className='w-[30%] flex items-center'>
            <h1 className='font-bold text-2xl'>E-Shop</h1>
        </div>
        <div className='flex w-[60%] justify-end items-center'>
            <div className='flex justify-center w-[60%] '>
                <div className='flex items-center border-[1px] border-black w-[80%]'>
                    <input placeholder='Search Products ...' className='w-[90%] outline-none p-1'/>
                    <div className='flex justify-center h-full w-[10%] p-1 cursor-pointer items-center'>
                        <FaSearch fontSize='20px'/>
                    </div>
                </div>
            </div>
            <div className='w-[16%] flex justify-evenly items-center text-sm'>
                <FaShoppingCart fontSize="30px"/>
                <div className='flex flex-col '>
                    <p>Cart</p>
                    <p className='font-bold'>100$</p>
                </div>
            </div>
            <div className='w-[20%] flex justify-end h-full items-center text-sm'>
                <FaRegUserCircle fontSize="30px"/>
                <div className='pl-3'>
                    <p>User</p>
                    <p className='font-bold'>Account</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar