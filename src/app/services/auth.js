import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 'AIzaSyBC6W-4npankXmstkW7GjlYw9d8n6kFZLQ'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://identitytoolkit.googleapis.com/v1/` }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: `accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body: user
      })
    })
  })
})

export const { useRegisterMutation } = authApi