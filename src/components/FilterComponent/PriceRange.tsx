
import React from "react";
import styles from "./FilterComponent.module.css";

interface PriceRangeProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(e.target.value));
    };

    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <div className={styles.priceRangeContainer}>
            <div className={styles.priceInput}>
                <label htmlFor="minPrice" className={styles.visuallyHidden}>Минимальная цена</label>
                <span className={styles.priceLabel}>от</span>
                <input
                    type="number"
                    id="minPrice"
                    className={styles.priceValue}
                    value={minPrice}
                    onChange={handleMinInputChange}
                />
            </div>
            <div className={styles.priceInput}>
                <label htmlFor="maxPrice" className={styles.visuallyHidden}>Максимальная цена</label>
                <span className={styles.priceLabel}>до</span>
                <input
                    type="number"
                    id="maxPrice"
                    className={styles.priceValue}
                    value={maxPrice}
                    onChange={handleMaxInputChange}
                />
            </div>
        </div>
    );
};

export default PriceRange;
