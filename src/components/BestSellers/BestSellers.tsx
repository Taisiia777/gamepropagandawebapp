
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './BestSellers.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts} from '../../utils/productsSlice';
import Slider from "../Slider/Slider.tsx";
interface Product {
  id: string;
  media: Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}

const BestSellers: React.FC = () => {
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
      <section className={styles.bestSellers}>
        <div className={styles.container}>
          <h2 className={styles.title}>Лидеры продаж</h2>
          {products.length > 0 ? (
              <Slider products={products} />
          ) : (
              <p>Загружаем товары...</p>
          )}
            <Link to="/catalog">
                       <button className={styles.catalogButton}>Смотреть весь каталог</button>
                    </Link>
        </div>
      </section>
  );
};

export default BestSellers;