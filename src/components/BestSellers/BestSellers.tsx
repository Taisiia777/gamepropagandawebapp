
import React from "react";
import styles from "./BestSellers.module.css";
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';

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
    "img/anime.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "",
  },
];

const BestSellers: React.FC = () => {
  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Лидеры продаж</h2>
        <div className={styles.productList}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <Link to="/catalog">
      <button className={styles.catalogButton}>Смотреть весь каталог</button>
    </Link>
        {/* <button className={styles.catalogButton}>Смотреть весь каталог</button> */}
      </div>
    </section>
  );
};

export default BestSellers;
