
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import styles from "./FilterComponent.module.css";
// import FilterSelect from "./FilterSelect";
// import PriceRange from "./PriceRange";
// import PriceRangeSlider from "./PriceRangeSlider";
// import { filterByPlatform, filterByLanguage, filterByPriceRange, resetFilters } from "../../utils/productsSlice.ts";

// const FilterComponent: React.FC = () => {
//     const dispatch = useDispatch();

//     // Состояния фильтров
//     const [minPrice, setMinPrice] = useState<number>(1);
//     const [maxPrice, setMaxPrice] = useState<number>(4199);
//     const [selectedPlatform, setSelectedPlatform] = useState<string>("Все");
//     const [selectedLanguage, setSelectedLanguage] = useState<string>("Все");
//     const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);

//     const languageOptions: Record<string, string> = {
//         "Все": "Все",
//         "Русский текст": "ru",
//         "Русская озвучка": "ru",
//     };

//     // Загружаем фильтры из localStorage при открытии фильтров
//     useEffect(() => {
//         if (isFilterVisible) {
//             const savedFilters = JSON.parse(localStorage.getItem("filters") || "{}");

//             if (savedFilters) {
//                 setMinPrice(savedFilters.minPrice ?? 1);
//                 setMaxPrice(savedFilters.maxPrice ?? 4199);
//                 setSelectedPlatform(savedFilters.selectedPlatform ?? "Все");
//                 setSelectedLanguage(savedFilters.selectedLanguage ?? "Все");

//                 // Применяем фильтры из localStorage к Redux
//                 dispatch(filterByPlatform(savedFilters.selectedPlatform || "Все"));
//                 dispatch(filterByLanguage(savedFilters.selectedLanguage || "Все"));
//                 dispatch(filterByPriceRange({ minPrice: savedFilters.minPrice ?? 1, maxPrice: savedFilters.maxPrice ?? 4199 }));
//             }
//         }
//     }, [isFilterVisible, dispatch]);

//     // Сохраняем фильтры в localStorage при нажатии кнопки "Применить"
//     const saveFiltersToLocalStorage = () => {
//         const filters = {
//             minPrice,
//             maxPrice,
//             selectedPlatform,
//             selectedLanguage,
//         };
//         localStorage.setItem("filters", JSON.stringify(filters));
//     };

//     const updateFiltersAppliedStatus = () => {
//         const hasFiltersApplied =
//             selectedPlatform !== "Все" ||
//             selectedLanguage !== "Все" ||
//             minPrice > 1 ||
//             maxPrice < 4199;

//         localStorage.setItem("filtersApplied", JSON.stringify(hasFiltersApplied));
//         window.dispatchEvent(new Event("storage")); // Отправляем событие для обновления кнопки
//     };

//     const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const platform = e.target.value;
//         setSelectedPlatform(platform);
//         dispatch(filterByPlatform(platform));
//     };

//     const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const languageDisplayValue = e.target.value;
//         const languageInternalValue = languageOptions[languageDisplayValue];
//         setSelectedLanguage(languageDisplayValue);
//         dispatch(filterByLanguage(languageInternalValue));
//     };

//     const handlePriceRangeChange = () => {
//         dispatch(filterByPriceRange({ minPrice, maxPrice }));
//     };

//     const handleSetFilters = () => {
//         saveFiltersToLocalStorage(); // Сохраняем фильтры
//         updateFiltersAppliedStatus(); // Обновляем статус
//         setIsFilterVisible(false); // Закрываем окно
//     };

//     const handleResetFilters = () => {
//         setSelectedPlatform("Все");
//         setSelectedLanguage("Все");
//         setMinPrice(1);
//         setMaxPrice(4199);
//         dispatch(resetFilters());
//         setIsFilterVisible(false);

//         // Сбрасываем фильтры в localStorage
//         localStorage.removeItem("filters");
//         localStorage.setItem("filtersApplied", JSON.stringify(false));
//         window.dispatchEvent(new Event("storage"));
//     };

