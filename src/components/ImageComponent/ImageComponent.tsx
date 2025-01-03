//
// import React from "react";
// import styles from "./ImageComponent.module.css";
//
// interface ImageComponentProps {
//   src: string;
//   alt: string;
//   size: "small" | "medium" | "large";
//   id?: string
// }
//
// const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, size, id }) => {
//   const sizeClass = {
//     small: styles.smallImage,
//     medium: styles.mediumImage,
//     large: styles.largeImage,
//   }[size];
//
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className={`${styles.image} ${sizeClass}`}
//       loading="lazy"
//       {...(id ? { id } : {})} // Условно добавляем id только если оно задано
//     />
//   );
// };
//
// export default ImageComponent;
import React from "react";
import styles from "./ImageComponent.module.css";

interface ImageComponentProps {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
  id?: string;
  onClick?: () => void; // Опциональная функция для обработки клика
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, size, id, onClick }) => {
  const sizeClass = {
    small: styles.smallImage,
    medium: styles.mediumImage,
    large: styles.largeImage,
  }[size];

  return (
      <img
          src={src}
          alt={alt}
          className={`${styles.image} ${sizeClass}`}
          loading="lazy"
          {...(id ? { id } : {})} // Условно добавляем id только если оно задано
          onClick={onClick} // Добавляем обработчик клика
      />
  );
};

export default ImageComponent;
