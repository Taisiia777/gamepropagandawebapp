
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts, searchProductsByName } from "../../utils/productsSlice.ts";
import ProductCard from "../BestSellers/ProductCard";
import SearchBar from "../CatalogComponents/SearchBar.tsx";
import styles from "./GameCardList.module.css";
import { Link } from "react-router-dom";

const GameCardList: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.filteredItems);
    const productStatus = useAppSelector((state) => state.products.status);
    const [visibleProducts, setVisibleProducts] = useState<number>(4);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (productStatus === "idle") {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    const handleSearch = (searchTerm: string) => {
        dispatch(searchProductsByName(searchTerm));
    };

    const lastProductRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && visibleProducts < products.length) {
                    setVisibleProducts((prev) => prev + 4);
                }
            });
            if (node) observer.current.observe(node);
        },
        [visibleProducts, products.length]
    );

    return (
        <section className={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <div className={styles.grid}>
                {products.slice(0, visibleProducts).map((product, index) => (
                    <div
                        ref={index === visibleProducts - 1 ? lastProductRef : null}
                        key={product.id}
                    >
                        <Link to={`/item/${product.id}`} className={styles.productLink}>
                            <ProductCard
                                imageSrc={product.media?.[0]?.Uri || "img/default.png"}
                                name={product.name}
                                oldPrice={product.base_price ? `${product.base_price} ₽` : ""}
                                newPrice={product.discounted_price ? `${product.discounted_price} ₽` : "Бесплатно"}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameCardList;
