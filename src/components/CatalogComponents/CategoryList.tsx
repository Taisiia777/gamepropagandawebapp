//
// import React from "react";
// import CategoryButton from "./CategoryButton";
// import styles from "./CategoryList.module.css";
//
// const categories = [
//   { label: "Весь каталог", isActive: true },
//   { label: "Со скидкой", isActive: false },
//   { label: "Новинки", isActive: false },
// ];
//
// const CategoryList: React.FC = () => {
//   return (
//     <nav className={styles.categoryNav}>
//       {categories.map((category, index) => (
//         <CategoryButton key={index} {...category} />
//       ))}
//     </nav>
//   );
// };
//
// export default CategoryList;
import React from "react";
import CategoryButton from "./CategoryButton";
import styles from "./CategoryList.module.css";

interface CategoryListProps {
  onCategoryClick: (category: string) => void;
}

const categories = [
  { label: "Весь каталог", value: "", isActive: true },
  { label: "Со скидкой", value: "discount", isActive: false},
  { label: "Новинки", value: "new", isActive: false },
];

const CategoryList: React.FC<CategoryListProps> = ({ onCategoryClick }) => {
  return (
      <nav className={styles.categoryNav}>
        {categories.map((category, index) => (
            <CategoryButton
                key={index}
                label={category.label}
                isActive={category.isActive}
                onClick={() => onCategoryClick(category.value)}
            />
        ))}
      </nav>
  );
};

export default CategoryList;
