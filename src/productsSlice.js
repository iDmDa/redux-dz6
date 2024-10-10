import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;