
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuComponent.module.css';
import MenuItem from './MenuItem';

interface MenuItemData {
    icon: string;
    text: string;
    link: string;
}

const menuItems: MenuItemData[] = [
    { icon: "/img/home", text: "Главная", link: "/" },
    { icon: "/img/catalog", text: "Каталог", link: "/catalog" },
    { icon: "/img/account", text: "Аккаунт", link: "/account" },
    { icon: "/img/subscriptions", text: "Мои подписки", link: "/subscriptions" },
    { icon: "/img/orders", text: "Мои заказы", link: "/orders" },
    { icon: "/img/chat", text: "Поддержка 24/7", link: "/chat" },
    { icon: "/img/wishlist", text: "Мои вишлисты", link: "/wishlist" },
];

interface MenuComponentProps {
    onClose: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const location = useLocation(); // Получаем текущий маршрут

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // Совпадает с длительностью CSS перехода
    };
// Обработчик клика на оверлей
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose(); // Закрываем меню при клике на оверлей
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
                            return (
                                <Link to={item.link} key={index} className={styles.menuLink}>
                                    <MenuItem
                                        icon={`${item.icon}_${isActive ? "black" : "white"}.svg`}
                                        text={item.text}
                                        isActive={isActive}
                                        onClick={() => {
                                        }}
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
