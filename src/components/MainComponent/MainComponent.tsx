
import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import styles from "./MainComponent.module.css";

const MainComponent: React.FC = () => {
  return (
    <main className={styles.container}>
      <HeaderComponent />
      <div className={styles.divider} role="separator" aria-hidden="true" />
    </main>
  );
};

export default MainComponent;
