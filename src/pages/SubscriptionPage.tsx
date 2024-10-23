
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from "../components/MainComponent/MainComponent";
import ProductCardContainer from "../components/ProductCard/ProductCardContainer";
import PricingSubscriptionContainer from "../components/PricingContainer/PricingSubscriptionContainer.tsx";

function SubscriptionPage() {
    const { id } = useParams<{ id: string }>(); // Получаем id из URL
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState<"1 месяц" | "3 месяца" | "12 месяцев">("1 месяц");

    // Данные о подписках PS Plus и EA Play
    const subscriptions = {
        psPlus: [
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2372f876f17e80a5c391fcaf9b7b560c0b9fa85891a77a73562ef4ad4f32d0",
                name: "PS Plus Essential",
                price: {
                    "1 месяц": "850",
                    "3 месяца": "1 990",
                    "12 месяцев": "5 790",
                },
            },
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/30b28e31709e43ac2ec45f01bec4a9b51423c96614b2e2c267968bb756d88efd",
                name: "PS Plus Extra",
                price: {
                    "1 месяц": "1 290",
                    "3 месяца": "3 090",
                    "12 месяцев": "8 990",
                },
            },
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49",
                name: "PS Plus Deluxe",
                price: {
                    "1 месяц": "1 490",
                    "3 месяца": "3 590",
                    "12 месяцев": "10 990",
                },
            },
        ],
        eaPlay: [
            {
                imageSrc: "img/ea1.svg",
                name: "EA Play Basic",
                price: {
                    "1 месяц": "1 290",
                    "3 месяца": "3 090",
                    "12 месяцев": "6 690",
                },
            },
            {
                imageSrc: "img/ea12.svg",
                name: "EA Play Pro",
                price: {
                    "1 месяц": "1 990",
                    "3 месяца": "4 590",
                    "12 месяцев": "9 990",
                },
            },
        ],
    };

    // Логика выбора подписки на основе id
    useEffect(() => {
        window.scrollTo(0, 0);

        if (id) {
            setLoading(true);

            const allSubscriptions = [...subscriptions.psPlus, ...subscriptions.eaPlay];
            const selectedSubscription = allSubscriptions[parseInt(id) - 1]; // Находим подписку по индексу

            if (selectedSubscription) {
                setProduct({
                    id: id,
                    imageUrl: selectedSubscription.imageSrc, // Изображение из подписки
                    title: selectedSubscription.name, // Название подписки
                    price: selectedSubscription.price[selectedPeriod], // Цена подписки за выбранный период
                    currency: "Р",
                    details: [
                        { label: "Период подписки", value: selectedPeriod },
                    ],
                    description: `Подписка ${selectedSubscription.name} на ${selectedPeriod}`, // Описание подписки
                    allPrices: selectedSubscription.price, // Все цены подписки
                    count: Object.keys(selectedSubscription.price).length // Количество периодов подписки (2 или 3)
                });

                // // Скрываем PricingSubscriptionContainer
                // const pricingContainer = document.querySelector('.pricingContainer') as HTMLElement;
                // if (pricingContainer) {
                //     pricingContainer.style.display = 'none';
                // }
            } else {
                setProduct(null); // Если подписка не найдена
            }
            setLoading(false);
        }
    }, [id, selectedPeriod]); // Добавляем зависимость от периода

    if (loading) return <p>Загрузка...</p>;
    if (!product) return <p>Подписка не найдена.</p>;

    return (
        <div>
            <MainComponent />

            {/* PricingSubscriptionContainer по умолчанию видим, но скрывается через querySelector */}
            <div className="pricingContainer">
                <PricingSubscriptionContainer
                    selectedPeriod={selectedPeriod}
                    onPeriodChange={(newPeriod) => setSelectedPeriod(newPeriod)}
                    prices={product?.allPrices}
                />
            </div>

            {/* Карточка продукта, данные о подписке передаются */}
            <ProductCardContainer product={product} />
        </div>
    );
}

export default SubscriptionPage;
