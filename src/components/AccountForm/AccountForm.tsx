
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AccountForm.module.css';
import { RootState } from '../../store'; // Импорт типа RootState для работы с Redux

const AccountForm: React.FC = () => {
    const [email, setEmail] = useState(''); // Поле для email
    const [password, setPassword] = useState(''); // Поле для пароля
    const [isFormDisabled, setIsFormDisabled] = useState(true); // Для блокировки формы по умолчанию
    const [userId, setUserId] = useState<string | null>(null); // Для хранения userId
    const [buttonText, setButtonText] = useState('Редактировать'); // Для изменения текста кнопки

    // Получаем telegramId из глобального состояния (userSlice)
    const telegramId = useSelector((state: RootState) => state.user.telegramId);

    // Функция для получения userId по telegramId и блокировки формы
    useEffect(() => {
        const fetchUserId = async () => {
            if (!telegramId) {
                console.error("No telegramId found");
                return;
            }

            try {
                console.log("Fetching userId by telegramId...");
                const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/telegram/${telegramId}`, {
                    headers: {
                        'ngrok-skip-browser-warning': '1',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetched user data:", data);
                    setUserId(data.id); // Сохраняем userId из ответа

                    // Если поля email и password заполнены, блокируем форму
                    if (data.email && data.password) {
                        setEmail(data.email || ''); // Заполняем email
                        setPassword(data.password || ''); // Заполняем password
                        setIsFormDisabled(true); // Блокируем поля
                        setButtonText('Редактировать'); // Кнопка для редактирования
                    }
                } else {
                    console.error('Failed to fetch user ID');
                }
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, [telegramId]);

    // Функция для обработки кликов на кнопку
    const handleButtonClick = async () => {
        if (isFormDisabled) {
            console.log("Switching to editing mode...");
            // Если форма заблокирована, разблокируем для редактирования
            setIsFormDisabled(false);
            setButtonText('Сохранить');
        } else {
            console.log("Submitting form...");
            if (!userId) {
                alert("UserId не найден, невозможно сохранить данные.");
                return;
            }
            await handleSubmit();
        }
    };

    // Функция для отправки данных на сервер
    const handleSubmit = async () => {
        if (!userId) {
            console.error("No userId found, aborting submission.");
            return; // Если нет userId, отменяем отправку
        }

        console.log("Sending data to server:", { email, password });

        try {
            const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '1',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            console.log("Server response status:", response.status);

            if (!response.ok) {
                throw new Error('Failed to submit account details');
            }

            const data = await response.json();
            console.log('Account details submitted successfully:', data);

            // После успешной отправки блокируем форму и меняем текст кнопки на "Редактировать"
            setIsFormDisabled(true);
            setButtonText('Редактировать');
        } catch (error) {
            console.error('Error submitting account details:', error);
        }
    };

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Аккаунт</h1>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email" className={styles['visually-hidden']}>E-mail</label>
                <input
                    type="email"
                    id="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Обновляем состояние при изменении поля
                    placeholder="Введите e-mail"
                    aria-label="Введите e-mail"
                    required
                    disabled={isFormDisabled} // Отключаем инпут, если форма заблокирована
                />

                <label htmlFor="password" className={styles['visually-hidden']}>Пароль</label>
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Обновляем состояние при изменении поля
                    placeholder="Введите пароль"
                    aria-label="Введите пароль"
                    required
                    disabled={isFormDisabled} // Отключаем инпут, если форма заблокирована
                />

                <button type="button" className={styles.submitButton} onClick={handleButtonClick}>
                    {buttonText} {/* Меняем текст кнопки */}
                </button>
            </form>

            <Link to="/codes">
                <div className={styles.backupCodesContainer}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/586209002a9771b8b79b779e0cd836824cfc7522ec662dadd7bdf19474449677?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                        alt="Backup codes icon"
                        className={styles.backupCodesIcon}
                    />
                    <span style={{ color: "#fff" }}>Резервные коды</span>
                </div>
            </Link>
        </section>
    );
};

export default AccountForm;

