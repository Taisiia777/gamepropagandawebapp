
import React from "react";
import styles from "./HalloweenSale.module.css";
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

const HalloweenSale: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.saleCard}>
        <header className={styles.titleWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/befb59af7944a00e73f004db6b86ca6b739b9b44b89afaa91c67530b0de09725?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Halloween icon"
            className={styles.titleIcon}
          />
          <h2 className={styles.title}>Хеллоуин</h2>
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
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HalloweenSale;
