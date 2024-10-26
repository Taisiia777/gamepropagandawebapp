import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AccountForm.module.css';
import { RootState } from '../../store'; // Импорт типа RootState для работы с Redux

interface AccountFormProps {
    email?: string;
    password?: string;
}
const AccountForm: React.FC<AccountFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormDisabled, setIsFormDisabled] = useState(false); // Для блокировки формы

    // Получаем telegramId из глобального состояния (userSlice)
    const telegramId = useSelector((state: RootState) => state.user.telegramId);

    // Функция для получения данных пользователя
    useEffect(() => {
        const fetchUserData = async () => {
            if (!telegramId) return; // Если telegramId нет, не делаем запрос

            try {
                const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/telegram/${telegramId}`, {
                    headers: {
                        'ngrok-skip-browser-warning': '1',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.email || data.password) {
                        setEmail(data.email || ''); // Если почта есть, заполняем инпут
                        setPassword(data.password || ''); // Если пароль есть, заполняем инпут
                        setIsFormDisabled(true); // Делаем инпуты и кнопку неактивными
                    }
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [telegramId]);

    // Функция для отправки данных на сервер
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Останавливаем стандартное поведение формы

        if (isFormDisabled) return; // Если форма заблокирована, отменяем отправку

        try {
            // Отправляем email и пароль на бэкенд
            const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/users/${telegramId}`, {
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

            if (!response.ok) {
                throw new Error('Failed to submit account details');
            }

            const data = await response.json();
            console.log('Account details submitted successfully:', data);

            // Очистка формы после успешной отправки
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error submitting account details:', error);
        }
    };

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Аккаунт</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
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

                <button type="submit" className={styles.submitButton} disabled={isFormDisabled}>
                    Сохранить
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
