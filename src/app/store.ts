import { combineReducers, configureStore } from "@reduxjs/toolkit";
import travelTypeReducer from "./slices/globalSlice.ts";
import { personsApi } from "@/app/data";

const rootReducer = combineReducers({
  travelType: travelTypeReducer,
  [personsApi.reducerPath]: personsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
