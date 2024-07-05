import React, { useState } from 'react'
import ItemCard from '../components/ItemCard';
import phone from '../assets/Phone.jpg'
import headphones from '../assets/Headphones.jpg'
import laptop from '../assets/Laptop.jpg'
import camera from '../assets/Camera.jpg'
import television from '../assets/Television.jpg'
import { FaFilter } from "react-icons/fa";
import ProductFilter from '../Popups/ProductFilter';

function Products() {
    const products = [
        { img: phone, brand: "samsung", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" },
        { img: headphones, brand: "samsung", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: laptop, brand: "dell", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: camera, brand: "canon", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: television, brand: "panasonic",name: "IPhone 13 High Quality Vlaue Buy",stars: "",price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" },
        { img: phone, brand: "apple", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: phone, brand: "nokia", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: headphones, brand: "jbl", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: laptop, brand: "acer", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: camera, brand: "sony", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
        { img: television,brand: "philips",name: "IPhone 13 High Quality Vlaue Buy",stars: "",price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" },
        { img: phone, brand: "oppo", name: "IPhone 13 High Quality Vlaue Buy", stars: "", price: "100$", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"  },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
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
                return prev.filter(brand => brand != value);
            }
        })
    }

    const handleFilter = () => {
        setFilteredProducts(
          products.filter((product) => selectedItems.includes(product.brand))
        );

        displayFilter();
    };

  return (
    <div className='px-40 py-10'>
        <div>
            <button className="bg-white text-[#fe624c] px-4 py-2 rounded flex items-center border-2 border-[#fe624c] mb-10 hover:bg-gray-200" onClick={displayFilter} >
                <FaFilter/> 
                <p className='px-5'>Filter</p>
            </button>
  
            {filter && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg w-[40%]">
                        <ProductFilter handleCheckboxChange={handleCheckboxChange} handleFilter={handleFilter} selectedItems={selectedItems} />
                    </div>
                </div>
            )}

        </div>
        <div className='flex flex-wrap'>
          {filteredProducts.map((item, index) => (
            <div className='w-1/5' key={index}>
              <ItemCard img={item.img} type={item.type} name={item.name} price={item.price} description={item.description}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Products