




import React, { useState, useEffect } from "react";
import styles from "./BestSellers.module.css";
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    imageSrc: string;
    name: string;
    oldPrice: string | null;
    newPrice: string | null;
    isLightTheme?: boolean; // Новый пропс для светлой темы
}

const ProductCard: React.FC<ProductCardProps> = ({ id, imageSrc, name, oldPrice, newPrice, isLightTheme }) => {
    const [isLiked, setIsLiked] = useState(false);
    // Загружаем статус избранного из localStorage при монтировании компонента
    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        const isProductLiked = wishlist.some((product: { name: string }) => product.name === name);
        setIsLiked(isProductLiked);
    }, [name]);

    // Функция для обработки клика по лайку
    const handleLikeClick = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        const product = { id, imageSrc, name, oldPrice, newPrice };

        if (isLiked) {
            // Убираем продукт из избранного
            const updatedWishlist = wishlist.filter((item: { name: string }) => item.name !== name);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            setIsLiked(false);
        } else {
            // Добавляем продукт в избранное
            wishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            setIsLiked(true);
        }
    };
    const shouldShowSale = oldPrice && newPrice && oldPrice !== newPrice;

    return (
        <article className={`${styles.productCard} ${isLightTheme ? styles.lightTheme : ""}`}>
            <div onClick={handleLikeClick} style={{ cursor: "pointer" }}>
                <img
                    src={isLiked ? "img/unlike.svg" : "img/like.svg"}
                    alt={isLiked ? "Unlike" : "Like"}
                    className={styles.productLike}
                />
            </div>
            <Link to={`/item/${id}`} className={styles.productLink}>

                {shouldShowSale && (
                    <img src="img/sale.svg" alt="sale" className={styles.productSale}/>

                )}
                {shouldShowSale && (
                    <span className={styles.productSaleSpan}>
        -{Math.round(((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100)}%
    </span>
                )}

                <img src={imageSrc} alt={name} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    <h3 className={`${styles.productName} ${isLightTheme ? styles.lightText : ""}`}>{name}</h3>
                    <div className={styles.priceContainer}>

                        {(!newPrice || newPrice === "") && (!oldPrice || oldPrice === "") ? (
                            <span
                                className={`${styles.newPrice} ${isLightTheme ? styles.lightText : ""}`}>Бесплатно</span>
                        ) : (
                            <>
                                {shouldShowSale && oldPrice && (
                                    <span
                                        className={`${styles.oldPrice} ${isLightTheme ? styles.lightTextOld : ""}`}>{oldPrice} ₽</span>
                                )}
                                <span className={`${styles.newPrice} ${isLightTheme ? styles.lightText : ""}`}>{newPrice} ₽</span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default ProductCard;
