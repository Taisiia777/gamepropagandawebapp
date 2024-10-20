
import React, { useState } from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

interface ProductItemProps {
    id: string;
    imageSrc: string;
    name: string;
    date: string;
    oldPrice?: string | null; // Позволяем newPrice быть null
    newPrice: string | null; // Позволяем newPrice быть null
    currency?: string; // Добавляем поле для валюты
    onRemove?: (id: string) => void; // Функция для удаления, передаётся как пропс

}

const ProductItem: React.FC<ProductItemProps> = ({ imageSrc, name, date, newPrice, id,  currency = "₽", onRemove, oldPrice }) => {

    const [isRemoving, setIsRemoving] = useState(false); // Для анимации удаления

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

    // Функция для удаления товара из вишлиста с анимацией
    const removeFromWishlist = () => {
        setIsRemoving(true); // Запускаем анимацию
        setTimeout(() => {
            const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
            const updatedWishlist = wishlist.filter((item: { id: string }) => item.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

            if (onRemove) onRemove(id); // Обновляем состояние в родительском компоненте
        }, 300); // Удаляем элемент через 300 мс, после завершения анимации
    };
    const discountPercentage = oldPrice && newPrice
        ? Math.round(((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100)
        : null;

    return (
        <div className={`${isRemoving ? styles.removing : ''}`}>
            <article className={styles.productItem}>
                <Link to={`/item/${id}`}>

                    <img src={imageSrc} alt={name} className={styles.productImage}/>
                </Link>
                <div className={styles.productDescr}>
                    <h2 className={styles.productTitle}>{name}</h2>
                    {oldPrice && newPrice && oldPrice !== newPrice ? (
                        <>
                            <p className={styles.discountText}>Скидка {discountPercentage}%</p>
                            <p className={styles.oldPrice}>
                                <s className={styles.oldPriceText}>{oldPrice} {currency} </s>
                                <span className={styles.newPriceText}>{newPrice} {currency} </span>
                            </p>

                        </>
                    ) : (
                        <p className={styles.productPrice}>
                            {newPrice ? `${newPrice} ${currency}` : `${oldPrice ? `${oldPrice} ${currency}` : "Бесплатно"}`}
                        </p>
                    )}


                </div>

                <img
                    src="img/wish_remove.svg"
                    alt="Delete item"
                    className={styles.deleteIcon}
                    onClick={removeFromWishlist}
                />

            </article>


            <button className={styles.addToCartButton} onClick={addToCart}>
                В Корзину
            </button>
            <div className={styles.divider}/>

        </div>
    );
};

export default ProductItem;
