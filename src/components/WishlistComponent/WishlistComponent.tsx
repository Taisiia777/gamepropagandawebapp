
import React, { useEffect, useState } from 'react';
import styles from './WishlistComponent.module.css';
import ProductItem from './ProductItem';
import MainComponent from "../MainComponent/MainComponent.tsx";
import { useAppSelector } from '../../hooks/hooks.ts'; // Импортируем хук
import { RootState } from '../../store.ts'; // Импортируем тип состояния
interface WishlistComponentProps {
    searchIconSrc: string;
    sortIconSrc: string;
}

interface Product {
    id: string;
    imageSrc: string;
    name: string;
    date: string;
    newPrice: string;
    oldPrice: string;

}


const WishlistComponent: React.FC<WishlistComponentProps> = ({
                                                                //  sortIconSrc,
                                                             }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const userId = useAppSelector((state: RootState) => state.user.telegramId);


    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const formattedProducts = wishlist.map((product: Product) => ({
            id: product.id,
            imageSrc: product.imageSrc,
            name: product.name,
            date: new Date().toLocaleDateString(), // Пример даты
            oldPrice:product.oldPrice,
            newPrice: product.newPrice
        }));
        setProducts(formattedProducts);
    }, []);

    // Функция для обновления состояния при удалении
    const handleRemove = (id: string) => {
        setProducts(products.filter(product => product.id !== id));
    };


    return (
        <section className={styles.wishlist}>
            <MainComponent/>
            <div className={styles.header}>
                <h1 className={styles.title}>Мои вишлисты</h1>
            </div>
            <div className={styles.content}>

                <p className={styles.productCount}>Добавленные продукты: {products.length}</p>

                <ul className={styles.productList}>
                    {products.map((product) => (
                        <li style={{maxWidth: "312px"}} key={product.id}>
                            <ProductItem {...product} onRemove={handleRemove} userId={userId ? userId.toString() : "0" }/>
                        </li>
                    ))}
                </ul>
                {/* <button className={styles.copyButton}>Скопировать ссылку на вишлист</button> */}
            </div>
        </section>
    );
};

export default WishlistComponent;
