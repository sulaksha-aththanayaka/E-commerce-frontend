import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ItemContext } from "../App";
import { getProductById } from '../api/productService.js';

function ProductDetail() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    let [itemCount, setItemCount] = useState(0);

    const context = useContext(ItemContext);

    const getProduct = async () => {
    
        try {
            const response = await getProductById(id);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("No product found ", error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    // const handleDecrement = () => {
    //     if(itemCount == 0){
    //         setItemCount(0);
    //     }else{
    //         setItemCount(itemCount - 1);
    //     }
    // }

    // const handleIncrement = () => {
    //     setItemCount(itemCount + 1);;
    // }


    if (!product) {
        return <div>Loading...</div>;
    }

  return (
    <div className='z-10 -mt-[100px] px-40'>
        <div className='w-full mt-[100px] -mb-[100px] flex h-screen pb-20'>
            <div className='flex border-2 border-gray-400 items-center my-10 w-full mb-14 rounded-lg'>
                <div className='mb-10 h-[400px] w-[1000px] px-10'>
                    <img src={`http://localhost:5000/uploads/${product.img}`} className='object-cover h-full'/>
                </div>
                <div className='h-[400px] mb-10 flex flex-col justify-evenly mx-10 px-10'>
                    <div className='p-5'>
                        <h1 className='text-xl font-bold'>{product.name}</h1>
                        <h2 className='text-gray-800 text-xl'>{product.brand}</h2>
                        <h1 className='text-2xl'>{product.price}</h1>
                        <p className='text-lg'>{product.description}</p>
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className=''>
                            <button onClick={() => context.addToCart(product)} className='bg-[#fe624c] p-2 text-white rounded-lg hover:bg-[#dc4f3c]'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail