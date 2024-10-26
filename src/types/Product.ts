
export interface Media {
    Uri: string;
    Width: number;
    Height: number;
    ImagePurpose: string;
}

export interface Product {
    id: string;
    external_id: string;
    name: string;
    base_price: string | null;
    discounted_price: string | null;
    description: string;
    release_date: string;
    publisher_name: string;
    genres: string[];
    platforms: string[];
    media: Media[];
    spoken_languages: string[];   // Разговорные языки
    screen_languages: string[];   // Языки интерфейса (субтитры)
}
export interface OrderItem {
    type: 'DLC' | 'Комплект' | 'Игра' | 'Пополнение';
    title: string;
    expiryDate: string;
    price: string;
    canClaim?: boolean;
}