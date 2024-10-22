import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Скроллим на самый верх
    }, [pathname]); // Срабатывает при каждом изменении маршрута
};

export default useScrollToTop;
