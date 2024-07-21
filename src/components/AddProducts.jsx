import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAddProductMutation } from '../slices/productsApiSlice'; // Assuming you have this API slice set up
import { toast } from 'react-toastify';

function AddProducts() {
  const [productData, setProductData] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    image: null,
    featured: false,
  });

  const dispatch = useDispatch();
  const [addProduct] = useAddProductMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  

  const handleImageChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('brand', productData.brand);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('img', productData.image);
    formData.append('featured', productData.featured.toString());
    // formData.append('featured', productData.featured);

    try {
      await addProduct(formData).unwrap();
      toast.success('Product added successfully');
      setProductData({
        name: '',
        brand: '',
        price: '',
        description: '',
        image: null,
        featured: false
      });
    } catch (error) {
      toast.error('Failed to add product');
      console.error('Failed to add product:', error);
    }
  };

  return (
    <div className='px-60 w-full'>
      <form onSubmit={handleSubmit} className='border-[#fe624c] border-2 p-10 m-5 rounded-lg text-[#fe624c] flex flex-col space-y-4'>
        <div className="p-2 text-lg flex items-center">
          <label className='w-[30%]'>Name of the Product</label>
          <input
            className='p-2 mx-2 w-full border-2 text-black'
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Enter the name of the product"
          />
        </div>

        <div className="p-2 text-lg flex items-center">
          <label className='w-[30%]'>Brand</label>
          <input
            className='p-2 mx-2 w-full border-2 text-black'
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            placeholder="Enter the brand of the product"
          />
        </div>

        <div className="p-2 text-lg flex items-center">
          <label className='w-[30%]'>Price in Rs.</label>
          <input
            className='p-2 mx-2 w-full border-2 text-black'
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Enter the price of the product"
          />
        </div>

        <div className="p-2 text-lg flex items-center">
          <label className='w-[30%]'>Description</label>
          <input
            className='p-2 mx-2 w-full border-2 text-black'
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Enter the description of the product"
          />
        </div>

        <div className="p-2 text-lg flex items-center">
          <label className='w-[30%]'>Image</label>
          <input
            className='p-2 mx-2 w-full border-2 text-black'
            type="file"
            name="img"
            onChange={handleImageChange}
          />
        </div>

        <div className='flex items-center p-2'>
          <p className='px-5'>Add this as a featured item?</p>
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={productData.featured}
            onChange={handleChange}
          />
          <label htmlFor="featured" className='px-2'> Featured</label>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='p-2 bg-[#fe624c] text-white w-[120px] rounded-lg hover:bg-[#e0503d]'>Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
