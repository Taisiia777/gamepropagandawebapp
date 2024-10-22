
import React from "react";
import styles from "./SubscriptionComponent.module.css";

interface SubscriptionButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void; // Новый пропс для обработки клика
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
                                                                 label,
                                                                 isActive,
                                                                 onClick,
                                                               }) => {
  return (
      <button
          className={`${styles.button} ${isActive ? styles.activeButton : ""}`}
          onClick={onClick} // Добавляем обработчик клика
      >
        {label}
      </button>
  );
};

export default SubscriptionButton;
