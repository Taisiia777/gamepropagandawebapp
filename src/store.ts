// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './utils/productsSlice';
import userReducer from './utils/userSlice.ts'; // Импортируем userReducer

export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer, // Добавляем userReducer в глобальный стор
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
