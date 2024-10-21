
import React, { useEffect } from "react";
import styles from "./PriceRangeSlider.module.css";

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    const sliderMaxValue = 100;
    const minGap = 0;

    // Функции для обновления ползунков
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value + minGap <= maxPrice) {
            setMinPrice(value);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value - minGap >= minPrice) {
            setMaxPrice(value);
        }
    };

    // Изменение цвета заполнения ползунка
    const fillColor = () => {
        const percent1 = (minPrice / sliderMaxValue) * 100;
        const percent2 = (maxPrice / sliderMaxValue) * 100;
        const sliderTrack = document.querySelector(`.${styles.sliderTrack}`) as HTMLDivElement;
        if (sliderTrack) {
            sliderTrack.style.background = `linear-gradient(to right, #444 ${percent1}% , #d9ff00 ${percent1}% , #d9ff00 ${percent2}%, #444 ${percent2}%)`;
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
                    max="100"
                    value={minPrice}
                    onChange={handleMinChange}
                    className={styles.slider}
                />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className={styles.slider}
                />
            </div>
        </div>
    );
};

export default PriceRangeSlider;


