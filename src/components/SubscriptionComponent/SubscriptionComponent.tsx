// /**
//  * This code was generated by Builder.io.
//  */
// import React from "react";
// import styles from "./SubscriptionComponent.module.css";
// import SubscriptionButton from "./SubscriptionButton";
// import SubscriptionItem from "./SubscriptionItem";

// const SubscriptionComponent: React.FC = () => {
//   const psPlusSubscriptions = [
//     {
//       imageSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2372f876f17e80a5c391fcaf9b7b560c0b9fa85891a77a73562ef4ad4f32d0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: "590 ₽",
//     },
//     {
//       imageSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/30b28e31709e43ac2ec45f01bec4a9b51423c96614b2e2c267968bb756d88efd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: "590 ₽",
//     },
//     {
//       imageSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: "590 ₽",
//     },
//   ];

//   const eaPlaySubscriptions = [
//     {
//       imageSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: "590 ₽",
//     },
//     {
//       imageSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
//       name: "PS Plus Essential",
//       price: "590 ₽",
//     },
//   ];

//   return (
//     <section className={styles.subscriptionContainer}>
//       <h2 className={styles.sectionTitle}>Подписки PS Plus</h2>
//       <div className={styles.buttonGroup}>
//         <SubscriptionButton label="1 месяц" isActive={true} />
//         <SubscriptionButton label="3 месяца" isActive={false} />
//         <SubscriptionButton label="12 месяцев" isActive={false} />
//       </div>
//       {psPlusSubscriptions.map((sub, index) => (
//         <SubscriptionItem key={index} {...sub} />
//       ))}
//       <h2 className={styles.sectionTitle}>Подписки EA Play</h2>
//       <div className={styles.subscriptionItem}>
//         <div>
//           <div className={styles.eaPlayImage} />
//           <img
//             src={eaPlaySubscriptions[0].imageSrc}
//             alt="EA Play subscription"
//             className={styles.subscriptionImage}
//           />
//         </div>
//         <div className={styles.subscriptionDetails}>
//           {eaPlaySubscriptions.map((sub, index) => (
//             <React.Fragment key={index}>
//               <div className={styles.subscriptionName}>{sub.name}</div>
//               <div className={styles.subscriptionPrice}>{sub.price}</div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//       <button className={styles.viewAllButton}>Смотреть все подписки</button>
//     </section>
//   );
// };

// export default SubscriptionComponent;



import React from "react";
import styles from "./SubscriptionComponent.module.css";
import SubscriptionButton from "./SubscriptionButton";
import SubscriptionItem from "./SubscriptionItem";

const SubscriptionComponent: React.FC = () => {
  const psPlusSubscriptions = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a2372f876f17e80a5c391fcaf9b7b560c0b9fa85891a77a73562ef4ad4f32d0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Essential",
      price: "590 ₽",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/30b28e31709e43ac2ec45f01bec4a9b51423c96614b2e2c267968bb756d88efd?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Essential",
      price: "590 ₽",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "PS Plus Essential",
      price: "590 ₽",
    },
  ];

  const eaPlaySubscriptions = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "EA Play Basic",
      price: "590 ₽",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd626a0263aa593737ef1cec4ef5985f75e444bba7cef906593f95c7b3f6ee49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      name: "EA Play Pro",
      price: "990 ₽",
    },
  ];

  return (
    <section className={styles.subscriptionContainer}>
      <h2 className={styles.sectionTitle}>Подписки PS Plus</h2>
      <div className={styles.buttonGroup}>
        <SubscriptionButton label="1 месяц" isActive={true} />
        <SubscriptionButton label="3 месяца" isActive={false} />
        <SubscriptionButton label="12 месяцев" isActive={false} />
      </div>
      {psPlusSubscriptions.map((sub, index) => (
        <SubscriptionItem key={index} {...sub} />
      ))}

      <h2 className={styles.sectionTitle}>Подписки EA Play</h2>

      {eaPlaySubscriptions.map((sub, index) => (
        <SubscriptionItem key={index} {...sub} />
      ))}

      <button className={styles.viewAllButton}>Смотреть все подписки</button>
    </section>
  );
};

export default SubscriptionComponent;
