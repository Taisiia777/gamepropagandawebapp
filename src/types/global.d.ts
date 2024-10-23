// interface TelegramWebApp {
//     initData: string;
//     initDataUnsafe: any;
//     expand(): void;
//     close(): void;
//     ready(): void;
//     BackButton: {
//         show(): void;
//         hide(): void;
//         onClick(callback: () => void): void;
//         offClick(callback?: () => void): void;
//     };
//     enableClosingConfirmation(): void;
// }
//
// interface Window {
//     Telegram?: {
//         WebApp: TelegramWebApp;
//     };
// }
interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;
    expand(): void;
    close(): void;
    ready(): void;
    BackButton: {
        show(): void;
        hide(): void;
        onClick(callback: () => void): void;
        offClick(callback?: () => void): void;
    };
    MainButton: {
        show(): void;
        hide(): void;
        setText(text: string): void;
        onClick(callback: () => void): void;
        offClick(callback?: () => void): void;
    };
    enableClosingConfirmation(): void;
}

interface Window {
    Telegram?: {
        WebApp: TelegramWebApp;
    };
}
