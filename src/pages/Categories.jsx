import React from 'react'
import ItemCard from '../components/ItemCard';
import phone from '../assets/Phone.jpg'
import headphones from '../assets/Headphones.jpg'
import laptop from '../assets/Laptop.jpg'
import camera from '../assets/Camera.jpg'
import television from '../assets/Television.jpg'
import { useState } from 'react';
import CategoryFilter from '../Popups/CategoryFilter';
import { FaFilter } from "react-icons/fa";

function Categories() {

  const categories = [
    { img: phone, type: "phone", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: headphones, type: "audio", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: laptop, type: "laptop", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: camera, type: "camera", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: television, type: "television",name: "IPhone 13 High Quality Vlaue Buy",stars: "",price: "100$"},
    { img: phone, type: "phone", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: phone, type: "phone", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: headphones, type: "audio", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: laptop, type: "laptop", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: camera, type: "camera", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
    { img: television, type: "television",name: "IPhone 13 High Quality Vlaue Buy",stars: "",price: "100$"},
    { img: phone, type: "phone", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$" },
];

    const [filteredProducts, setFilteredProducts] = useState(categories);
    const [selectedItems, setSelectedItems] = useState([]);
    const [filter, setFilter] = useState(false);

    const displayFilter = () => {
      setFilter(!filter);
    }

    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target;
        setSelectedItems((prev) => {
            if(checked){
                return [...prev, value];
            }else{
                return prev.filter(type => type != value);
            }
        })
    }



    const handleFilter = () => {
        setFilteredProducts(
          categories.filter((category) => selectedItems.includes(category.type))
        );

        displayFilter();
    };


  return (
    <div className='px-40 py-10'>
      <button className="bg-white text-[#fe624c] px-4 py-2 rounded flex items-center border-2 border-[#fe624c] mb-10 hover:bg-gray-200" onClick={displayFilter} >
        <FaFilter/> 
        <p className='px-5'>Filter</p>
      </button>
  
      {filter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-[16%]">
            <CategoryFilter handleCheckboxChange={handleCheckboxChange} handleFilter={handleFilter} selectedItems={selectedItems} />
          </div>
        </div>
      )}

        <div className='flex flex-wrap'>
          {filteredProducts.map((item, index) => (
            <div className='w-1/5' key={index}>
              <ItemCard img={item.img} type={item.type} name={item.name} price={item.price}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Categories