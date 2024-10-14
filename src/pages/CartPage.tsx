
import { useEffect, useState } from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import Cart from "../components/CartComponents/Cart";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { fetchProducts } from "../utils/productsSlice.ts";

function CartPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);
  const productStatus = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    title: string;
    subtitle: string;
    price: number;
    imageUrl: string;
  }>>([]);

  // Преобразуем `products` в нужный формат
  const recommendations = products.map((product: any) => ({
    id: product.id,
    price: product.discounted_price || product.base_price, // Выберите подходящее свойство для цены
    imageSrc: product.media?.[0]?.Uri || 'img/default.png', // Подставьте изображение или значение по умолчанию
    name: product.name,
  }));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.price === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("₽", "").trim());
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const totalAmount = calculateTotal();
  const currency = "₽";

  return (
      <div>
        <MainComponent />
        <Cart cartItems={cartItems} recommendations={recommendations} />
        <OrderForm />
        <OrderSummary totalAmount={totalAmount} currency={currency} />
      </div>
  );
}

export default CartPage;
