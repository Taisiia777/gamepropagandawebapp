//
// import React, { useEffect, useState } from 'react';
// import styles from './Orders.module.css';
// import { OrderCard } from './OrderCard';
// import { useAppSelector } from '../../hooks/hooks.ts'; // Хук для извлечения userId из Redux
// import { OrderItem } from '../../types/Product'; // Тип для заказа
// import {RootState} from "../../store.ts";
// export const Orders: React.FC = () => {
//     const userId = useAppSelector((state: RootState) => state.user.telegramId); // Получаем userId из userSlice
//     const [orders, setOrders] = useState<OrderItem[]>([]); // Состояние для заказов
//     const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
//
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 if (userId) {
//                     const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}/orders`, {
//                         headers: {
//                             'ngrok-skip-browser-warning': '1',
//                         },
//                     });
//
//                     if (response.ok) {
//                         const data = await response.json();
//                         setOrders(data); // Обновляем заказы в состоянии
//                     } else {
//                         console.error('Ошибка при получении заказов');
//                     }
//                 }
//             } catch (error) {
//                 console.error('Ошибка при запросе заказов:', error);
//             } finally {
//                 setLoading(false); // Завершаем загрузку
//             }
//         };
//
//         fetchOrders();
//     }, [userId]);
//
//     if (loading) {
//         return <p>Загрузка заказов...</p>;
//     }
//
//     return (
//         <main className={styles.container}>
//             <h1 className={styles.title}>Мои заказы</h1>
//             <p className={styles.subtitle}>Купленные продукты: {orders.length}</p>
//
//             <div className={styles.sortWrapper}>
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f98e7829e5353ac01aa55864541978bfeb8409618543d42a6b39f7635160364?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//                     alt="Sort icon"
//                     className={styles.sortIcon}
//                 />
//                 <span className={styles.sortText}>по дате: Сначала новые</span>
//             </div>
//
//             <section className={styles.ordersList}>
//                 {orders.length > 0 ? (
//                     orders.map((order, index) => (
//                         <React.Fragment key={index}>
//                             <OrderCard order={order} />
//                             {index < orders.length - 1 && <hr className={styles.divider} />}
//                         </React.Fragment>
//                     ))
//                 ) : (
//                     <p>У вас пока нет заказов.</p>
//                 )}
//             </section>
//         </main>
//     );
// };
import React, { useEffect, useState } from 'react';
import styles from './Orders.module.css';
import { OrderCard } from './OrderCard';
import { useAppSelector } from '../../hooks/hooks.ts'; // Хук для извлечения userId из Redux
import { OrderItem } from '../../types/Product'; // Тип для заказа
import { RootState } from "../../store.ts";

export const Orders: React.FC = () => {
    const telegramId = useAppSelector((state: RootState) => state.user.telegramId); // Получаем telegramId из userSlice
    const [orders, setOrders] = useState<OrderItem[]>([]); // Состояние для заказов
    const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
    const [userId, setUserId] = useState<string | null>(null); // Состояние для хранения userId из базы данных

    // Функция для получения userId из базы данных по telegramId
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                if (telegramId) {
                    const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/telegram/${telegramId}`, {
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
                    const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}/orders`, {
                        headers: {
                            'ngrok-skip-browser-warning': '1',
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
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

            <div className={styles.sortWrapper}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f98e7829e5353ac01aa55864541978bfeb8409618543d42a6b39f7635160364?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                    alt="Sort icon"
                    className={styles.sortIcon}
                />
                <span className={styles.sortText}>по дате: Сначала новые</span>
            </div>

            <section className={styles.ordersList}>
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <React.Fragment key={index}>
                            <OrderCard order={order} />
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
