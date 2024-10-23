
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./FilterComponent.module.css";
import FilterSelect from "./FilterSelect";
import PriceRange from "./PriceRange";
import PriceRangeSlider from "./PriceRangeSlider";
import { filterByPlatform, filterByLanguage, filterByPriceRange, resetFilters } from "../../utils/productsSlice.ts";

const FilterComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(15000);
    const [selectedPlatform, setSelectedPlatform] = useState("Все");
    const [selectedLanguage, setSelectedLanguage] = useState("Все");
    const [isFilterVisible, setIsFilterVisible] = useState(true); // Управление видимостью фильтров
    console.log(selectedLanguage)
    console.log(selectedPlatform)
    useEffect(() => {
        if (isFilterVisible) {
            document.body.style.overflow = 'hidden'; // Отключаем скроллинг
        } else {
            document.body.style.overflow = ''; // Восстанавливаем скроллинг
        }

        return () => {
            document.body.style.overflow = ''; // Обязательно восстанавливаем скроллинг при размонтировании компонента
        };
    }, [isFilterVisible]);

    const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const platform = e.target.value;
        setSelectedPlatform(platform);
        dispatch(filterByPlatform(platform)); // Отправляем выбранную платформу в Redux
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        setSelectedLanguage(language);
        dispatch(filterByLanguage(language)); // Отправляем выбранный язык в Redux
    };

    const handlePriceRangeChange = () => {
        dispatch(filterByPriceRange({ minPrice, maxPrice })); // Отправляем ценовой диапазон в Redux
    };

    const handleResetFilters = () => {
        setSelectedPlatform("Все");
        setSelectedLanguage("Все");
        setMinPrice(1);
        setMaxPrice(15000);
        dispatch(resetFilters()); // Сброс всех фильтров
        setIsFilterVisible(false); // Закрываем фильтр после применения

    };

    // Обработчик для закрытия фильтра при клике на оверлей
    const handleOverlayClick = () => {
        setIsFilterVisible(false); // Скрываем фильтр
    };

    if (!isFilterVisible) return null; // Если фильтр скрыт, ничего не отображаем

    return (
        <>
            {/* Overlay, который закрывает фильтры при клике */}
            <div className={styles.overlay} onClick={handleOverlayClick}></div>

            {/* Сам компонент фильтра */}
            <form className={styles.filterContainer}>
                <FilterSelect
                    label="Платформа"
                    options={["Все", "PS4", "PS5", "Xbox"]}
                    onChange={handlePlatformChange}
                />
                <FilterSelect
                    label="Язык"
                    options={["Все", "ru", "en", "ja"]}
                    onChange={handleLanguageChange}
                />
                <label htmlFor="priceRange" className={styles.filterLabel}>
                    Цена, ₽
                </label>

                <PriceRange
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
                <PriceRangeSlider
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    onChange={handlePriceRangeChange}
                />

                <button
                    type="button"
                    className={styles.applyButton}
                    onClick={handlePriceRangeChange}
                >
                    Применить
                </button>
                <button
                    type="reset"
                    className={styles.resetButton}
                    onClick={handleResetFilters}
                >
                    Сбросить
                </button>
            </form>
        </>
    );
};

export default FilterComponent;
