import React, { useEffect, useState } from 'react';
import styles from './Orders.module.css';
import { SubscriptionCard } from './SubscriptionCard.tsx'; // Компонент для отображения подписки
import { useAppSelector } from '../../hooks/hooks.ts';
import { RootState } from "../../store.ts";

interface Subscription {
    id: number;
    name: string;
    price: number;
    startDate: string;
    endDate: string | null; // Может быть null, если подписка бессрочная
    isActive: boolean;
    imageUrl: string | null;
}

export const YourSubscriptions: React.FC = () => {
    const telegramId = useAppSelector((state: RootState) => state.user.telegramId);
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]); // Состояние для подписок
    const [loading, setLoading] = useState<boolean>(true);
    const [userId, setUserId] = useState<string | null>(null); // Состояние для хранения userId из базы данных

    // Функция для получения userId из базы данных по telegramId
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                if (telegramId) {
                    const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/users/telegram/${telegramId}`, {
                        headers: {
                            'ngrok-skip-browser-warning': '1',
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserId(data.id);
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

    // Функция для получения подписок по userId
    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                if (userId) {
                    const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/users/${userId}/subscriptions`, {
                        headers: {
                            'ngrok-skip-browser-warning': '1',
                        },
                    });

                    if (response.ok) {
                        const data: Subscription[] = await response.json();
                        setSubscriptions(data); // Обновляем подписки в состоянии
                    } else {
                        console.error('Ошибка при получении подписок');
                    }
                }
            } catch (error) {
                console.error('Ошибка при запросе подписок:', error);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchSubscriptions();
        }
    }, [userId]);

    if (loading) {
        return <p>Загрузка подписок...</p>;
    }

    if (subscriptions.length === 0) {
        return (
            <main className={styles.container}>
                <h1 className={styles.title}>Мои подписки</h1>
                <p className={styles.subtitle}>У вас пока нет активных подписок.</p>
            </main>
        );
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Мои подписки</h1>
            <p className={styles.subtitle}>Активных подписок: {subscriptions.filter(sub => sub.isActive).length}</p>

            <section className={styles.subscriptionsList}>
                {subscriptions.map((subscription, index) => (
                    <React.Fragment key={subscription.id}>
                        <SubscriptionCard
                            name={subscription.name}
                            price={subscription.price}
                            startDate={subscription.startDate}
                            endDate={subscription.endDate}
                            isActive={subscription.isActive}
                            imageUrl={subscription.imageUrl}
                        />
                        {index < subscriptions.length - 1 && <hr className={styles.divider} />}
                    </React.Fragment>
                ))}
            </section>
        </main>
    );
};
