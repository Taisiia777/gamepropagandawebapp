
export interface Media {
    Uri: string;
    Width: number;
    Height: number;
    ImagePurpose: string;
}


export interface Product {
    id: string;
    external_id: string;
    active: boolean;
    average_rating: string; // Учитывайте, что это строка, возможно, нужно будет преобразовать в число для сортировки
    base_price: string;
    categories: string[];
    converted_base_price: string;
    converted_discounted_price: string;
    description: string;
    discount_end_date: string | null;
    discounted_price: string;
    eng_name: string;
    genres: string[];
    media: string;
    name: string;
    pegi: string;
    platform_constraints: string[];
    platform_types: string[];
    platforms: string[];
    publisher_name: string;
    related_products: string[];
    release_date: string; // Дата выпуска, используемая для сортировки по дате
    screen_languages: string[];
    service: string;
    spoken_languages: string[];
    total_ratings_count: number;
    updated_at: string;
}

export interface OrderItem {
    type: 'DLC' | 'Комплект' | 'Игра' | 'Пополнение';
    title: string;
    expiryDate: string;
    price: string;
    canClaim?: boolean;
}