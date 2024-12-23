
// import React, { useState } from "react";
// import styles from "./SubscriptionComponent.module.css";
// import SubscriptionButton from "./SubscriptionButton";
// import SubscriptionItem from "./SubscriptionItem";
// import { Link } from 'react-router-dom';

// const SubscriptionComponent: React.FC = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState<"1 месяц" | "3 месяца" | "12 месяцев">("1 месяц");

//   const psPlusSubscriptions = [
//     {
//       id: 1,
//       imageSrc:
//           "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2372f876f17e80a5c391fcaf9b7b560c0b9fa85891a77a73562ef4ad4f32d0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: selectedPeriod === "1 месяц" ? "850 Р" :
//           selectedPeriod === "3 месяца" ? "1 990 Р" :
//               "5 790 Р",
//     },
//     {
//       id: 2,
//       imageSrc:
//           "https://cdn.builder.io/api/v1/image/assets/TEMP/30b28e31709e43ac2ec45f01bec4a9b51423c96614b2e2c267968bb756d88efd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Extra",
//       price: selectedPeriod === "1 месяц" ? "1 290 Р" :
//           selectedPeriod === "3 месяца" ? "3 090 Р" :
//               "8 990 Р",
//     },
//     {
//       id: 3,
//       imageSrc:
//           "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Deluxe",
//       price: selectedPeriod === "1 месяц" ? "1 490 Р" :
//           selectedPeriod === "3 месяца" ? "3 590 Р" :
//               "10 990 Р",
//     },
//   ];

//   const eaPlaySubscriptions = [
//     {
//       id: 4,
//       imageSrc: "img/ea1.svg",
//       name: "EA Play",
//       price: selectedPeriod === "1 месяц" ? "1 290 Р" : selectedPeriod === "12 месяцев" ? "6 690 Р" : null,
//     },
//   ];

//   const filteredEAPlaySubscriptions = eaPlaySubscriptions.filter(sub => sub.price);
//   const filteredPSPlusSubscriptions = psPlusSubscriptions.filter(sub => sub.price);

//   return (
//       <section className={styles.subscriptionContainer}>
//         {filteredPSPlusSubscriptions.length > 0 && (
//           <>
//             <h2 className={styles.sectionTitle}>Подписки PS Plus</h2>
//             <div className={styles.buttonGroup}>
//               {["1 месяц", "3 месяца", "12 месяцев"].map((period) => (
//                   <SubscriptionButton
//                       key={period}
//                       label={period}
//                       isActive={selectedPeriod === period}
//                       onClick={() => setSelectedPeriod(period as "1 месяц" | "3 месяца" | "12 месяцев")}
//                   />
//               ))}
//             </div>
//             {filteredPSPlusSubscriptions.map((sub) => (
//                 <Link to={`/subscriptions/${sub.id}`} key={sub.id} className={styles.subscriptionLink}>
//                   <SubscriptionItem {...sub} />
//                 </Link>
//             ))}
//           </>
//         )}

//         {filteredEAPlaySubscriptions.length > 0 && (
//           <>
//             <h2 className={styles.sectionTitle}>Подписки EA Play</h2>
//             {filteredEAPlaySubscriptions.map((sub) => (
//                 <Link to={`/subscriptions/${sub.id}`} key={sub.id} className={styles.subscriptionLink}>
//                   <SubscriptionItem {...sub} />
//                 </Link>
//             ))}
//           </>
//         )}

//         <button className={styles.viewAllButton}>
//           Смотреть все подписки
//         </button>
//       </section>
//   );
// };

// export default SubscriptionComponent;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styles from "./SubscriptionComponent.module.css";
import SubscriptionButton from "./SubscriptionButton";
import SubscriptionItem from "./SubscriptionItem";

interface ServerSubscription {
    id: number;
    name: string;
    price: number;
    duration: string; // Например, "1 месяц", "3 месяца", "12 месяцев"
    imageUrl?: string;
}

