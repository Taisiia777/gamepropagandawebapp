
import React from "react";
import styles from "./OrderSummary.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Импортируем тип RootState для работы с состоянием
interface OrderSummaryProps {
    totalAmount: number;
    currency: string;
    cartItems: Array<{
        id: string;
        title: string;
        subtitle: string;
        price: number;
        imageUrl: string;
    }>;  // Добавляем товары из корзины как пропсы
    userId: string; // Добавляем идентификатор пользователя для создания заказа
    setCartItems: React.Dispatch<React.SetStateAction<Array<{ id: string; title: string; subtitle: string; price: number; imageUrl: string; }>>>; // Функция для обновления состояния корзины
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
                                                       totalAmount,
                                                       currency,
                                                       cartItems,
                                                       userId,
                                                       setCartItems
                                                   }) => {
    const userIdBd = useSelector((state: RootState) => state.user.userId);
    console.log(userId)
    const handleSubmitOrder = async () => {
        const cleanedCartItems = cartItems.map(item => ({
            id: Number(item.id), // Преобразуем ID в число
            name: item.title, // Используем поле 'title' как 'name'
            imageSrc: item.imageUrl, // Используем поле 'imageUrl' как 'imageSrc'
            newPrice: item.price, // Преобразуем очищенную цену в строку
            oldPrice: null, // Если нет старой цены, отправляем null
            quantity: 1 // Задаем количество
        }));

        try {
            // Шаг 1: Создаем заказ на сервере
            const orderResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userIdBd}/order`, {
                method: "POST",
                headers: {
                    'ngrok-skip-browser-warning': '1',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cartItems: cleanedCartItems,
                }),
            });

            if (!orderResponse.ok) {
                throw new Error("Failed to create order");
            }

            const orderData = await orderResponse.json();
            console.log("Order created successfully:", orderData);

            const paymentResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/payment/pay/${orderData.orderId}/${totalAmount}`, {
                method: "GET",
                headers: {
                    'ngrok-skip-browser-warning': '1', // Заголовок для игнорирования предупреждений ngrok
                },
            });


            if (!paymentResponse.ok) {
                throw new Error("Failed to create payment link");
            }

            const paymentData = await paymentResponse.json();
            console.log("Payment URL generated successfully:", paymentData);

            // Очистка корзины после успешного заказа
            localStorage.removeItem("cart"); // Удаляем данные корзины из localStorage
            setCartItems([]); // Очищаем состояние корзины

            window.location.href = paymentData.paymentUrl;


        } catch (error) {
            console.error("Error creating order or processing payment:", error);
        }
    };

    return (
        <section className={styles.orderSummary}>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Отменяем стандартное поведение формы
                    handleSubmitOrder(); // Вызываем функцию для создания заказа и оплаты
                }}
            >
                <label htmlFor="submitOrder" className={styles["visually-hidden"]}>
                    Submit order
                </label>
                <button id="submitOrder" className={styles.submitButton}>
                    Оформить заказ на {totalAmount}{" "}
                    <span className={styles.boldText}>{currency}</span>
                </button>
            </form>
            <p className={styles.privacyPolicy}>
                Ваши личные данные будут использоваться для обработки ваших заказов,
                упрощения вашей работы с сайтом и для других целей, описанных в нашей{" "}
                <a
                    href="https://psplusdev.ru/?page_id=3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    политика конфиденциальности
                </a>
                .
            </p>
        </section>
    );
};

export default OrderSummary;
