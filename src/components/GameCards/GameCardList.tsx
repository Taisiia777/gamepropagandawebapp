/**
 * This code was generated by Builder.io.
 */
import React from "react";
import GameCard from "./GameCard";
import styles from "./GameCardList.module.css";

const gameData = [
  {
    
    title: "Mortal Kombat 11 Ultimate PS4 & PS5",
    oldPrice: "2 190 ₽",
    newPrice: "590 ₽",
  },
  {
    title: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
  {
    title: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
  {
    title: "Doki Doki Literature Club Plus!...",
    oldPrice: "1 690 ₽",
    newPrice: "1 290 ₽",
  },
];

const GameCardList: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {gameData.slice(0, 2).map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
      <div className={styles.row}>
        {gameData.slice(2, 4).map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GameCardList;
