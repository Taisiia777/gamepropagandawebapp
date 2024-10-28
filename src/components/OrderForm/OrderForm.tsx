//
//
//
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store.ts";
// import styles from "./OrderForm.module.css";
// import CheckboxGroup from "./CheckboxGroup.tsx";
//
// const OrderFormSwitcher: React.FC = () => {
//     // Состояние для управления отображаемой формой
//     const [isAccountForm, setIsAccountForm] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     // Получаем userId из userSlice
//     const userId = useSelector((state: RootState) => state.user.userId);
//
//     // Обработчик для переключения форм
//     const handleFormSwitch = (accountForm: boolean) => {
//         setIsAccountForm(accountForm);
//     };
//
//     // Обработчик для отправки формы
//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//
//         // Проверяем, что email и password заполнены
//         if (email && password && userId) {
//             try {
//                 const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                         'ngrok-skip-browser-warning': '1',
//
//                     },
//                     body: JSON.stringify({
//                         email,
//                         password,
//                     }),
//                 });
//
//                 if (!response.ok) {
//                     throw new Error("Ошибка при обновлении данных пользователя");
//                 }
//
//                 const data = await response.json();
//                 console.log("Успешно обновлено:", data);
//             } catch (error) {
//                 console.error("Ошибка:", error);
//             }
//         } else {
//             console.log("Email или пароль не заполнены.");
//         }
//     };
//     return (
//         <div>
//             {/* Форма для аккаунта */}
//             {!isAccountForm ? (
//                 <form className={styles.orderForm} onSubmit={handleSubmit}>
//                     <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
//                     <button
//                         type="button"
//                         className={styles.button}
//                         onClick={() => handleFormSwitch(true)} // Переключаем на форму для аккаунта
//                     >
//                         На мой аккаунт
//                     </button>
//                     <button
//                         type="button"
//                         className={styles.buttonOutlined}
//                         onClick={() => handleFormSwitch(false)} // Оставляем форму для создания аккаунта
//                     >
//                         У меня нет аккаунта
//                     </button>
//                     <p className={styles.description}>
//                         Наш менеджер бесплатно создаст для вас аккаунт и сразу оформит на него заказ.
//                         <br />
//                         <br />
//                         Для создания нужна ваша почта на Gmail, Hotmail, Outlook, iCloud или Яндекс.
//                     </p>
//                     <label htmlFor="email" className={styles["visually-hidden"]}>
//                         Email address
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         className={styles.input}
//                         placeholder="Введите email"
//                         aria-label="Email address"
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <CheckboxGroup
//                         id="noAccount"
//                         label="Я не регистрировал аккаунт на эту почту в Playstation ранее"
//
//                     />
//                     <label htmlFor="promoCode" className={styles["visually-hidden"]}>
//                         Promo code
//                     </label>
//                     <input
//                         type="text"
//                         id="promoCode"
//                         className={styles.input}
//                         placeholder="У меня есть промокод"
//                         aria-label="Promo code"
//                     />
//                     <CheckboxGroup
//                         id="privacyPolicy"
//                         label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
//
//                     />
//                     <CheckboxGroup
//                         id="termsOfService"
//                         label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
//
//                     />
//                 </form>
//             ) : (
//                 // Форма для входа в аккаунт
//                 <form className={styles.orderForm} onSubmit={handleSubmit}>
//                     <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
//                     <button
//                         type="button"
//                         className={styles.buttonOutlined}
//                         onClick={() => handleFormSwitch(true)} // Переключаем на форму для аккаунта
//                     >
//                         На мой аккаунт
//                     </button>
//                     <button
//                         type="button"
//                         className={styles.button}
//                         onClick={() => handleFormSwitch(false)} // Оставляем форму для создания аккаунта
//                     >
//                         У меня нет аккаунта
//                     </button>
//
//                     <p className={styles.turkishAccountText}>
//                         У меня есть турецкий аккаунт, оформите на него
//                     </p>
//
//                     <h2 className={styles.title}>Данные аккаунта</h2>
//
//                     <input
//                         type="email"
//                         name="email"
//                         className={styles.input}
//                         placeholder="Введите e-mail"
//                         aria-label="Email address"
//                         onChange={(e) => setEmail(e.target.value)}
//
//                     />
//
//                     <input
//                         type="password"
//                         name="password"
//                         className={styles.input}
//                         placeholder="Введите пароль"
//                         aria-label="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//
//                     />
//
//
//
//                     <CheckboxGroup
//                         id="rememberData"
//                         label="Запомнить данные для следующих заказов"
//
//                     />
//
//                     <input
//                         type="text"
//                         name="promoCode"
//                         className={styles.input}
//                         placeholder="У меня есть промокод"
//                         aria-label="Promo code"
//                     />
//
//                     <CheckboxGroup
//                         id="privacyPolicy"
//                         label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
//
//                     />
//
//                     <CheckboxGroup
//                         id="termsAccepted"
//                         label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
//
//                     />
//                 </form>
//             )}
//         </div>
//     );
// };
//
// export default OrderFormSwitcher;
//









