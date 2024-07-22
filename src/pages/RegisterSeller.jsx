import React, { useState } from "react";
import {registerSeller} from "../api/userService.js";
import bgImage from "../assets/RegisterSeller.jpg"
// import registerUser from "../api/userService.js"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

function RegisterSeller() {

    const [businessName, setBusinessName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const userData = {businessName, sellerName, email, password}
            const res = await registerSeller(userData);
            console.log("Seller data: ", res);
            dispatch(setCredentials({ ...res.data }));
            toast.success('Seller registered successfully');
            navigate('/add_products');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="px-40 flex w-full h-[600px]">
      <div className="relative w-[50%] h-full px-10 flex flex-col justify-center items-center">
        <div className="z-20 flex flex-col w-[80%] items-center">
          <h1 className="text-3xl p-2 text-center font-semibold">Sell in 3 easy steps</h1>
          <h3 className="text-2xl italic p-2 m-2 bg-[#fe624c] text-white rounded-md w-[80%] text-center">
            1. Create Seller Account
          </h3>
          <h3 className="text-2xl italic p-2 m-2 bg-[#fe624c] text-white rounded-md w-[80%] text-center">
            2. Upload Your Products
          </h3>
          <h3 className="text-2xl italic p-2 m-2 bg-[#fe624c] text-white rounded-md w-[80%] text-center">
            3. Start Selling & Earn
          </h3>
        </div>

        <div className="h-full w-full absolute inset-0 flex z-10">
          <img src={bgImage} className="object-cover opacity-20" />
        </div>
      </div>

      <div className="w-[50%] h-full px-5 flex items-center justify-center">
        <div className="border-2 border-[#fe624c] p-5 bg-gray-200">
            <div className="text-lg w-full mt-5">
                <label className="py-2 italic">1. Business Name</label>
                <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="p-2 w-full  mt-2 " placeholder="Enter your business name"/>
            </div>

            <div className="text-lg w-full mt-5">
                <label className="py-2 italic">2. Business owner's Name / Seller's Name</label>
                <input required value={sellerName} onChange={(e) => setSellerName(e.target.value)} className="p-2 w-full  mt-2 " placeholder="Enter your business name"/>
            </div>

            <div className="text-lg w-full mt-5">
                <label className="py-2 italic">3. Email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full  mt-2 " placeholder="Enter your business name"/>
            </div>

            <div className="text-lg w-full mt-5">
                <label className="py-2 italic">4. Password</label>
                <input required value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full  mt-2 " placeholder="Enter your business name"/>
            </div>

            <div className="flex justify-center">
                <button onClick={handleSubmit} className="p-2 border-2 border-[#fe624c] text-[#fe624c] bg-white mt-5 rounded-md">Register</button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default RegisterSeller;
