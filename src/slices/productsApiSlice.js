import { apiSlice } from './apiSlice';
const PRODUCTS_URL = 'http://localhost:5000/api/product';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/getProducts`,
        method: 'GET',
      }),
    }),
    // getProductByName: builder.query({
    //   query: () => ({
    //     url: `${PRODUCTS_URL}/getProductByName`,
    //     method: 'GET',
    //     params: { name },
    //   }),
    // }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useAddProductMutation,
  // useGetProductByNameQuery
} = productsApiSlice;
