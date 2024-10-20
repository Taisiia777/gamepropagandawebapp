
import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../utils/productsSlice";
// import ProductCard from "./ProductCard";
import styles from "./HalloweenSale.module.css";
// import {Link} from "react-router-dom";
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}
const HalloweenSale: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProducts);
  // const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.container}>
        <div className={styles.saleCard}>
          <header className={styles.titleWrapper}>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/befb59af7944a00e73f004db6b86ca6b739b9b44b89afaa91c67530b0de09725?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Halloween icon"
                className={styles.titleIcon}
            />
            <h2 className={styles.title}>Хеллоуин</h2>
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

export default HalloweenSale;
