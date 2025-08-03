import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExampleData } from '../../api/exampleApi';

interface ExampleState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: null,
  loading: false,
  error: null,
};

export const getExampleData = createAsyncThunk('example/fetch', async (_, thunkAPI) => {
  try {
    return await fetchExampleData();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || 'Unknown error');
  }
});

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getExampleData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExampleData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getExampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default exampleSlice.reducer;