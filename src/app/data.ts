import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {PersonState} from "./slices/passportSlice.ts";

// Define a service using a base URL and expected endpoints
export const personsApi = createApi({
  reducerPath: 'personsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6732574b2a1b1a4ae10fafbc.mockapi.io/' }),
  endpoints: (builder) => ({
    getMockedByName: builder.query<PersonState[], string>({
      query: (name: string) => `api/v1/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMockedByNameQuery } = personsApi