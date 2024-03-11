import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-native-a15ee-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category)=> `/products.json?orderBy="category"&equalTo="${category}"`  // configuramos los query para que vengan solo los productos de la categoría buscada
    }),
    getCategories: builder.query({
      query: ()=> '/categories.json'
    })
  })
})

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi