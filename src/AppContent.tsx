import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';
import WishList from './pages/WishList';
import AccountPage from './pages/AccountPage';
import ReserveCodesPage from './pages/ReserveCodesPage';
import useScrollToTop from './hooks/useScrollToTop'; // Импортируем хук

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    useScrollToTop();

    useEffect(() => {
        if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;

            webApp.expand();
            webApp.ready();
            webApp.enableClosingConfirmation();

            webApp.BackButton.show();
            webApp.BackButton.onClick(() => {
                navigate(-1); // Переход назад при нажатии на кнопку
            });

            return () => {
                webApp.BackButton.offClick();
            };
        }
    }, [navigate]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/item/:id" element={<ItemPage />} /> {/* Поддержка параметра id */}
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/codes" element={<ReserveCodesPage />} />
            </Routes>
        </div>
    );
};

export default AppContent;
