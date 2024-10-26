import React from 'react';
import styles from './Orders.module.css';
import { OrderItem } from '../../types/Product.ts';

interface OrderCardProps {
    order: OrderItem;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    return (
        <article className={styles.orderCard}>
            <span className={styles.orderType}>{order.type}</span>
            <h3 className={styles.orderTitle}>{order.title}</h3>
            <p className={styles.orderExpiry}>{order.expiryDate}</p>
            <p className={styles.orderPrice}>{order.price}</p>
            {order.canClaim && (
                <button className={styles.claimButton}>
                    Забрать заказ
                </button>
            )}
        </article>
    );
};