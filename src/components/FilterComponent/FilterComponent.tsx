
// import React, { useState, useEffect } from "react";
// import { useAppDispatch } from "../../hooks/hooks";
// import styles from "./FilterComponent.module.css";
// import FilterSelect from "./FilterSelect";
// import PriceRange from "./PriceRange";
// import PriceRangeSlider from "./PriceRangeSlider";
// import { searchProducts } from '../../utils/apiSlice';

// const FilterComponent: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const [minPrice, setMinPrice] = useState(0);
//     const [maxPrice, setMaxPrice] = useState(15000);
//     const [selectedPlatform, setSelectedPlatform] = useState("All");
//     const [selectedLanguage, setSelectedLanguage] = useState("All");
//     const [isFilterVisible, setIsFilterVisible] = useState(true);

//     useEffect(() => {
//         if (isFilterVisible) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }

//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isFilterVisible]);

//     const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const platform = e.target.value;
//         setSelectedPlatform(platform);
//         applyFilters(platform, selectedLanguage, minPrice, maxPrice);
//     };

//     const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const language = e.target.value;
//         setSelectedLanguage(language);
//         applyFilters(selectedPlatform, language, minPrice, maxPrice);
//     };

//     const applyFilters = (platform: string, language: string, min: number, max: number) => {
//         dispatch(searchProducts({
//             page: 1,
//             limit: 24,
//             service: platform ? 'PS' : 'PS',
//             categories: 'All',
//             minPrice: min,
//             maxPrice: max,
//             genres: 'All',
//             russianLocalization: language === 'russian_voice' || language === 'russian_text'
//         }));
//     };

//     const handlePriceRangeChange = () => {
//         applyFilters(selectedPlatform, selectedLanguage, minPrice, maxPrice);
//         setIsFilterVisible(false);
//     };

//     const handleResetFilters = () => {
//         setSelectedPlatform("PS");
//         setSelectedLanguage("All");
//         setMinPrice(0);
//         setMaxPrice(15000);
//         dispatch(searchProducts({
//             page: 1,
//             limit: 24,
//             service: 'PS',
//             categories: 'All',
//             minPrice: 0,
//             maxPrice: 15000,
//             genres: 'All',
//             russianLocalization: false
//         }));
//         setIsFilterVisible(false);
//     };

//     return (
//         <>
//             <div className={styles.overlay} onClick={() => setIsFilterVisible(false)}></div>
//             <form className={styles.filterContainer}>
//                 <FilterSelect
//                     label="Платформа"
//                     options={["PS"]}
//                     onChange={handlePlatformChange}
//                 />
//                 <FilterSelect
//                     label="Локализация"
//                     options={["all", "russian_text", "russian_voice"]}
//                     onChange={handleLanguageChange}
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

//                 <button type="button" className={styles.applyButton} onClick={handlePriceRangeChange}>
//                     Применить
//                 </button>
//                 <button type="reset" className={styles.resetButton} onClick={handleResetFilters}>
//                     Сбросить
//                 </button>
//             </form>
//         </>
//     );
// };

// export default FilterComponent;
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { motion } from 'framer-motion';
import { searchProducts } from '../../utils/apiSlice';
import FilterSelect from './FilterSelect';
import PriceRange from './PriceRange';
import PriceRangeSlider from './PriceRangeSlider';
import styles from './FilterComponent.module.css';

interface FilterComponentProps {
  onClose: () => void;
}

type PlatformType = 'PS' | 'All';
type LanguageType = 'all' | 'russian_text' | 'russian_voice';

const FilterComponent: React.FC<FilterComponentProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('PS');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('all');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as PlatformType;
    setSelectedPlatform(value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as LanguageType;
    setSelectedLanguage(value);
  };

  const applyFilters = () => {
    dispatch(searchProducts({
      page: 1,
      limit: 24,
      service: selectedPlatform,
      categories: 'All',
      minPrice,
      maxPrice,
      genres: 'All',
      russianLocalization: selectedLanguage === 'russian_voice' || selectedLanguage === 'russian_text'
    }));
    onClose();
  };

  const handleReset = () => {
    setSelectedPlatform('PS');
    setSelectedLanguage('all');
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
    onClose();
  };

  return (
    <>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.form
        className={styles.filterContainer}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <FilterSelect
          label="Платформа"
          options={['PS']}
          value={selectedPlatform}
          onChange={handlePlatformChange}
        />
        <FilterSelect
          label="Локализация"
          options={['all', 'russian_text', 'russian_voice']}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        />
        <label className={styles.filterLabel}>
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
        />
        <button
          type="button"
          className={styles.applyButton}
          onClick={applyFilters}
        >
          Применить
        </button>
        <button
          type="button"
          className={styles.resetButton}
          onClick={handleReset}
        >
          Сбросить
        </button>
      </motion.form>
    </>
  );
};

export default FilterComponent;