import React, { useContext, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ItemContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";

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
    if (userInfo && location.pathname === "/login") {
      setDropdownVisible(false);
      navigate("/");
    }
  }, [navigate, userInfo, location.pathname]);

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const totalCartCount = context.state.cart.reduce(
    (total, item) => (total = total + item.count),
    0
  );
  return (
    <div className="flex sm:px-40 px-5 pr-24 h-[60px] items-center justify-between">
      <div className="sm:text-3xl font-bold">EShop</div>

      <div className="flex items-center sm:w-[35%] sm:h-[70%] border-2 ml-8 mt-48 justify-center sm:mt-0 absolute sm:relative">
        <div className="w-full sm:w-[90%] bg-green-400 h-full">
          <input placeholder="Search product..." className="outline-none w-full h-full px-2 py-1 text-md"/>
        </div>
        <div className="flex justify-center items-center w-[10%] h-full">
          <FaSearch/> 
        </div>
      </div>
        
  
      <div className="flex w-[20%] h-[70%] items-center justify-between">
        <Link to="/cart">     
          <div className="sm:flex items-center sm:px-5 hidden">
            <div className="sm:pr-5">
              <FaShoppingCart size={'30px'}/>
            </div>
            <div>
              <p>Cart</p>
              <p>{totalCartCount}</p>
            </div>
          </div>
        </Link>

        {userInfo ? (
          <>
            <div className="flex items-center sm:px-5"> 
              <Link to="/profile">  
                <div className="sm:pr-5">
                  <FaRegUserCircle size={'30px'}/>
                </div>
              </Link>
              <div>
                <p>User</p>
                <p>{userInfo.username}</p>
              </div>
              <button onClick={handleLogout} className="bg-[#fe624c] ml-7 mr-0 p-2 text-white rounded-md">Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="text-sm relative">
              <Link to="/register" className="bg-white text-[#fe624c] p-2 mx-1 border-2 border-[#fe624c] rounded-md">Register</Link>
              <Link to="/login" className="bg-white text-[#fe624c] p-2 border-2 border-[#fe624c] rounded-md">Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
