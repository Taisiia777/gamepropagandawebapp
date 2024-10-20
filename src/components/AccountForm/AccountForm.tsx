import React from 'react';
import styles from './AccountForm.module.css';
import {Link} from "react-router-dom";

interface AccountFormProps {}

const AccountForm: React.FC<AccountFormProps> = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Аккаунт</h1>
            <form className={styles.form}>
                <label htmlFor="email" className={styles['visually-hidden']}>E-mail</label>
                <input
                    type="email"
                    id="email"
                    className={styles.input}
                    placeholder="Введите e-mail"
                    aria-label="Введите e-mail"
                />

                <label htmlFor="password" className={styles['visually-hidden']}>Пароль</label>
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    placeholder="Введите пароль"
                    aria-label="Введите пароль"
                />

                <div className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        id="sameEmail"
                        className={styles.checkbox}
                    />
                    <label htmlFor="sameEmail" className={styles.checkboxLabel}>
                        E-mail для чека такой же, как логин
                    </label>
                </div>

                <label htmlFor="receiptEmail" className={styles['visually-hidden']}>E-mail для чека</label>
                <input
                    type="email"
                    id="receiptEmail"
                    className={styles.input}
                    placeholder="Введите e-mail для чека"
                    aria-label="Введите e-mail для чека"
                />

                <p className={styles.verificationMessage} style={{ color: "rgba(231,231,231,0.3)" }}>
                    Подтверди свою электронную почту. Не получил письмо?{" "}
                    <span style={{ color: "rgba(231,231,231,1)" }}>Отправить снова</span>
                </p>
            </form>

            <hr className={styles.divider} />
            <Link to="/codes">
                <div className={styles.backupCodesContainer}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/586209002a9771b8b79b779e0cd836824cfc7522ec662dadd7bdf19474449677?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                        alt="Backup codes icon"
                        className={styles.backupCodesIcon}
                    />
                    <span style={{color: "#fff"}}>Резервные коды</span>
                </div>
            </Link>

        </section>
    );
};

export default AccountForm;