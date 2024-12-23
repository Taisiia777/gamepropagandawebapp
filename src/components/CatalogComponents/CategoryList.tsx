
// import React, { useState, useEffect } from "react";
// import CategoryButton from "./CategoryButton";
// import styles from "./CategoryList.module.css";

// interface CategoryListProps {
//   onCategoryClick: (category: string) => void;
// }

// interface Category {
//   label: string;
//   value: string;
// }

// const categories: Category[] = [
//   { label: "Весь каталог", value: "" },
//   { label: "Со скидкой", value: "Discounted" },
//   { label: "Новинки", value: "New" },
//   { label: "Предзаказ", value: "Preorder" },
//   { label: "Подписки", value: "Subscription" },
//   { label: "Игровая валюта", value: "Currency" },
// ];

// const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
//   const [activeCategory, setActiveCategory] = useState<string>("");

//   useEffect(() => {
//     // Загрузка значения из localStorage при монтировании компонента
//     const savedCategory = localStorage.getItem("isSubscriptionCategory") === "true" ? "Subscription" : "";
//     setActiveCategory(savedCategory);
//   }, []);

//   const handleCategoryClick = (categoryValue: string) => {
//     setActiveCategory(categoryValue);
//     onCategoryClick(categoryValue);

//     // Сохранение значения в локальное хранилище
//     if (categoryValue === "Subscription") {
//       localStorage.setItem("isSubscriptionCategory", "true");
//     } else {
//       localStorage.setItem("isSubscriptionCategory", "false");
//     }
//   };

//   return (
//     <nav className={styles.categoryNav}>
//       {categories.map((category, index) => (
//         <CategoryButton
//           key={index}
//           label={category.label}
//           isActive={category.value === activeCategory}
//           onClick={() => handleCategoryClick(category.value)}
//         />
//       ))}
//     </nav>
//   );
// };

// export default CategoryList;
import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import styles from "./CategoryList.module.css";
import { useAppDispatch } from '../../hooks/hooks';
import { searchProducts } from '../../utils/apiSlice';

interface CategoryListProps {
    onCategoryClick: (category: string) => void;
}

const categories = [
    { label: "Весь каталог", value: "All" },
    { label: "Со скидкой", value: "Discounted" },
    { label: "Новинки", value: "New" },
    { label: "Предзаказ", value: "Preorder" },
];

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const dispatch = useAppDispatch();

    const handleCategoryClick = (categoryValue: string) => {
        setActiveCategory(categoryValue);
        onCategoryClick(categoryValue);
        
        dispatch(searchProducts({
            page: 1,
            limit: 24,
            service: 'PS',
            categories: categoryValue,
            minPrice: 0,
            maxPrice: 15000,
            genres: 'All',
            russianLocalization: false
        }));
    };

    return (
        <nav className={styles.categoryNav}>
            {categories.map((category, index) => (
                <CategoryButton
                    key={index}
                    label={category.label}
                    isActive={category.value === activeCategory}
                    onClick={() => handleCategoryClick(category.value)}
                />
            ))}
        </nav>
    );
};

export default CategoryList;