
import { useEffect, useState } from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import Cart from "../components/CartComponents/Cart";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { fetchProducts } from "../utils/productsSlice.ts";

interface Product {
  id: string;
  media: string | Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}

function CartPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchProducts);

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

  // Функция для извлечения ссылки на изображение
  const extractImageUrl = (media: string | Array<{ Uri: string }>): string => {
    try {
      // Если media - это строка, попробуем её распарсить
      if (typeof media === 'string') {
        const parsedMedia = JSON.parse(media);
        const imageMedia = parsedMedia.find((item: { type: string }) => item.type === 'IMAGE');
        if (imageMedia && imageMedia.url) {
          return imageMedia.url;
        }
      } else if (Array.isArray(media)) {
        return `https:${media[0]?.Uri}`; // Если это массив, берем первый Uri и добавляем https
      }
    } catch (error) {
      console.error('Ошибка при парсинге media:', error);
    }
    return 'img/default.png'; // Если нет картинки, возвращаем изображение по умолчанию
  };

  // Преобразуем `products` в нужный формат для рекомендаций
  const recommendations = products.map((product: any) => ({
    id: product.id,
    price: product.discounted_price || product.base_price, // Выбираем цену или значение по умолчанию
    imageSrc: extractImageUrl(product.media), // Преобразуем media в ссылку на изображение
    name: product.name,
  }));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("₽", "").trim());
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
