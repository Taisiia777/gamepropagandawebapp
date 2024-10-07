
import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import styles from "./HeaderComponent.module.css";
import { Link } from 'react-router-dom';

const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a87b4a0643c77122840625ae1ab5878767d34045d3b3595ebb1aa6f1bfe1e39?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Logo icon"
          size="small"
        />
            <Link to="/">

        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc5d4dd34a0efc7e727bc0f711af73eaa0c5422ab12cad64899dd4ba2db786b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Company name"
          size="large"
        />
            </Link>

      </div>
      <div className={styles.actionContainer}>
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c7c8046a64f55a9a58df4d8198fb23627937744d63f32cbadf9d4b2308b99b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Action icon 1"
          size="medium"
        />
                    <Link style={{marginTop: "10px"}} to="/cart">

        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c47a50b52cf899bb3a03f76311f482348d60b266c40a6f68116e869e5b20c4f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Action icon 2"
          size="medium"
        />
            </Link>

      </div>
    </header>
  );
};

export default HeaderComponent;
