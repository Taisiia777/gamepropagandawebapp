




import React, { useEffect } from "react";
import styles from "./ProductCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { fetchProducts } from "../../utils/productsSlice.ts";
import 'swiper/css';
import 'swiper/css/autoplay';
import ProductCard from '../BestSellers/ProductCard.tsx';

interface ProductDetail {
  label: string;
  value: string;
  link?: string;
}

interface ProductElenentProps {
    id: string; // Добавляем уникальный идентификатор
    imageUrl: string;
  title: string;
  price: string;
  currency: string;
  details: ProductDetail[];
  description: string;
}

const ProductElenent: React.FC<ProductElenentProps> = ({  id,
                                                           imageUrl,
                                                         title,
                                                         price,
                                                         currency,
                                                         details,
                                                         description,
                                                       }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  // Функция для добавления товара в корзину и сохранения в localStorage
  const addToCart = () => {
    // Создаём объект товара для добавления
    const product = {
        id, // Уникальный идентификатор
        title,
      price,
      currency,
      imageUrl,
      details,
    };

    // Получаем текущую корзину из localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Добавляем новый товар в корзину
    cart.push(product);

    // Сохраняем обновлённую корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Добавляет плавную анимацию
      });
      // Запускаем анимацию с проверкой наличия элемента
      const cartIcon = document.getElementById("cartIcon");
      if (cartIcon) {
          // Удаляем класс bounce, если он уже применён
          cartIcon.classList.remove("bounce");

          // Принудительно перерисовываем элемент, чтобы удалить анимацию
          void cartIcon.offsetWidth;

          // Затем добавляем класс bounce для перезапуска анимации
          cartIcon.classList.add("bounce");
      }

  };

  return (
      <article className={styles.card}>
        <div className="productImageContainer">
          <img src={imageUrl} alt={title} className={styles.productImageMain} />
        </div>

        <div className={styles.cardContent}>
          <h2 className={styles.productTitle}>{title}</h2>
          {price !== "" ? (
              <p className={styles.productPrice}>
                {price}
              </p>
          ) : (
              <p className={styles.productPrice}>Бесплатно</p>
          )}
          <hr className={styles.divider} />
          <div className={styles.productDetails}>
            {details.map((detail, index) => (
                <React.Fragment key={index}>
                  <span className={styles.productDetails__title}>{detail.label}: </span>
                  <span className={styles.productDetails__value}>{detail.value}</span>
                  <br />
                </React.Fragment>
            ))}
          </div>
          <button className={styles.addToCartButton} onClick={addToCart}>
            Добавить в корзину
          </button>
        </div>

        <div className={styles.description}>
          <p className={styles.description__text}>
            {description}
          </p>
        </div>

        <div className={styles.bestSellers}>
          <div className={styles.container}>
            <h2 className={styles.title}>Похожие игры</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={'auto'}
                centeredSlides={false}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className={styles.swiperContainer}
            >
              {products.map((product) => (
                  <SwiperSlide key={product.id} className={styles.slide}>
                    <ProductCard
                        imageSrc={product.media[0]?.Uri || 'img/default.png'}
                        name={product.name}
                        oldPrice={product.base_price}
                        newPrice={product.discounted_price}
                    />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </article>
  );
};

export default ProductElenent;
