//
//
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { Product } from "../types/Product";
// export const fetchProductsByCategory = createAsyncThunk(
//     "products/fetchProductsByCategory",
//     async (category: string) => {
//         const response = await axios.get<Product[]>(`http://localhost:3001/products/category/${category}`);
//         return response.data;
//     }
// );
//
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page?: number) => {
//     const response = await axios.get<Product[]>(`http://localhost:3001/products`, {
//         params: { page },
//         headers: {
//                 'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
//             }
//     });
//     return { products: response.data, page };
// });
//
// export const searchProductsByName = createAsyncThunk(
//     "products/searchProductsByName",
//     async (name: string) => {
//         const response = await axios.get<Product[]>(`http://localhost:3001/products/`, {
//             params: { name },
//         });
//         return response.data;
//     }
// );
//
// interface ProductsState {
//     items: Product[];
//     filteredItems: Product[];
//     status: "idle" | "loading" | "succeeded" | "failed";
// }
//
// const initialState: ProductsState = {
//     items: [],
//     filteredItems: [],
//     status: "idle",
// };
//
// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<Product[]>) => {
//                 state.status = "succeeded";
//                 state.items = action.payload;
//                 state.filteredItems = action.payload;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{ products: Product[], page?: number }>) => {
//                 state.status = "succeeded";
//                 if (action.payload.page && action.payload.page > 1) {
//                     state.items = [...state.items, ...action.payload.products];
//                 } else {
//                     state.items = action.payload.products;
//                 }
//                 state.filteredItems = state.items;
//             })
//             .addCase(searchProductsByName.fulfilled, (state, action: PayloadAction<Product[]>) => {
//                 state.filteredItems = action.payload;
//             })
//             .addCase(fetchProducts.rejected, (state) => {
//                 state.status = "failed";
//             });
//
//     },
// });
//
// export default productsSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/Product";

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (category: string) => {
        const response = await axios.get<Product[]>(`https://03f4-95-161-221-131.ngrok-free.app/products/category/${category}`, {
            headers: {
                'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
            }
        });
        return response.data;
    }
);

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page?: number) => {
    const response = await axios.get<Product[]>(`https://03f4-95-161-221-131.ngrok-free.app/products`, {
        params: { page },
        headers: {
            'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
        }
    });
    return { products: response.data, page };
});

export const searchProductsByName = createAsyncThunk(
    "products/searchProductsByName",
    async (name: string) => {
        const response = await axios.get<Product[]>(`https://03f4-95-161-221-131.ngrok-free.app/products/`, {
            params: { name },
            headers: {
                'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
            }
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
            .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{ products: Product[], page?: number }>) => {
                state.status = "succeeded";
                if (action.payload.page && action.payload.page > 1) {
                    state.items = [...state.items, ...action.payload.products];
                } else {
                    state.items = action.payload.products;
                }
                state.filteredItems = state.items;
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
