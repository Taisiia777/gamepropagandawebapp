//
// import React, { useState } from 'react';
// import styles from './MenuComponent.module.css';
// import MenuItem from './MenuItem';
// import { Link, useLocation } from 'react-router-dom';
//
// interface MenuItemData {
//     icon: string;
//     text: string;
//     link: string; // Новое свойство для ссылки
// }
//
// const menuItems: MenuItemData[] = [
//     { icon: "img/home_white.svg", text: "Главная", link: "/" },
//     { icon: "img/catalog_white.svg", text: "Каталог", link: "/catalog" },
//     { icon: "img/catalog_white.svg", text: "Аккаунт", link: "/account" },
//     { icon: "img/catalog_white.svg", text: "Мои подписки", link: "/subscriptions" },
//     { icon: "img/catalog_white.svg", text: "Мои заказы", link: "/orders" },
//     { icon: "img/catalog_white.svg", text: "Поддержка 24/7", link: "/chat" },
//     { icon: "img/catalog_white.svg", text: "Мои вишлисты", link: "/wishlist" },
// ];
//
// interface MenuComponentProps {
//     onClose: () => void;
// }
//
// const MenuComponent: React.FC<MenuComponentProps> = ({ onClose }) => {
//     const [activeItem, setActiveItem] = useState<string | null>(null);
//     const [isClosing, setIsClosing] = useState(false);
//     const location = useLocation(); // Получаем текущий маршрут
// console.log(activeItem)
//     const handleItemClick = (text: string) => {
//         setActiveItem(text);
//     };
//
//     const handleClose = () => {
//         setIsClosing(true);
//         setTimeout(onClose, 300); // Совпадает с длительностью CSS перехода
//     };
//
//     return (
//         <nav className={`${styles.menu} ${isClosing ? styles.closing : styles.opening}`}>
//             <div className={styles.menuBackground}>
//                 <img
//                     src="img/close_white.svg"
//                     alt="Close menu"
//                     className={styles.closeIcon}
//                     onClick={handleClose}
//                 />
//                 <div className={styles.menuItems}>
//                     {menuItems.map((item, index) => (
//                         <Link to={item.link} key={index} className={styles.menuLink}>
//                             <MenuItem
//                                 icon={item.icon}
//                                 text={item.text}
//                                 isActive={location.pathname === item.link} // Проверяем, совпадает ли текущий маршрут с маршрутом элемента
//                                 onClick={() => handleItemClick(item.text)}
//                             />
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default MenuComponent;
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
    { icon: "img/home", text: "Главная", link: "/" },
    { icon: "img/catalog", text: "Каталог", link: "/catalog" },
    { icon: "img/account", text: "Аккаунт", link: "/account" },
    { icon: "img/subscriptions", text: "Мои подписки", link: "/subscriptions" },
    { icon: "img/orders", text: "Мои заказы", link: "/orders" },
    { icon: "img/chat", text: "Поддержка 24/7", link: "/chat" },
    { icon: "img/wishlist", text: "Мои вишлисты", link: "/wishlist" },
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

    return (
        <nav className={`${styles.menu} ${isClosing ? styles.closing : styles.opening}`}>
            <div className={styles.menuBackground}>
                <img
                    src={location.pathname === "/" ? "img/close_black.svg" : "img/close_white.svg"}
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
                                    onClick={() => {}}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default MenuComponent;
