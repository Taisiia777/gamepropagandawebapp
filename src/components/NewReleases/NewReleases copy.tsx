
import React from "react";
import styles from "./NewReleases.module.css";
import GameCard from "./GameCard/GameCard";

const gameData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f0c23ee1ca87c4834115b26490207fe63b93de98524ec64b69195561c0af26d2?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    name: "Mortal Kombat 11 Ultimate PS4 & PS5",
    oldPrice: "2 190 ₽",
    newPrice: "590 ₽",
  },
  {
    imageSrc:
      "img/mk11.png",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4e565984422ea0793a64e46ec245c1d9452c582c946734692de7c6461e04084d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    name: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "",
  },
];

const NewReleases: React.FC = () => {
  return (
    <section className={styles.newReleases}>
      <div className={styles.card}>
        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c23ee1ca87c4834115b26490207fe63b93de98524ec64b69195561c0af26d2?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt=""
            className={styles.icon}
          />
          <h2 className={styles.title}>Новинки</h2>
        </header>
        <div className={styles.gameList}>
          {gameData.map((game, index) => (
            <GameCard
              key={index}
              imageSrc={game.imageSrc}
              name={game.name}
              oldPrice={game.oldPrice}
              newPrice={game.newPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
