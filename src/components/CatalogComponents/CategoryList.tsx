/**
 * This code was generated by Builder.io.
 */
import React from "react";
import CategoryButton from "./CategoryButton";
import styles from "./CategoryList.module.css";

const categories = [
  { label: "Весь каталог", isActive: true },
  { label: "Со скидкой", isActive: false },
  { label: "Новинки", isActive: false },
  { label: "Новинки", isActive: false },
];

const CategoryList: React.FC = () => {
  return (
    <nav className={styles.categoryNav}>
      {categories.map((category, index) => (
        <CategoryButton key={index} {...category} />
      ))}
    </nav>
  );
};

export default CategoryList;
