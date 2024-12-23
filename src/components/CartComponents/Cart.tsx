
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import RecommendationItem from "./RecommendationItem";
import { useAppSelector } from '../../hooks/hooks.ts';
import { RootState } from '../../store.ts';
import axios from "axios"; // Подключение axios для выполнения запросов

interface CartProps {
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
    const telegramId = useAppSelector((state: RootState) => state.user.telegramId);
    const [userId, setUserId] = useState<string | null>(null);

    // Функция обновления корзины из localStorage
    const loadCartItems = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setNewCartItems(savedCart);
    };

    useEffect(() => {
        // Загрузка корзины при первой отрисовке
        loadCartItems();

        // Подписываемся на событие обновления корзины
        const handleCartUpdate = () => loadCartItems();
        window.addEventListener("cartUpdated", handleCartUpdate);

        // Очищаем подписку при размонтировании компонента
        return () => window.removeEventListener("cartUpdated", handleCartUpdate);
    }, []);

    // Функция для удаления элемента по id
    // const handleRemove = (id: string) => {
    //     const updatedCart = newCartItems.filter((item) => item.id !== id);
    //     setNewCartItems(updatedCart);
    //     localStorage.setItem("cart", JSON.stringify(updatedCart));

    //     // Отправка события обновления корзины
    //     if (updatedCart.length === 0) {
    //         // Если корзина пуста, отправляем событие для очистки интерфейса
    //         window.dispatchEvent(new Event("cartUpdated"));
    //     }
    // };
 // Функция для удаления элемента по id
 useEffect(() => {
    // Получение userId из базы данных по telegramId
    const fetchUserId = async () => {
        if (!telegramId) return;

        try {
            const response = await axios.get(`${import.meta.env.VITE_NGROK_URL}/users/telegram/${telegramId}`, {
                headers: {
                    'ngrok-skip-browser-warning': '1',
                },
            });
            setUserId(response.data.id); // Сохраняем userId из базы данных
        } catch (error) {
            console.error("Ошибка при получении userId:", error);
        }
    };

    fetchUserId();

    // Загрузка корзины при первой отрисовке
    loadCartItems();

    // Подписываемся на событие обновления корзины
    const handleCartUpdate = () => loadCartItems();
    window.addEventListener("cartUpdated", handleCartUpdate);

    // Очищаем подписку при размонтировании компонента
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
}, [telegramId]);

// Функция для удаления элемента по id
const handleRemove = async (id: string) => {
    // Удаление из UI
    const updatedCart = newCartItems.filter((item) => item.id !== id);
    setNewCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    try {
        if (userId) {
            // Отправляем запрос на сервер для удаления элемента из БД
            await axios.delete(`${import.meta.env.VITE_NGROK_URL}/users/${userId}/cart/${id}`);
            console.log(`Товар с ID ${id} успешно удалён с сервера`);
        } else {
            console.warn("userId отсутствует, невозможно удалить товар с сервера");
        }
    } catch (error) {
        console.error("Ошибка при удалении товара с сервера:", error);
    }

    // Отправка события обновления корзины
    if (updatedCart.length === 0) {
        // Если корзина пуста, отправляем событие для очистки интерфейса
        window.dispatchEvent(new Event("cartUpdated"));
    }
};
    const calculateTotal = () => {
        return newCartItems.reduce((total, item) => {
            const itemPrice = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("Р", "").trim());
            return total + (isNaN(itemPrice) ? 0 : itemPrice);
        }, 0);
    };

    const totalAmount = calculateTotal();
    const minimumOrderAmount = 400; // Минимальная сумма заказа

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

            {totalAmount >= minimumOrderAmount && (
                <>
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
                                <RecommendationItem {...item} userId={userId ? userId.toString() : "0"} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </main>
    );
};

export default Cart;
