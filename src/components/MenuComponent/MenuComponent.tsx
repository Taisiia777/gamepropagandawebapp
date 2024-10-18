
import React, { useState } from 'react';
import styles from './MenuComponent.module.css';
import MenuItem from './MenuItem';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemData {
    icon: string;
    text: string;
    link: string; // Новое свойство для ссылки
}

const menuItems: MenuItemData[] = [
    { icon: "img/home_white.svg", text: "Главная", link: "/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ba6489150d36c24629178acf7f1449d36df9645bdf0c55865ff5f4e8e388b72?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Каталог", link: "/catalog" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dafbd04695018c98096b026dd72d44bd74ee404ac9cafa77e28644003505606e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Аккаунт", link: "/account" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc39145fc0596311d17b7a0eb96b6ffa510721912ec6b6f2e297c08c9c9b2e1?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои подписки", link: "/subscriptions" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c4c0afef64d777861938444886280e3c6cad050774e079a4cd31cf617b0baf5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои заказы", link: "/orders" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16cdb18a50a388d6e712ac464e886c0b3befb718ad09e52ae4fae2e70adbdad0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Поддержка 24/7", link: "/chat" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10dbbb59d0029c8e55e83c29029ac4baeb24c53b355ea1fef30cc6dd7ab3dc71?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои вишлисты", link: "/wishlist" },
];

interface MenuComponentProps {
    onClose: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ onClose }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const location = useLocation(); // Получаем текущий маршрут
console.log(activeItem)
    const handleItemClick = (text: string) => {
        setActiveItem(text);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // Совпадает с длительностью CSS перехода
    };

    return (
        <nav className={`${styles.menu} ${isClosing ? styles.closing : styles.opening}`}>
            <div className={styles.menuBackground}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/163de519ed36404e231d02a28b1683e72aa536e522867f83ca7204bf966256cc?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                    alt="Close menu"
                    className={styles.closeIcon}
                    onClick={handleClose}
                />
                <div className={styles.menuItems}>
                    {menuItems.map((item, index) => (
                        <Link to={item.link} key={index} className={styles.menuLink}>
                            <MenuItem
                                icon={item.icon}
                                text={item.text}
                                isActive={location.pathname === item.link} // Проверяем, совпадает ли текущий маршрут с маршрутом элемента
                                onClick={() => handleItemClick(item.text)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MenuComponent;
