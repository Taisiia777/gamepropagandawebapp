//
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';
// import styles from './Slider.module.css';
// import ProductCard from "../BestSellers/ProductCard.tsx";
// interface SliderProps {
//     products: Array<{
//         id: string;
//         imageSrc: string;
//         name: string;
//         oldPrice: string;
//         newPrice: string;
//     }>;
// }
//
// const Slider: React.FC<SliderProps> = ({ products }) => {
//     return (
//         <Swiper
//             modules={[Autoplay]}
//             spaceBetween={0}
//             slidesPerView={'auto'}
//             centeredSlides={false}
//             loop={true}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             className={styles.swiperContainer}
//         >
//             {products.map((product) => (
//                 <SwiperSlide key={product.id} className={styles.slide}>
//                     <ProductCard
//                         id={product.id}
//                         imageSrc={product.imageSrc || 'img/default.png'}
//                         name={product.name}
//                         oldPrice={product.oldPrice}
//                         newPrice={product.newPrice}
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };
//
// export default Slider;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './Slider.module.css';
import ProductCard from "../BestSellers/ProductCard.tsx";
interface SliderProps {
    products: Array<{
        id: string;
        media: Array<{ Uri: string }>;
        name: string;
        base_price: string | null;
        discounted_price: string | null;
    }>;
}

const Slider: React.FC<SliderProps> = ({ products }) => {
    console.log(JSON.stringify(products))

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={'auto'}
            centeredSlides={false}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className={styles.swiperContainer}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                    <ProductCard
                        id={product.id}
                        imageSrc={product.media[0]?.Uri || 'img/default.png'}
                        name={product.name}
                        oldPrice={product.base_price}
                        newPrice={product.discounted_price}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default Slider;
