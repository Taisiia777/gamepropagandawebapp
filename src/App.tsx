// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';
import WishList from "./pages/WishList.tsx";
function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/item">ItemPage</Link> | <Link to="/catalog">CatalogPage</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
          <Route path="/item/:id" element={<ItemPage />} /> {/* Поддержка параметра id */}
        <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/wishlist" element={<WishList />} />

      </Routes>
    </Router>
  );
}

export default App;
