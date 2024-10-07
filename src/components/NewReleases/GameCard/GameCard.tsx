
import React from "react";
import styles from "./GameCard.module.css";

interface GameCardProps {
  imageSrc: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  name,
  oldPrice,
  newPrice,
}) => {
  return (
    <article className={styles.gameCard}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={name} className={styles.gameImage} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.gameName}>{name}</h3>
        <div className={styles.priceInfo}>
          <span className={styles.oldPrice}>{oldPrice}</span>
          <span className={styles.newPrice}>{newPrice}</span>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
