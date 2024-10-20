//
// import React from "react";
// import styles from "./FilterButton.module.css";
//
// const FilterButton: React.FC = () => {
//   return (
//     <button className={styles.filterButton} >
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed33f41a76997734055a98e4ace5a4140e7b0badac813871a9be8b8fd20354ef?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//         alt=""
//         className={styles.filterIcon}
//       />
//       <span>фильтры</span>
//     </button>
//   );
// };
//
// export default FilterButton;
import React from "react";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
    onClick: () => void; // Пропс для функции клика
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.filterButton} onClick={onClick}>
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
