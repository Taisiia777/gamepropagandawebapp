
import React from "react";
import styles from "./OrderSummary.module.css";

interface OrderSummaryProps {
  totalAmount: number;
  currency: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalAmount,
  currency,
}) => {
  return (
    <section className={styles.orderSummary}>
      <form>
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
