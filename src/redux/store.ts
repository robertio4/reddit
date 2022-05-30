import { configureStore } from '@reduxjs/toolkit';
import postReducer from './modules/post/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
