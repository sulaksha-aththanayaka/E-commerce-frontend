import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);
  
    useEffect(() => {
      if (userInfo) {
        navigate('/');
      }
    }, [navigate, userInfo]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
  
    };

  return (
    <div className='px-40 h-[500px]'>
        <div className='my-20 mx-60 flex flex-col p-10 text-[#fe624c] bg-gray-200 border-2 border-[#fe624c] rounded-lg'>
            <div className='flex justify-center'>
                <h1 className='font-bold text-2xl'>REGISTER</h1>
            </div>
            <label className="text-lg font-bold">Username</label>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                className='p-2 text-black' placeholder='Enter username' type='text'
            />
            <label className="text-lg font-bold mt-5">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className='p-2 text-black' placeholder='Enter email' type='email'
            />
            <label className="text-lg font-bold mt-5">Password</label>
            <input  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className='p-2 text-black' placeholder='Enter password' type='password'
            />
            <button onClick={handleSubmit} className='p-2 bg-white rounded-md border-2 border-[#fe624c] mt-10 mx-60'>Register</button>
            <div className='flex'>
              <p className='text-gray-500 mx-2'>Already have an account? </p>
              <Link to="/login">Sign In</Link>
            </div>
        </div>
    </div>
  )
}

export default Register