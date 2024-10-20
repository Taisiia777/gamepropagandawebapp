
import React from "react";
import styles from "./GameCard.module.css";

interface GameCardProps {
  title: string;
  oldPrice: string;
  newPrice: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, oldPrice, newPrice }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper} />
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceWrapper}>
          <span className={styles.oldPrice}>{oldPrice}</span>
          <span className={styles.newPrice}>{newPrice}</span>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
