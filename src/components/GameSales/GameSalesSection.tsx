
import React from "react";
import styles from "./BestSellers.module.css";
import ProductCard from "./ProductCard";

const products = [
  {
    imageSrc:
      "img/mk11.png",
    name: "Mortal Kombat 11 Ultimate PS4 & PS5",
    oldPrice: "2 190 ₽",
    newPrice: "590 ₽",
  },
  {
    imageSrc:
      "img/anime.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
  {
    imageSrc:
      "img/mk11.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "",
  },
];
const GameSalesSection: React.FC = () => {
  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Игры по акции</h2>
        <div className={styles.productList}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <button className={styles.catalogButton}>Смотреть все акции</button>
      </div>
    </section>
  );
};

export default GameSalesSection;
