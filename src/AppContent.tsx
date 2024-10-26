//
// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import axios from 'axios'; // Импорт axios для запросов на сервер
//
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import ItemPage from './pages/ItemPage';
// import CatalogPage from './pages/CatalogPage';
// import WishList from './pages/WishList';
// import AccountPage from './pages/AccountPage';
// import ReserveCodesPage from './pages/ReserveCodesPage';
// import SubscriptionPage from './pages/SubscriptionPage';
// import useScrollToTop from './hooks/useScrollToTop'; // Хук для скролла на 0
// import OrderPage from "./pages/OrderPage.tsx";
//
// const AppContent: React.FC = () => {
//     const [nickname, setNickname] = useState<string | null>(null); // Состояние для никнейма пользователя
//     const [telegramId, setTelegramId] = useState<number | null>(null); // Состояние для telegramId пользователя
//     console.log(telegramId)
//     const navigate = useNavigate();
//     const location = useLocation();
//     useScrollToTop();
//
//     useEffect(() => {
//         if (window.Telegram?.WebApp) {
//             const webApp = window.Telegram.WebApp;
//             webApp.expand();
//             webApp.ready();
//             webApp.enableClosingConfirmation();
//
//             // Проверяем текущий маршрут
//             if (location.pathname === '/') {
//                 webApp.BackButton.hide();
//             } else {
//                 webApp.BackButton.show();
//                 webApp.BackButton.onClick(() => {
//                     navigate(-1);
//                 });
//             }
//
//             // Извлекаем данные пользователя
//             const initData = webApp.initDataUnsafe;
//             if (initData?.user?.username) {
//                 setNickname(initData.user.username); // Сохраняем никнейм пользователя
//                 // Отправляем запрос на сервер для добавления/проверки пользователя
//                 setTelegramId(initData.user.id); // Сохраняем telegramId пользователя
//
//                 axios.post('https://455b-95-161-221-131.ngrok-free.app/users', {
//                     nickname: initData.user.username,
//                     email: '', // Опционально, если есть
//                     password: '', // Опционально, если есть
//                     telegramId: initData.user.id.toString(), // Передаем telegramId
//
//                 }).then(response => {
//                     console.log('Ответ сервера:', response.data);
//                 }).catch(error => {
//                     console.error('Ошибка при отправке данных пользователя:', error);
//                 });
//             }
//             console.log(nickname)
//
//             return () => {
//                 webApp.BackButton.offClick();
//             };
//         }
//     }, [location.pathname, navigate]);
//
//     const pageTransition = {
//         initial: { opacity: 0, x: -10 },
//         animate: { opacity: 1, x: 0 },
//         exit: { opacity: 0, x: 10 },
//         transition: { duration: 0.3, ease: 'easeInOut' },
//     };
//
//     return (
//         <AnimatePresence mode="wait">
//             <motion.div
//                 key={location.pathname}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 variants={pageTransition}
//             >
//                 <Routes location={location} key={location.pathname}>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/cart" element={<CartPage />} />
//                     <Route path="/item/:id" element={<ItemPage />} />
//                     <Route path="/catalog" element={<CatalogPage />} />
//                     <Route path="/wishlist" element={<WishList />} />
//                     <Route path="/account" element={<AccountPage />} />
//                     <Route path="/codes" element={<ReserveCodesPage />} />
//                     <Route path="/orders" element={<OrderPage />} />
//                     <Route path="/subscriptions" element={<OrderPage />} />
//                     <Route path="/subscriptions/:id" element={<SubscriptionPage />} />
//                 </Routes>
//             </motion.div>
//         </AnimatePresence>
//     );
// };
//
// export default AppContent;
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios'; // Импорт axios для запросов на сервер
import { useDispatch } from 'react-redux'; // Для отправки действий в Redux
import { setUser } from './utils/userSlice.ts'; // Импортируем действие setUser

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';
import WishList from './pages/WishList';
import AccountPage from './pages/AccountPage';
import ReserveCodesPage from './pages/ReserveCodesPage';
import SubscriptionPage from './pages/SubscriptionPage';
import useScrollToTop from './hooks/useScrollToTop';
import OrderPage from "./pages/OrderPage.tsx";

const AppContent: React.FC = () => {
    const [nickname, setNickname] = useState<string | null>(null);
    const [telegramId, setTelegramId] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch(); // Инициализация dispatch для отправки действий
    useScrollToTop();
    console.log(nickname, telegramId)
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;
            webApp.expand();
            webApp.ready();
            webApp.enableClosingConfirmation();

            if (location.pathname === '/') {
                webApp.BackButton.hide();
            } else {
                webApp.BackButton.show();
                webApp.BackButton.onClick(() => {
                    navigate(-1);
                });
            }

            const initData = webApp.initDataUnsafe;
            if (initData?.user?.username) {
                setNickname(initData.user.username);
                setTelegramId(initData.user.id);

                // Проверяем наличие пользователя в базе данных
                axios.get(`https://455b-95-161-221-131.ngrok-free.app/users/telegram/${initData.user.id}`, {
                    headers: {
                        'ngrok-skip-browser-warning': '1', // Заголовок для игнорирования предупреждений ngrok
                    },
                })
                    .then(response => {
                        const userData = response.data;
                        if (userData) {
                            // Пользователь существует, заполняем все данные в userSlice
                            dispatch(setUser({
                                userId: userData.id,
                                telegramId: userData.telegramId,
                                nickname: userData.nickname,
                                email: userData.email,
                                password: userData.password,
                                verificationCode: userData.verificationCode,
                            }));
                        } else {
                            // Пользователь не найден, создаем нового
                            axios.post('https://455b-95-161-221-131.ngrok-free.app/users', {
                                nickname: initData.user.username,
                                email: '',
                                password: '',
                                telegramId: initData.user.id.toString(),
                            }, {
                                headers: {
                                    'ngrok-skip-browser-warning': '1',
                                },
                            }).then(response => {
                                console.log('Новый пользователь создан:', response.data);
                                // Обновляем userSlice с никнеймом и telegramId
                                dispatch(setUser({
                                    userId: '',
                                    telegramId: response.data.telegramId,
                                    nickname: response.data.nickname,
                                    email: '',
                                    password: '',
                                    verificationCode: ''
                                }));
                            }).catch(error => {
                                console.error('Ошибка при создании пользователя:', error);
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка при проверке пользователя:', error);
                    });
            }

            return () => {
                webApp.BackButton.offClick();
            };
        }
    }, [location.pathname, navigate, dispatch]);

    const pageTransition = {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
        transition: { duration: 0.3, ease: 'easeInOut' },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/item/:id" element={<ItemPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/codes" element={<ReserveCodesPage />} />
                    <Route path="/orders" element={<OrderPage />} />
                    <Route path="/subscriptions" element={<OrderPage />} />
                    <Route path="/subscriptions/:id" element={<SubscriptionPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

export default AppContent;
