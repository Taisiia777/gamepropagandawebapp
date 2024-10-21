
import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProductsInPriceRange } from "../../utils/productsSlice";
// import GameCard from "./GameCard";
import styles from "./GameSales.module.css";
// import { Link } from "react-router-dom";
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}
const GameSales: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.priceRange) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProductsInPriceRange);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProductsInPriceRange());
    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.container} >
        <div className={styles.saleCard} >
          <header className={styles.titleWrapper}>
            <h2 className={styles.title}>До 500 рублей</h2>
          </header>

          {products.length > 0 ? (
              <Slider products={products} isLightTheme={true} />
          ) : (
              <p>Загружаем товары...</p>
          )}
        </div>
      </section>
  );
};

export default GameSales;