import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import styles from "./OrderForm.module.css";
import CheckboxGroup from "./CheckboxGroup.tsx";

const OrderFormSwitcher: React.FC = () => {
    // Состояние для управления отображаемой формой
    const [isAccountForm, setIsAccountForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [showEmailArrow, setShowEmailArrow] = useState(false);
    const [showPasswordArrow, setShowPasswordArrow] = useState(false);
    // Получаем userId из userSlice
    const userId = useSelector((state: RootState) => state.user.userId);

    // Обработчик для переключения форм
    const handleFormSwitch = (accountForm: boolean) => {
        setIsAccountForm(accountForm);
    };

    // Валидация email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Валидация пароля
    const validatePassword = (password: string) => {
        return password.length >= 6;
    };

    // Отправка email
    const handleEmailSubmit = async () => {
        const isEmailValid = validateEmail(email);
        setEmailError(!isEmailValid);
        setEmailSuccess(false);

        if (isEmailValid && userId) {
            try {
                const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}/email`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        'ngrok-skip-browser-warning': '1',
                    },
                    body: JSON.stringify({ email }),
                });

                if (!response.ok) {
                    throw new Error("Ошибка при обновлении email");
                }

                setEmailSuccess(true); // Успешная отправка
                setEmailError(false);
            } catch (error) {
                setEmailError(true); // Ошибка при отправке
                setEmailSuccess(false);
                console.error("Ошибка:", error);
            }
        }
    };

    // Отправка пароля
    const handlePasswordSubmit = async () => {
        const isPasswordValid = validatePassword(password);
        setPasswordError(!isPasswordValid);
        setPasswordSuccess(false);

        if (isPasswordValid && userId) {
            try {
                const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}/password`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        'ngrok-skip-browser-warning': '1',
                    },
                    body: JSON.stringify({ password }),
                });

                if (!response.ok) {
                    throw new Error("Ошибка при обновлении пароля");
                }

                setPasswordSuccess(true); // Успешная отправка
                setPasswordError(false);
            } catch (error) {
                setPasswordError(true); // Ошибка при отправке
                setPasswordSuccess(false);
                console.error("Ошибка:", error);
            }
        }
    };

    return (
        <div>
            {/* Форма для аккаунта */}
            {!isAccountForm ? (
                <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
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
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            id="email"
                            className={`${styles.input} ${emailError ? styles.errorBorder : emailSuccess ? styles.successBorder : ""}`}
                            placeholder="Введите email"
                            aria-label="Email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(false);
                                setEmailSuccess(false);
                                setShowEmailArrow(true);
                            }}
                        />
                        {showEmailArrow && (
                            <button type="button" className={styles.arrowButton} onClick={handleEmailSubmit}>
                                ➡️
                            </button>
                        )}
                    </div>
                    {emailError && <p className={styles.errorText}>Введите корректный email</p>}


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
                <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
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

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="email"
                            className={`${styles.input} ${emailError ? styles.errorBorder : emailSuccess ? styles.successBorder : ""}`}
                            placeholder="Введите e-mail"
                            aria-label="Email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(false);
                                setEmailSuccess(false);
                                setShowEmailArrow(true);
                            }}
                        />
                        {showEmailArrow && (
                            <button type="button" className={styles.arrowButton} onClick={handleEmailSubmit}>
                                ➡️
                            </button>
                        )}
                    </div>
                    {emailError && <p className={styles.errorText}>Введите корректный email</p>}

                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            name="password"
                            className={`${styles.input} ${passwordError ? styles.errorBorder : passwordSuccess ? styles.successBorder : ""}`}
                            placeholder="Введите пароль"
                            aria-label="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError(false);
                                setPasswordSuccess(false);
                                setShowPasswordArrow(true);
                            }}
                        />
                        {showPasswordArrow && (
                            <button type="button" className={styles.arrowButton} onClick={handlePasswordSubmit}>
                                ➡️
                            </button>
                        )}
                    </div>
                    {passwordError && <p className={styles.errorText}>Пароль должен содержать минимум 6 символов</p>}




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

