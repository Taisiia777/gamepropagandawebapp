//
// import React, { useEffect } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import ItemPage from './pages/ItemPage';
// import CatalogPage from './pages/CatalogPage';
// import WishList from './pages/WishList';
// import AccountPage from './pages/AccountPage';
// import ReserveCodesPage from './pages/ReserveCodesPage';
// import SubscriptionPage from './pages/SubscriptionPage'; // Импортируем страницу подписок
// import useScrollToTop from './hooks/useScrollToTop'; // Хук для скролла на 0
//
// const AppContent: React.FC = () => {
//     const navigate = useNavigate();
//     const location = useLocation(); // Для отслеживания изменений маршрута
//
//     // Вызов хука для скролла на 0
//     useScrollToTop();
//
//
//     useEffect(() => {
//         if (window.Telegram?.WebApp) {
//             const webApp = window.Telegram.WebApp;
//
//             webApp.expand();
//             webApp.ready();
//             webApp.enableClosingConfirmation();
//
//             // Проверяем текущий маршрут
//             if (location.pathname === '/') {
//                 // Показываем кнопку "Закрыть" на главной странице
//                 webApp.BackButton.hide(); // Скрываем кнопку "Назад"
//
//
//             } else {
//
//                 webApp.BackButton.show(); // Показываем кнопку "Назад"
//                 webApp.BackButton.onClick(() => {
//                     navigate(-1); // Переход назад при нажатии на кнопку "Назад"
//                 });
//             }
//
//             return () => {
//                 webApp.BackButton.offClick(); // Очищаем обработчик при размонтировании компонента
//             };
//         }
//     }, [location.pathname, navigate]); // До
//     // Анимации появления/исчезновения
//     const pageTransition = {
//         initial: { opacity: 0, x: -10 }, // Меньшее смещение по оси X
//         animate: { opacity: 1, x: 0 },   // Плавное появление
//         exit: { opacity: 0, x: 10 },     // Меньшее смещение при исчезновении
//         transition: { duration: 0.3, ease: 'easeInOut' }, // Более длительная анимация с плавным входом и выходом
//     };
//
//
//     return (
//         <AnimatePresence mode="wait"> {/* Заменили exitBeforeEnter на mode="wait" */}
//             <motion.div
//                 key={location.pathname}  // Для уникальности анимации при каждом переходе
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 variants={pageTransition} // Применяем анимацию
//             >
//                 <Routes location={location} key={location.pathname}>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/cart" element={<CartPage />} />
//                     <Route path="/item/:id" element={<ItemPage />} /> {/* Поддержка параметра id */}
//                     <Route path="/catalog" element={<CatalogPage />} />
//                     <Route path="/wishlist" element={<WishList />} />
//                     <Route path="/account" element={<AccountPage />} />
//                     <Route path="/codes" element={<ReserveCodesPage />} />
//                     <Route path="/subscriptions/:id" element={<SubscriptionPage />} />
//
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

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';
import WishList from './pages/WishList';
import AccountPage from './pages/AccountPage';
import ReserveCodesPage from './pages/ReserveCodesPage';
import SubscriptionPage from './pages/SubscriptionPage';
import useScrollToTop from './hooks/useScrollToTop'; // Хук для скролла на 0

const AppContent: React.FC = () => {
    const [nickname, setNickname] = useState<string | null>(null); // Состояние для никнейма пользователя
    const navigate = useNavigate();
    const location = useLocation();
    useScrollToTop();

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;
            webApp.expand();
            webApp.ready();
            webApp.enableClosingConfirmation();

            // Проверяем текущий маршрут
            if (location.pathname === '/') {
                webApp.BackButton.hide();
            } else {
                webApp.BackButton.show();
                webApp.BackButton.onClick(() => {
                    navigate(-1);
                });
            }

            // Извлекаем данные пользователя
            const initData = webApp.initDataUnsafe;
            if (initData?.user?.username) {
                setNickname(initData.user.username); // Сохраняем никнейм пользователя
                // Отправляем запрос на сервер для добавления/проверки пользователя
                axios.post('/api/users', {
                    nickname: initData.user.username,
                    email: '', // Опционально, если есть
                    password: '', // Опционально, если есть
                }).then(response => {
                    console.log('Ответ сервера:', response.data);
                }).catch(error => {
                    console.error('Ошибка при отправке данных пользователя:', error);
                });
            }
            console.log(nickname)

            return () => {
                webApp.BackButton.offClick();
            };
        }
    }, [location.pathname, navigate]);

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
                    <Route path="/subscriptions/:id" element={<SubscriptionPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

export default AppContent;
