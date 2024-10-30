
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './Slider.module.css';
import ProductCard from "../BestSellers/ProductCard.tsx";

interface MediaItem {
    __typename: string;
    type: string;
    url: string;
    role: string;
}

interface SliderProps {
    products: Array<{
        id: string;
        media: string | Array<{ Uri: string }>; // Обрабатываем как строку или массив
        name: string;
        base_price: string | null;
        discounted_price: string | null;
    }>;
    isLightTheme?: boolean; // Новый пропс для темы
}

const Slider: React.FC<SliderProps> = ({ products, isLightTheme }) => {
    const parseMedia = (media: string | Array<{ Uri: string }>) => {
        try {
            // Если media - это строка, попробуем её распарсить
            if (typeof media === 'string') {
                const parsedMedia: MediaItem[] = JSON.parse(media);

                // Попробуем найти объект с типом "IMAGE"
                const imageMedia = parsedMedia.find(item => item.type === 'IMAGE');
                if (imageMedia) {
                    return imageMedia.url; // Возвращаем url изображения
                }
            } else if (Array.isArray(media)) {
                // Если это массив, возвращаем первый элемент Uri
                return media[0]?.Uri;
            }
        } catch (error) {
            console.error('Ошибка при парсинге media:', error);
        }
        return 'img/default.png'; // Если ничего не нашли, используем изображение по умолчанию
    };

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={'auto'}
            centeredSlides={false}
            loop={true}
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
            autoplay={false} // Отключает автоматическое перелистывание

            className={styles.swiperContainer}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                    <ProductCard
                        id={product.id}
                        imageSrc={parseMedia(product.media)} // Используем функцию для парсинга media
                        name={product.name}
                        oldPrice={product.base_price}
                        newPrice={product.discounted_price}
                        isLightTheme={isLightTheme} // Включаем светлую тему
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
