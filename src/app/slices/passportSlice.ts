import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {INITIAL_STATE} from "./initState.ts";

// Define a type for the slice state
export interface PersonState {
  createdAt: string,
  name: string
  avatar: string
  city: string
  street: string
  buildingNumber: string
  company: string
  id: string
}
// https://mockapi.io/projects/6732574b2a1b1a4ae10fafbd
// export const fetchPersons = createAsyncThunk('persons/fetchPersons', async () => {
//   const response = await fetch('https://6732574b2a1b1a4ae10fafbc.mockapi.io/api/v1/passport');
//   if (!response.ok) {
//     throw new Error('Failed to fetch the list');
//   }
//   return response.json(); // Automatically passed as the action payload
// });

// export const personsSlice = createSlice({
//   name: 'persons',
//   initialState: INITIAL_STATE,
//   reducers: {
//     edit: (state, action) => {
//       // state.splice()
//
//       let currentPerson: PersonState = state.filter((person) => person.id === action.payload.id)
//       let index = state.indexOf(currentPerson);
//       state[index] = action.payload;
//     },
//     delete: (state, action) => {
//       state.filter((person) => person.id === action.payload.id).pop()
//     },
//   },
// })
//
// export const { edit, delete } = personsSlice.actions

export default personsSlice.reducer