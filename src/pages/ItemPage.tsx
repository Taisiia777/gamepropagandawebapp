//
//
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import MainComponent from "../components/MainComponent/MainComponent";
// import ProductCardContainer from "../components/ProductCard/ProductCardContainer";
//
// function ItemPage() {
//     const { id } = useParams<{ id: string }>();
//     const [product, setProduct] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         window.scrollTo(0, 0);
//
//         if (id) {
//             setLoading(true);
//             // fetch(`http://localhost:3001/products/${id}`)
//             fetch(`https://03f4-95-161-221-131.ngrok-free.app/products/${id}`, {
//                 headers: {
//                      'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
//                  }
//              })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setProduct({
//                         id: id,
//                         imageUrl: `https:${data.media[0]?.Uri}`, // добавляем https
//                         title: data.name || "Товар",
//                         price: data.discounted_price || data.base_price,
//                         currency: "₽",
//                         details: [
//                             { label: "Платформа", value: data.platforms.join(", ") || "Не указано" },
//                             { label: "Жанр", value: data.genres.join(", ") || "Не указано" },
//                             { label: "Локализация", value: data.spoken_languages.length ? data.spoken_languages.join(", ") : "Не указано" }
//                         ],
//                         description: data.description || "Описание не указано"
//                     });
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Ошибка загрузки товара:", error);
//                     setLoading(false);
//                 });
//         }
//     }, [id]);
//
//     if (loading) return <p>Загрузка...</p>;
//     if (!product) return <p>Товар не найден.</p>;
//
//     return (
//         <div>
//             <MainComponent />
//             <ProductCardContainer product={product} />
//         </div>
//     );
// }
//
// export default ItemPage;
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

            fetch(`https://03f4-95-161-221-131.ngrok-free.app/products/${id}`, {
                headers: {
                    'ngrok-skip-browser-warning': '1' // Добавляем заголовок для игнорирования предупреждения
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const extractImageUrl = (media: string | Array<{ Uri: string }>): string => {
                        try {
                            // Если media - это строка, попробуем её распарсить
                            if (typeof media === 'string') {
                                const parsedMedia = JSON.parse(media);
                                // Попробуем найти объект с типом "IMAGE"
                                const imageMedia = parsedMedia.find((item: { type: string }) => item.type === 'IMAGE');
                                if (imageMedia) {
                                    return imageMedia.url; // Возвращаем url изображения
                                }
                            } else if (Array.isArray(media)) {
                                return `https:${media[0]?.Uri}`; // Если это массив, вернем первый элемент Uri с добавлением https
                            }
                        } catch (error) {
                            console.error('Ошибка при парсинге media:', error);
                        }
                        return 'img/default.png'; // Если нет картинки или ошибка, используем изображение по умолчанию
                    };

                    setProduct({
                        id: id,
                        imageUrl: extractImageUrl(data.media), // Обрабатываем media для получения ссылки на изображение
                        title: data.name || "Товар",
                        price: data.discounted_price || data.base_price || "Бесплатно", // Если цены нет, показываем "Бесплатно"
                        currency: "₽",
                        details: [
                            { label: "Платформа", value: data.platforms?.join(", ") || "Не указано" },
                            { label: "Жанр", value: data.genres?.join(", ") || "Не указано" },
                            { label: "Локализация", value: data.spoken_languages?.length ? data.spoken_languages.join(", ") : "Не указано" }
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
