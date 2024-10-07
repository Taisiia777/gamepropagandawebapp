
import React from "react";
import styles from "./ProductCard.module.css";

interface ProductDetail {
  label: string;
  value: string;
  link?: string;
}

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  currency: string;
  details: ProductDetail[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  currency,
  details,
}) => {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productPrice}>
          {price.toLocaleString()} <span>{currency}</span>
        </p>
        <hr className={styles.divider} />
        <div className={styles.productDetails}>
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span>{detail.label}: </span>
              {detail.link ? (
                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                  {detail.value}
                </a>
              ) : (
                <span>{detail.value}</span>
              )}
              <br />
            </React.Fragment>
          ))}
        </div>
        <button className={styles.addToCartButton}>Добавить в корзину</button>
      </div>
    </article>
  );
};

export default ProductCard;
