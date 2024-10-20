
import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProductsByCategory } from "../../utils/productsSlice";
// import PreOrderCard from "./PreOrderCard";
import styles from "./PreOrders.module.css";
// import { Link } from "react-router-dom";
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}
const PreOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.preorders) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProductsByCategory);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProductsByCategory({ category: "Preorder", page: 1 }));

    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.title}>Предзаказы</h2>
          {products.length > 0 ? (
              <Slider products={products} />
          ) : (
              <p>Загружаем товары...</p>
          )}
        </div>
      </section>
  );
};

export default PreOrders;
