
import React from "react";
import styles from "./SortButton.module.css";

const SortButton: React.FC = () => {
  return (
    <button className={styles.sortButton}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f98e7829e5353ac01aa55864541978bfeb8409618543d42a6b39f7635160364?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className={styles.sortIcon}
      />
      <span>по популярности</span>
    </button>
  );
};

export default SortButton;
