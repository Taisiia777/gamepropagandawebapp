
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import GameCard from "./GameCard";
// import styles from "./GameCurrency.module.css";

// const products = [
//   {
//     imageSrc: "img/coins1.png",
//     name: "Mortal Kombat 11 Ultimate PS4 & PS5",
//     oldPrice: "2 190 ₽",
//     newPrice: "590 ₽",
//   },
//   {
//     imageSrc: "img/coins2.png",
//     name: "Doki Doki Literature Club Plus!...",
//     oldPrice: "1 690 ₽",
//     newPrice: "1 290 ₽",
//   },
//   {
//     imageSrc: "img/coins2.png",
//     name: "Doki Doki Literature Club Plus!...",
//     oldPrice: "1 690 ₽",
//     newPrice: "",
//   },
// ];

// const GameCurrency: React.FC = () => {
//   return (
//       <section className={styles.bestSellers}>
//         <div className={styles.container}>
//           <h2 className={styles.title}>Игровая валюта</h2>
//           <Swiper
//               modules={[Autoplay]}
//               spaceBetween={10}
//               slidesPerView="auto"
//               centeredSlides={false}
//               loop={true}
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               className={styles.swiperContainer}
//           >
//             {products.map((product, index) => (
//                 <SwiperSlide key={index} className={styles.slide}>
//                   <GameCard {...product} />
//                 </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//   );
// };

// export default GameCurrency;
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProductsByCategory } from "../../utils/productsSlice";
import Slider from "../Slider/Slider.tsx";
import styles from "./GameCurrency.module.css";

interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}

const GameCurrency: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.gameCurrency) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProductsByCategory);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProductsByCategory({ category: "Currency", page: 1 }));
    }
  }, [productStatus, dispatch]);

  return (
    <section className={styles.bestSellers}>
      <div className={styles.container}>
        <h2 className={styles.title}>Игровая валюта</h2>
        {products && products.length > 0 ? (
              <Slider products={products} isLightTheme={false} />
          ) : (
              <p>Загружаем товары...</p>
          )}
      </div>
    </section>
  );
};

export default GameCurrency;
