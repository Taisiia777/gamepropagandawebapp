
// import React, { useState } from "react";
// import { useAppDispatch } from "../../hooks/hooks"; // Используем типизированный хук
// import { fetchSortedProducts } from "../../utils/productsSlice"; // Импортируем асинхронное действие
// import styles from "./SortButton.module.css";

// const SortButton: React.FC = () => {
//     const [selectedOption, setSelectedOption] = useState("сначала новые");
//     const dispatch = useAppDispatch(); // Используем типизированный dispatch

//     const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedSort = e.target.value;
//         setSelectedOption(selectedSort);

//         // Определяем параметры `sortBy` и `order` для запроса на сервер
//         let sortBy, order;
//         switch (selectedSort) {
//             case "по популярности":
//                 sortBy = "average_rating";
//                 order = "desc";
//                 break;
//             case "сначала новые":
//                 sortBy = "release_date";
//                 order = "desc";
//                 break;
//             case "сначала старые":
//                 sortBy = "release_date";
//                 order = "asc";
//                 break;
//             case "по возрастанию цены":
//                 sortBy = "base_price";
//                 order = "asc";
//                 break;
//             case "по убыванию цены":
//                 sortBy = "base_price";
//                 order = "desc";
//                 break;
//             case "по алфавиту: A-Z":
//                 sortBy = "name";
//                 order = "asc";
//                 break;
//             case "по алфавиту: Z-A":
//                 sortBy = "name";
//                 order = "desc";
//                 break;
//             default:
//                 sortBy = "release_date";
//                 order = "desc";
//         }

//         // Отправляем запрос на сервер с выбранной сортировкой
//         dispatch(fetchSortedProducts({ page: 1, sortBy, order }));
//     };

//     return (
//         <div className={styles.sortContainer}>
//             <select
//                 value={selectedOption}
//                 onChange={handleSortChange}
//                 className={styles.sortSelect}
//             >
//                 <option value="сначала новые">сначала новые</option>
//                 <option value="сначала старые">сначала старые</option>
//                 <option value="по возрастанию цены">по возрастанию цены</option>
//                 <option value="по убыванию цены">по убыванию цены</option>
//                 <option value="по популярности">по популярности</option>
//                 <option value="по алфавиту: A-Z">по Алфавиту: A-Z</option>
//                 <option value="по алфавиту: Z-A">по Алфавиту: Z-A</option>
//             </select>
//         </div>
//     );
// };

// export default SortButton;
// SortButton.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { searchProducts } from '../../utils/apiSlice';
import styles from "./SortButton.module.css";

const SortButton: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("date_desc");
    const dispatch = useAppDispatch();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);

        dispatch(searchProducts({
            page: 1,
            limit: 24,
            service: 'PS',
            categories: 'All',
            minPrice: 0,
            maxPrice: 15000,
            genres: 'All',
            russianLocalization: false,
            sortBy: value
        }));
    };

    return (
        <div className={styles.sortContainer}>
            <select
                value={selectedOption}
                onChange={handleSortChange}
                className={styles.sortSelect}
            >
                <option value="date_desc">По дате: Сначала новые</option>
                <option value="date_asc">По дате: Сначала старые</option>
                <option value="price_asc">По возрастанию цены</option>
                <option value="price_desc">По убыванию цены</option>
                <option value="popularity">По популярности</option>
                <option value="name_asc">По Алфавиту: A-Z</option>
                <option value="name_desc">По Алфавиту: Z-A</option>
            </select>
        </div>
    );
};

export default SortButton;