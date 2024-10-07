
import React from "react";
import styles from "./PreOrders.module.css";
import PreOrderCard from "./PreOrderCard";

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

const PreOrders: React.FC = () => {
  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Предзаказы</h2>
        <div className={styles.productList}>
          {products.map((product, index) => (
            <PreOrderCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreOrders;
