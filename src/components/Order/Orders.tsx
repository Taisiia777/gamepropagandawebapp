
import React, { useEffect, useState } from 'react';
import styles from './Orders.module.css';
import { OrderCard } from './OrderCard';
import { useAppSelector } from '../../hooks/hooks.ts'; // Хук для извлечения userId из Redux
import { RootState } from "../../store.ts";

interface Item {
    id: number;
    name: string;
    imageSrc: string;
    newPrice: number;
    oldPrice: number | null;
    quantity: number;
}

interface Order {
    orderId: number;
    totalAmount: number;
    items: Item[];
    createdAt: string;
}

export const Orders: React.FC = () => {
    const telegramId = useAppSelector((state: RootState) => state.user.telegramId); // Получаем telegramId из userSlice
    const [orders, setOrders] = useState<Order[]>([]); // Состояние для заказов
    const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
    const [userId, setUserId] = useState<string | null>(null); // Состояние для хранения userId из базы данных

    // Функция для получения userId из базы данных по telegramId
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                if (telegramId) {
                    const response = await fetch(`${process.env.REACT_APP_NGROK_URL}/users/telegram/${telegramId}`, {
                        headers: {
                            'ngrok-skip-browser-warning': '1',
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserId(data.id); // Сохраняем userId из ответа
                    } else {
                        console.error('Ошибка при получении userId');
                    }
                }
            } catch (error) {
                console.error('Ошибка при запросе userId:', error);
            }
        };

        fetchUserId();
    }, [telegramId]);

    // Функция для получения заказов по userId
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (userId) {
                    const response = await fetch(`${process.env.REACT_APP_NGROK_URL}/users/${userId}/orders`, {
                        headers: {
                            'ngrok-skip-browser-warning': '1',
                        },
                    });

                    if (response.ok) {
                        const data: Order[] = await response.json();
                        setOrders(data); // Обновляем заказы в состоянии
                    } else {
                        console.error('Ошибка при получении заказов');
                    }
                }
            } catch (error) {
                console.error('Ошибка при запросе заказов:', error);
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    if (loading) {
        return <p>Загрузка заказов...</p>;
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Мои заказы</h1>
            <p className={styles.subtitle}>Купленные продукты: {orders.length}</p>

            <section className={styles.ordersList}>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <React.Fragment key={order.orderId}>
                            <OrderCard
                                orderId={order.orderId}
                                totalAmount={order.totalAmount}
                                items={order.items}
                                createdAt={order.createdAt}
                            />
                            {index < orders.length - 1 && <hr className={styles.divider} />}
                        </React.Fragment>
                    ))
                ) : (
                    <p>У вас пока нет заказов.</p>
                )}
            </section>
        </main>
    );
};
