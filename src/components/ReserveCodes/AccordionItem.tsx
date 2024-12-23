import React, { useState } from 'react';
import styles from './ReserveCodes.module.css';

interface AccordionItemProps {
    title: string;
    iconSrc: string;
    content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, iconSrc, content }) => {
    const [isOpen, setIsOpen] = useState(false);
        const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.accordionItem} onClick={toggleAccordion}>
                <div>{title}</div>
                <img loading="lazy" src={iconSrc} alt="" className={styles.accordionIcon} />

            </div>
            {isOpen && <p className={styles.content} style={{textAlign: "left"}}>{content}</p>}
            <div className={styles.divider} />
        </>
    );
};

export default AccordionItem;



