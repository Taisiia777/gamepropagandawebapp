// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/item">ItemPage</Link> | <Link to="/catalog">CatalogPage</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/catalog" element={<CatalogPage />} />

      </Routes>
    </Router>
  );
}

export default App;