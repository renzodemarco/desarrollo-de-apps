import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-native-a15ee-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    putImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `/profile/${localId}.json`,
        method: "PUT",
        body: { image }
      })
    }),
    getImage: builder.query({
      query: (localId) => `/profile/${localId}.json`
    }),
    putLocation: builder.mutation({
      query: ({ locationFormatted, localId }) => ({
        url: `/location/${localId}.json`,
        method: "PUT",
        body: locationFormatted
      })
    }),
    getLocation: builder.query({
      query: (localId) => `/location/${localId}.json`
    })
  })
})

export const { usePutImageMutation, useGetImageQuery, usePutLocationMutation, useGetLocationQuery } = profileApi