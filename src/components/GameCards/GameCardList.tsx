import React, { useEffect, useState} from "react";
import CategoryList from "../CatalogComponents/CategoryList.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts, searchProductsByName, fetchProductsByCategory, resetFilters  } from "../../utils/productsSlice.ts";
import ProductCard from "../BestSellers/ProductCard";
import SearchBar from "../CatalogComponents/SearchBar.tsx";
import styles from "./GameCardList.module.css";
import { useLocation } from 'react-router-dom';

const GameCardList: React.FC = () => {
    // const [selectedCategory, setSelectedCategory] = useState<string>(""); // Новое состояние для выбранной категории
    const location = useLocation();
    const initialCategory = location.state?.activeCategory || ""; // Получаем активную категорию из состояния или пустую строку по умолчанию
    const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory); // Устанавливаем начальную категорию

    // const handleCategoryClick = (category: string) => {
    //     setCurrentPage(1);
    //     setVisibleProducts(24);
    //     setHasMore(true);
    //     setSelectedCategory(category); // Устанавливаем выбранную категорию
    //     dispatch(fetchProductsByCategory({ category })); // Передаем только категорию, без страницы (будет использована страница по умолчанию)
    // };
    const handleCategoryClick = (category: string) => {
        setCurrentPage(1);
        setVisibleProducts(24);
        setHasMore(true);

        if (category === "") {
            // Если категория пустая, сбрасываем все фильтры
            dispatch(resetFilters());
        } else {
            setSelectedCategory(category);
            dispatch(fetchProductsByCategory({ category }));
        }
    };

    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => {
        if (state.products.filteredItems.length > 0) {
            return state.products.filteredItems;
        }
        return state.products.filteredItems;
    });

    const productStatus = useAppSelector((state) => state.products.status.fetchProducts);
    const [visibleProducts, setVisibleProducts] = useState<number>(24);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    console.log(hasMore)
    useEffect(() => {
        if (initialCategory) {
            dispatch(fetchProductsByCategory({ category: initialCategory }));
        } else {
            dispatch(fetchProducts(currentPage));
        }
    }, [initialCategory, dispatch]);
    useEffect(() => {
        if (productStatus === "idle") {
            if (selectedCategory) {
                dispatch(fetchProductsByCategory({ category: selectedCategory, page: currentPage })); // Передаем категорию и страницу, если они есть
            } else {
                dispatch(fetchProducts(currentPage));
            }
        }
    }, [productStatus, dispatch, currentPage, selectedCategory]);


    const handleSearch = (searchTerm: string) => {
        setCurrentPage(1);
        setVisibleProducts(24);
        setHasMore(true);
        dispatch(searchProductsByName(searchTerm));
    };

    useEffect(() => {
        if (products.length < visibleProducts) {
            setHasMore(false);
        }
    }, [products, visibleProducts]);


    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручиваем страницу наверх с плавной анимацией
        if (selectedCategory) {
            dispatch(fetchProductsByCategory({ category: selectedCategory, page: newPage })); // Передаем категорию и страницу
        } else {
            dispatch(fetchProducts(newPage));
        }
    };

    const totalPages = Math.ceil(240 / 24); // Assume 240 products as an example
    const paginationRange = () => {
        const range = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            if (currentPage === 1) {
                range.push(1, 2, "...", totalPages);
            } else if (currentPage === 2) {
                range.push(1, 2, 3, "...", totalPages);
            } else if (currentPage === totalPages - 1) {
                range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else if (currentPage === totalPages) {
                range.push(1, "...", totalPages - 1, totalPages);
            } else {
                range.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return range;
    };
    const parseMedia = (media: string | Array<{ Uri: string }>) => {
        try {
            // Если media - это строка, попробуем её распарсить
            if (typeof media === 'string') {
                const parsedMedia = JSON.parse(media);

                // Попробуем найти объект с типом "IMAGE"
                const imageMedia = parsedMedia.find((item: { type: string }) => item.type === 'IMAGE');
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
        <section className={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <div className={styles.grid}>
                {products.slice((currentPage - 1) * visibleProducts, currentPage * visibleProducts).map((product) => (
                    <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            // imageSrc={product.media?.[0]?.Uri || "img/default.png"}
                            imageSrc={parseMedia(product.media)} // Используем функцию для парсинга media
                            name={product.name}
                            oldPrice={product.base_price ? `${product.base_price} ` : ""}
                            newPrice={product.discounted_price ? `${product.discounted_price} ` : "Бесплатно"}
                        />
                    </div>
                ))}
            </div>
            <CategoryList onCategoryClick={handleCategoryClick} />
            <div className={styles.pagination}>
                {paginationRange().map((page, index) => (
                    typeof page === "number" ? (
                        <button
                            key={index}
                            className={page === currentPage ? styles.activePage : ""}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className={styles.ellipsis}>...</span>
                    )
                ))}
            </div>

        </section>
    );
};

export default GameCardList;
