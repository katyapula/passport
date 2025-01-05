import {combineReducers, configureStore} from '@reduxjs/toolkit'
import travelTypeReducer from './slices/globalSlice.ts';

const rootReducer = combineReducers({
  travelType: travelTypeReducer,
})

const store =  configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => {}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;