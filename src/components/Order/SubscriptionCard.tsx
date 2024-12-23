import React from 'react';
import styles from './OrderCard.module.css'; // Переименуйте файл стилей, если это необходимо

interface SubscriptionCardProps {
    id?: number; // Сделали id опциональным
    name: string;
    price: number;
    startDate: string;
    endDate: string | null;
    isActive: boolean;
    imageUrl: string | null;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
    // id,
    name,
    price,
    startDate,
    endDate,
    isActive,
    // imageUrl,
}) => {
    return (
        <section className={styles.container}>
            <div className={styles.orderList} style={{marginTop:"20px"}}>
                <span className={`${styles.dlcBadge} ${isActive ? styles.activeBadge : styles.inactiveBadge}`}>
                    {isActive ? 'Активна' : 'Не активна'}
                </span>
                
                <div className={styles.orderItems}>
                    
                    <div >
                        <p className={styles.itemName}>{name}</p>
                        <p className={styles.orderExpiry}>
                            Дата начала: {new Date(startDate).toLocaleDateString()}
                        </p>
                        {endDate && (
                            <p className={styles.orderExpiry}>
                                Дата окончания: {new Date(endDate).toLocaleDateString()}
                            </p>
                        )}
                    </div>
                </div>

                <p className={styles.orderPrice}>{price} руб</p>


            </div>
        </section>
    );
};
