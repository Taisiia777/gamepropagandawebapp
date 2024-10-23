
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';
import WishList from './pages/WishList';
import AccountPage from './pages/AccountPage';
import ReserveCodesPage from './pages/ReserveCodesPage';
import SubscriptionPage from './pages/SubscriptionPage'; // Импортируем страницу подписок
import useScrollToTop from './hooks/useScrollToTop'; // Хук для скролла на 0

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Для отслеживания изменений маршрута

    // Вызов хука для скролла на 0
    useScrollToTop();

    // useEffect(() => {
    //     if (window.Telegram?.WebApp) {
    //         const webApp = window.Telegram.WebApp;
    //
    //         webApp.expand();
    //         webApp.ready();
    //         webApp.enableClosingConfirmation();
    //
    //         webApp.BackButton.show();
    //         webApp.BackButton.onClick(() => {
    //             navigate(-1); // Переход назад при нажатии на кнопку
    //         });
    //
    //         return () => {
    //             webApp.BackButton.offClick();
    //         };
    //     }
    // }, [navigate]);
    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;

            webApp.expand();
            webApp.ready();
            webApp.enableClosingConfirmation();

            // Проверяем текущий маршрут
            if (location.pathname === '/') {
                // Показываем кнопку "Закрыть" на главной странице
                webApp.BackButton.hide(); // Скрываем кнопку "Назад"
                webApp.MainButton.show(); // Показываем кнопку "Закрыть"
                webApp.MainButton.setText("Закрыть");

                // Закрываем WebApp при нажатии на кнопку "Закрыть"
                webApp.MainButton.onClick(() => {
                    webApp.close();
                });
            } else {
                // Показываем кнопку "Назад" на всех остальных страницах
                webApp.MainButton.hide(); // Скрываем кнопку "Закрыть"
                webApp.BackButton.show(); // Показываем кнопку "Назад"
                webApp.BackButton.onClick(() => {
                    navigate(-1); // Переход назад при нажатии на кнопку "Назад"
                });
            }

            return () => {
                webApp.BackButton.offClick(); // Очищаем обработчик при размонтировании компонента
                webApp.MainButton.offClick(); // Очищаем обработчик для кнопки "Закрыть"
            };
        }
    }, [location.pathname, navigate]); // До
    // Анимации появления/исчезновения
    const pageTransition = {
        initial: { opacity: 0, x: -10 }, // Меньшее смещение по оси X
        animate: { opacity: 1, x: 0 },   // Плавное появление
        exit: { opacity: 0, x: 10 },     // Меньшее смещение при исчезновении
        transition: { duration: 0.3, ease: 'easeInOut' }, // Более длительная анимация с плавным входом и выходом
    };


    return (
        <AnimatePresence mode="wait"> {/* Заменили exitBeforeEnter на mode="wait" */}
            <motion.div
                key={location.pathname}  // Для уникальности анимации при каждом переходе
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition} // Применяем анимацию
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/item/:id" element={<ItemPage />} /> {/* Поддержка параметра id */}
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
