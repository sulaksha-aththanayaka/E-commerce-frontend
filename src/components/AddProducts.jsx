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
  });

  const dispatch = useDispatch();
  const [addProduct] = useAddProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
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

    try {
      await addProduct(formData).unwrap();
      toast.success('Product added successfully');
      setProductData({
        name: '',
        brand: '',
        price: '',
        description: '',
        image: null,
      });
    } catch (error) {
      toast.error('Failed to add product');
      console.error('Failed to add product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of the Product</label>
        <input
          name="name"
          value={productData.name}
          onChange={handleChange}
          placeholder="Enter the name of the product"
        />
      </div>

      <div>
        <label>Brand</label>
        <input
          name="brand"
          value={productData.brand}
          onChange={handleChange}
          placeholder="Enter the brand of the product"
        />
      </div>

      <div>
        <label>Price in Rs.</label>
        <input
          name="price"
          value={productData.price}
          onChange={handleChange}
          placeholder="Enter the price of the product"
        />
      </div>

      <div>
        <label>Description</label>
        <input
          name="description"
          value={productData.description}
          onChange={handleChange}
          placeholder="Enter the description of the product"
        />
      </div>

      <div>
        <label>Image</label>
        <input
          type="file"
          name="img"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProducts;
