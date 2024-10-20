// import React from 'react';
// import styles from './PricingCard.module.css';
//
// interface PricingCardProps {
//     title: string;
//     price: string;
//     type: 'standard' | 'deluxe' | 'ultimate';
// }
//
// const PricingCard: React.FC<PricingCardProps> = ({ title, price, type }) => {
//     const cardStyle = type === 'standard' ? styles.standardCard :
//         type === 'deluxe' ? styles.deluxeCard :
//             styles.ultimateCard;
//
//     return (
//         <div className={cardStyle}>
//             <h3 className={styles.cardTitle}>{title}</h3>
//             <p className={styles.cardPrice}>{price}</p>
//         </div>
//     );
// };
//
// export default PricingCard;
import React from 'react';
import styles from './PricingCard.module.css';

interface PricingCardProps {
    title: string;
    price: string;
    type: 'standard' | 'deluxe' | 'ultimate';
    isSelected: boolean;
    onClick: () => void; // Новый пропс для обработки клика
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, type, isSelected, onClick }) => {
    const cardStyle = `${type === 'standard' ? styles.standardCard :
        type === 'deluxe' ? styles.deluxeCard :
            styles.ultimateCard} ${isSelected ? styles.selectedCard : ''}`; // Добавляем класс, если карточка выбрана

    return (
        <div className={cardStyle} onClick={onClick}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardPrice}>{price}</p>
        </div>
    );
};

export default PricingCard;
