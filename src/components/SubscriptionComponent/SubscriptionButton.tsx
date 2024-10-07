
import React from "react";
import styles from "./SubscriptionComponent.module.css";

interface SubscriptionButtonProps {
  label: string;
  isActive: boolean;
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  label,
  isActive,
}) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.activeButton : ""}`}
    >
      {label}
    </button>
  );
};

export default SubscriptionButton;
