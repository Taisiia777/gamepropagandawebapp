
import React from "react";
import styles from "./CategoryButton.module.css";

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
                                                         label,
                                                         isActive = false,
                                                         onClick,
                                                       }) => {
  return (
      <button
          className={`${styles.categoryButton} ${isActive ? styles.active : ""}`}
          onClick={onClick}
      >
        {label}
      </button>
  );
};

export default CategoryButton;
