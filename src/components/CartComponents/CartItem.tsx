
import React, { useState } from "react";
import styles from "./Cart.module.css";

interface CartItemProps {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
                                             id,
                                             title,
                                             subtitle,
                                             price,
                                             imageUrl,
                                             onRemove,
                                           }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(id); // Передаем id для удаления только одного элемента
    }, 300); // Время анимации должно совпадать с CSS
  };

  return (
      <div className={`${styles.cartItemRemoving} ${isRemoving ? styles.removing : ""}`}>
        <header className={styles.cartHeader}>
          <div className={styles.cartInfo}>
            {/*<h1 className={styles.cartTitle}>Корзина</h1>*/}
            <img src={imageUrl} alt="" className={styles.cartImage} />
            <p className={styles.cartPrice}>
              <span className={styles.cartPriceHighlight}>{price}</span>{" "}
              {price > 0 && <span className={styles.cartPriceCurrency}>Р</span>}
            </p>
          </div>
          <div className={styles.cartTotal}>
            {/*<p>{price}</p>*/}
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2c21a9dede5c05cb9ba8b2862cb0f45aee9434b5728f16a89d97358e319fb06?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Remove"
                className={styles.removeIcon}
                onClick={handleRemove}
            />
          </div>
        </header>
        <h2 className={styles.cartItemTitle}>{title}</h2>
        <p className={styles.cartItemSubtitle}>{subtitle}</p>
      </div>
  );
};

export default CartItem;
