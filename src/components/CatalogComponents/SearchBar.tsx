//
// import React from "react";
// import styles from "./SearchBar.module.css";
//
// const SearchBar: React.FC = () => {
//   return (
//     <form className={styles.searchForm}>
//       <label htmlFor="gameSearch" className={styles.visuallyHidden}>
//         Поиск игры
//       </label>
//       <input
//         type="search"
//         id="gameSearch"
//         className={styles.searchInput}
//         placeholder="введите название игры"
//         aria-label="Поиск игры"
//       />
//       <button type="submit" className={styles.searchButton}>
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef220cb64ce242388caf7b8739abf787c8cd07f9a8edce931c83cbcafa97f3e8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//           alt=""
//           className={styles.searchIcon}
//         />
//         <span className={styles.visuallyHidden}>Поиск</span>
//       </button>
//     </form>
//   );
// };
//
// export default SearchBar;
import React, { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);  // Передаем введенный текст обратно в GameCardList
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <label htmlFor="gameSearch" className={styles.visuallyHidden}>
                Поиск игры
            </label>
            <input
                type="search"
                id="gameSearch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                placeholder="введите название игры"
                aria-label="Поиск игры"
            />
            <button type="submit" className={styles.searchButton}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef220cb64ce242388caf7b8739abf787c8cd07f9a8edce931c83cbcafa97f3e8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                    alt=""
                    className={styles.searchIcon}
                />
                <span className={styles.visuallyHidden}>Поиск</span>
            </button>
        </form>
    );
};

export default SearchBar;
