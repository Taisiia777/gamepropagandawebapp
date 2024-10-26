
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Добавляем useNavigate для перехода
import styles from './BestSellers.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchTopRatedProducts, resetFilters } from '../../utils/productsSlice'; // Импортируем resetFilters
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
    const navigate = useNavigate(); // Для перехода на страницу каталога

    const products = useAppSelector((state) => state.products.topRated) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchTopRatedProducts);
  // const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchTopRatedProducts());
    }
  }, [productStatus, dispatch]);
    // Обработчик клика на кнопку "Смотреть весь каталог"
    const handleViewCatalogClick = () => {
        dispatch(resetFilters()); // Сбрасываем фильтры
        navigate('/catalog'); // Перенаправляем на страницу каталога
    };
  return (
      <section className={styles.bestSellers}>
          <div className={styles.container}>
              <h2 className={styles.title}>Лидеры продаж</h2>
              {products.length > 0 ? (
                  <Slider products={products}/>
              ) : (
                  <p>Загружаем товары...</p>
              )}
              {/*<Link to="/catalog">*/}
              {/*           <button className={styles.catalogButton}>Смотреть весь каталог</button>*/}
              {/*        </Link>*/}
              <button className={styles.catalogButton} onClick={handleViewCatalogClick}>
                  Смотреть весь каталог
              </button>
          </div>
      </section>
  );
};

export default BestSellers;