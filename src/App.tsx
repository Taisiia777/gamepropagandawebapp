//
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { useSwipeable } from 'react-swipeable';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import ItemPage from './pages/ItemPage';
// import CatalogPage from './pages/CatalogPage';
// import WishList from "./pages/WishList.tsx";
// import AccountPage from "./pages/AccountPage.tsx";
// import ReserveCodesPage from "./pages/ReserveCodesPage.tsx";
//
// const AppContent: React.FC = () => {
//   const navigate = useNavigate(); // Используем хук навигации для переходов
//
//   // Обработчик свайпов
//   const handlers = useSwipeable({
//     onSwipedRight: () => {
//       navigate(-1); // Переход назад при свайпе вправо
//     },
//     // preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//   });
//
//   return (
//       <div {...handlers}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/item/:id" element={<ItemPage />} /> {/* Поддержка параметра id */}
//           <Route path="/catalog" element={<CatalogPage />} />
//           <Route path="/wishlist" element={<WishList />} />
//           <Route path="/account" element={<AccountPage />} />
//           <Route path="/codes" element={<ReserveCodesPage />} />
//         </Routes>
//       </div>
//   );
// }
//
// const App: React.FC = () => {
//   return (
//       <Router>
//         <AppContent />
//       </Router>
//   );
// }
//
// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RedirectToTelegram from './components/RedirectToTelegram';
import AppContent from './AppContent';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <RedirectToTelegram />
                <AppContent />
            </Router>
        </QueryClientProvider>
    );
};

export default App;
