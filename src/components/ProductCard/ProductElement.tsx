
import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { fetchTopRatedProducts } from "../../utils/productsSlice.ts";
import 'swiper/css';
import 'swiper/css/autoplay';
import PricingContainer from "../PricingContainer/PricingContainer.tsx";
import Slider from "../Slider/Slider.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Импортируем тип RootState для работы с состоянием
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

interface ProductElementProps {
    id: string; // Уникальный идентификатор
    imageUrl: string;
    title: string;
    price: string;
    currency: string;
    details: ProductDetail[];
    description: string;
    userId: string; // Добавляем userId
}

const ProductElement: React.FC<ProductElementProps> = ({
                                                           id,
                                                           imageUrl,
                                                           title,
                                                           price,
                                                           currency,
                                                           details,
                                                           description,
                                                           userId // Получаем userId как пропс
                                                       }) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.topRated) as unknown as Product[];
    const productStatus = useAppSelector((state) => state.products.status.fetchTopRatedProducts);
    const userIdBd = useSelector((state: RootState) => state.user.userId);
    console.log(userId)
    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchTopRatedProducts());
        }
    }, [productStatus, dispatch]);

    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const createMarkup = (text: string) => {
        return { __html: text };
    };
    // Функция для добавления товара в корзину и сохранения в localStorage и отправки на бэкенд
    const addToCart = async () => {
        // Создаём объект товара для добавления
        const product = {
            id,
            title,
            price,
            currency,
            imageUrl,
            details,
            quantity: 1 // Добавляем количество
        };

        // Получаем текущую корзину из localStorage
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Добавляем новый товар в корзину
        cart.push(product);

        // Сохраняем обновлённую корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Отправляем запрос на бэкенд для добавления товара в корзину
        try {
            const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/users/${userIdBd}/cart`, {
                method: "POST",
                headers: {
                    'ngrok-skip-browser-warning': '1',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: id, // Передаем ID товара
                    quantity: 1 // Указываем количество
                })
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении товара в корзину на сервере");
            }

            console.log("Товар успешно добавлен в корзину на сервере");
        } catch (error) {
            console.error("Ошибка при добавлении товара в корзину:", error);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Запускаем анимацию иконки корзины
        const cartIcon = document.getElementById("cartIcon");
        if (cartIcon) {
            cartIcon.classList.remove("bounce");
            void cartIcon.offsetWidth; // Перезапускаем анимацию
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
                <img src={imageUrl} alt={title} className={styles.productImageMain} />
            </div>

            <div className={styles.cardContent}>
                <h2 className={styles.productTitle}>{title}</h2>
                {price !== "" ? (
                    <p className={styles.productPrice}>{price}</p>
                ) : (
                    <p className={styles.productPrice}>Бесплатно</p>
                )}
                <PricingContainer />
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
                {/* <p className={styles.description__text}>
                    {isDescriptionExpanded ? description : `${description.substring(0, 150)}...`}
                </p> */}
                <p
    className={styles.description__text}
    dangerouslySetInnerHTML={createMarkup(
        isDescriptionExpanded ? description : `${description.substring(0, 150)}...`
    )}
/>
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

export default ProductElement;
