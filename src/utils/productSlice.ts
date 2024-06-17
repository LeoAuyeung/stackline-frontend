import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ProductState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
  data: null,
  status: 'idle',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = productSlice.actions;

export const selectProduct = (state: RootState) => state.product.data;

export default productSlice.reducer;
