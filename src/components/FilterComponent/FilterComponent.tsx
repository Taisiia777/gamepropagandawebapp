
import React, { useState } from "react";
import styles from "./FilterComponent.module.css";
import FilterSelect from "./FilterSelect";
import PriceRange from "./PriceRange";
import PriceRangeSlider from "./PriceRangeSlider";

const FilterComponent: React.FC = () => {
    const [minPrice, setMinPrice] = useState(30);
    const [maxPrice, setMaxPrice] = useState(70);

    return (
        <form className={styles.filterContainer}>
            <FilterSelect label="Платформа" options={["Все"]} />
            <FilterSelect label="Язык" options={["Все"]} />
            <label htmlFor="priceRange" className={styles.filterLabel}>Цена, ₽</label>

            {/* Передаем состояния и функции в PriceRange */}
            <PriceRange minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

            {/* Передаем состояния и функции в PriceRangeSlider */}
            <PriceRangeSlider minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />

            <button type="submit" className={styles.applyButton}>Применить</button>
            <button type="reset" className={styles.resetButton}>Cбросить</button>
        </form>
    );
};

export default FilterComponent;
