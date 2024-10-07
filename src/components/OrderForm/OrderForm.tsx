
import React from "react";
import styles from "./OrderForm.module.css";
import CheckboxGroup from "./CheckboxGroup";

const OrderForm: React.FC = () => {
  return (
    <form className={styles.orderForm}>
      <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
      <button type="button" className={styles.button}>
        На мой аккаунт
      </button>
      <button type="button" className={styles.buttonOutlined}>
        У меня нет аккаунта
      </button>
      <p className={styles.description}>
        Наш менеджер бесплатно создаст для вас аккаунт и сразу оформит на него
        заказ.
        <br />
        <br />
        Для создания нужна ваша почта на Gmail, Hotmail, Outlook, iCloud или
        Яндекс.
      </p>
      <label htmlFor="email" className={styles["visually-hidden"]}>
        Email address
      </label>
      <input
        type="email"
        id="email"
        className={styles.input}
        placeholder="Skill_brooks@gmail.com"
        aria-label="Email address"
      />
      <CheckboxGroup
        id="noAccount"
        label="Я не регистрировал аккаунт на эту почту в Playstation ранее"
      />
      <label htmlFor="promoCode" className={styles["visually-hidden"]}>
        Promo code
      </label>
      <input
        type="text"
        id="promoCode"
        className={styles.input}
        placeholder="У меня есть промокод"
        aria-label="Promo code"
      />
      <CheckboxGroup
        id="privacyPolicy"
        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
      />
      <CheckboxGroup
        id="termsOfService"
        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
      />
    </form>
  );
};

export default OrderForm;
