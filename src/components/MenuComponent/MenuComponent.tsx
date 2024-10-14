
import React, { useState } from 'react';
import styles from './MenuComponent.module.css';
import MenuItem from './MenuItem';

interface MenuItemData {
    icon: string;
    text: string;
}

const menuItems: MenuItemData[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ba6489150d36c24629178acf7f1449d36df9645bdf0c55865ff5f4e8e388b72?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Каталог" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dafbd04695018c98096b026dd72d44bd74ee404ac9cafa77e28644003505606e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Аккаунт" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/61d130d188346006761bc2e45e98a15bc701a0f6f2bdfb324dd6851e274425f3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Забрать заказ" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dc39145fc0596311d17b7a0eb96b6ffa510721912ec6b6f2e297c08c9c9b2e1?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои подписки" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c4c0afef64d777861938444886280e3c6cad050774e079a4cd31cf617b0baf5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои заказы" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16cdb18a50a388d6e712ac464e886c0b3befb718ad09e52ae4fae2e70adbdad0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Чат" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10dbbb59d0029c8e55e83c29029ac4baeb24c53b355ea1fef30cc6dd7ab3dc71?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", text: "Мои вишлисты" },
];

interface MenuComponentProps {
    onClose: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ onClose }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);

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
                        <MenuItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            isActive={item.text === activeItem}
                            onClick={() => handleItemClick(item.text)}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MenuComponent;
