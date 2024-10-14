
import React from "react";
import styles from "./BestSellers.module.css";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  oldPrice: string | null;
  newPrice: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   imageSrc,
                                                   name,
                                                   oldPrice,
                                                   newPrice,
                                                 }) => {
  return (
      <article className={styles.productCard}>
        <img src={imageSrc} alt={name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.priceContainer}>

              {(!newPrice || newPrice === "") && (!oldPrice || oldPrice === "") ? (
                  <span className={styles.newPrice}>Бесплатно</span>
              ) : (
                  <>
                      {/*{oldPrice && <span className={styles.oldPrice}>{oldPrice} ₽</span>}*/}
                      {/*{newPrice && <span className={styles.newPrice}>{newPrice} ₽</span>}*/}
                      {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
                      {newPrice && <span className={styles.newPrice}>{newPrice}</span>}
                  </>
              )}
          </div>
        </div>
      </article>
  );
};

export default ProductCard;
