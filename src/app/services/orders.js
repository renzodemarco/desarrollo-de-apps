import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-native-a15ee-default-rtdb.firebaseio.com/' }),
  tagTypes: ['Orders'],  // estos tags hacen que se vuelva a ejecutar el get cada vez que hago un postOrder
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ order, localId }) => ({
        url: `/orders/${localId}.json`,
        method: "POST",
        body: { order }
      }),
      invalidatesTags: ['Orders']
    }),
    getOrders: builder.query({
      query: (localId) => `/orders/${localId}.json`,
      transformResponse: response => {
        const data = Object.entries(response).map(item => {
          return {
            id:item[0],
            ...item[1]
          }
        })
        return data
      },
      providesTags:['Orders']
    })
  })
})

export const { usePostOrderMutation, useGetOrdersQuery } = ordersApi