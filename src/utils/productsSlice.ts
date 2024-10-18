
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/Product";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get<Product[]>("http://localhost:3001/products");
    return response.data;
});

export const searchProductsByName = createAsyncThunk(
    "products/searchProductsByName",
    async (name: string) => {
        const response = await axios.get<Product[]>(`http://localhost:3001/products/`, {
            params: { name },
        });
        return response.data;
    }
);

interface ProductsState {
    items: Product[];
    filteredItems: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductsState = {
    items: [],
    filteredItems: [],
    status: "idle",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(searchProductsByName.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.filteredItems = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productsSlice.reducer;
