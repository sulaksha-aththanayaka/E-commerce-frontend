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
 


function App() {
  return (
    <BrowserRouter>
      <SearchBar/>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App