//
// import React from "react";
// import styles from "./BestSellers.module.css";
// import ProductCard from "./ProductCard";
//
// const products = [
//   {
//     imageSrc:
//       "img/mk11.png",
//     name: "Mortal Kombat 11 Ultimate PS4 & PS5",
//     oldPrice: "2 190 ₽",
//     newPrice: "590 ₽",
//   },
//   {
//     imageSrc:
//       "img/anime.png",
//     name: "Doki Doki Literature Club Plus!...",
//     oldPrice: "1 690 ₽",
//     newPrice: "1 290 ₽",
//   },
//   {
//     imageSrc:
//       "img/mk11.png",
//     name: "Doki Doki Literature Club Plus!...",
//     oldPrice: "1 690 ₽",
//     newPrice: "",
//   },
// ];
// const GameSalesSection: React.FC = () => {
//   return (
//     <section className={styles.bestSellers}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Игры по акции</h2>
//         <div className={styles.productList}>
//           {products.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>
//         <button className={styles.catalogButton}>Смотреть все акции</button>
//       </div>
//     </section>
//   );
// };
//
// export default GameSalesSection;
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts } from '../../utils/productsSlice';
import styles from './BestSellers.module.css';
import ProductCard from './ProductCard';

const GameSalesSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.title}>Игры по акции</h2>
          <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={'auto'}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className={styles.swiperContainer}
          >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                  <Link to={`/item/${product.id}`} className={styles.productLink}>
                    <ProductCard
                        imageSrc={product.media?.[0]?.Uri || 'img/default.png'}
                        name={product.name}
                        oldPrice={product.base_price ? `${product.base_price}` : undefined}
                        newPrice={product.discounted_price ? `${product.discounted_price}` : 'Бесплатно'}
                    />
                  </Link>
                </SwiperSlide>
            ))}
          </Swiper>
          <Link to="/catalog">
            <button className={styles.catalogButton}>Смотреть все акции</button>
          </Link>
        </div>
      </section>
  );
};

export default GameSalesSection;
