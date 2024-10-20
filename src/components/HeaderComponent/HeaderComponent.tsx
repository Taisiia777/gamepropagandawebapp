
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем useNavigate для редиректа
import ImageComponent from "../ImageComponent/ImageComponent";
import MenuComponent from "../MenuComponent/MenuComponent";
import SearchBar from "../CatalogComponents/SearchBar.tsx"; // Ваш компонент SearchBar
import styles from "./HeaderComponent.module.css";
import { useAppDispatch } from "../../hooks/hooks"; // Хук для работы с dispatch
import { searchProductsByName } from "../../utils/productsSlice.ts"; // Импортируем экшен поиска

const HeaderComponent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // Состояние для отображения SearchBar
    const dispatch = useAppDispatch(); // Инициализация dispatch
    const navigate = useNavigate(); // Используем useNavigate для редиректа

    // Функция для управления меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Функция для открытия/закрытия SearchBar
    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    // Функция поиска, передаваемая в SearchBar
    const handleSearch = (searchTerm: string) => {
        if (searchTerm.trim() !== "") {
            dispatch(searchProductsByName(searchTerm)); // Отправляем запрос на поиск
            navigate("/catalog"); // Перенаправляем на страницу каталога
        }
    };
    // Обработчик клика на оверлей
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsSearchBarVisible(false); // Закрываем оверлей и поисковую панель при клике на оверлей
        }
    };
    return (
        <>
            <header className={`${styles.header} ${isSearchBarVisible ? styles.fixedHeader : ""}`}>
                <div className={styles.logoContainer} onClick={toggleMenu}>
                    <ImageComponent
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a87b4a0643c77122840625ae1ab5878767d34045d3b3595ebb1aa6f1bfe1e39?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                        alt="Logo icon"
                        size="small"
                    />
                    <Link to="/">
                        <ImageComponent
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc5d4dd34a0efc7e727bc0f711af73eaa0c5422ab12cad64899dd4ba2db786b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                            alt="Company name"
                            size="large"
                        />
                    </Link>
                </div>
                <div className={styles.actionContainer}>
                    <ImageComponent
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c7c8046a64f55a9a58df4d8198fb23627937744d63f32cbadf9d4b2308b99b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                        alt="Action icon 1"
                        size="medium"
                        onClick={toggleSearchBar} // Открываем SearchBar при нажатии
                    />
                    <Link style={{ marginTop: "10px" }} to="/cart">
                        <ImageComponent
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c47a50b52cf899bb3a03f76311f482348d60b266c40a6f68116e869e5b20c4f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                            alt="Action icon 2"
                            size="medium"
                            id="cartIcon" // Добавляем ID для запуска анимации
                        />
                    </Link>
                </div>

                {/* Показываем MenuComponent, если isMenuOpen === true */}
                {isMenuOpen && <MenuComponent onClose={() => setIsMenuOpen(false)} />}
            </header>

            {/* Показываем SearchBar на черном фоне, если isSearchBarVisible === true */}
            {isSearchBarVisible && (
                <div className={styles.searchOverlay} onClick={handleOverlayClick}>
                    <SearchBar onSearch={handleSearch} /> {/* Передаем handleSearch в SearchBar */}
                    <button className={styles.closeButton} onClick={toggleSearchBar}>Закрыть</button>
                </div>
            )}
        </>
    );
};

export default HeaderComponent;