const SubscriptionComponent: React.FC = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<"1 месяц" | "3 месяца" | "12 месяцев">("1 месяц");
    const [psPlusSubscriptions, setPSPlusSubscriptions] = useState<ServerSubscription[]>([]);
    const [eaPlaySubscriptions, setEAPlaySubscriptions] = useState<ServerSubscription[]>([]);

    // Загружаем подписки с сервера
    useEffect(() => {
        axios.get<ServerSubscription[]>(`${import.meta.env.VITE_NGROK_URL}/subscriptions`, {
            headers: {
                'ngrok-skip-browser-warning': '1'
            }
        })
        .then(response => {
            // Создаем объект для отслеживания уникальных идентификаторов по названию
            const nameToIdMap: { [key: string]: number } = {};
            let currentId = 1;

            // Назначаем одинаковые идентификаторы для подписок с одинаковыми названиями
            const subscriptionsWithUniqueIds = response.data.map(sub => {
                if (!nameToIdMap[sub.name]) {
                    nameToIdMap[sub.name] = currentId;
                    currentId += 1;
                }
                return { ...sub, id: nameToIdMap[sub.name] };
            });

            // Разделяем подписки по категориям
            const psPlusSubs = subscriptionsWithUniqueIds.filter(sub => sub.name.includes("PS Plus"));
            const eaPlaySubs = subscriptionsWithUniqueIds.filter(sub => sub.name.includes("EA Play"));
            setPSPlusSubscriptions(psPlusSubs);
            setEAPlaySubscriptions(eaPlaySubs);
        })
        .catch(error => {
            console.error("Ошибка при загрузке подписок:", error);
        });
    }, []);

    // Фильтруем подписки в зависимости от выбранного периода
    const filteredPSPlusSubscriptions = psPlusSubscriptions
        .filter(sub => sub.duration === selectedPeriod)
        .map(sub => ({
            id: sub.id,
            imageSrc: sub.imageUrl || "",
            name: sub.name,
            price: `${sub.price} Р`,
            duration: sub.duration // Сохраняем duration
        }));

    const filteredEAPlaySubscriptions = eaPlaySubscriptions
        .filter(sub => sub.duration === selectedPeriod)
        .map(sub => ({
            id: sub.id,
            imageSrc: sub.imageUrl || "",
            name: sub.name,
            price: `${sub.price} Р`,
            duration: sub.duration // Сохраняем duration
        }));

    return (
        <section className={styles.subscriptionContainer}>
            {filteredPSPlusSubscriptions.length > 0 && (
                <>
                    <h2 className={styles.sectionTitle}>Подписки PS Plus</h2>
                    <div className={styles.buttonGroup}>
                        {["1 месяц", "3 месяца", "12 месяцев"].map((period) => (
                            <SubscriptionButton
                                key={period}
                                label={period}
                                isActive={selectedPeriod === period}
                                onClick={() => setSelectedPeriod(period as "1 месяц" | "3 месяца" | "12 месяцев")}
                            />
                        ))}
                    </div>
                    {filteredPSPlusSubscriptions.map((sub) => (
                        <Link to={`/subscriptions/${sub.id}`} key={`${sub.id}-${sub.duration}`} className={styles.subscriptionLink}>
                            <SubscriptionItem {...sub} />
                        </Link>
                    ))}
                </>
            )}

            {filteredEAPlaySubscriptions.length > 0 && (
                <>
                    <h2 className={styles.sectionTitle}>Подписки EA Play</h2>
                    {filteredEAPlaySubscriptions.map((sub) => (
                        <Link to={`/subscriptions/${sub.id}`} key={`${sub.id}-${sub.duration}`} className={styles.subscriptionLink}>
                            <SubscriptionItem {...sub} />
                        </Link>
                    ))}
                </>
            )}

            <button className={styles.viewAllButton}>
                Смотреть все подписки
            </button>
        </section>
    );
};

export default SubscriptionComponent;
