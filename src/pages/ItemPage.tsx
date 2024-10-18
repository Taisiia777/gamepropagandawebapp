

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from "../components/MainComponent/MainComponent";
import ProductCardContainer from "../components/ProductCard/ProductCardContainer";

function ItemPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (id) {
            setLoading(true);
            // fetch(`http://localhost:3001/products/${id}`)
            const apiUrl = process.env.REACT_APP_API_URL; // Получаем URL из .env
            alert(apiUrl)
            fetch(`${apiUrl}/products/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduct({
                        id: id,
                        imageUrl: `https:${data.media[0]?.Uri}`, // добавляем https
                        title: data.name || "Товар",
                        price: data.discounted_price || data.base_price,
                        currency: "₽",
                        details: [
                            { label: "Платформа", value: data.platforms.join(", ") || "Не указано" },
                            { label: "Жанр", value: data.genres.join(", ") || "Не указано" },
                            { label: "Локализация", value: data.spoken_languages.length ? data.spoken_languages.join(", ") : "Не указано" }
                        ],
                        description: data.description || "Описание не указано"
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Ошибка загрузки товара:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (!product) return <p>Товар не найден.</p>;

    return (
        <div>
            <MainComponent />
            <ProductCardContainer product={product} />
        </div>
    );
}

export default ItemPage;
