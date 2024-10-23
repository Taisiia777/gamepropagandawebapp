
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import RecommendationItem from "./RecommendationItem";

interface CartProps {
    cartItems?: Array<{
        id: string;
        title: string;
        subtitle: string;
        price: number;
        imageUrl: string;
    }>;
    recommendations: Array<{
        id: string;
        price: number;
        imageSrc: string;
        name: string;
    }>;
}

interface CartItemType {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    imageUrl: string;
}

const Cart: React.FC<CartProps> = ({ recommendations }) => {
    const [newCartItems, setNewCartItems] = useState<CartItemType[]>([]);
    useEffect(() => {
        const handleCartUpdate = () => {
            const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            setNewCartItems(savedCart);
        };

        // Подписываемся на событие обновления корзины
        window.addEventListener("cartUpdated", handleCartUpdate);

        // Загрузка корзины при первой отрисовке
        handleCartUpdate();

        // Очищаем подписку при размонтировании компонента
        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
        };
    }, []);

    // Загрузка данных из localStorage при первой отрисовке
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setNewCartItems(savedCart);
    }, []);

    // Функция для удаления элемента по id
    const handleRemove = (id: string) => {
        const updatedCart = newCartItems.filter((item) => item.id !== id);
        setNewCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return newCartItems.reduce((total, item) => {
            // Преобразуем цену в строку и удаляем "₽", если она есть, затем пытаемся привести к числу
            const itemPrice = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("Р", "").trim());
            return total + (isNaN(itemPrice) ? 0 : itemPrice);
        }, 0);
    };


    const totalAmount = calculateTotal();
    console.log(JSON.stringify(recommendations));
    return (
        <main className={styles.cartContainer}>
            <header className={styles.cartHeader}>
                <div className={styles.cartInfo}>
                    <h1 className={styles.cartTitle}>Корзина</h1>
                </div>
                <div className={styles.cartTotal}>
                    <p>{totalAmount.toLocaleString("ru-RU")} Р</p>
                </div>
            </header>
            {newCartItems.length > 0 ? (
                newCartItems.map((item) => (
                    <CartItem key={item.id} {...item} onRemove={handleRemove} />
                ))
            ) : (
                <p className={styles.emptyCartMessage}>Ваша корзина пуста.</p>
            )}
            <div className={styles.divider} />
            <h2 className={styles.recommendationsTitle}>Лидеры продаж</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={false}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className={styles.swiperContainer}
            >
                {recommendations.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <RecommendationItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};

export default Cart;
