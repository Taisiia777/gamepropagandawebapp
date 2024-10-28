
import React, { useState } from "react";
import styles from "./SubscriptionComponent.module.css";
import SubscriptionButton from "./SubscriptionButton";
import SubscriptionItem from "./SubscriptionItem";
import { Link } from 'react-router-dom'; // Импортируем Link

const SubscriptionComponent: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"1 месяц" | "3 месяца" | "12 месяцев">("1 месяц");



  const psPlusSubscriptions = [
    {
      id: 1,
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2372f876f17e80a5c391fcaf9b7b560c0b9fa85891a77a73562ef4ad4f32d0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Essential",
      price: selectedPeriod === "1 месяц" ? "850 Р" :
          selectedPeriod === "3 месяца" ? "1 990 Р" :
              "5 790 Р",
    },
    {
      id: 2,
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/30b28e31709e43ac2ec45f01bec4a9b51423c96614b2e2c267968bb756d88efd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Extra",
      price: selectedPeriod === "1 месяц" ? "1 290 Р" :
          selectedPeriod === "3 месяца" ? "3 090 Р" :
              "8 990 Р",
    },
    {
      id: 3,
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Deluxe",
      price: selectedPeriod === "1 месяц" ? "1 490 Р" :
          selectedPeriod === "3 месяца" ? "3 590 Р" :
              "10 990 Р",
    },
  ];

  const eaPlaySubscriptions = [
    {
      id: 4,
      imageSrc:
          "img/ea1.svg",
      name: "EA Play Basic",
      price: selectedPeriod === "1 месяц" ? "1 290 Р" :
          selectedPeriod === "3 месяца" ? "3 090 Р" :
              "6 690 Р",
    },
    {
      id: 5,
      imageSrc:
          "img/ea12.svg",
      name: "EA Play Pro",
      price: selectedPeriod === "1 месяц" ? "1 290 Р" :
          selectedPeriod === "3 месяца" ? "3 090 Р" :
              "6 690 Р",
    },
  ];

  return (
      <section className={styles.subscriptionContainer}>
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


        {psPlusSubscriptions.map((sub) => (
            <Link to={`/subscriptions/${sub.id}`} key={sub.id} className={styles.subscriptionLink}>
              <SubscriptionItem {...sub} />
            </Link>
        ))}

        <h2 className={styles.sectionTitle}>Подписки EA Play</h2>
        {eaPlaySubscriptions.map((sub) => (
            <Link to={`/subscriptions/${sub.id}`} key={sub.id} className={styles.subscriptionLink}>
              <SubscriptionItem {...sub} />
            </Link>
        ))}


      </section>
  );
};

export default SubscriptionComponent;
