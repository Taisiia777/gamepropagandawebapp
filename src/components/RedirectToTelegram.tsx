import { useEffect } from "react";

const RedirectToTelegram: React.FC = () => {
    useEffect(() => {
        const isTelegramWebApp = () => {
            return window.Telegram?.WebApp.initData || false;
        };

        const redirectToTelegram = () => {
            const telegramUrl = 'https://t.me/gamepropagandawebapptestbot';
            window.location.href = telegramUrl;
        };

        if (!isTelegramWebApp()) {
            redirectToTelegram();
        }
    }, []);

    return null; // Компонент не рендерит ничего
};

export default RedirectToTelegram;
