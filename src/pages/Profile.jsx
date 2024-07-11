import React, { useState, useEffect } from "react";
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Profile() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="px-40 h-[500px]">
      <div className="my-20 mx-60 flex flex-col p-10 text-[#fe624c] bg-gray-200 border-2 border-[#fe624c] rounded-lg">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Update Profile</h1>
        </div>
        <label className="text-lg font-bold">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 text-black"
          placeholder="Enter username"
          type="text"
        />
        <label className="text-lg font-bold mt-5">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 text-black"
          placeholder="Enter email"
          type="email"
        />
        <label className="text-lg font-bold mt-5">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 text-black"
          placeholder="Enter password"
          type="password"
        />
        <label className="text-lg font-bold mt-5">Confirm Password</label>
         <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="p-2 text-black"
          placeholder="Enter password again"
          type="password"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-white rounded-md border-2 border-[#fe624c] mt-10 mx-60"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Profile;
