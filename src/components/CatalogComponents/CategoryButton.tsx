/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./CategoryButton.module.css";

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  isActive = false,
}) => {
  return (
    <button
      className={`${styles.categoryButton} ${isActive ? styles.active : ""}`}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
