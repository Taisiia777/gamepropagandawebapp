import React from 'react';
import styles from './ReserveCodes.module.css';

interface AccordionItemProps {
    title: string;
    iconSrc: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, iconSrc }) => {
    return (
        <>
            <div className={styles.accordionItem}>
                <div>{title}</div>
                <img loading="lazy" src={iconSrc} alt="" className={styles.accordionIcon} />
            </div>
            <div className={styles.divider} />
        </>
    );
};

export default AccordionItem;