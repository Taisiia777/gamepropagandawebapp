import React, { useState } from 'react';
import styles from './ReserveCodes.module.css';
import AccordionItem from './AccordionItem';
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
const accordionItems = [
    { title: 'Как сделать двухфакторку', 
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c', 
    content: `➡️ Чтобы получить резервные коды, тебе нужно:

1. Войти в настройки учетной записи, затем в раздел «Безопасность» и подраздел «Двухэтапная аутентификация».

2. Выбрать «Приложение-аутентификатор» и следовать инструкциям. На экране появится список кодов, который тебе нужно прислать в этот чат.
`
    },
    { title: 'Где найти резервные коды', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c',
         content: `❓ Отменил двухэтапную аутентификацию и не сохранил коды? У тебя есть два варианта:

Вариант №1

Отменить двухэтапную аутентификацию (Настройки учетной записи — Безопасность — Двухэтапная аутентификация — Резервные коды) и привязать ее заново. Тем самым, получить новые резервные коды.

Вариант №2

Найти коды в своем аккаунте PSN (Настройки учетной записи — Безопасность — Двухэтапная аутентификация — Резервные коды). 

👉 Получив резервные коды, пришли их в этот чат.

        ` },
    { title: 'Как обновить резервные коды', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c',
         content: `❓ Закончились резервные коды? Вот что нужно сделать: 

1. Войди в настройки учетной записи, затем в раздел «Безопасность» и подраздел «Двухэтапная аутентификация».

2. Отмени двухэтапную аутентификацию и привяжи ее снова. После этого у тебя появятся новые коды.

3. После получения кодов, пришли их в этот чат.

        ` },
];

const ReserveCodes: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [verificationCode, setVerificationCode] = useState(''); // Для хранения кода
const [successMessage, setSuccessMessage] = useState(''); // Для сообщения об успехе
const userId = useSelector((state: RootState) => state.user.userId);

    const handleAddButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    };
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    // Обработчик отправки кода на сервер
    const handleSubmitCode = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '1',
                },
                body: JSON.stringify({ verificationCode }),
            });

            if (response.ok) {
                setSuccessMessage('Код успешно отправлен.');
                setVerificationCode(''); // Очистка поля после отправки
            } else {
                throw new Error('Не удалось отправить код');
            }
        } catch (error) {
            console.error('Ошибка отправки кода:', error);
            setSuccessMessage('Ошибка отправки кода');
        }
    };
    return (
        <main className={styles.mainContainer}>
            <section className={styles.contentWrapper}>
                <h1 className={styles.title}>Резервные коды</h1>
                <p className={styles.description}>
                    Напишите резервные коды от своего аккаунта PlayStation — бот использует их, чтобы быстрее оформлять ваши заказы.
                </p>
                <p className={styles.description}>
                    Чтобы у аккаунта появились резервные коды, включите в нём двухфакторную аутентификацию.
                </p>
            </section>
            <section className={styles.infoBox}>
                <h2 className={styles.infoBoxTitle}>Как найти резервные коды?</h2>
                <p className={styles.infoBoxContent}>
                    На PS5: нажмите сверху справа на Settings &gt; Users and Accounts &gt; Account &gt; Security &gt; 2-Step Verification &gt; Backup Codes.
                </p>
                <p className={styles.infoBoxContent}>
                    На PS4: нажмите сверху справа на Settings &gt; Account Management &gt; Account Information &gt; Security &gt; 2-Step Verification &gt; Backup Codes.
                </p>
                {!isFormVisible && (

                    <button className={styles.addButton} onClick={handleAddButtonClick}>Добавить новый код</button>  )}


                {/* {isFormVisible && (
                    <form className={styles.container}>
                        <input
                            type="text"
                            id="codeInput"
                            className={styles.input}
                            placeholder="Введите новый код"
                            aria-label="Введите новый код"
                        />
                        <img src="img/code.svg" alt="icon" className={styles.icon} />
                    </form>
                )} */}
{isFormVisible && (
    <form className={styles.form} onSubmit={handleSubmitCode} style={{display:"flex", flexDirection:"row", maxHeight:"50px"}}>
        <input
            type="text"
            value={verificationCode}
            onChange={handleCodeChange}
            className={styles.input}
            placeholder="Введите новый код"
            aria-label="Введите новый код"
        />
        <button type="submit" className={styles.submitButton} style={{padding: "0"}}>
        <img src="img/code.svg" alt="icon" className={styles.icon} />

        </button>
    </form>
)}

{successMessage && <p className={styles.successMessage}>{successMessage}</p>}


            </section>
            <section className={styles.accordionContainer}>
                {/* {accordionItems.map((item, index) => (
                    <AccordionItem key={index} title={item.title} iconSrc={item.iconSrc} />
                ))} */}
                  {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        iconSrc={item.iconSrc}
                        content={item.content}
                    />
                ))}
            </section>
        </main>
    );
};

export default ReserveCodes;