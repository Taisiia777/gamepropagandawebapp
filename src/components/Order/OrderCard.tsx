// import React from 'react';
// import styles from './Orders.module.css';
// import { OrderItem } from '../../types/Product.ts';
//
// interface OrderCardProps {
//     order: OrderItem;
// }
//
// export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
//     return (
//         <article className={styles.orderCard}>
//             <span className={styles.orderType}>{order.type}</span>
//             <h3 className={styles.orderTitle}>{order.title}</h3>
//             <p className={styles.orderExpiry}>{order.expiryDate}</p>
//             <p className={styles.orderPrice}>{order.price}</p>
//             {order.canClaim && (
//                 <button className={styles.claimButton}>
//                     Забрать заказ
//                 </button>
//             )}
//         </article>
//     );
// };
import React from 'react';
import styles from './Orders.module.css';

interface Item {
    id: number;
    name: string;
    imageSrc: string;
    newPrice: number;
    oldPrice: number | null;
    quantity: number;
}

interface OrderCardProps {
    orderId: number;
    totalAmount: number;
    items: Item[]; // Обязательно передаем массив товаров
    createdAt: string;
}

export const OrderCard: React.FC<OrderCardProps> = ({ orderId, totalAmount, items, createdAt }) => {
    return (
        <article className={styles.orderCard}>
            <h3 className={styles.orderTitle}>Заказ №{orderId}</h3>
            <p className={styles.orderDate}>Дата заказа: {new Date(createdAt).toLocaleDateString()}</p>
            <p className={styles.orderTotal}>Общая сумма: {totalAmount} руб.</p>

            <div className={styles.orderItems}>
                <h4>Товары в заказе:</h4>
                {items.length > 0 ? (
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className={styles.orderItem}>
                                <img src={item.imageSrc} alt={item.name} className={styles.itemImage} />
                                <div>
                                    <p className={styles.itemName}>{item.name}</p>
                                    <p className={styles.itemQuantity}>Количество: {item.quantity}</p>
                                    <p className={styles.itemPrice}>Цена: {item.newPrice} руб.</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Нет товаров в заказе</p>
                )}
            </div>
        </article>
    );
};
