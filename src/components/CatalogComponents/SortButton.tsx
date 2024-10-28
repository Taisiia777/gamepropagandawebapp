
import React, { useState } from "react";
import styles from "./SortButton.module.css";

const SortButton: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("по дате: Сначала новые");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        // Здесь можно добавить логику для изменения сортировки в зависимости от выбранного варианта
    };

    return (
        <div className={styles.sortContainer}>
            <select
                value={selectedOption}
                onChange={handleSortChange}
                className={styles.sortSelect}
            >
                <option value="по дате: Сначала новые">По дате: Сначала новые</option>
                <option value="по дате: Сначала старые">По дате: Сначала старые</option>
                <option value="по возрастанию цены">По возрастанию цены</option>
                <option value="по убыванию цены">По убыванию цены</option>
                <option value="по популярности">По популярности</option>
                <option value="по алфавиту: A-Z">По Алфавиту: A-Z</option>
                <option value="по алфавиту: Z-A">По Алфавиту: Z-A</option>
            </select>
        </div>
    );
};

export default SortButton;
