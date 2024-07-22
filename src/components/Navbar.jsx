import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sm:px-40 px-5 flex bg-[#fe624c] h-[40px] justify-between text-sm z-50 ">
      <div className="flex w-full sm:w-[40%] justify-between items-center text-white mx:px-0 px-1">
        <p className="cursor-pointer h-full sm:px-2 flex items-center hover:bg-[#e4523e]">
          <Link to="/categories">All Categories</Link>
        </p>
        <p className="cursor-pointer h-full sm:px-2 flex items-center hover:bg-[#e4523e]">
          <Link to="/products">Products</Link>
        </p>
        <p className="cursor-pointer h-full sm:px-2 flex items-center hover:bg-[#e4523e]">
          <Link to="/blog">Blog</Link>
        </p>
        <p className="cursor-pointer h-full sm:px-2 flex items-center hover:bg-[#e4523e]">
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <div className="sm:flex w-[35%] justify-between items-center text-white hidden">
        <p className="uppercase cursor-pointer h-full flex items-center px-2 hover:bg-[#e4523e]">
          <Link to="/register_seller">Sell on EShop</Link>
        </p>
        <p className="uppercase cursor-pointer h-full flex items-center px-2 hover:bg-[#e4523e]">New Arrival</p>
        <p className="uppercase cursor-pointer h-full flex items-center px-2 hover:bg-[#e4523e]">Best Seller</p>
      </div>
    </div>
  );
}

export default Navbar;
