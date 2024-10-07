
import React from "react";
import styles from "./GamePassSection.module.css";

interface ImageWrapperProps {
  src: string;
  alt: string;
  isMain?: boolean;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  isMain = false,
}) => {
  if (isMain) {
    return (
      <div className={styles.mainImageWrapper}>
        <img loading="lazy" src={src} alt={alt} className={styles.mainImage} />
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.smallImageContainer}>
        <img loading="lazy" src={src} alt={alt} className={styles.smallImage} />
        <div className={styles.imageOverlay} />
      </div>
    </div>
  );
};

export default ImageWrapper;
