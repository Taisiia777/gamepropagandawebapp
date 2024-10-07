
import React from "react";
import styles from "./Cart.module.css";

interface CartItemProps {
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  subtitle,
  price,
  image,
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <img src={image} alt={title} className={styles.cartItemImage} />
        <p className={styles.cartItemPrice}>
          <span className={styles.cartPriceHighlight}>{price}</span>{" "}
          <span className={styles.cartPriceCurrency}>₽</span>
        </p>
        <h3 className={styles.cartItemTitle}>{title}</h3>
        <p className={styles.cartItemSubtitle}>{subtitle}</p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7941791aa04f07643e4db4fb2276535568c6c653d0c23a94c1ddfc924bf1097?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt="Remove"
        className={styles.removeIcon}
      />
    </div>
  );
};

export default CartItem;
