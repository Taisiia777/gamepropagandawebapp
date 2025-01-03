
// import React from "react";
// import CatalogHeader from "./CatalogHeader";
// // import SearchBar from "./SearchBar";
// // import CategoryList from "./CategoryList";
// import CatalogControls from "./CatalogControls";
// import styles from "./GameCatalog.module.css";

// const GameCatalog: React.FC = () => {
//   return (
//     <main className={styles.catalogContainer}>
//       <CatalogHeader totalGames={2341} />
//       {/*<SearchBar />*/}
//       {/*<CategoryList />*/}
//       <div className={styles.separator} />
//       <CatalogControls />
//     </main>
//   );
// };

// export default GameCatalog;
import CatalogHeader from './CatalogHeader';
import CatalogControls from './CatalogControls';
import styles from './GameCatalog.module.css';

const GameCatalog = () => {
  return (
    <main className={styles.catalogContainer}>
      <CatalogHeader totalGames={2341} />
      <div className={styles.separator} />
      <CatalogControls />
    </main>
  );
};
export default GameCatalog;
