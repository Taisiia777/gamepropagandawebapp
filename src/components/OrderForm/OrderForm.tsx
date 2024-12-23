


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import styles from "./OrderForm.module.css";
import CheckboxGroup from "./CheckboxGroup.tsx";

interface CartItem {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    imageUrl: string;
}

interface OrderFormProps {
    currency: string;
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const OrderFormSwitcher: React.FC<OrderFormProps> = ({
                                                         currency,
                                                         cartItems,
                                                         setCartItems,
                                                     }) => {
    const telegramId = useSelector((state: RootState) => state.user.telegramId);
    const userId = useSelector((state: RootState) => state.user.userId);

    const [isAccountForm, setIsAccountForm] = useState(false); // Переключение между шаблонами
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const [promoCode, setPromoCode] = useState(""); // Поле для промокода
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isThirdForm, setIsThirdForm] = useState(false); // Состояние для третьей формы
    const [emailForReceipt, setEmailForReceipt] = useState(""); // Поле для email для чека
    const [totalAmount, setTotalAmount] = useState(0);
    const [isRegisterAccount, setIsRegisterAccount] = useState(false);
    const [isApply, setIsApply] = useState(false);
    const [isApply1, setIsApply1] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0); // Скидка в процентах

  // Функция для пересчета итоговой суммы
  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((sum, item) => {
      const price = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("Р", "").trim());
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  };

  // Инициализируем общую сумму при загрузке компонента
  useEffect(() => {
    setTotalAmount(calculateTotal(cartItems));
  }, [cartItems]);

  // Используем setInterval для пересчета общей суммы каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(updatedCart);
      setTotalAmount(calculateTotal(updatedCart));
    }, 2000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, [setCartItems]);

    // Функция для получения userId по telegramId и блокировки формы
    useEffect(() => {
        const fetchUserId = async () => {
            if (!telegramId) {
                console.error("No telegramId found");
                return;
            }

            try {
                console.log("Fetching userId by telegramId...");
                const response = await fetch(
                    `${import.meta.env.VITE_NGROK_URL}/users/telegram/${telegramId}`,
                    {
                        headers: {
                            "ngrok-skip-browser-warning": "1",
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetched user data:", data);

                    // Если поля email и password заполнены, блокируем форму и переключаемся на третью форму
                    if (data.email && data.password) {
                        setEmail(data.email || ""); // Заполняем email
                        setPassword(data.password || ""); // Заполняем password
                        setIsThirdForm(true); // Переключаемся на третью форму
                    }
                } else {
                    console.error("Failed to fetch user ID");
                }
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };

        fetchUserId();
    }, [telegramId]);

    const handlePromoCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredCode = e.target.value;
        setPromoCode(enteredCode);
    
        if (enteredCode.trim() === "") {
            setDiscountPercent(0);
            return;
        }
    
        try {
            // Запрос на получение всех промокодов
            const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/promocodes`, {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                },
            });
    
            if (response.ok) {
                const promoCodes = await response.json();
    
                // Сравнение введенного промокода с полем `name` из списка промокодов
                const promo = promoCodes.find((code: any) => code.name.toLowerCase() === enteredCode.toLowerCase());
                
                if (promo) {
                    // Если промокод найден, применяем скидку
                    setDiscountPercent(promo.discountPercent);
                } else {
                    // Если промокод не найден, сбрасываем процент скидки
                    setDiscountPercent(0);
                }
            } else {
                console.error("Failed to fetch promo codes");
                setDiscountPercent(0);
            }
        } catch (error) {
            console.error("Error fetching promo codes:", error);
            setDiscountPercent(0);
        }
    };
    
    
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

    const clearFormData = () => {
        setEmail("");
        setEmailForReceipt("");
        setPassword("");
    };

    // Отправка данных пользователя (email или пароль в зависимости от формы)
    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault(); // Отменяем стандартное поведение формы

         let isEmailValid = true;
    let isPasswordValid = true;

    // Валидация полей только для активного шаблона формы
    if (!isAccountForm && !isThirdForm) {
        isEmailValid = validateEmail(email);
        setEmailError(!isEmailValid);
    } else if (isThirdForm) {
        isEmailValid = validateEmail(email);
        isPasswordValid = validatePassword(password);
        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);
    }

    // Если данные некорректны, отменяем отправку
    if (!isEmailValid || !isPasswordValid) {
        return;
    }
        // const isEmailValid = isAccountForm ? validateEmail(email) : true;
        // const isPasswordValid = !isAccountForm ? validatePassword(password) : true;

        // setEmailError(!isEmailValid && isAccountForm);
        // setPasswordError(!isPasswordValid && !isAccountForm);

        // if (!isEmailValid || !isPasswordValid) {
        //     // Если данные некорректны, отменяем отправку
        //     return;
        // }

        try {
            // Шаг 1: Отправляем данные пользователя (email или пароль)
            let userResponse;
            if (!isAccountForm && userId) {
                // Отправляем email, если это форма для аккаунта
                userResponse = await fetch(
                    `${import.meta.env.VITE_NGROK_URL}/users/${userId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": "1",
                        },
                        body: JSON.stringify({ email }), // Отправляем только email
                    }
                );
            } else if (isAccountForm && userId) {
                // Отправляем пароль, если это форма для входа
                userResponse = await fetch(
                    `${import.meta.env.VITE_NGROK_URL}/users/${userId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": "1",
                        },
                        body: JSON.stringify({ email, password }), // Отправляем только пароль
                    }
                );
            }

            if (userResponse && !userResponse.ok) {
                throw new Error("Ошибка при обновлении данных пользователя");
            }

            console.log("Данные пользователя успешно обновлены.");

            // Шаг 2: Создание заказа после успешного обновления данных
            const cleanedCartItems = cartItems.map((item) => ({
                id: parseInt(item.id, 10), // Преобразуем id продукта в Int
                name: item.title,
                imageSrc: item.imageUrl,
                newPrice: item.price, // Преобразуем очищенную цену в строку
                oldPrice: null, // Если нет старой цены, отправляем null
                quantity: 1, // Задаем количество
            }));

            const orderResponse = await fetch(
                `${import.meta.env.VITE_NGROK_URL}/users/${userId}/order`,
                {
                    method: "POST",
                    headers: {
                        "ngrok-skip-browser-warning": "1",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cartItems: cleanedCartItems, totalAmount }),
                }
            );

            if (!orderResponse.ok) throw new Error("Ошибка при создании заказа");

            const orderData = await orderResponse.json();
            console.log("Заказ успешно создан:", orderData);

            // Шаг 3: Получение ссылки для оплаты и редирект на страницу оплаты
            const paymentResponse = await fetch(
                `${import.meta.env.VITE_NGROK_URL}/payment/pay/${orderData.orderId}/${totalAmount}`,
                {
                    method: "GET",
                    headers: {
                        "ngrok-skip-browser-warning": "1",
                    },
                }
            );

            if (!paymentResponse.ok) throw new Error("Ошибка при создании ссылки для оплаты");

            const paymentData = await paymentResponse.json();
            console.log("Ссылка для оплаты:", paymentData);

            // Очистка корзины
            setCartItems([]);

            // Переход на страницу оплаты
            window.location.href = paymentData.paymentUrl;
        } catch (error) {
            console.error("Ошибка при создании заказа или обработке платежа:", error);
        }
    };
    const discountedTotalAmount = totalAmount - (totalAmount * discountPercent) / 100;

    return (
        <div>
            {/* Переключение форм */}
            {!isAccountForm && !isThirdForm ? (
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
                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я не регистрировал аккаунт на эту почту в Playstation ранее "
                        checked={isRegisterAccount}
                        onChange={() => setIsRegisterAccount(!isRegisterAccount)}

                    />
                    {/* Поле Промокод (необязательное) */}
                    {/* <input
                        type="text"
                        id="promoCode"
                        className={styles.input}
                        placeholder="У меня есть промокод"
                        aria-label="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    /> */}
<input
    type="text"
    id="promoCode"
    className={styles.input}
    placeholder="У меня есть промокод"
    aria-label="Promo code"
    value={promoCode}
    onChange={handlePromoCodeChange}
/>
                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
                        labelClassName="customLabelGray"  // Применяем класс для цвета
                        checked={isApply}
                        onChange={() => setIsApply(!isApply)}
                    />
                    <CheckboxGroup
                        id="termsOfService"
                        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
                        labelClassName="customLabelGray"  // Применяем класс для цвета
                        checked={isApply1}
                        onChange={() => setIsApply1(!isApply1)}
                    />

                    {/* <button type="submit" id="submitOrder" className={styles.submitButton}>
                        Оформить заказ на {totalAmount} {currency}
                    </button> */}
<button type="submit" id="submitOrder" className={styles.submitButton}>
    {`Оформить заказ на ${discountPercent > 0 ? discountedTotalAmount.toFixed(2) : totalAmount} ${currency}`}
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
            )  : isThirdForm ? (
                <form className={styles.orderForm} onSubmit={handleSubmitOrder}>
                    <h2 className={styles.title}>Куда оформить ваш заказ?</h2>
                    <button type="button" onClick={clearFormData} className={styles.clearButton}>
                        Очистить данные
                    </button>

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            className={`${styles.input} ${emailError ? styles.errorBorder : ""}`}
                            placeholder="Email от Sony"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Для чека"
                            value={emailForReceipt}
                            onChange={(e) => setEmailForReceipt(e.target.value)}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            className={`${styles.input} ${passwordError ? styles.errorBorder : ""}`}
                            placeholder="Пароль от Sony"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* <button type="submit" className={styles.submitButton}>
                        Оформить заказ на {totalAmount} {currency}
                    </button> */}
<button type="submit" id="submitOrder" className={styles.submitButton}>
    {`Оформить заказ на ${discountPercent > 0 ? discountedTotalAmount.toFixed(2) : totalAmount} ${currency}`}
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
                </form>                ) : (
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
                        label="E-mail для чека такой же, как логин"
                    />
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="check"
                            className={`${styles.input} ${emailError ? styles.errorBorder : ""}`}
                            placeholder="Введите  e-mail для чека"
                            aria-label="email"
                            value={check}
                            onChange={(e) => setCheck(e.target.value)}
                        />
                    </div>

                    <CheckboxGroup
                        id="rememberData"
                        label="Запомнить данные для следующих заказов"
                    />

                    {/* <input
                        type="text"
                        name="promoCode"
                        className={styles.input}
                        placeholder="У меня есть промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    /> */}
<input
    type="text"
    id="promoCode"
    className={styles.input}
    placeholder="У меня есть промокод"
    aria-label="Promo code"
    value={promoCode}
    onChange={handlePromoCodeChange}
/>
                    <CheckboxGroup
                        id="privacyPolicy"
                        label="Я ознакомлен и согласен с политикой обработки персональных данных оператора. *"
                        labelClassName="customLabelGray"  // Применяем класс для цвета

                    />

                    <CheckboxGroup
                        id="termsAccepted"
                        label="Я принимаю условия публичной оферты ИП Мызников М.Б. *"
                        labelClassName="customLabelGray"  // Применяем класс для цвета

                    />

                    {/* <button type="submit" id="submitOrder" className={styles.submitButton}>
                        Оформить заказ на {totalAmount} {currency}
                    </button> */}
<button type="submit" id="submitOrder" className={styles.submitButton}>
    {`Оформить заказ на ${discountPercent > 0 ? discountedTotalAmount.toFixed(2) : totalAmount} ${currency}`}
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
