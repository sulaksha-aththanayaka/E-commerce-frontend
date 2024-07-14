import React from "react";
import HeroImg from "../assets/Hero.jpg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdSecurity } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";

function Hero() {
  return (
    <div className="sm:px-40 w-full sm:h-screen sm:pb-0 pb-5 z-10 sm:-mt-[100px] mt-[50px]">
      <div className="h-[20%]"></div>
      <div className="sm:h-[60%] flex flex-col sm:flex-row items-center justify-center w-full relative">
        <div className="z-20 flex w-full pt-5 sm:pt-0 sm:w-[50%] sm:bg-[#B8B8B8] h-full flex-col sm:rounded-l-lg items-center justify-center tracking-wider">
          <div className="sm:px-16 px-5 w-[100%]">
            <div className="hidden sm:block">
              <h3 className="font-mono font-bold capitalize sm:text-4xl">
                your one-stop
              </h3>
              <h3 className="font-mono font-bold capitalize sm:text-4xl">
                electronic market
              </h3>
              <h3 className="mt-5 text-md tracking-wider">
                Welcome to e-shop, a place where you can buy
              </h3>
              <h3 className=" text-md tracking-wider">
                everything about electronics. Sale every day!
              </h3>
              <button className="bg-[#FE624C] px-5 py-2 text-white mt-5 rounded-lg">
                Shop Now
              </button>
            </div>
            <div className="sm:hidden flex flex-col items-center pb-5">
              <h3 className="font-bold font-mono capitalize text-lg text-center">
                your one-stop electronic market
              </h3>
              <p className="flex text-center">
                Welcome to e-shop, a place where you can buy everything about
                electronics. Sale every day!
              </p>
              <button className="bg-[#FE624C] px-5 py-2 text-white mt-5 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="z-10 sm:w-[50%] w-full sm:bg-[#B8B8B8] bg-gray-500 absolute sm:relative h-full sm:rounded-r-lg sm:h-full sm:pb-0 pb-16">
          <img
            src={HeroImg}
            className="w-full rounded-lg object-cover h-full opacity-20 sm:opacity-100 absolute sm:relative"
          />
        </div>
      </div>
      <div className="h-[20%] sm:flex justify-between hidden">
        <div className="flex items-center">
          <TfiHeadphoneAlt fontSize="30px" />
          <div className="px-5 text-sm">
            <p className="font-bold">Responsive</p>
            <p>Customer service available 24/7</p>
          </div>
        </div>

        <div className="flex items-center">
          <MdSecurity fontSize="30px" />
          <div className="px-5 text-sm">
            <p className="font-bold">Secure</p>
            <p>Certified marketplace since 2017</p>
          </div>
        </div>

        <div className="flex items-center">
          <MdOutlineLocalShipping fontSize="30px" />
          <div className="px-5 text-sm">
            <p className="font-bold">Shipping</p>
            <p>Free, fast and reliable worldwide</p>
          </div>
        </div>

        <div className="flex items-center">
          <RxTransparencyGrid fontSize="30px" />
          <div className="px-5 text-sm">
            <p className="font-bold">Transparent</p>
            <p>Hassle-free return policy</p>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col w-full items-center sm:mt-0 mt-5">
        <div className="w-[90%] flex">
          <div className="flex flex-col items-center w-[50%] m-2 py-2  bg-gray-200">
            <TfiHeadphoneAlt fontSize="30px" />
            <div className="px-2 py-1 text-xs">
              <p className="font-bold text-center">Responsive</p>
              <p className="text-center">Customer service available 24/7</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-[50%] m-2 py-2 bg-gray-200">
            <MdSecurity fontSize="30px" />
            <div className="px-2 py-1 text-xs">
              <p className="font-bold text-center">Secure</p>
              <p className="text-center">Certified marketplace since 2017</p>
            </div>
          </div>
        </div>

        <div className="w-[90%] flex">
          <div className="flex flex-col items-center w-[50%] m-2 py-2 bg-gray-200">
            <MdOutlineLocalShipping fontSize="30px" />
            <div className="px-2 py-1 text-xs">
              <p className="font-bold text-center">Shipping</p>
              <p className="text-center">Free, fast and reliable worldwide</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-[50%] m-2 py-2 bg-gray-200">
            <RxTransparencyGrid fontSize="30px" />
            <div className="px-2 py-1 text-xs">
              <p className="font-bold text-center">Transparent</p>
              <p className="text-center">Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
