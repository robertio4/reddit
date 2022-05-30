import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '@utils/types';
import { RootState } from '../../store';
import customFetch from './postAPI';

interface ParentPost {
  data: Post;
  kind: string;
}

export interface PostState {
  items: Post[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: PostState = {
  items: [],
  isLoading: false,
  isError: false,
};

export const fetchData = createAsyncThunk(
  'post/fetchData',
  async (type?: string) => {
    const response = await customFetch(type);
    return response.data.children.map((item: ParentPost) => item.data);
  },
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload,
      }))

      .addCase(fetchData.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
        items: [],
      }));
  },
});

export const selectItems = (state: RootState) => state.posts;

export default postSlice.reducer;
