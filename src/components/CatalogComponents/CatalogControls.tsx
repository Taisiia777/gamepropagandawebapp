
// import React, { useState } from "react";
// import FilterButton from "./FilterButton";
// import SortButton from "./SortButton";
// import styles from "./CatalogControls.module.css";
// import FilterComponent from "../FilterComponent/FilterComponent.tsx";

// const CatalogControls: React.FC = () => {
//     const [isFilterVisible, setIsFilterVisible] = useState(false); // Состояние для показа/скрытия фильтра

//     // Функция для переключения видимости FilterComponent
//     const toggleFilterVisibility = () => {
//         setIsFilterVisible((prevState) => !prevState); // Меняем видимость фильтра на противоположную
//     };

//     return (
//         <div className={styles.controlsContainer}>
//             {/* При клике на FilterButton вызываем toggleFilterVisibility */}
//             <FilterButton onClick={toggleFilterVisibility} />
//             <SortButton />

//             {/* Отображаем FilterComponent, если isFilterVisible === true */}
//             {isFilterVisible && <FilterComponent />}
//         </div>
//     );
// };

// export default CatalogControls;
import { useState } from 'react';
import FilterButton from './FilterButton';
import SortButton from './SortButton';
import FilterComponent from '../FilterComponent/FilterComponent';
import { AnimatePresence } from 'framer-motion';
import styles from './CatalogControls.module.css';

const CatalogControls = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.controlsContainer}>
      <FilterButton onClick={toggleFilterVisibility} />
      <SortButton />
      <AnimatePresence>
        {isFilterVisible && (
          <FilterComponent 
            onClose={() => setIsFilterVisible(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default CatalogControls;
