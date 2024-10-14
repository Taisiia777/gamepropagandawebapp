
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
}
