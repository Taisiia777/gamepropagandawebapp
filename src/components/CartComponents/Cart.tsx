
import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import RecommendationItem from "./RecommendationItem";

interface CartProps {
  cartItems: Array<{
    id: string;
    title: string;
    subtitle: string;
    price: number;
    image: string;
  }>;
  recommendations: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
  }>;
}

const Cart: React.FC<CartProps> = ({ cartItems, recommendations }) => {
  return (
    <main className={styles.cartContainer}>
      <header className={styles.cartHeader}>
        <div className={styles.cartInfo}>
          <h1 className={styles.cartTitle}>Корзина</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e860ae8a5f047e9ef2ce92799a48728f7484de3ba38eae97367cbbea988bdbb1?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt=""
            className={styles.cartImage}
          />
          <p className={styles.cartPrice}>
            <span className={styles.cartPriceHighlight}>6 435</span>{" "}
            <span className={styles.cartPriceCurrency}>₽</span>
          </p>
        </div>
        <div className={styles.cartTotal}>
          <p>7430 ₽</p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2c21a9dede5c05cb9ba8b2862cb0f45aee9434b5728f16a89d97358e319fb06?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Remove"
            className={styles.removeIcon}
          />
        </div>
      </header>
      <h2 className={styles.cartItemTitle}>ELDEN RING Shadow of the Erdtree</h2>
      <p className={styles.cartItemSubtitle}>Дополнение | PS4 PS5</p>
      <div className={styles.divider} />
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className={styles.divider} />
      <h2 className={styles.recommendationsTitle}>Эксклюзивно для тебя</h2>
      <section className={styles.recommendationsList}>
        {recommendations.map((item) => (
          <RecommendationItem key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
