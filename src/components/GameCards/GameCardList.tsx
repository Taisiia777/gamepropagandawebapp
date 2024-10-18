//
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import { fetchProducts, searchProductsByName } from "../../utils/productsSlice.ts";
// import ProductCard from "../BestSellers/ProductCard";
// import SearchBar from "../CatalogComponents/SearchBar.tsx";
// import styles from "./GameCardList.module.css";
// // import { Link } from "react-router-dom";
//
// const GameCardList: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const products = useAppSelector((state) => state.products.filteredItems);
//     const productStatus = useAppSelector((state) => state.products.status);
//     const [visibleProducts, setVisibleProducts] = useState<number>(4);
//
//     const observer = useRef<IntersectionObserver | null>(null);
//
//     useEffect(() => {
//         if (productStatus === "idle") {
//             dispatch(fetchProducts());
//         }
//     }, [productStatus, dispatch]);
//
//     const handleSearch = (searchTerm: string) => {
//         dispatch(searchProductsByName(searchTerm));
//     };
//
//     const lastProductRef = useCallback(
//         (node: HTMLDivElement | null) => {
//             if (observer.current) observer.current.disconnect();
//             observer.current = new IntersectionObserver((entries) => {
//                 if (entries[0].isIntersecting && visibleProducts < products.length) {
//                     setVisibleProducts((prev) => prev + 4);
//                 }
//             });
//             if (node) observer.current.observe(node);
//         },
//         [visibleProducts, products.length]
//     );
//
//     return (
//         <section className={styles.container}>
//             <SearchBar onSearch={handleSearch} />
//             <div className={styles.grid}>
//                 {products.slice(0, visibleProducts).map((product, index) => (
//                     <div
//                         ref={index === visibleProducts - 1 ? lastProductRef : null}
//                         key={product.id}
//                     >
//                         {/*<Link to={`/item/${product.id}`} className={styles.productLink}>*/}
//                             <ProductCard
//                                 id={product.id} // Передаем id продукта
//                                 imageSrc={product.media?.[0]?.Uri || "img/default.png"}
//                                 name={product.name}
//                                 oldPrice={product.base_price ? `${product.base_price} ₽` : ""}
//                                 newPrice={product.discounted_price ? `${product.discounted_price} ₽` : "Бесплатно"}
//                             />
//                         {/*</Link>*/}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default GameCardList;
//
//
// import React, { useEffect, useState} from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import { fetchProducts, searchProductsByName } from "../../utils/productsSlice.ts";
// import ProductCard from "../BestSellers/ProductCard";
// import SearchBar from "../CatalogComponents/SearchBar.tsx";
// import styles from "./GameCardList.module.css";
//
// const GameCardList: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const products = useAppSelector((state) => state.products.items);
//     const productStatus = useAppSelector((state) => state.products.status);
//     const [visibleProducts, setVisibleProducts] = useState<number>(24);
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const [hasMore, setHasMore] = useState<boolean>(true);
//     console.log(hasMore)
//     useEffect(() => {
//         if (productStatus === "idle") {
//             dispatch(fetchProducts(currentPage)).then(() => {
//                 setVisibleProducts(24);
//             });
//         }
//     }, [productStatus, dispatch, currentPage]);
//
//     const handleSearch = (searchTerm: string) => {
//         setCurrentPage(1);
//         setVisibleProducts(24);
//         setHasMore(true);
//         dispatch(searchProductsByName(searchTerm));
//     };
//
//     useEffect(() => {
//         if (products.length < visibleProducts) {
//             setHasMore(false);
//         }
//     }, [products, visibleProducts]);
//
//     const handlePageChange = (newPage: number) => {
//         setCurrentPage(newPage);
//         dispatch(fetchProducts(newPage)).then(() => {
//             setVisibleProducts(24);
//         });
//     };
//
//     const totalPages = Math.ceil(240 / 24); // Assume 240 products as an example
//     const paginationRange = () => {
//         const range = [];
//         if (totalPages <= 5) {
//             for (let i = 1; i <= totalPages; i++) {
//                 range.push(i);
//             }
//         } else {
//             if (currentPage === 1) {
//                 range.push(1, 2, "...", totalPages);
//             } else if (currentPage === 2) {
//                 range.push(1, 2, 3, "...", totalPages);
//             } else if (currentPage === totalPages - 1) {
//                 range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
//             } else if (currentPage === totalPages) {
//                 range.push(1, "...", totalPages - 1, totalPages);
//             } else {
//                 range.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
//             }
//         }
//         return range;
//     };
//
//     return (
//         <section className={styles.container}>
//             <SearchBar onSearch={handleSearch} />
//             <div className={styles.grid}>
//                 {products.slice((currentPage - 1) * visibleProducts, currentPage * visibleProducts).map((product) => (
//                     <div key={product.id}>
//                         <ProductCard
//                             id={product.id}
//                             imageSrc={product.media?.[0]?.Uri || "img/default.png"}
//                             name={product.name}
//                             oldPrice={product.base_price ? `${product.base_price} ₽` : ""}
//                             newPrice={product.discounted_price ? `${product.discounted_price} ₽` : "Бесплатно"}
//                         />
//                     </div>
//                 ))}
//             </div>
//             <div className={styles.pagination}>
//                 {paginationRange().map((page, index) => (
//                     typeof page === "number" ? (
//                         <button
//                             key={index}
//                             className={page === currentPage ? styles.activePage : ""}
//                             onClick={() => handlePageChange(page)}
//                         >
//                             {page}
//                         </button>
//                     ) : (
//                         <span key={index} className={styles.ellipsis}>...</span>
//                     )
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default GameCardList;
//
//


import React, { useEffect, useState} from "react";
import CategoryList from "../CatalogComponents/CategoryList.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts, searchProductsByName, fetchProductsByCategory } from "../../utils/productsSlice.ts";
import ProductCard from "../BestSellers/ProductCard";
import SearchBar from "../CatalogComponents/SearchBar.tsx";
import styles from "./GameCardList.module.css";

const GameCardList: React.FC = () => {
    const handleCategoryClick = (category: string) => {
        setCurrentPage(1);
        setVisibleProducts(24);
        setHasMore(true);
        dispatch(fetchProductsByCategory(category));
    };
    const dispatch = useAppDispatch();
    // const products = useAppSelector((state) => state.products.items);
    const products = useAppSelector((state) => {
        if (state.products.filteredItems.length > 0) {
            return state.products.filteredItems;
        }
        return state.products.items;
    });

    const productStatus = useAppSelector((state) => state.products.status);
    const [visibleProducts, setVisibleProducts] = useState<number>(24);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    console.log(hasMore)
    useEffect(() => {
        if (productStatus === "idle") {
            dispatch(fetchProducts(currentPage));
        }
    }, [productStatus, dispatch, currentPage]);

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
        dispatch(fetchProducts(newPage));
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

    return (
        <section className={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <div className={styles.grid}>
                {products.slice((currentPage - 1) * visibleProducts, currentPage * visibleProducts).map((product) => (
                    <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            imageSrc={product.media?.[0]?.Uri || "img/default.png"}
                            name={product.name}
                            oldPrice={product.base_price ? `${product.base_price} ₽` : ""}
                            newPrice={product.discounted_price ? `${product.discounted_price} ₽` : "Бесплатно"}
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
