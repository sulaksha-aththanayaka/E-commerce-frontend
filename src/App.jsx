import React from 'react'
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


export const ItemContext = createContext();
 
function App() {
  const [state, setState] = useState({
    cart: []
  });

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
  return (
    <BrowserRouter>
      <ItemContext.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}>
        <SearchBar/>
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer/>
      </ItemContext.Provider>
    </BrowserRouter>
  )
}

export default App