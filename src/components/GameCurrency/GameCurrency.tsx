
import React from "react";
import styles from "./GameCurrency.module.css";
import GameCard from "./GameCard";

const products = [
  {
    imageSrc:
      "img/coins1.png",
    name: "Mortal Kombat 11 Ultimate PS4 & PS5",
    oldPrice: "2 190 ₽",
    newPrice: "590 ₽",
  },
  {
    imageSrc:
      "img/coins2.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
  {
    imageSrc:
      "img/coins2.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "",
  },
];

const GameCurrency: React.FC = () => {
  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Игровая валюта</h2>
        <div className={styles.productList}>
          {products.map((product, index) => (
            <GameCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCurrency;
