import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts(state, action) {
      const input = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(input)
      );
    },
    addProduct(state, action) {
      state.products.push(action.payload);
      state.filteredProducts.push(action.payload);
    },
  },
});

export const { setProducts, filterProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
