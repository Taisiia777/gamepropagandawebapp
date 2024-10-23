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
    async ({ category, page = 1 }: { category: string; page?: number }) => {
        const response = await axios.get<Product[]>(`https://455b-95-161-221-131.ngrok-free.app/products/category/${category}`, {
            params: { page }, // Если page не передан, будет использоваться значение по умолчанию
            headers: {
                'ngrok-skip-browser-warning': '1'
            }
        });
        return response.data;
    }
);


// Fetch paginated products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page?: number) => {
    const response = await axios.get<Product[]>(`https://455b-95-161-221-131.ngrok-free.app/products`, {
        params: { page },
        headers: {
            'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
        }
    });
    return { products: response.data, page };
});

// Search products by name
export const searchProductsByName = createAsyncThunk(
    "products/searchProductsByName",
    async (name: string) => {
        const response = await axios.get<Product[]>(`https://455b-95-161-221-131.ngrok-free.app/products/`, {
            params: { name },
            headers: {
                'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
            }
        });
        return response.data;
    }
);

// Fetch top-rated products
export const fetchTopRatedProducts = createAsyncThunk(
    "products/fetchTopRatedProducts",
    async () => {
        const response = await axios.get<Product[]>(`https://455b-95-161-221-131.ngrok-free.app/products/top-rated`, {
            headers: {
                'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
            }
        });
        return response.data;
    }
);

// Fetch products within a price range (1-500)
export const fetchProductsInPriceRange = createAsyncThunk(
    "products/fetchProductsInPriceRange",
    async () => {
        const response = await axios.get<Product[]>(`https://455b-95-161-221-131.ngrok-free.app/products/price-range/1-500`, {
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
    newReleases: Product[];
    topRated: Product[];
    priceRange: Product[];
    sales: Product[]; // Добавляем для хранения товаров на распродаже
    preorders: Product[]; // Массив для товаров с предзаказом

    status: {
        fetchProducts: "idle" | "loading" | "succeeded" | "failed";
        fetchProductsByCategory: "idle" | "loading" | "succeeded" | "failed";
        searchProductsByName: "idle" | "loading" | "succeeded" | "failed";
        fetchTopRatedProducts: "idle" | "loading" | "succeeded" | "failed";
        fetchProductsInPriceRange: "idle" | "loading" | "succeeded" | "failed";
    };
}

const initialState: ProductsState = {
    items: [],
    filteredItems: [],
    newReleases: [],
    topRated: [],
    priceRange: [],
    sales: [], // Инициализируем массив для распродаж
    preorders: [], // Инициализируем массив для предзаказов

    status: {
        fetchProducts: "idle",
        fetchProductsByCategory: "idle",
        searchProductsByName: "idle",
        fetchTopRatedProducts: "idle",
        fetchProductsInPriceRange: "idle",
    },
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterByPlatform: (state, action: PayloadAction<string>) => {
            if (action.payload === 'Все') {
                state.filteredItems = state.items; // Если выбрана платформа "Все", возвращаем все продукты
            } else {
                state.filteredItems = state.items.filter(product => product.platforms.includes(action.payload));
            }
        },
        filterByLanguage: (state, action: PayloadAction<string>) => {
            if (action.payload === 'Все') {
                state.filteredItems = state.items; // Если выбран язык "Все", возвращаем все продукты
            } else {
                // Можно фильтровать либо по `spoken_languages`, либо по `screen_languages`, в зависимости от нужного
                state.filteredItems = state.items.filter(product =>
                    product.screen_languages.includes(action.payload) ||
                    product.spoken_languages.includes(action.payload)
                );
            }
        },
        filterByPriceRange: (state, action: PayloadAction<{ minPrice: number; maxPrice: number }>) => {
            const { minPrice, maxPrice } = action.payload;
            state.filteredItems = state.items.filter(product => {
                const price = product.discounted_price ? Number(product.discounted_price) : Number(product.base_price);
                return price >= minPrice && price <= maxPrice;
            });
        },
        resetFilters: (state) => {
            state.filteredItems = state.items; // Сбрасываем все фильтры
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status.fetchProducts = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{ products: Product[]; page?: number }>) => {
                state.status.fetchProducts = "succeeded";
                if (action.payload.page && action.payload.page > 1) {
                    state.items = [...state.items, ...action.payload.products];
                } else {
                    state.items = action.payload.products;
                }
                state.filteredItems = state.items;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status.fetchProducts = "failed";
            })

            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status.fetchProductsByCategory = "loading";
            })

            .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<Product[], string, { arg: { category: string; page?: number } }>) => {
                state.status.fetchProductsByCategory = "succeeded";

                const { category, page } = action.meta.arg;

                if (page && page > 1) {
                    // Если это не первая страница, добавляем новые продукты
                    state.filteredItems = [...state.filteredItems, ...action.payload];
                } else {
                    // Если это первая страница, просто перезаписываем
                    state.filteredItems = action.payload;
                }

                if (category === "New") {
                    state.newReleases = action.payload;
                } else if (category === "Discounted") {
                    state.sales = action.payload;
                } else if (category === "Preorder") {
                    state.preorders = action.payload;
                }
            })

            .addCase(fetchProductsByCategory.rejected, (state) => {
                state.status.fetchProductsByCategory = "failed";
            })

            .addCase(searchProductsByName.pending, (state) => {
                state.status.searchProductsByName = "loading";
            })
            .addCase(searchProductsByName.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status.searchProductsByName = "succeeded";
                state.filteredItems = action.payload;
            })
            .addCase(searchProductsByName.rejected, (state) => {
                state.status.searchProductsByName = "failed";
            })

            .addCase(fetchTopRatedProducts.pending, (state) => {
                state.status.fetchTopRatedProducts = "loading";
            })
            .addCase(fetchTopRatedProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status.fetchTopRatedProducts = "succeeded";
                state.topRated = action.payload; // Заполняем topRated
            })
            .addCase(fetchTopRatedProducts.rejected, (state) => {
                state.status.fetchTopRatedProducts = "failed";
            })

            .addCase(fetchProductsInPriceRange.pending, (state) => {
                state.status.fetchProductsInPriceRange = "loading";
            })
            .addCase(fetchProductsInPriceRange.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status.fetchProductsInPriceRange = "succeeded";
                state.priceRange = action.payload; // Заполняем priceRange
            })
            .addCase(fetchProductsInPriceRange.rejected, (state) => {
                state.status.fetchProductsInPriceRange = "failed";
            });
    },
});



// Экспортируем действия для фильтров
export const {
    filterByPlatform,
    filterByLanguage,
    filterByPriceRange,
    resetFilters
} = productsSlice.actions;

// Экспортируем сам редьюсер по умолчанию
export default productsSlice.reducer;