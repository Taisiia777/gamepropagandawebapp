
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Тип состояния пользователя
interface UserState {
    userId: string | null; // Добавляем поле userId
    telegramId: string | null;
    nickname: string | null;
    email: string | null;
    emailCheck: string | null;
    password: string | null;
    verificationCode: string | null;
}

const initialState: UserState = {
    userId: null, // Инициализируем userId
    telegramId: null,
    nickname: null,
    email: null,
    emailCheck: null,
    password: null,
    verificationCode: null,
};

// Создаем slice для управления состоянием пользователя
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(
            state,
            action: PayloadAction<{
                userId: string; // Добавляем userId в экшен
                telegramId: string;
                nickname: string;
                email?: string;
                emailCheck?: string;
                password?: string;
                verificationCode?: string;
            }>
        ) {
            state.userId = action.payload.userId; // Сохраняем userId в состоянии
            state.telegramId = action.payload.telegramId;
            state.nickname = action.payload.nickname;
            state.email = action.payload.email || null;
            state.emailCheck = action.payload.emailCheck || null;
            state.password = action.payload.password || null;
            state.verificationCode = action.payload.verificationCode || null;
        },
        updateUser(
            state,
            action: PayloadAction<{
                email?: string;
                emailCheck?: string;
                password?: string;
                verificationCode?: string;
            }>
        ) {
            state.email = action.payload.email || state.email;
            state.emailCheck = action.payload.emailCheck || state.emailCheck;

            state.password = action.payload.password || state.password;
            state.verificationCode =
                action.payload.verificationCode || state.verificationCode;
        },
        clearUser(state) {
            state.userId = null; // Очищаем userId при выходе
            state.telegramId = null;
            state.nickname = null;
            state.email = null;
            state.emailCheck = null;
            state.password = null;
            state.verificationCode = null;
        },
    },
});

// Экспортируем действия
export const { setUser, updateUser, clearUser } = userSlice.actions;

// Экспортируем редуктор
export default userSlice.reducer;
