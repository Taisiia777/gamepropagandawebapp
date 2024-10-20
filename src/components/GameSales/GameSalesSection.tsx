
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProductsByCategory} from '../../utils/productsSlice';
import styles from './BestSellers.module.css';
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}
const GameSalesSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.sales) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProductsByCategory);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProductsByCategory({ category: "Discounted", page: 1 }));
    }
  }, [productStatus, dispatch]);


  return (
      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.title}>Игры по акции</h2>
          {products.length > 0 ? (
              <Slider products={products} />
          ) : (
              <p>Загружаем товары...</p>
          )}
          <Link to="/catalog">
            <button className={styles.catalogButton}>Смотреть все акции</button>
          </Link>
        </div>
      </section>
  );
};

export default GameSalesSection;
