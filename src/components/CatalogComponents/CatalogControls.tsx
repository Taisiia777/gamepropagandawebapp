//
// import React from "react";
// import FilterButton from "./FilterButton";
// import SortButton from "./SortButton";
// import styles from "./CatalogControls.module.css";
// import FilterComponent from "../FilterComponent/FilterComponent.tsx";
// const CatalogControls: React.FC = () => {
//   return (
//     <div className={styles.controlsContainer}>
//       <FilterButton />
//       <SortButton />
//     </div>
//   );
// };
//
// export default CatalogControls;
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";
import styles from "./CatalogControls.module.css";
import FilterComponent from "../FilterComponent/FilterComponent.tsx";

const CatalogControls: React.FC = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false); // Состояние для показа/скрытия фильтра

    // Функция для переключения видимости FilterComponent
    const toggleFilterVisibility = () => {
        setIsFilterVisible((prevState) => !prevState); // Меняем видимость фильтра на противоположную
    };

    return (
        <div className={styles.controlsContainer}>
            {/* При клике на FilterButton вызываем toggleFilterVisibility */}
            <FilterButton onClick={toggleFilterVisibility} />
            <SortButton />

            {/* Отображаем FilterComponent, если isFilterVisible === true */}
            {isFilterVisible && <FilterComponent />}
        </div>
    );
};

export default CatalogControls;
