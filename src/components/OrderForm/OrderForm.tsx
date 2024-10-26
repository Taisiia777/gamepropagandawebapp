
import React, { useState } from "react";
import styles from "./OrderForm.module.css";
// import { CheckboxField } from "./CheckboxField.tsx";
import CheckboxGroup from "./CheckboxGroup.tsx"; // Используем для второй формы

const OrderFormSwitcher: React.FC = () => {
    // Состояние для управления отображаемой формой
    const [isAccountForm, setIsAccountForm] = useState(false);

    // Обработчик для переключения форм
    const handleFormSwitch = (accountForm: boolean) => {
        setIsAccountForm(accountForm);
    };

    return (
        <div>
            {/* Форма для аккаунта */}
            {!isAccountForm ? (
                <form className={styles.orderForm}>
                    <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => handleFormSwitch(true)} // Переключаем на форму для аккаунта
                    >
                        На мой аккаунт
                    </button>
                    <button
                        type="button"
                        className={styles.buttonOutlined}
                        onClick={() => handleFormSwitch(false)} // Оставляем форму для создания аккаунта
                    >
                        У меня нет аккаунта
                    </button>
                    <p className={styles.description}>
                        Наш менеджер бесплатно создаст для вас аккаунт и сразу оформит на него заказ.
                        <br />
                        <br />
                        Для создания нужна ваша почта на Gmail, Hotmail, Outlook, iCloud или Яндекс.
                    </p>
                    <label htmlFor="email" className={styles["visually-hidden"]}>
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        placeholder="Введите email"
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
            ) : (
                // Форма для входа в аккаунт
                <form className={styles.orderForm}>
                    <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
                    <button
                        type="button"
                        className={styles.buttonOutlined}
                        onClick={() => handleFormSwitch(true)} // Переключаем на форму для аккаунта
                    >
                        На мой аккаунт
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => handleFormSwitch(false)} // Оставляем форму для создания аккаунта
                    >
                        У меня нет аккаунта
                    </button>

                    <p className={styles.turkishAccountText}>
                        У меня есть турецкий аккаунт, оформите на него
                    </p>

                    <h2 className={styles.title}>Данные аккаунта</h2>

                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="Введите e-mail"
                        aria-label="Email address"
                    />

                    <input
                        type="password"
                        name="password"
                        className={styles.input}
                        placeholder="Введите пароль"
                        aria-label="Password"
                    />

                    {/*<CheckboxGroup*/}
                    {/*    id="sameEmail"*/}
                    {/*    label="E-mail для чека такой же, как логин"*/}

                    {/*/>*/}

                    {/*<input*/}
                    {/*    type="email"*/}
                    {/*    name="receiptEmail"*/}
                    {/*    className={styles.input}*/}
                    {/*    placeholder="Введите e-mail для чека"*/}
                    {/*    aria-label="Receipt email"*/}
                    {/*/>*/}

                    <CheckboxGroup
                        id="rememberData"
                        label="Запомнить данные для следующих заказов"

                    />

                    <input
                        type="text"
                        name="promoCode"
                        className={styles.input}
                        placeholder="У меня есть промокод"
                        aria-label="Promo code"
                    />

                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"

                    />

                    <CheckboxGroup
                        id="termsAccepted"
                        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"

                    />
                </form>
            )}
        </div>
    );
};

export default OrderFormSwitcher;
