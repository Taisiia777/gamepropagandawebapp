import React from 'react';
import styles from './MenuComponent.module.css';

interface MenuItemProps {
    icon: string;
    text: string;
    isActive: boolean;
    onClick?: () => void; // Сделали onClick необязательным
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, isActive, onClick }) => {
    return (
        <button
            className={`${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`}
            onClick={onClick}
        >
            <img src={icon} alt={text} className={styles.menuIcon} />
            <span className={isActive ? styles.activeMenuText : ''}>{text}</span>
        </button>
    );
};

export default MenuItem;
