import React, { useState } from 'react';
import styles from './ReserveCodes.module.css';
import AccordionItem from './AccordionItem';

const accordionItems = [
    { title: 'Как сделать двухфакторку', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
    { title: 'Где найти резервные коды', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
    { title: 'Как обновить резервные коды', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cea3023ef9d7bf240df69818ee19579508257c07cf2463eb7de4d5811dd580e4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
];

const ReserveCodes: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleAddButtonClick = () => {
        setIsFormVisible(!isFormVisible);
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


                {isFormVisible && (
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
                )}


            </section>
            <section className={styles.accordionContainer}>
                {accordionItems.map((item, index) => (
                    <AccordionItem key={index} title={item.title} iconSrc={item.iconSrc} />
                ))}
            </section>
        </main>
    );
};

export default ReserveCodes;