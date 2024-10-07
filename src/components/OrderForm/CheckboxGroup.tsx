
import React from "react";
import styles from "./OrderForm.module.css";

interface CheckboxGroupProps {
  id: string;
  label: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ id, label }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={id} className={styles.checkbox} />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxGroup;
