import React from 'react'
import phone from '../assets/Phone.jpg'
import headphones from '../assets/Headphones.jpg'
import laptop from '../assets/Laptop.jpg'
import television from '../assets/Television.jpg'
import CategoryCard from './CategoryCard'

function CategoryItems() {

    const categories = [
        { img: phone, category: "Phones" },
        { img: laptop, category: "Computers" },
        { img: phone, category: "Webcams" },
        { img: laptop, category: "Watches" },
        { img: phone, category: "Clothes" },
        { img: laptop, category: "Shoes" },
        { img: headphones, category: "Sandals" },
        { img: television, category: "Caps" },
        { img: headphones, category: "Laptops" },
        { img: television, category: "Bands" },
        { img: phone, category: "Phones" },
        { img: laptop, category: "Computers" },
        { img: phone, category: "Webcams" },
        { img: laptop, category: "Watches" },
        { img: phone, category: "Clothes" },
        { img: laptop, category: "Shoes" }
      ];

  return (
    <div className='sm:block hidden'>
      <div className='sm:px-40 text-2xl font-bold mt-10'>
        <h1>Categories</h1>
      </div>
      <div className='flex px-40 flex-wrap m-10'>
          {categories.map((item, index) => (
              <CategoryCard img={item.img} category={item.category} key={index}/>
          ))}
      </div>
    </div>
  )
}

export default CategoryItems