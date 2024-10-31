
import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

interface RecommendationItemProps {
    id: string;
    price?: number | string | null; // Цена может быть числом, строкой или null
    imageSrc: string;
    name: string;
    userId: string; // Добавляем userId для отправки запроса на бэкенд
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
                                                                   id,
                                                                   name,
                                                                   price,
                                                                   imageSrc,
                                                                   userId, // Получаем userId как пропс
                                                               }) => {
    // Добавляем префикс https к imageSrc, если он начинается с //
    const fullImageSrc = imageSrc.startsWith("//") ? `https:${imageSrc}` : imageSrc;

    // Функция для добавления товара в корзину
    const addToCart = async () => {
        const product = {
            id,
            title: name,
            price: price || "Бесплатно",
            imageUrl: fullImageSrc, // Используем полный URL
        };

        // Получаем текущую корзину из localStorage
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        // Запрос на добавление товара в корзину на бэкенд
        try {
            const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/users/${userId}/cart`, {
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

        // Запуск анимации для значка корзины
        const cartIcon = document.getElementById("cartIcon");
        if (cartIcon) {
            cartIcon.classList.remove("bounce");
            void cartIcon.offsetWidth; // Принудительно перерисовываем
            cartIcon.classList.add("bounce");
        }

        // Обновляем состояние корзины, чтобы перерендерить компонент
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <article className={styles.recommendationItem}>
            <Link to={`/item/${id}`}>
                <img src={fullImageSrc} alt={name} className={styles.recommendationImage} />
            </Link>
            <h3 className={styles.recommendationTitle}>{name}</h3>
            <p className={styles.recommendationPrice}>
                {price ? (
                    <>
                        <span className={styles.cartPriceHighlight}>{price}</span>{" "}
                        <span className={styles.cartPriceCurrency}>Р</span>
                    </>
                ) : (
                    <span className={styles.cartPriceHighlight}>Бесплатно</span>
                )}
            </p>
            <button className={styles.addButton} onClick={addToCart}>
                Добавить
            </button>
        </article>
    );
};

export default RecommendationItem;
