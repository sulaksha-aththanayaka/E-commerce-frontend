import React, { useContext, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ItemContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation} from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { logout } from '../slices/authSlice';

function SearchBar() {
  const context = useContext(ItemContext);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [logoutApiCall] = useLogoutMutation();


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    // Redirect to home page only if the user is logged in and not on the profile page
    if (userInfo && location.pathname === '/login') {
      setDropdownVisible(false);
      navigate('/');
    }
  }, [navigate, userInfo, location.pathname]);

//   useEffect(() => {
//     if (userInfo) {
//       setDropdownVisible(false);  
//       navigate('/');
//     }
//   }, [navigate, userInfo]);

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const totalCartCount = context.state.cart.reduce(
    (total, item) => (total = total + item.count),
    0
  );
  return (
    <div className="flex px-40 justify-between h-[60px]">
      <div className="w-[30%] flex items-center">
        <h1 className="font-bold text-2xl">E-Shop</h1>
      </div>
      <div className="flex w-[60%] justify-end items-center">
        <div className="flex justify-center w-[60%] ">
          <div className="flex items-center border-[1px] border-black w-[80%]">
            <input
              placeholder="Search Products ..."
              className="w-[90%] outline-none p-1"
            />
            <div className="flex justify-center h-full w-[10%] p-1 cursor-pointer items-center">
              <FaSearch fontSize="20px" />
            </div>
          </div>
        </div>
        <div className="w-[16%] flex justify-evenly items-center text-sm">
          <Link to="/cart">
            <div className="flex items-center w-full">
              <FaShoppingCart fontSize="30px" />
              <div className="flex flex-col px-2">
                <p>Cart</p>
                <p className="font-bold">{totalCartCount}</p>
              </div>
            </div>
          </Link>
        </div>
        {userInfo ? (
          <>
            <div className="relative w-[20%] h-full">
              <button
                onClick={toggleDropdown}
                className="w-full h-full flex justify-center items-center text-sm focus:outline-none"
              >
                <FaRegUserCircle fontSize="30px" />
                <div className="pl-3">
                  <p>User</p>
                  <p className="font-bold">{userInfo.username}</p>
                </div>
              </button>
              {dropdownVisible && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg">
                  <ul>
                    <li className="hover:bg-gray-200 py-2">
                      <Link to="/profile" className="px-4 pr-20 py-2 bg-red-400">Profile</Link>
                    </li>
                    <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-200">
                      <button>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="w-[30%] h-full">
              <div className="w-[100%] flex justify-center h-full items-center text-sm">
                <Link to="/register" className="mx-2">
                  <button className="p-2 bg-[#fe624c] rounded-md border-2 text-white">
                    Register
                  </button>
                </Link>
                <Link to="/login" className="mx-2">
                  <button className="p-2 bg-[#fe624c] rounded-md border-2 text-white">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
