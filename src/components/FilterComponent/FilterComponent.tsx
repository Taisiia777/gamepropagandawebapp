import React from 'react';
import styles from './FilterComponent.module.css';
import FilterSelect from './FilterSelect';
import PriceRange from './PriceRange';

const FilterComponent: React.FC = () => {
    return (
        <form className={styles.filterContainer}>
            <FilterSelect label="Платформа" options={["Все"]} />
            <FilterSelect label="Язык" options={["Все"]} />
            <label htmlFor="priceRange" className={styles.filterLabel}>Цена, ₽</label>
            <PriceRange minPrice={290} maxPrice={12410} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7895d39bfadee204517daabd8d8066db37e02cf13e37889131cec70288a082?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className={styles.filterImage} />
            <button type="submit" className={styles.applyButton}>Применить</button>
            <button type="reset" className={styles.resetButton}>Cбросить</button>
        </form>
    );
};

export default FilterComponent;