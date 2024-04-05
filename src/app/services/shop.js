import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-native-a15ee-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,  // configuramos los query para que vengan solo los productos de la categoría buscada
      transformResponse: (response) => {
        const data = Object.values(response)  // con esto transformamos la respuesta en un array
        return data
      }
    }),
    getCategories: builder.query({
      query: () => '/categories.json'
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}.json`
    }),
    getAllProducts: builder.query({
      query: () => `/products.json`,
      transformResponse: (response) => {
        const filteredData = response.filter(item => item !== null);
        const data = Object.values(filteredData);
        return data;
      }
    })
  })
})

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery, useGetProductQuery, useGetAllProductsQuery } = shopApi