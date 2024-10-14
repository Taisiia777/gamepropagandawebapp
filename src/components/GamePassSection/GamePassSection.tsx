
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./GamePassSection.module.css";
import ImageWrapper from "./ImageWrapper";

interface GamePassSectionProps {}

const GamePassSection: React.FC<GamePassSectionProps> = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f67f2980b92b84a19b8518eef1a713261b4845316f8cd42c2a0773b8cc0a42e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass promotional image 1",
      isMain: true,


    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f67f2980b92b84a19b8518eef1a713261b4845316f8cd42c2a0773b8cc0a42e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass main promotional image",
      isMain: true,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f67f2980b92b84a19b8518eef1a713261b4845316f8cd42c2a0773b8cc0a42e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass promotional image 3",
      isMain: true,

    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f67f2980b92b84a19b8518eef1a713261b4845316f8cd42c2a0773b8cc0a42e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      alt: "Game Pass promotional image 3",
      isMain: true,

    },
  ];

  return (
      <section className={styles.container}>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className={styles.swiperContainer}
        >
          {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <ImageWrapper
                    src={image.src}
                    alt={image.alt}
                    isMain={image.isMain}
                />
              </SwiperSlide>
          ))}
        </Swiper>
      </section>
  );
};

export default GamePassSection;
