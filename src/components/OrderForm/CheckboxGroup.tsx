
// import React from "react";
// import styles from "./OrderForm.module.css";

// interface CheckboxGroupProps {
//   id: string;
//   label: string;
//   labelClassName?: string;     // Дополнительный стиль для метки

// }

// const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ id, label,   labelClassName = ""
// }) => {
//   return (
//     <div className={styles.checkboxContainer}>
//       <input type="checkbox" id={id} className={styles.checkbox} />
//       <label
//         htmlFor={id}
//         className={`${styles.checkboxLabel} ${labelClassName}`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// };

// export default CheckboxGroup;
import React from "react";
import styles from "./OrderForm.module.css";

interface CheckboxGroupProps {
  id: string;
  label: string;
  checked?: boolean;                // Добавлено свойство для управления состоянием чекбокса
  onChange?: () => void;            // Добавлено событие изменения для обработки кликов
  labelClassName?: string;         // Дополнительный стиль для метки
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ id, label, checked, onChange, labelClassName = "" }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        checked={!checked}           // Управление состоянием чекбокса
        onChange={onChange}         // Обработка кликов
      />
      <label
        htmlFor={id}
        className={`${styles.checkboxLabel} ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxGroup;
