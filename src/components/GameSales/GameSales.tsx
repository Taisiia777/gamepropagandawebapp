
import React from "react";
import styles from "./GameSales.module.css";
import GameCard from "./GameCard";

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

const GameSales: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.saleCard}>
        <header className={styles.titleWrapper}>
       
          <h2 className={styles.title}>До 500 рублей</h2>
        </header>
        {/* <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div> */}
                <div className={styles.productList}>
          {products.map((product, index) => (
            <GameCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSales;
