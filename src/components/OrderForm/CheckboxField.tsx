import React from 'react';
import styles from './OrderForm.module.css';

interface CheckboxFieldProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
                                                                id,
                                                                label,
                                                                checked,
                                                                onChange
                                                            }) => {
    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                id={id}
                className={styles.checkbox}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className={styles.checkboxLabel}>
                {label}
            </label>
        </div>
    );
};