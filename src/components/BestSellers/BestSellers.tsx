
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './BestSellers.module.css';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts } from '../../utils/productsSlice';

const BestSellers: React.FC = () => {
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
          <h2 className={styles.title}>Лидеры продаж</h2>
          <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={'auto'}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className={styles.swiperContainer}
          >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                  {/*<ProductCard*/}
                  {/*    imageSrc={product.media[0]?.Uri || 'img/default.png'}*/}
                  {/*    name={product.name}*/}
                  {/*    oldPrice={product.base_price}*/}
                  {/*    newPrice={product.discounted_price}*/}
                  {/*/>*/}
                  <Link to={`/item/${product.id}`} className={styles.productLink}>
                    <ProductCard
                        imageSrc={product.media[0]?.Uri || 'img/default.png'}
                        name={product.name}
                        oldPrice={product.base_price}
                        newPrice={product.discounted_price}
                    />
                  </Link>
                </SwiperSlide>
            ))}
          </Swiper>
          <Link to="/catalog">
            <button className={styles.catalogButton}>Смотреть весь каталог</button>
          </Link>
        </div>
      </section>
  );
};

export default BestSellers;
