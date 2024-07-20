import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Cart from './components/Cart'
import { createContext, useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useFetchProductsQuery } from './slices/productsApiSlice'
import { setProducts } from './slices/productsSlice';
import AddProducts from './components/AddProducts'

export const ItemContext = createContext();
 
function App() {

  const dispatch = useDispatch();
  const { data: products, error, isLoading } = useFetchProductsQuery();

  const [state, setState] = useState({
    cart: []
  });

  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [products, dispatch]);

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem._id === product._id)
        ? state.cart.map((cartItem) =>
            cartItem._id === product._id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }]
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem._id !== id)
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem._id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem._id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      )
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <BrowserRouter>
      <ItemContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}>
        <SearchBar/>
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add_products" element={<AddProducts />} />
          </Route>
        </Routes>
        <Footer/>
      </ItemContext.Provider>
      <ToastContainer /> 
    </BrowserRouter>
  )
}

export default App