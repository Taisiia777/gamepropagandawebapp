import React from 'react';
import styles from './MinimumOrder.module.css';

interface MinimumOrderProps {
    minimumAmount: number;
    onCatalogClick: () => void;
    privacyPolicyUrl: string;
}

export const MinimumOrder: React.FC<MinimumOrderProps> = ({
                                                              minimumAmount,
                                                              onCatalogClick,
                                                              privacyPolicyUrl
                                                          }) => {
    return (
        <section className={styles.container}>
            <p className={styles.minimumOrderButton}>
                Минимальная сумма заказа{" "}
                <span className={styles.boldText}>{minimumAmount} </span>
                <span className={styles.boldText}>₽</span>
            </p>

            <button
                className={styles.catalogButton}
                onClick={onCatalogClick}
                type="button"
            >
                Перейти в каталог
            </button>

            <p className={styles.privacyText}>
                Ваши личные данные будут использоваться для обработки ваших заказов,
                упрощения вашей работы с сайтом и для других целей, описанных в нашей{" "}
                <a
                    href={privacyPolicyUrl}
                    className={styles.privacyTextUnderline}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    политика конфиденциальности
                </a>
            </p>
        </section>
    );
};