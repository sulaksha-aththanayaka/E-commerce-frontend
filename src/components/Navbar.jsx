import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='px-40 flex bg-[#fe624c] h-[40px] justify-between text-sm z-50'>
    <div className='flex w-[40%] justify-between items-center text-white'>
      <p className='cursor-pointer h-full px-2 flex items-center hover:bg-[#e4523e]'>
        <Link to="/categories">All Categories</Link>
      </p>
      <p className='cursor-pointer h-full px-2 flex items-center hover:bg-[#e4523e]'>
        <Link to="/products">Products</Link>
      </p>
      <p className='cursor-pointer h-full px-2 flex items-center hover:bg-[#e4523e]'>
        <Link to="/blog">Blog</Link>
      </p>
      <p className='cursor-pointer h-full px-2 flex items-center hover:bg-[#e4523e]'>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
    <div className='flex w-[30%] justify-between items-center text-white'>
      <p className='uppercase cursor-pointer'>Limited Sale</p>
      <p className='uppercase cursor-pointer'>New Arrival</p>
      <p className='uppercase cursor-pointer'>Best Seller</p>
    </div>
  </div>
  )
}

export default Navbar