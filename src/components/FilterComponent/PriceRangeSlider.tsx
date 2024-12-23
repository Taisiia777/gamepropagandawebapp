
import React, { useState, useEffect } from "react";
import styles from "./PriceRangeSlider.module.css";

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
    onChange?: () => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, onChange }) => {
    const sliderMaxValue = 4199;
    const minGap = 0;

    // Состояние для отслеживания активного слайдера
    const [activeSlider, setActiveSlider] = useState<'min' | 'max' | null>(null);

    // Функции для обновления ползунков
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value + minGap <= maxPrice) {
            setMinPrice(value);
            setActiveSlider('min'); // Устанавливаем активный слайдер
            if (onChange) onChange();
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value - minGap >= minPrice) {
            setMaxPrice(value);
            setActiveSlider('max'); // Устанавливаем активный слайдер
            if (onChange) onChange();
        }
    };

    // Изменение цвета заполнения ползунка
    const fillColor = () => {
        const percent1 = (minPrice / sliderMaxValue) * 100;
        const percent2 = (maxPrice / sliderMaxValue) * 100;
        const sliderTrack = document.querySelector(`.${styles.sliderTrack}`) as HTMLDivElement;
        if (sliderTrack) {
            sliderTrack.style.background = `linear-gradient(to right, #ccc ${percent1}% , #d9ff00 ${percent1}% , #d9ff00 ${percent2}%, #ccc ${percent2}%)`;
        }
    };

    useEffect(() => {
        fillColor();
    }, [minPrice, maxPrice]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sliderTrack}></div>
                <input
                    type="range"
                    min="0"
                    max={sliderMaxValue}
                    value={minPrice}
                    onChange={handleMinChange}
                    className={`${styles.slider} ${styles.minSlider} ${activeSlider === 'min' ? styles.active : ''}`}
                    onMouseDown={() => setActiveSlider('min')}
                    onTouchStart={() => setActiveSlider('min')} // Устанавливаем активный слайдер при касании
                />
                <input
                    type="range"
                    min="0"
                    max={sliderMaxValue}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className={`${styles.slider} ${styles.maxSlider} ${activeSlider === 'max' ? styles.active : ''}`}
                    onMouseDown={() => setActiveSlider('max')}
                    onTouchStart={() => setActiveSlider('max')} // Устанавливаем активный слайдер при касании
                />
            </div>
        </div>
    );
};

export default PriceRangeSlider;
