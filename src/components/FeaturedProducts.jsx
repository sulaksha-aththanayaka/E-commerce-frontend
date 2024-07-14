import React from 'react'
import FeaturedItemCard from './FeaturedItemCard'
import '../index.css'
import phone from '../assets/Phone.jpg'
import headphones from '../assets/Headphones.jpg'
import laptop from '../assets/Laptop.jpg'
import camera from '../assets/Camera.jpg'
import television from '../assets/Television.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturedProducts() {


    const featured = [
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
            img: camera,
            type: "CAMERA",
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
            img: camera,
            type: "CAMERA",
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
    ];

    const settingsLg = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const settingsSm = {
        // dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


  return (
    <div className='sm:px-40 px-5 z-10 relative mb-10'>
        <div className='sm:text-2xl font-bold sm:mb-0 mb-5'>
            <h1>Featured Products</h1>
        </div>
        <div className='sm:block hidden'>
            <Slider {...settingsLg}>
                {featured.map((item, index) => (
                    <div className='h-[50%] z-10' key={index}>
                        <div key={index} className='m-5'>
                            <FeaturedItemCard img={item.img} type={item.type} name={item.name} price={item.price} key={index}/>
                        </div>
                    </div>
                )
                )}
            </Slider>
        </div>
        <div className='sm:hidden w-[70%] block mx-auto'>
            <Slider {...settingsSm}>
                {featured.map((item, index) => (
                    <div className='h-[50%] z-10' key={index}>
                        <div key={index}>
                            <FeaturedItemCard img={item.img} type={item.type} name={item.name} price={item.price} key={index}/>
                        </div>
                    </div>
                )
                )}
            </Slider>
        </div>
    </div>
    
  );
}

export default FeaturedProducts