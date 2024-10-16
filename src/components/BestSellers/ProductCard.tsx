




import React, { useState, useEffect } from "react";
import styles from "./BestSellers.module.css";
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    imageSrc: string;
    name: string;
    oldPrice: string | null;
    newPrice: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, imageSrc, name, oldPrice, newPrice }) => {
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

    return (
        <article className={styles.productCard}>
            <div onClick={handleLikeClick} style={{ cursor: "pointer" }}>
                <img
                    src={isLiked ? "img/unlike.svg" : "img/like.svg"}
                    alt={isLiked ? "Unlike" : "Like"}
                    className={styles.productLike}
                />
            </div>
            <Link to={`/item/${id}`} className={styles.productLink}>

            <img src={imageSrc} alt={name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{name}</h3>
                <div className={styles.priceContainer}>
                    {(!newPrice || newPrice === "") && (!oldPrice || oldPrice === "") ? (
                        <span className={styles.newPrice}>Бесплатно</span>
                    ) : (
                        <>
                            {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
                            {newPrice && <span className={styles.newPrice}>{newPrice}</span>}
                        </>
                    )}
                </div>
            </div>
            </Link>
        </article>
    );
};

export default ProductCard;
