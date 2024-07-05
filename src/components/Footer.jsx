import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcPaypal, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex px-40 py-10 bg-[#f0eded] leading-loose justify-between'>
        <div className='flex flex-col'>
            <h1 className='font-bold text-[#fe624c]'>About Us</h1>
            <a>Careers</a>
            <a>E-Shop Stores</a>
            <a>About Donates</a>
            <a>Privacy Policy</a>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold text-[#fe624c]'>Customer Care</h1>
            <a>Contact Us</a>
            <a>How to Buy</a>
            <a>Help Center</a>
            <a>Returns & Refunds</a>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold text-[#fe624c]'>Earn with E-Shop</h1>
            <a>Sell on E-Shop</a>
            <a>Code of Conduct</a>
        </div>
        <div>
            <div className='mb-5'>
                <h1 className='font-bold text-[#fe624c]'>Payment Methods</h1>
                <div className='flex justify-between h-[5vh]'>
                    <FontAwesomeIcon icon={faCcVisa} className='h-full'/>
                    <FontAwesomeIcon icon={faCcMastercard} className='h-full'/>
                    <FontAwesomeIcon icon={faCcPaypal} className='h-full'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='flex justify-center'>
                    <h1 className='font-bold text-[#fe624c]'>Follow Us</h1>
                </div>
                <div className='flex justify-between h-[5vh]'>
                    <FaFacebook className='h-full scale-[2]'/>
                    <FaInstagramSquare className='h-full scale-[2]'/>
                    <FaTwitter className='h-full scale-[2]'/>
                    <FaYoutube className='h-full scale-[2]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer