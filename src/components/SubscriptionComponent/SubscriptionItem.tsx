
// import React from "react";
// import styles from "./SubscriptionComponent.module.css";

// interface SubscriptionItemProps {
//   imageSrc: string;
//   name: string;
//   price: string;
// }

// const SubscriptionItem: React.FC<SubscriptionItemProps> = ({
//   imageSrc,
//   name,
//   price,
// }) => {
//   return (
//     <div className={styles.subscriptionItem}>
//       <img
//         src={imageSrc}
//         alt={`${name} subscription`}
//         className={styles.subscriptionImage}
//       />
//       <div className={styles.subscriptionDetails}>
//         <div className={styles.subscriptionName}>{name}</div>
//         <div className={styles.subscriptionPrice}>{price}</div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionItem;
import React from "react";
import styles from "./SubscriptionComponent.module.css";

interface SubscriptionItemProps {
  imageSrc: string;
  name: string;
  price?: string | null; // Accepts string, undefined, or null
}

const SubscriptionItem: React.FC<SubscriptionItemProps> = ({
  imageSrc,
  name,
  price,
}) => {
  return (
    <div className={styles.subscriptionItem}>
      <img
        src={imageSrc}
        alt={`${name} subscription`}
        className={styles.subscriptionImage}
      />
      <div className={styles.subscriptionDetails}>
        <div className={styles.subscriptionName}>{name}</div>
        <div className={styles.subscriptionPrice}>
          {price ?? "Not available"} {/* Display placeholder if price is null or undefined */}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
