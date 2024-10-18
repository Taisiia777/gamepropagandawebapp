//
//
//
//
//
// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';
// import styles from './BestSellers.module.css';
// import ProductCard from './ProductCard';
// import { Link } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { fetchProducts } from '../../utils/productsSlice';
//
// const BestSellers: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const products = useAppSelector((state) => state.products.items);
//   const productStatus = useAppSelector((state) => state.products.status);
//
//   useEffect(() => {
//     if (productStatus === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [productStatus, dispatch]);
//
//   return (
//       <section className={styles.bestSellers}>
//         <div className={styles.container}>
//           <h2 className={styles.title}>Лидеры продаж</h2>
//           <Swiper
//               modules={[Autoplay]}
//               spaceBetween={0}
//               slidesPerView={'auto'}
//               centeredSlides={false}
//               loop={true}
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               className={styles.swiperContainer}
//           >
//             {products.map((product) => (
//                 <SwiperSlide key={product.id} className={styles.slide}>
//                   {/*<Link to={`/item/${product.id}`} className={styles.productLink}>*/}
//                     <ProductCard
//                         id={product.id} // Передаем id продукта
//                         imageSrc={product.media[0]?.Uri || 'img/default.png'}
//                         name={product.name}
//                         oldPrice={product.base_price}
//                         newPrice={product.discounted_price}
//                     />
//                   {/*</Link>*/}
//                 </SwiperSlide>
//             ))}
//           </Swiper>
//           <Link to="/catalog">
//             <button className={styles.catalogButton}>Смотреть весь каталог</button>
//           </Link>
//         </div>
//       </section>
//   );
// };
//
// export default BestSellers;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './BestSellers.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts } from '../../utils/productsSlice';
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
          {products.length > 0 ? (
              <Slider products={products} />
          ) : (
              <p>Loading products...</p>
          )}
          <Link to="/catalog">
                       <button className={styles.catalogButton}>Смотреть весь каталог</button>
                    </Link>
        </div>
      </section>
  );
};

export default BestSellers;