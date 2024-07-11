import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' , credentials: 'include'});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});

// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: USERS_URL,
//     credentials: 'include', // include credentials in every request
//   }),
//   endpoints: (builder) => ({}),
// });