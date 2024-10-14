
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../utils/productsSlice";
import ProductCard from "./ProductCard";
import styles from "./NewReleases.module.css";
import { Link } from "react-router-dom";

const NewReleases: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
      <section className={styles.container}>
        <div className={styles.saleCard}>
          <header className={styles.titleWrapper}>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c23ee1ca87c4834115b26490207fe63b93de98524ec64b69195561c0af26d2?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt="Новинки"
                className={styles.titleIcon}
            />
            <h2 className={styles.title}>Новинки</h2>
          </header>

          <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView="auto"
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className={styles.swiperContainer}
          >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                  <Link to={`/item/${product.id}`} className={styles.productLink}>
                    <ProductCard
                        imageSrc={product.media?.[0]?.Uri || "img/default.png"}
                        name={product.name}
                        oldPrice={product.base_price ? `${product.base_price} ₽` : ""}
                        newPrice={product.discounted_price ? `${product.discounted_price} ₽` : "Бесплатно"}
                    />
                  </Link>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
};

export default NewReleases;
