
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import MainComponent from "../components/MainComponent/MainComponent";
import ProductCardContainer from "../components/ProductCard/ProductCardContainer";
import PricingSubscriptionContainer from "../components/PricingContainer/PricingSubscriptionContainer";

interface ServerSubscription {
    id: number;
    name: string;
    price: number;
    duration: string; // Например, "1 месяц", "3 месяца", "12 месяцев"
    imageUrl?: string;
}

function SubscriptionPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState<"1 месяц" | "3 месяца" | "12 месяцев">("1 месяц");

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            setLoading(true);

            // Запрос данных о подписках с сервера
            axios.get<ServerSubscription[]>(`${import.meta.env.VITE_NGROK_URL}/subscriptions`, {
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            })
            .then(response => {
                const allSubscriptions = response.data;

                // Присваиваем одинаковый ID для подписок с одинаковым названием
                const nameToIdMap: { [key: string]: number } = {};
                let currentId = 1;

                const subscriptionsWithUniqueIds = allSubscriptions.map(sub => {
                    if (!nameToIdMap[sub.name]) {
                        nameToIdMap[sub.name] = currentId;
                        currentId += 1;
                    }
                    return { ...sub, id: nameToIdMap[sub.name] };
                });

                // Находим подписки с совпадающим `id`
                const selectedSubscriptions = subscriptionsWithUniqueIds.filter(sub => sub.id === parseInt(id));

                if (selectedSubscriptions.length > 0) {
                    // Создаем объект с ценами для каждого периода
                    const pricesByDuration: { [key: string]: string } = {};
                    selectedSubscriptions.forEach(sub => {
                        pricesByDuration[sub.duration] = `${sub.price}`;
                    });

                    setProduct({
                        id: id,
                        imageUrl: selectedSubscriptions[0].imageUrl || "",
                        title: selectedSubscriptions[0].name,
                        price: pricesByDuration[selectedPeriod],
                        currency: "Р",
                        details: [
                            { label: "Период подписки", value: selectedPeriod },
                        ],
                        description: `Подписка ${selectedSubscriptions[0].name} на ${selectedPeriod}`,
                        allPrices: pricesByDuration,
                        count: Object.keys(pricesByDuration).length,
                    });
                } else {
                    setProduct(null);
                }
            })
            .catch(error => {
                console.error("Ошибка при загрузке подписок:", error);
                setProduct(null);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [id, selectedPeriod]);

    if (loading) return <p>Загрузка...</p>;
    if (!product) return (
        <div>
            <p>Подписка не найдена.</p>
        </div>
    );
    return (
        <div>
            <MainComponent />

            <div className="pricingContainer">
                <PricingSubscriptionContainer
                    selectedPeriod={selectedPeriod}
                    onPeriodChange={(newPeriod) => setSelectedPeriod(newPeriod)}
                    prices={product?.allPrices}
                />
            </div>

            <ProductCardContainer product={product} />
        </div>
    );
}

export default SubscriptionPage;
