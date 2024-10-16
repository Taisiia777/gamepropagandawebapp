
import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

interface ProductItemProps {
    id: string;
    imageSrc: string;
    name: string;
    date: string;
    newPrice: string | null; // Позволяем newPrice быть null
    currency?: string; // Добавляем поле для валюты
    onRemove?: (id: string) => void; // Функция для удаления, передаётся как пропс

}

const ProductItem: React.FC<ProductItemProps> = ({ imageSrc, name, date, newPrice, id,  currency = "₽", onRemove }) => {

    // Функция для добавления товара в корзину и сохранения в localStorage
    // const addToCart = () => {
    //     const product = {
    //         id,
    //         title: name, // Название продукта
    //         price: newPrice !== "Бесплатно" ? `${newPrice} ${currency}` : "Бесплатно",
    //         currency,
    //         imageUrl: imageSrc,
    //         details: [
    //             { label: "Дата выхода", value: date },
    //             // Добавьте другие детали, если они есть, или оставьте массив пустым
    //         ]
    //     };
    //
    //     // Получаем текущую корзину из localStorage
    //     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    //
    //     // Добавляем новый товар в корзину
    //     cart.push(product);
    //
    //     // Сохраняем обновлённую корзину в localStorage
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //
    //     // Дополнительно можно добавить анимацию для иконки корзины (если она есть)
    //     const cartIcon = document.getElementById("cartIcon");
    //     if (cartIcon) {
    //         cartIcon.classList.remove("bounce");
    //         void cartIcon.offsetWidth; // Перезапуск анимации
    //         cartIcon.classList.add("bounce");
    //     }
    // };
    // Функция для добавления товара в корзину и сохранения в localStorage
    const addToCart = () => {
        const product = {
            id,
            title: name,
            price: newPrice ? `${newPrice} ${currency}` : "Бесплатно",
            imageUrl: imageSrc,
            details: [
                { label: "Дата выхода", value: date },
            ]
        };

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        const cartIcon = document.getElementById("cartIcon");
        if (cartIcon) {
            cartIcon.classList.remove("bounce");
            void cartIcon.offsetWidth;
            cartIcon.classList.add("bounce");
        }
    };

    // Функция для удаления товара из вишлиста
    const removeFromWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const updatedWishlist = wishlist.filter((item: { id: string }) => item.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        if (onRemove) onRemove(id); // Обновляем состояние в родительском компоненте
    };
    return (
        <>
            <Link to={`/item/${id}`}>
                <article className={styles.productItem}>
                    <img src={imageSrc} alt={name} className={styles.productImage} onClick={removeFromWishlist}/>
                    <h2 className={styles.productTitle}>{name}</h2>
                    <p className={styles.productDate}>{date}</p>
                    <p className={styles.productPrice}>{newPrice ? `${newPrice} ${currency}` : "Бесплатно"}</p>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2fa859e04d8742056f102bcab549d15a49cce75bd8eb9a9bf3522c15391db55?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                        alt="Delete item"
                        className={styles.deleteIcon}
                    />
                </article>
            </Link>
            <button className={styles.addToCartButton} onClick={addToCart}>
                В Корзину
            </button>
        </>
    );
};

export default ProductItem;
