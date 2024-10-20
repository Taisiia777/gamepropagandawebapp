import React from 'react';
import styles from './FilterComponent.module.css';

interface PriceRangeProps {
    minPrice: number;
    maxPrice: number;
}

const PriceRange: React.FC<PriceRangeProps> = ({ minPrice, maxPrice }) => {
    return (
        <div className={styles.priceRangeContainer}>
            <div className={styles.priceInput}>
                <label htmlFor="minPrice" className={styles.visuallyHidden}>Minimum price</label>
                <span className={styles.priceLabel}>от</span>
                <input type="number" id="minPrice" className={styles.priceValue} defaultValue={minPrice} />
            </div>
            <div className={styles.priceInput}>
                <label htmlFor="maxPrice" className={styles.visuallyHidden}>Maximum price</label>
                <span className={styles.priceLabel}>до</span>
                <input type="number" id="maxPrice" className={styles.priceValue} defaultValue={maxPrice} />
            </div>
        </div>
    );
};

export default PriceRange;