//     const handleOverlayClick = () => {
//         setIsFilterVisible(false);
//     };

//     if (!isFilterVisible) return null;

//     return (
//         <>
//             <div className={styles.overlay} onClick={handleOverlayClick}></div>
//             <form className={styles.filterContainer}>
//                 <FilterSelect
//                     label="Платформа"
//                     options={["Все", "PS4", "PS5"]}
//                     onChange={handlePlatformChange}
//                     value={selectedPlatform} // Привязка к состоянию
//                 />
//                 <FilterSelect
//                     label="Локализация"
//                     options={Object.keys(languageOptions)}
//                     onChange={handleLanguageChange}
//                     value={selectedLanguage} // Привязка к состоянию
//                 />
//                 <label htmlFor="priceRange" className={styles.filterLabel}>
//                     Цена, ₽
//                 </label>

//                 <PriceRange
//                     minPrice={minPrice}
//                     maxPrice={maxPrice}
//                     setMinPrice={setMinPrice}
//                     setMaxPrice={setMaxPrice}
//                 />
//                 <PriceRangeSlider
//                     minPrice={minPrice}
//                     maxPrice={maxPrice}
//                     setMinPrice={setMinPrice}
//                     setMaxPrice={setMaxPrice}
//                     onChange={handlePriceRangeChange}
//                 />

//                 <button
//                     type="button"
//                     className={styles.applyButton}
//                     onClick={handleSetFilters}
//                 >
//                     Применить
//                 </button>
//                 <button
//                     type="reset"
//                     className={styles.resetButton}
//                     onClick={handleResetFilters}
//                 >
//                     Сбросить
//                 </button>
//             </form>
//         </>
//     );
// };

// export default FilterComponent;
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import styles from "./FilterComponent.module.css";
import FilterSelect from "./FilterSelect";
import PriceRange from "./PriceRange";
import PriceRangeSlider from "./PriceRangeSlider";
import { searchProducts } from '../../utils/apiSlice';

const FilterComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(15000);
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [isFilterVisible, setIsFilterVisible] = useState(true);

    useEffect(() => {
        if (isFilterVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isFilterVisible]);

    const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const platform = e.target.value;
        setSelectedPlatform(platform);
        applyFilters(platform, selectedLanguage, minPrice, maxPrice);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        setSelectedLanguage(language);
        applyFilters(selectedPlatform, language, minPrice, maxPrice);
    };

    const applyFilters = (platform: string, language: string, min: number, max: number) => {
        dispatch(searchProducts({
            page: 1,
            limit: 24,
            service: platform ? 'PS' : 'PS',
            categories: 'All',
            minPrice: min,
            maxPrice: max,
            genres: 'All',
            russianLocalization: language === 'russian_voice' || language === 'russian_text'
        }));
    };

    const handlePriceRangeChange = () => {
        applyFilters(selectedPlatform, selectedLanguage, minPrice, maxPrice);
        setIsFilterVisible(false);
    };

    const handleResetFilters = () => {
        setSelectedPlatform("PS");
        setSelectedLanguage("All");
        setMinPrice(0);
        setMaxPrice(15000);
        dispatch(searchProducts({
            page: 1,
            limit: 24,
            service: 'PS',
            categories: 'All',
            minPrice: 0,
            maxPrice: 15000,
            genres: 'All',
            russianLocalization: false
        }));
        setIsFilterVisible(false);
    };

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsFilterVisible(false)}></div>
            <form className={styles.filterContainer}>
                <FilterSelect
                    label="Платформа"
                    options={["PS"]}
                    onChange={handlePlatformChange}
                />
                <FilterSelect
                    label="Локализация"
                    options={["all", "russian_text", "russian_voice"]}
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

                <button type="button" className={styles.applyButton} onClick={handlePriceRangeChange}>
                    Применить
                </button>
                <button type="reset" className={styles.resetButton} onClick={handleResetFilters}>
                    Сбросить
                </button>
            </form>
        </>
    );
};

export default FilterComponent;