
// import React from "react";
// import styles from "./FilterButton.module.css";

// interface FilterButtonProps {
//     onClick: () => void; // Пропс для функции клика
// }

// const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
//     return (
//         <button className={styles.filterButton} onClick={onClick}>
//             <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed33f41a76997734055a98e4ace5a4140e7b0badac813871a9be8b8fd20354ef?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//                 alt="Filter Icon"
//                 className={styles.filterIcon}
//             />
//             <span>фильтры</span>
//         </button>
//     );
// };

// export default FilterButton;
import React, { useEffect, useState } from "react";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
    const [isFilterActive, setIsFilterActive] = useState(() => {
        return JSON.parse(localStorage.getItem('filtersApplied') || 'false');
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const filtersApplied = JSON.parse(localStorage.getItem('filtersApplied') || 'false');
            setIsFilterActive(filtersApplied);
        };

        // Отслеживание события
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <button
            className={`${styles.filterButton} ${isFilterActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed33f41a76997734055a98e4ace5a4140e7b0badac813871a9be8b8fd20354ef?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Filter Icon"
                className={styles.filterIcon}
            />
            <span>фильтры</span>
        </button>
    );
};

export default FilterButton;
