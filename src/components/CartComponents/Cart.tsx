
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
    imageUrl: string;
  }>;
  recommendations: Array<{
    id: string;
    title: string;
    price: number;
    imageUrl: string;
  }>;
}

const Cart: React.FC<CartProps> = ({ cartItems, recommendations }) => {
  return (
    <main className={styles.cartContainer}>
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
