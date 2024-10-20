import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProductsByCategory } from "../../utils/productsSlice";
import styles from "./NewReleases.module.css";
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}
const NewReleases: React.FC = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.newReleases) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProductsByCategory);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProductsByCategory({ category: "New", page: 1 }));

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
          {products && products.length > 0 ? (
              <Slider products={products} isLightTheme={true} />
          ) : (
              <p>Загружаем товары...</p>
          )}
        </div>
      </section>
  );
};

export default NewReleases;
