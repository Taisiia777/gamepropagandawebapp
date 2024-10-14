
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../utils/productsSlice";
import PreOrderCard from "./PreOrderCard";
import styles from "./PreOrders.module.css";
import { Link } from "react-router-dom";

const PreOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.title}>Предзаказы</h2>
          <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView="auto"
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className={styles.swiperContainer}
          >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                  <Link to={`/item/${product.id}`} className={styles.productLink}>
                    <PreOrderCard
                        imageSrc={product.media?.[0]?.Uri || "img/default.png"}
                        name={product.name}
                        oldPrice={product.base_price ? `${product.base_price}` : ""}
                        newPrice={product.discounted_price ? `${product.discounted_price}` : "Бесплатно"}
                    />
                  </Link>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
};

export default PreOrders;
