//
//
//
//
//
//
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
//     const [emailError, setEmailError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const [emailSuccess, setEmailSuccess] = useState(false);
//     const [passwordSuccess, setPasswordSuccess] = useState(false);
//     const [showEmailArrow, setShowEmailArrow] = useState(false);
//     const [showPasswordArrow, setShowPasswordArrow] = useState(false);
//     // Получаем userId из userSlice
//     const userId = useSelector((state: RootState) => state.user.userId);
//
//     // Обработчик для переключения форм
//     const handleFormSwitch = (accountForm: boolean) => {
//         setIsAccountForm(accountForm);
//     };
//
//     // Валидация email
//     const validateEmail = (email: string) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };
//
//     // Валидация пароля
//     const validatePassword = (password: string) => {
//         return password.length >= 6;
//     };
//
//     // Отправка email
//     const handleEmailSubmit = async () => {
//         const isEmailValid = validateEmail(email);
//         setEmailError(!isEmailValid);
//         setEmailSuccess(false);
//
//         if (isEmailValid && userId) {
//             try {
//                 const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                         'ngrok-skip-browser-warning': '1',
//                     },
//                     body: JSON.stringify({ email }),
//                 });
//
//                 if (!response.ok) {
//                     throw new Error("Ошибка при обновлении email");
//                 }
//
//                 setEmailSuccess(true); // Успешная отправка
//                 setEmailError(false);
//             } catch (error) {
//                 setEmailError(true); // Ошибка при отправке
//                 setEmailSuccess(false);
//                 console.error("Ошибка:", error);
//             }
//         }
//     };
//
//     // Отправка пароля
//     const handlePasswordSubmit = async () => {
//         const isPasswordValid = validatePassword(password);
//         setPasswordError(!isPasswordValid);
//         setPasswordSuccess(false);
//
//         if (isPasswordValid && userId) {
//             try {
//                 const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                         'ngrok-skip-browser-warning': '1',
//                     },
//                     body: JSON.stringify({ password }),
//                 });
//
//                 if (!response.ok) {
//                     throw new Error("Ошибка при обновлении пароля");
//                 }
//
//                 setPasswordSuccess(true); // Успешная отправка
//                 setPasswordError(false);
//             } catch (error) {
//                 setPasswordError(true); // Ошибка при отправке
//                 setPasswordSuccess(false);
//                 console.error("Ошибка:", error);
//             }
//         }
//     };
//
//     return (
//         <div>
//             {/* Форма для аккаунта */}
//             {!isAccountForm ? (
//                 <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
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
//                     <div className={styles.inputContainer}>
//                         <input
//                             type="email"
//                             id="email"
//                             className={`${styles.input} ${emailError ? styles.errorBorder : emailSuccess ? styles.successBorder : ""}`}
//                             placeholder="Введите email"
//                             aria-label="Email address"
//                             value={email}
//                             onChange={(e) => {
//                                 setEmail(e.target.value);
//                                 setEmailError(false);
//                                 setEmailSuccess(false);
//                                 setShowEmailArrow(true);
//                             }}
//                         />
//                         {showEmailArrow && (
//                             <button type="button" className={styles.arrowButton} onClick={handleEmailSubmit}>
//                                 ➡️
//                             </button>
//                         )}
//                     </div>
//                     {emailError && <p className={styles.errorText}>Введите корректный email</p>}
//
//
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
//                 <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
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
//                     <div className={styles.inputContainer}>
//                         <input
//                             type="email"
//                             name="email"
//                             className={`${styles.input} ${emailError ? styles.errorBorder : emailSuccess ? styles.successBorder : ""}`}
//                             placeholder="Введите e-mail"
//                             aria-label="Email address"
//                             value={email}
//                             onChange={(e) => {
//                                 setEmail(e.target.value);
//                                 setEmailError(false);
//                                 setEmailSuccess(false);
//                                 setShowEmailArrow(true);
//                             }}
//                         />
//                         {showEmailArrow && (
//                             <button type="button" className={styles.arrowButton} onClick={handleEmailSubmit}>
//                                 ➡️
//                             </button>
//                         )}
//                     </div>
//                     {emailError && <p className={styles.errorText}>Введите корректный email</p>}
//
//                     <div className={styles.inputContainer}>
//                         <input
//                             type="password"
//                             name="password"
//                             className={`${styles.input} ${passwordError ? styles.errorBorder : passwordSuccess ? styles.successBorder : ""}`}
//                             placeholder="Введите пароль"
//                             aria-label="Password"
//                             value={password}
//                             onChange={(e) => {
//                                 setPassword(e.target.value);
//                                 setPasswordError(false);
//                                 setPasswordSuccess(false);
//                                 setShowPasswordArrow(true);
//                             }}
//                         />
//                         {showPasswordArrow && (
//                             <button type="button" className={styles.arrowButton} onClick={handlePasswordSubmit}>
//                                 ➡️
//                             </button>
//                         )}
//                     </div>
//                     {passwordError && <p className={styles.errorText}>Пароль должен содержать минимум 6 символов</p>}
//
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
//
//
//
//
//
//
//
//
//
//
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store.ts";
// import styles from "./OrderForm.module.css";
// import CheckboxGroup from "./CheckboxGroup.tsx";
//
// interface OrderFormProps {
//     totalAmount: number;
//     currency: string;
//     cartItems: Array<{
//         id: string;
//         title: string;
//         subtitle: string;
//         price: number;
//         imageUrl: string;
//     }>;  // Добавляем товары из корзины как пропсы
//     setCartItems: React.Dispatch<React.SetStateAction<Array<{ id: string; title: string; subtitle: string; price: number; imageUrl: string; }>>>; // Функция для обновления состояния корзины
// }
//
// const OrderForm: React.FC<OrderFormProps> = ({
//                                                  totalAmount,
//                                                  currency,
//                                                  cartItems,
//                                                  setCartItems
//                                              }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [promoCode, setPromoCode] = useState(""); // Поле для промокода (необязательно)
//     const [emailError, setEmailError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const userId = useSelector((state: RootState) => state.user.userId);
//
//     // Валидация email и пароля
//     const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validatePassword = (password: string) => password.length >= 6;
//
//     // Функция отправки данных пользователя и создания заказа
//     const handleSubmitOrder = async (e: React.FormEvent) => {
//         e.preventDefault(); // Отменяем стандартное поведение формы
//
//         // Проверяем поля email и пароль
//         const isEmailValid = validateEmail(email);
//         const isPasswordValid = validatePassword(password);
//
//         setEmailError(!isEmailValid);
//         setPasswordError(!isPasswordValid);
//
//         // Если одно из полей неверное, прекращаем выполнение
//         if (!isEmailValid || !isPasswordValid) return;
//
//         try {
//             // Шаг 1: Обновляем данные пользователя на сервере
//             const userResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     'ngrok-skip-browser-warning': '1',
//                 },
//                 body: JSON.stringify({ email, password }), // Отправляем email и пароль
//             });
//
//             if (!userResponse.ok) throw new Error("Ошибка при обновлении данных пользователя");
//
//             // Шаг 2: После успешного обновления пользователя создаем заказ
//             const cleanedCartItems = cartItems.map(item => ({
//                 id: Number(item.id),
//                 name: item.title,
//                 imageSrc: item.imageUrl,
//                 newPrice: item.price,
//                 oldPrice: null,
//                 quantity: 1
//             }));
//
//             const orderResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}/order`, {
//                 method: "POST",
//                 headers: {
//                     'ngrok-skip-browser-warning': '1',
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     cartItems: cleanedCartItems,
//                 }),
//             });
//
//             if (!orderResponse.ok) throw new Error("Ошибка при создании заказа");
//
//             const orderData = await orderResponse.json();
//             console.log("Заказ успешно создан:", orderData);
//
//             // Шаг 3: Переходим к оплате
//             const paymentResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/payment/pay/${orderData.orderId}/${totalAmount}`, {
//                 method: "GET",
//                 headers: {
//                     'ngrok-skip-browser-warning': '1',
//                 },
//             });
//
//             if (!paymentResponse.ok) throw new Error("Ошибка при создании ссылки для оплаты");
//
//             const paymentData = await paymentResponse.json();
//             console.log("Ссылка для оплаты:", paymentData);
//
//             // Очистка корзины после успешного заказа
//             localStorage.removeItem("cart");
//             setCartItems([]);
//
//             // Перенаправление на страницу оплаты
//             window.location.href = paymentData.paymentUrl;
//
//         } catch (error) {
//             console.error("Ошибка при создании заказа или обработке платежа:", error);
//         }
//     };
//
//     return (
//         <form className={styles.orderForm} onSubmit={handleSubmitOrder}>
//             <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
//
//             {/* Поле Email */}
//             <div className={styles.inputContainer}>
//                 <input
//                     type="email"
//                     className={`${styles.input} ${emailError ? styles.errorBorder : ""}`}
//                     placeholder="Введите email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {emailError && <p className={styles.errorText}>Введите корректный email</p>}
//             </div>
//
//             {/* Поле Пароль */}
//             <div className={styles.inputContainer}>
//                 <input
//                     type="password"
//                     className={`${styles.input} ${passwordError ? styles.errorBorder : ""}`}
//                     placeholder="Введите пароль"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {passwordError && <p className={styles.errorText}>Пароль должен содержать минимум 6 символов</p>}
//             </div>
//
//             {/* Поле Промокод (необязательно) */}
//             <input
//                 type="text"
//                 className={styles.input}
//                 placeholder="У меня есть промокод"
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//             />
//
//             <CheckboxGroup id="privacyPolicy" label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *" />
//             <CheckboxGroup id="termsOfService" label="Я принимаю условия публичной оферты ИП Мызников М.Б. *" />
//
//             {/* Кнопка Оформить заказ */}
//             <button id="submitOrder" className={styles.submitButton}>
//                 Оформить заказ на {totalAmount}{" "}
//                 <span className={styles.boldText}>{currency}</span>
//             </button>
//         </form>
//     );
// };
//
// export default OrderForm;
//
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
    const [promoCode, setPromoCode] = useState(""); // Поле для промокода
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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

    // Отправка данных пользователя
    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault(); // Отменяем стандартное поведение формы

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        // Проверяем email и пароль
        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);

        if (!isEmailValid || !isPasswordValid) {
            // Если данные некорректны, отменяем отправку
            return;
        }

        try {
            // Шаг 1: Отправляем данные пользователя (email и пароль)
            const userResponse = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'ngrok-skip-browser-warning': '1',
                },
                body: JSON.stringify({ email, password }), // Отправляем вместе email и пароль
            });

            if (!userResponse.ok) {
                throw new Error("Ошибка при обновлении данных пользователя");
            }

            console.log("Данные пользователя успешно обновлены.");

            // Здесь можно добавить логику для создания заказа или другие действия после успешного обновления данных пользователя

        } catch (error) {
            console.error("Ошибка при обновлении данных пользователя:", error);
        }
    };

    return (
        <div>
            {/* Переключение форм */}
            {!isAccountForm ? (
                <form className={styles.orderForm} onSubmit={handleSubmitOrder}>
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
                        <br/>
                        <br/>
                        Для создания нужна ваша почта на Gmail, Hotmail, Outlook, iCloud или Яндекс.
                    </p>

                    {/* Поле Email */}
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            id="email"
                            className={`${styles.input} ${emailError ? styles.errorBorder : ""}`}
                            placeholder="Введите email"
                            aria-label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError && <p className={styles.errorText}>Введите корректный email</p>}

                    {/* Поле Промокод (необязательное) */}
                    <input
                        type="text"
                        id="promoCode"
                        className={styles.input}
                        placeholder="У меня есть промокод"
                        aria-label="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />

                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
                    />
                    <CheckboxGroup
                        id="termsOfService"
                        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
                    />

                    <button type="submit" id="submitOrder" className={styles.submitButton}>
                        Оформить заказ
                    </button>
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
                </form>
            ) : (
                // Форма для входа в аккаунт
                <form className={styles.orderForm} onSubmit={handleSubmitOrder}>
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

                    {/* Поле Email */}
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="email"
                            className={`${styles.input} ${emailError ? styles.errorBorder : ""}`}
                            placeholder="Введите e-mail"
                            aria-label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError && <p className={styles.errorText}>Введите корректный email</p>}

                    {/* Поле Пароль */}
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            name="password"
                            className={`${styles.input} ${passwordError ? styles.errorBorder : ""}`}
                            placeholder="Введите пароль"
                            aria-label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />

                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
                    />

                    <CheckboxGroup
                        id="termsAccepted"
                        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
                    />

                    <button type="submit" id="submitOrder" className={styles.submitButton}>
                        Оформить заказ
                    </button>
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
                </form>

            )}
        </div>
    );
};

export default OrderFormSwitcher;

