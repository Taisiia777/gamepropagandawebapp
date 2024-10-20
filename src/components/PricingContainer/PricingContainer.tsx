// import React from 'react';
// import PricingCard from './PricingCard';
// import styles from './PricingCard.module.css';
//
// const pricingData = [
//     { title: 'Standard', price: '9 990 ₽', type: 'standard' as const },
//     { title: 'Deluxe', price: '6 860 ₽', type: 'deluxe' as const },
//     { title: 'Ultimate', price: '8 890 ₽', type: 'ultimate' as const },
// ];
//
// const PricingContainer: React.FC = () => {
//     return (
//         <section className={styles.pricingContainer}>
//             {pricingData.map((card, index) => (
//                 <PricingCard
//                     key={index}
//                     title={card.title}
//                     price={card.price}
//                     type={card.type}
//                 />
//             ))}
//         </section>
//     );
// };
//
// export default PricingContainer;
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import styles from './PricingCard.module.css';

const pricingData = [
    { title: 'Standard', price: '9 990 ₽', type: 'standard' as const },
    { title: 'Deluxe', price: '6 860 ₽', type: 'deluxe' as const },
    { title: 'Ultimate', price: '8 890 ₽', type: 'ultimate' as const },
];

const PricingContainer: React.FC = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelectedCardIndex(index);
    };

    return (
        <section className={styles.pricingContainer}>
            {pricingData.map((card, index) => (
                <PricingCard
                    key={index}
                    title={card.title}
                    price={card.price}
                    type={card.type}
                    isSelected={selectedCardIndex === index} // Проверяем, выбрана ли карточка
                    onClick={() => handleCardClick(index)} // Передаем обработчик клика
                />
            ))}
        </section>
    );
};

export default PricingContainer;
