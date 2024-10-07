
import React from "react";
import styles from "./ImageComponent.module.css";

interface ImageComponentProps {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, size }) => {
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
    />
  );
};

export default ImageComponent;
