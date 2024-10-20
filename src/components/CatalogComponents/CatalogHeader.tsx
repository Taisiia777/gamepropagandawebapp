
import React from "react";
import styles from "./CatalogHeader.module.css";

interface CatalogHeaderProps {
  totalGames: number;
}

const CatalogHeader: React.FC<CatalogHeaderProps> = ({ totalGames }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Каталог игр</h1>
      <p className={styles.gameCount}>{totalGames} игры</p>
    </header>
  );
};

export default CatalogHeader;
