
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

interface Suggestion {
    id: string;
    name: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

    // Функция для получения предложений на основе введенного текста
    const fetchSuggestions = async (value: string) => {
        if (value.length > 2) {
            // const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/products?name=${value}`);
            const response = await fetch(`https://455b-95-161-221-131.ngrok-free.app/products?name=${value}`, {
                headers: {
                    'ngrok-skip-browser-warning': '1', // Добавляем заголовок для игнорирования предупреждений ngrok
                },
            });
            const data = await response.json();
            setSuggestions(data);
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

    // // Исправляем функцию onChange
    // const handleChange = (_event: React.FormEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    //     setSearchTerm(newValue);
    // };
    // Исправляем тип события на HTMLElement и приводим к HTMLInputElement внутри
    const handleChange = (
        _event: React.FormEvent<HTMLElement>, // Используем _event, чтобы явно указать, что событие не используется
        { newValue }: { newValue: string }   // Получаем newValue
    ) => {
        setSearchTerm(newValue); // Обновляем состояние с новым значением
    };




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);  // Передаем введенный текст в основной компонент
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
                    suggestionHighlighted: styles.suggestionHighlighted, // Corrected for hover styling
                }}

            />
            <button type="submit" className={styles.searchButton}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef220cb64ce242388caf7b8739abf787c8cd07f9a8edce931c83cbcafa97f3e8?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                    alt="Иконка поиска"
                    className={styles.searchIcon}
                />
                <span className={styles.visuallyHidden}>Поиск</span>
            </button>
        </form>
    );
};

export default SearchBar;
