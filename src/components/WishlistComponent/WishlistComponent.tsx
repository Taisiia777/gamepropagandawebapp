
import React, { useEffect, useState } from 'react';
import styles from './WishlistComponent.module.css';
import ProductItem from './ProductItem';
import MainComponent from "../MainComponent/MainComponent.tsx";
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
                                                                 searchIconSrc,
                                                                 sortIconSrc,
                                                             }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Состояние для строки поиска

    // useEffect(() => {
    //     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    //     // Преобразуем данные для соответствия компоненту
    //     const formattedProducts = wishlist.map((product: Product) => ({
    //         id: product.id,
    //         imageSrc: product.imageSrc,
    //         name: product.name,
    //         date: new Date().toLocaleDateString(), // Пример даты
    //         newPrice: product.newPrice || product.oldPrice,
    //     }));
    //     setProducts(formattedProducts);
    // }, []);
    // // Функция для обновления состояния при удалении
    // const handleRemove = (id: string) => {
    //     setProducts(products.filter(product => product.id !== id));
    // };
    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const formattedProducts = wishlist.map((product: Product) => ({
            id: product.id,
            imageSrc: product.imageSrc,
            name: product.name,
            date: new Date().toLocaleDateString(), // Пример даты
            newPrice: product.newPrice || product.oldPrice,
        }));
        setProducts(formattedProducts);
    }, []);

    // Функция для обновления состояния при удалении
    const handleRemove = (id: string) => {
        setProducts(products.filter(product => product.id !== id));
    };

    // Фильтрованный список продуктов по названию
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section className={styles.wishlist}>
            <MainComponent/>
            <div className={styles.header}>
                <h1 className={styles.title}>Мои вишлисты</h1>
            </div>
            <div className={styles.content}>
                <form className={styles.searchBar}>
                    <img src={searchIconSrc} alt="Search" className={styles.searchIcon}/>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="введите название игры"
                        aria-label="Введите название игры"
                        value={searchTerm} // Значение поля ввода связано с состоянием
                        onChange={(e) => setSearchTerm(e.target.value)} // Обновление состояния при вводе текста
                    />
                </form>
                <p className={styles.productCount}>Добавленные продукты: {products.length}</p>
                <div className={styles.sortContainer}>
                    <img src={sortIconSrc} alt="Sort" className={styles.sortIcon}/>
                    <span className={styles.sortText}>по дате: Сначала новые</span>
                </div>
                <ul className={styles.productList}>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <ProductItem {...product} onRemove={handleRemove}/>
                        </li>
                    ))}
                </ul>
                <div className={styles.divider}/>
                <button className={styles.copyButton}>Скопировать ссылку на вишлист</button>
            </div>
        </section>
    );
};

export default WishlistComponent;
