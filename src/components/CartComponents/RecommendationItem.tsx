
import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

interface RecommendationItemProps {
    id: string;
    price?: number | string | null; // Цена может быть числом, строкой или null
    imageSrc: string;
    name: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
                                                                   id,
                                                                   name,
                                                                   price,
                                                                   imageSrc,
                                                               }) => {
    // Добавляем префикс https к imageSrc, если он начинается с //
    const fullImageSrc = imageSrc.startsWith("//") ? `https:${imageSrc}` : imageSrc;

    // Функция для добавления товара в корзину
    const addToCart = () => {
        const product = {
            id,
            title: name,
            price: price || "Бесплатно",
            imageUrl: fullImageSrc, // Используем полный URL
        };

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

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
