


import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/Product";

interface ServerSubscription {
    id: number;
    name: string;
    price: number;
    duration: string;
    imageUrl?: string;
}
interface FetchProductsByCategoryArgs {
    category: string;
    page?: number;
}
export const transformSubscriptionsToProducts = async (): Promise<Product[]> => {
    try {
        // Запрос к серверу для получения списка подписок
        const response = await axios.get<ServerSubscription[]>(`${import.meta.env.VITE_NGROK_URL}/subscriptions`, {
            headers: {
                'ngrok-skip-browser-warning': '1', // Добавляем заголовок для обхода предупреждения
            },
        });
        const subscriptions = response.data;

        const subscriptionProducts: Product[] = subscriptions.map((sub) => ({
            id: `${sub.id}`,
            name: `${sub.name} - ${sub.duration}`,
            base_price: sub.price.toString(),
            discounted_price: sub.price.toString(),
            media: JSON.stringify([{
                __typename: "Media",
                type: "IMAGE",
                url: sub.imageUrl || '',
                role: "MASTER"
            }]),
            description: `${sub.name} подписка на ${sub.duration}`,
            service: "subscription",
            external_id: "",
            active: true,
            average_rating: "0",
            categories: [],
            converted_base_price: sub.price.toString(),
            converted_discounted_price: sub.price.toString(),
            discount_end_date: null,
            eng_name: sub.name,
            genres: [],
            pegi: "",
            platform_constraints: [],
            platform_types: [],
            platforms: [],
            publisher_name: "Subscription Service",
            related_products: [],
            release_date: "",
            screen_languages: [],
            spoken_languages: [],
            total_ratings_count: 0,
            updated_at: new Date().toISOString(),
        }));

        return subscriptionProducts;

    } catch (error) {
        console.error("Ошибка при получении подписок с сервера:", error);
        return [];
    }
};
export const fetchSubscriptions = createAsyncThunk("products/fetchSubscriptions", async () => {
    return await transformSubscriptionsToProducts();  // Возвращаем промис
});

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async ({ category, page = 1 }: FetchProductsByCategoryArgs, { dispatch }) => {
        if (category === "Subscription") {
            // Перенаправляем запрос на `fetchSubscriptions` для категории "Subscription"
            const subscriptionResponse = await dispatch(fetchSubscriptions());
            return subscriptionResponse.payload as Product[];
        } else if (category === "") {
            // Если категория пустая, возвращаем топовые продукты
            const topRatedResponse = await dispatch(fetchTopRatedProducts());
            return topRatedResponse.payload as Product[];
        } else {
            // Запрос на продукты по указанной категории
            const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products/category/${category}`, {
                params: { page },
                headers: {
                    'ngrok-skip-browser-warning': '1',
                },
            });
            return response.data;
        }
    }
);

// Fetch paginated products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (page?: number) => {
    const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products`, {
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
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products/`, {
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
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products/top-rated`, {
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
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products/price-range/1-500`, {
            headers: {
                'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
            }
        });
        return response.data;
    }
);
export const fetchSortedProducts = createAsyncThunk(
    "products/fetchSortedProducts",
    async ({ page = 1, sortBy = "release_date", order = "desc" }: { page: number; sortBy: string; order: string }) => {
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_NGROK_URL}/products`, {
            params: { page, sortBy, order },
            headers: {
                'ngrok-skip-browser-warning': '1' // Для игнорирования предупреждений ngrok
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
    gameCurrency: Product[];
    status: {
        fetchProducts: "idle" | "loading" | "succeeded" | "failed";
        fetchProductsByCategory: "idle" | "loading" | "succeeded" | "failed";
        searchProductsByName: "idle" | "loading" | "succeeded" | "failed";
        fetchTopRatedProducts: "idle" | "loading" | "succeeded" | "failed";
        fetchProductsInPriceRange: "idle" | "loading" | "succeeded" | "failed";
        fetchSortedProducts: "idle" | "loading" | "succeeded" | "failed";

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
    gameCurrency: [],
    status: {
        fetchProducts: "idle",
        fetchProductsByCategory: "idle",
        searchProductsByName: "idle",
        fetchTopRatedProducts: "idle",
        fetchProductsInPriceRange: "idle",
        fetchSortedProducts: "idle"
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
        // filterByLanguage: (state, action: PayloadAction<string>) => {
        //     if (action.payload === 'Все') {
        //         state.filteredItems = state.items; // Если выбран язык "Все", возвращаем все продукты
        //     } else {
        //         // Можно фильтровать либо по `spoken_languages`, либо по `screen_languages`, в зависимости от нужного
        //         state.filteredItems = state.items.filter(product =>
        //             product.screen_languages.includes(action.payload) ||
        //             product.spoken_languages.includes(action.payload)
        //         );
        //     }
        // },
        filterByLanguage: (state, action: PayloadAction<string>) => {
            if (action.payload === 'Все') {
                // Если выбран язык "Все", возвращаем все продукты
                state.filteredItems = state.items;
            } else {
                // Фильтруем только продукты, где явно указаны "ru" в screen_languages или spoken_languages
                state.filteredItems = state.items.filter(product =>
                    (product.screen_languages && product.screen_languages.includes('ru')) ||
                    (product.spoken_languages && product.spoken_languages.includes('ru'))
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
        .addCase(fetchSubscriptions.pending, (state) => {
            state.status.fetchProductsByCategory = "loading";
        })
        .addCase(fetchSubscriptions.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.status.fetchProductsByCategory = "succeeded";
            state.filteredItems = action.payload;  // Теперь это будет Product[]
        })
        .addCase(fetchSubscriptions.rejected, (state) => {
            state.status.fetchProductsByCategory = "failed";
        })
        .addCase(fetchSortedProducts.pending, (state) => {
            state.status.fetchSortedProducts = "loading";
        })
        .addCase(fetchSortedProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.status.fetchSortedProducts = "succeeded";
            state.filteredItems = action.payload;
        })
        .addCase(fetchSortedProducts.rejected, (state) => {
            state.status.fetchSortedProducts = "failed";
        })
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

                if (category === "Subscription") {
                    // Если выбрана категория "Подписки", добавляем преобразованные данные подписок
                    state.filteredItems =  action.payload;
                } 
                if (category === "Currency") {
                    // Если это категория "Currency", сохраняем данные в gameCurrency
                    if (page && page > 1) {
                        state.gameCurrency = [...state.gameCurrency, ...action.payload];
                    } else {
                        state.gameCurrency = action.payload;
                    }
                }
                else {
                    if (page && page > 1) {
                        state.filteredItems = [...state.filteredItems, ...action.payload];
                    } else {
                        state.filteredItems = action.payload;
                    }
                    if (category === "") {
                        state.filteredItems = state.topRated;
                    } else if (category === "New") {
                        state.newReleases = action.payload;
                    } else if (category === "Discounted") {
                        state.sales = action.payload;
                    } else if (category === "Preorder") {
                        state.preorders = action.payload;
                    }
                    
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