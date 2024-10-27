
import React from 'react';
import styles from './OrderCard.module.css';

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
    console.log(orderId)
    return (
        // <article className={styles.container}>
        //     <h3 className={styles.orderTitle}>Заказ №{orderId}</h3>
        //     <p className={styles.orderDate}>Дата заказа: {new Date(createdAt).toLocaleDateString()}</p>
        //     <p className={styles.orderTotal}>Общая сумма: {totalAmount} руб.</p>
        //
        //     <div className={styles.orderItems}>
        //         <h4>Товары в заказе:</h4>
        //         {items.length > 0 ? (
        //             <div>
        //                 {items.map((item) => (
        //                     <div key={item.id} className={styles.orderItem}>
        //                         <div>
        //                             <p className={styles.itemName}>{item.name}</p>
        //                             <p className={styles.itemQuantity}>Количество: {item.quantity}</p>
        //                             <p className={styles.itemPrice}>Цена: {item.newPrice} руб.</p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         ) : (
        //             <p>Нет товаров в заказе</p>
        //         )}
        //     </div>
        // </article>
        <section className={styles.container}>
            <div className={styles.orderList}>
                <span className={styles.dlcBadge}>Игра</span>
                     <div className={styles.orderItems}>
                         {items.length > 0 ? (
                                <div>
                                    {items.map((item) => (
                                        <div key={item.id} className={styles.orderItem}>
                                            <div>
                                                <p className={styles.itemName}>{item.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Нет товаров в заказе</p>
                            )}
                        </div>
                {/*<h2 className={styles.orderTitle}>Заказ №{orderId}</h2>*/}
                <p className={styles.orderExpiry}>Дата: {new Date(createdAt).toLocaleDateString()}</p>
                <p className={styles.orderPrice}>{totalAmount} руб</p>
                <button
                    className={styles.orderButton}
                    onClick={()=>{}}
                    type="button"
                >
                    Забрать заказ
                </button>
            </div>
            <hr className={styles.divider}/>
        </section>
    );
};
