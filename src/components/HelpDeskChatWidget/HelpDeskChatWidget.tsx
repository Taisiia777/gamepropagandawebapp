import React, { useEffect } from 'react';

const HelpDeskChatWidget = () => {
    useEffect(() => {
        // Создаем новый элемент script
        const script = document.createElement('script');
        script.src = 'https://helpdeskeddy.com/widget.js'; // URL скрипта виджета
        script.async = true;

        // Добавляем скрипт в документ
        document.body.appendChild(script);

        // Инициализируем виджет с вашим уникальным идентификатором чата
        window.ChatSupport = window.ChatSupport || function() {
            (window.ChatSupport.q = window.ChatSupport.q || []).push(arguments);
        };
        window.ChatSupport('init', {
            chatSupportId: 'your-support-id', // Здесь укажите ваш уникальный ID
        });

        // Чистим скрипт при размонтировании компонента (опционально)
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // Компонент не отображает ничего, т.к. чат будет встроен через скрипт
};

export default HelpDeskChatWidget;
