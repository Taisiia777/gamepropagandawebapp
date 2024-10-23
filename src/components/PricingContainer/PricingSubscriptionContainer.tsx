import React from 'react';
import PricingCard from './PricingCard';
import styles from './PricingCard.module.css';

interface PricingSubscriptionContainerProps {
    selectedPeriod: "1 месяц" | "3 месяца" | "12 месяцев";
    onPeriodChange: (period: "1 месяц" | "3 месяца" | "12 месяцев") => void;
    prices: { [key: string]: string }; // объект с ценами
}

const PricingSubscriptionContainer: React.FC<PricingSubscriptionContainerProps> = ({ selectedPeriod, onPeriodChange, prices }) => {
    const pricingData = [
        { title: "1 месяц", price: prices["1 месяц"], type: 'standard' as const },
        { title: "3 месяца", price: prices["3 месяца"], type: 'deluxe' as const },
        { title: "12 месяцев", price: prices["12 месяцев"], type: 'ultimate' as const },
    ];

    return (
        <section className={styles.pricingSubContainer}>
            {pricingData.map((card, index) => (
                <PricingCard
                    key={index}
                    title={card.title}
                    price={`${card.price} Р`}
                    type={card.type}
                    isSelected={selectedPeriod === card.title} // Проверяем, выбрана ли карточка
                    onClick={() => onPeriodChange(card.title as "1 месяц" | "3 месяца" | "12 месяцев")} // Передаем обработчик клика
                />
            ))}
        </section>
    );
};

export default PricingSubscriptionContainer;
