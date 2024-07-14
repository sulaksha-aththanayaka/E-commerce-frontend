import React from 'react'
import ItemCard from './ItemCard';
import phone from '../assets/Phone.jpg'
import headphones from '../assets/Headphones.jpg'
import laptop from '../assets/Laptop.jpg'
import camera from '../assets/Camera.jpg'
import television from '../assets/Television.jpg'

function PopularItems() {

    const popular = [
        {
            img: phone,
            type: "PHONE",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: headphones,
            type: "AUDIO",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: laptop,
            type: "LAPTOP",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: headphones,
            type: "AUDIO",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: television,
            type: "TELEVISION",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: phone,
            type: "PHONE",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: headphones,
            type: "AUDIO",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: laptop,
            type: "LAPTOP",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: phone,
            type: "PHONE",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: television,
            type: "TELEVISION",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: headphones,
            type: "AUDIO",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: laptop,
            type: "LAPTOP",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: headphones,
            type: "AUDIO",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: laptop,
            type: "LAPTOP",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        },
        {
            img: phone,
            type: "PHONE",
            name: "IPhone 13 High Quality Vlaue Buy",
            stars: "",
            price: "100$"
        }
    ];
  return (
    <div className='sm:px-40 px-5'>
        <div className='sm:text-2xl font-bold'>
            <h1>Popular Items</h1>
        </div>
        <div className='sm:flex flex-wrap my-2 hidden'>
            {popular.map((item, index) =>(
                <div className='w-1/5' key={index}>
                    <div key={index}>
                        <ItemCard img={item.img} type={item.type} name={item.name} price={item.price} key={index}/>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex flex-wrap my-2 sm:hidden'>
            {popular.map((item, index) =>(
                <div className='w-1/2' key={index}>
                    <div key={index}>
                        <ItemCard img={item.img} type={item.type} name={item.name} price={item.price} key={index}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularItems