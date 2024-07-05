import React from 'react'
import HeroImg from '../assets/Hero.jpg'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdSecurity } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";

function Hero() {
  return (
    <div className='px-40 w-full h-screen z-10 -mt-[100px]'>
        <div className='h-[20%]'></div>
        <div className='h-[60%] flex items-center justify-center w-full'>
            <div className='flex w-[50%] bg-[#B8B8B8] h-full flex-col rounded-l-lg items-center justify-center tracking-wider'>
                <div className='px-16 w-[100%]'>
                    <h3 className='font-mno font-bold capitalize text-4xl'>your one-stop</h3>
                    <h3 className='font-mno font-bold capitalize text-4xl'>electronic market</h3>
                    <h3 className='mt-5 text-md tracking-wider'>Welcome to e-shop, a place where you can buy</h3>
                    <h3 className=' text-md tracking-wider'>everything about electronics. Sale every day!</h3>
                    <button className='bg-[#FE624C] px-5 py-2 text-white mt-5 rounded-lg'>Shop Now</button>
                </div>
            </div>
            <div className='w-[50%] bg-[#B8B8B8] rounded-r-lg h-full'>
                <img src={HeroImg} className='w-full rounded-lg object-cover h-full'/>
            </div>
        </div>
        <div className='h-[20%] flex justify-between'>
            <div className='flex items-center'>
                <TfiHeadphoneAlt fontSize="30px"/>
                <div className='px-5 text-sm'>
                    <p className='font-bold'>Responsive</p>
                    <p>Customer service available 24/7</p>
                </div>
            </div>

            <div className='flex items-center'>
                <MdSecurity fontSize="30px"/>
                <div className='px-5 text-sm'>
                    <p className='font-bold'>Secure</p>
                    <p>Certified marketplace since 2017</p>
                </div>
            </div>

            <div className='flex items-center'>
                <MdOutlineLocalShipping fontSize="30px"/>
                <div className='px-5 text-sm'>
                    <p className='font-bold'>Shipping</p>
                    <p>Free, fast and reliable worldwide</p>
                </div>
            </div>

            <div className='flex items-center'>
            <RxTransparencyGrid fontSize="30px"/>
                <div className='px-5 text-sm'>
                    <p className='font-bold'>Transparent</p>
                    <p>Hassle-free return policy</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero