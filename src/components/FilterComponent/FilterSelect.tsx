import React from 'react';
import styles from './FilterComponent.module.css';

interface FilterSelectProps {
    label: string;
    options: string[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, options }) => {
    return (
        <>
            <label htmlFor={`${label.toLowerCase()}Select`} className={styles.filterLabel}>{label}</label>
            <select id={`${label.toLowerCase()}Select`} className={styles.filterSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
};

export default FilterSelect;