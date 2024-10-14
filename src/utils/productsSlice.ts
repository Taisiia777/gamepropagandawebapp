// src/features/products/productsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types/Product';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('http://localhost:3001/products');
    return response.data;
});

interface ProductsState {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
    items: [],
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(fetchProducts.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state: any, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state: any) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;
