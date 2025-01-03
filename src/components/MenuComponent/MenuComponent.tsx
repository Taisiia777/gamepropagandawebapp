
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuComponent.module.css';
import MenuItem from './MenuItem';
import { useAppSelector } from '../../hooks/hooks.ts';

interface MenuItemData {
    icon: string;
    text: string;
    link: string;
}

const menuItems: MenuItemData[] = [
    { icon: "/img/home", text: "Главная", link: "/" },
    { icon: "/img/catalog", text: "Каталог", link: "/catalog" },
    { icon: "/img/account", text: "Аккаунт", link: "/account" },
    { icon: "/img/subscriptions", text: "Мои подписки", link: "/your-subscriptions" },
    { icon: "/img/orders", text: "Мои заказы", link: "/orders" },
    { icon: "/img/chat", text: "Поддержка 24/7", link: "/chat" },
    { icon: "/img/wishlist", text: "Мои вишлисты", link: "/wishlist" },
];

interface MenuComponentProps {
    onClose: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    // const [userId, setUserId] = useState<string | null>(null);
    // const [loadingUserId, setLoadingUserId] = useState(true);
    const telegramId = useAppSelector((state) => state.user.telegramId); 
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300);
    };

    const handleSupportClick = async () => {

        try {
            await fetch(`${import.meta.env.VITE_NGROK_URL}/telegram/call-operator`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telegramId }),
            });

            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.close();
            }
        } catch (error) {
            console.error('Ошибка при вызове оператора:', error);
        }
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <nav className={`${styles.menu} ${isClosing ? styles.closing : styles.opening}`}>
                <div className={styles.menuBackground}>
                    <img
                        src={location.pathname === "/" ? "/img/close_black.svg" : "/img/close_white.svg"}
                        alt="Close menu"
                        className={styles.closeIcon}
                        onClick={handleClose}
                    />
                    <div className={styles.menuItems}>
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.link;
                            return item.text === 'Поддержка 24/7' ? (
                                <div
                                    key={index}
                                    className={styles.menuLink}
                                    onClick={handleSupportClick}
                                >
                                    <MenuItem
                                        icon={`${item.icon}_${isActive ? "black" : "white"}.svg`}
                                        text={item.text}
                                        isActive={isActive}
                                    />
                                </div>
                            ) : (
                                <Link to={item.link} key={index} className={styles.menuLink}>
                                    <MenuItem
                                        icon={`${item.icon}_${isActive ? "black" : "white"}.svg`}
                                        text={item.text}
                                        isActive={isActive}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MenuComponent;

