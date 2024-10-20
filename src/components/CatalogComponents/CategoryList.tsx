import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import styles from "./CategoryList.module.css";

interface CategoryListProps {
  onCategoryClick: (category: string) => void;
}

interface Category {
  label: string;
  value: string;
}

const categories: Category[] = [
  { label: "Весь каталог", value: "" },
  { label: "Со скидкой", value: "Discounted" },
  { label: "Новинки", value: "New" },
  { label: "Предзаказ", value: "Preorder" },
];

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (categoryValue: string) => {
    setActiveCategory(categoryValue);
    onCategoryClick(categoryValue);
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
