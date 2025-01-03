
// import React, { useState } from "react";
// import Autosuggest from "react-autosuggest";
// import styles from "./SearchBar.module.css";

// interface SearchBarProps {
//     onSearch: (searchTerm: string) => void;
// }

// interface Suggestion {
//     id: string;
//     name: string;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

//     // Функция для получения предложений на основе введенного текста
//     const fetchSuggestions = async (value: string) => {
//         if (value.length > 2) {
//             const response = await fetch(`${import.meta.env.VITE_NGROK_URL}/products?name=${value}`, {
//                 headers: {
//                     'ngrok-skip-browser-warning': '1', // Добавляем заголовок для игнорирования предупреждений ngrok
//                 },
//             });
//             const data = await response.json();
//             setSuggestions(data);
//         }
//     };

//     const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
//         fetchSuggestions(value);
//     };

//     const onSuggestionsClearRequested = () => {
//         setSuggestions([]);
//     };

//     const getSuggestionValue = (suggestion: Suggestion) => suggestion.name;

//     const renderSuggestion = (suggestion: Suggestion) => (
//         <div>{suggestion.name}</div>
//     );

//     // // Исправляем функцию onChange
//     // const handleChange = (_event: React.FormEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
//     //     setSearchTerm(newValue);
//     // };
//     // Исправляем тип события на HTMLElement и приводим к HTMLInputElement внутри
//     const handleChange = (
//         _event: React.FormEvent<HTMLElement>, // Используем _event, чтобы явно указать, что событие не используется
//         { newValue }: { newValue: string }   // Получаем newValue
//     ) => {
//         setSearchTerm(newValue); // Обновляем состояние с новым значением
//     };




//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSearch(searchTerm);  // Передаем введенный текст в основной компонент
//     };

//     return (
//         <form className={styles.searchForm} onSubmit={handleSubmit}>
//             <label htmlFor="gameSearch" className={styles.visuallyHidden}>
//                 Поиск игры
//             </label>
//             <Autosuggest
//                 suggestions={suggestions}
//                 onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//                 onSuggestionsClearRequested={onSuggestionsClearRequested}
//                 getSuggestionValue={getSuggestionValue}
//                 renderSuggestion={renderSuggestion}
//                 inputProps={{
//                     id: "gameSearch",
//                     value: searchTerm,
//                     onChange: handleChange,
//                     placeholder: "Введите название игры",
//                     className: styles.searchInput,
//                 }}
//                 theme={{
//                     suggestionsContainerOpen: styles.suggestionsContainerOpen,
//                     suggestion: styles.suggestion,
//                     suggestionsList: styles.suggestionsList,
//                     suggestionHighlighted: styles.suggestionHighlighted, // Corrected for hover styling
//                 }}

//             />
//             <button type="submit" className={styles.searchButton}>
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef220cb64ce242388caf7b8739abf787c8cd07f9a8edce931c83cbcafa97f3e8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//                     alt="Иконка поиска"
//                     className={styles.searchIcon}
//                 />
//                 <span className={styles.visuallyHidden}>Поиск</span>
//             </button>
//         </form>
//     );
// };

// export default SearchBar;
// SearchBar.tsx
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import styles from "./SearchBar.module.css";
import { useAppDispatch } from '../../hooks/hooks';
import { searchProducts } from '../../utils/apiSlice';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

interface Suggestion {
    id: number;
    name: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);
    const dispatch = useAppDispatch();

    const fetchSuggestions = async (value: string) => {
        if (value.length > 2) {
            dispatch(searchProducts({
                page: 1,
                limit: 5,
                service: 'PS',
                categories: 'All',
                minPrice: 0,
                maxPrice: 15000,
                genres: 'All',
                russianLocalization: false,
                searchQuery: value
            }))
            .unwrap()
            .then((response) => {
                setSuggestions(response.items);
            });
        }
    };

    const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
        fetchSuggestions(value);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const getSuggestionValue = (suggestion: Suggestion) => suggestion.name;

    const renderSuggestion = (suggestion: Suggestion) => (
        <div>{suggestion.name}</div>
    );

    const handleChange = (
        _event: React.FormEvent<HTMLElement>,
        { newValue }: { newValue: string }
    ) => {
        setSearchTerm(newValue);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
        dispatch(searchProducts({
            page: 1,
            limit: 24,
            service: 'PS',
            categories: 'All',
            minPrice: 0,
            maxPrice: 15000,
            genres: 'All',
            russianLocalization: false,
            searchQuery: searchTerm
        }));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <label htmlFor="gameSearch" className={styles.visuallyHidden}>
                Поиск игры
            </label>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    id: "gameSearch",
                    value: searchTerm,
                    onChange: handleChange,
                    placeholder: "Введите название игры",
                    className: styles.searchInput,
                }}
                theme={{
                    suggestionsContainerOpen: styles.suggestionsContainerOpen,
                    suggestion: styles.suggestion,
                    suggestionsList: styles.suggestionsList,
                    suggestionHighlighted: styles.suggestionHighlighted,
                }}
            />
            <button type="submit" className={styles.searchButton}>
                <img
                    src="/img/search.svg"
                    alt="Иконка поиска"
                    className={styles.searchIcon}
                />
                <span className={styles.visuallyHidden}>Поиск</span>
            </button>
        </form>
    );
};

export default SearchBar;
