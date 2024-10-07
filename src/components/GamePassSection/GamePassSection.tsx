
import React from "react";
import styles from "./GamePassSection.module.css";
import ImageWrapper from "./ImageWrapper";

interface GamePassSectionProps {}

const GamePassSection: React.FC<GamePassSectionProps> = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f39f39729dbc208fc4ae25ae22250443a11410c0b0023549a5ee3d3314d5946?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass promotional image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f67f2980b92b84a19b8518eef1a713261b4845316f8cd42c2a0773b8cc0a42e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass main promotional image",
      isMain: true,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ed187343273d4fedf39830075c7843221352cabb68b336256147169f61a16fd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass promotional image 3",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <ImageWrapper
              key={index}
              src={image.src}
              alt={image.alt}
              isMain={image.isMain}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePassSection;
