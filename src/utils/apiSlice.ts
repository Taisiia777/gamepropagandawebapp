// apiSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://api.gamepropaganda.com";

// Обновленные типы в соответствии с API
export interface SearchParams {
    page: number;
    limit: number;
    service: 'PS' | 'All';
    categories: string;
    minPrice: number;
    maxPrice: number;
    genres: string;
    russianLocalization: boolean;
    searchQuery?: string;
    sortBy?: string;
}

interface ApiProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    service: string;
    category: string;
    genre: string;
    russianLocalization: boolean;
    // Добавьте другие поля согласно API
}

interface ApiResponse {
    items: ApiProduct[];
    total: number;
    page: number;
    limit: number;
}

// Обновленный thunk для поиска продуктов
export const searchProducts = createAsyncThunk(
    "api/searchProducts",
    async (params: Partial<SearchParams>) => {
        const defaultParams: SearchParams = {
            page: 1,
            limit: 24,
            service: 'PS',
            categories: 'All',
            minPrice: 0,
            maxPrice: 15000,
            genres: 'All',
            russianLocalization: false,
            ...params
        };

        const response = await axios.get<ApiResponse>(
            `${API_BASE_URL}/products`,
            { params: defaultParams }
        );
        return response.data;
    }
);

// Получение списка сервисов
export const getServices = createAsyncThunk(
    "api/getServices",
    async () => {
        const response = await axios.get(`${API_BASE_URL}/services`);
        return response.data;
    }
);

// Получение списка категорий
export const getCategories = createAsyncThunk(
    "api/getCategories",
    async () => {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    }
);

// Получение списка жанров
export const getGenres = createAsyncThunk(
    "api/getGenres",
    async () => {
        const response = await axios.get(`${API_BASE_URL}/genres`);
        return response.data;
    }
);

interface ApiState {
    products: ApiProduct[];
    totalProducts: number;
    currentPage: number;
    services: string[];
    categories: string[];
    genres: string[];
    loading: boolean;
    error: string | null;
}

const initialState: ApiState = {
    products: [],
    totalProducts: 0,
    currentPage: 1,
    services: [],
    categories: [],
    genres: [],
    loading: false,
    error: null,
};

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.items;
                state.totalProducts = action.payload.total;
                state.currentPage = action.payload.page;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch products";
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.services = action.payload;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            });
    },
});

export const { clearError } = apiSlice.actions;
export default apiSlice.reducer;