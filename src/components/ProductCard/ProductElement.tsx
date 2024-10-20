




import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { fetchProducts } from "../../utils/productsSlice.ts";
import 'swiper/css';
import 'swiper/css/autoplay';
import PricingContainer from "../PricingContainer/PricingContainer.tsx";
import Slider from "../Slider/Slider.tsx";
interface Product {
    id: string;
    media: Array<{ Uri: string }>;
    name: string;
    base_price: string | null;
    discounted_price: string | null;
}
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
    const products = useAppSelector((state) => state.products.items) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProducts);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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
    // Функция для обработки клика по кнопке раскрытия описания
    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };
  return (
      <article className={styles.card}>
          <div className="productImageContainer">
              <img src={imageUrl} alt={title} className={styles.productImageMain}/>
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
              <PricingContainer/>
              <hr className={styles.divider}/>
              <div className={styles.productDetails}>
                  {details.map((detail, index) => (
                      <React.Fragment key={index}>
                          <span className={styles.productDetails__title}>{detail.label}: </span>
                          <span className={styles.productDetails__value}>{detail.value}</span>
                          <br/>
                      </React.Fragment>
                  ))}
              </div>
              <button className={styles.addToCartButton} onClick={addToCart}>
                  Добавить в корзину
              </button>
          </div>


          <div className={styles.description}>
              <p className={styles.description__text}>
                  {isDescriptionExpanded ? description : `${description.substring(0, 150)}...`}
              </p>
              <button className={styles.expandDescriptionButton} onClick={toggleDescription}>
                  {isDescriptionExpanded ? "Скрыть описание" : "Раскрыть описание"}
              </button>
          </div>
          <div className={styles.bestSellers}>
              <div className={styles.container}>
                  <h2 className={styles.title}>Лидеры продаж</h2>
                  {products.length > 0 ? (
                      <Slider products={products} isLightTheme={false} />
                  ) : (
                      <p>Загружаем товары...</p>
                  )}
              </div>
          </div>
      </article>
  );
};

export default ProductElenent;
