import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TravelType= 'traveler' | 'arranger';
interface InitialState {
  travelType: TravelType,
}

const initialState: InitialState = {travelType: 'traveler'}

const globalSlice = createSlice({
  name: 'travelType',
  initialState,
  reducers: {
    setTravelType: (state, action: PayloadAction<TravelType>) => {
      state.travelType = action.payload;
    }
  }
})

// const travelTypeReducer = (state, action) => {
//   if (action.type === 'travelType') {
//     return {
//       travelType: action.payload,
//     }
//   }
//   return state
// }

export const { setTravelType } = globalSlice.actions;

export default globalSlice.reducer;