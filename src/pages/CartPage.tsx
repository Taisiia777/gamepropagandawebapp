//
// import { useEffect, useState } from "react";
// import MainComponent from "../components/MainComponent/MainComponent";
// import Cart from "../components/CartComponents/Cart";
// import OrderForm from "../components/OrderForm/OrderForm";
// import OrderSummary from "../components/OrderSummary/OrderSummary"; // Добавляем сюда OrderSummary
// import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
// import { fetchTopRatedProducts } from "../utils/productsSlice.ts";
// import {MinimumOrder} from "../components/MinimumOrder/MinimumOrder.tsx";
// import { useNavigate } from 'react-router-dom';
//
// interface Product {
//   id: string;
//   media: string | Array<{ Uri: string }>;
//   name: string;
//   base_price: string | null;
//   discounted_price: string | null;
// }
//
// function CartPage() {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const products = useAppSelector((state) => state.products.topRated) as unknown as Product[];
//   const productStatus = useAppSelector((state) => state.products.status.fetchTopRatedProducts);
//   const minimumOrderAmount = 400; // Минимальная сумма заказа
//   const privacyPolicyUrl = "/privacy-policy"; // URL политики конфиденциальности
//   const userId = useAppSelector((state) => state.user.telegramId); // Извлекаем идентификатор пользователя из userSlice
//
//   const handleCatalogClick = () => {
//     navigate("/catalog");
//   };
//
//   useEffect(() => {
//     if (productStatus === 'idle') {
//       dispatch(fetchTopRatedProducts());
//     }
//   }, [productStatus, dispatch]);
//
//   const [cartItems, setCartItems] = useState<Array<{
//     id: string;
//     title: string;
//     subtitle: string;
//     price: number;
//     imageUrl: string;
//   }>>([]);
//
//   const extractImageUrl = (media: string | Array<{ Uri: string }>): string => {
//     try {
//       if (typeof media === 'string') {
//         const parsedMedia = JSON.parse(media);
//         const imageMedia = parsedMedia.find((item: { type: string }) => item.type === 'IMAGE');
//         if (imageMedia && imageMedia.url) {
//           return imageMedia.url;
//         }
//       } else if (Array.isArray(media)) {
//         return `https:${media[0]?.Uri}`;
//       }
//     } catch (error) {
//       console.error('Ошибка при парсинге media:', error);
//     }
//     return 'img/default.png';
//   };
//
//   const recommendations = products.map((product: any) => ({
//     id: product.id,
//     price: product.discounted_price || product.base_price,
//     imageSrc: extractImageUrl(product.media),
//     name: product.name,
//   }));
//
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(storedCart);
//   }, []);
//
//   const calculateTotal = () => {
//     return cartItems.reduce((sum, item) => {
//       const price = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("Р", "").trim());
//       return sum + (isNaN(price) ? 0 : price);
//     }, 0);
//   };
//
//   const totalAmount = calculateTotal();
//   const currency = "Р";
//
//   return (
//       <div style={{ minHeight: "100vh" }}>
//         <MainComponent />
//         <Cart cartItems={cartItems} recommendations={recommendations} />
//         {totalAmount < minimumOrderAmount ? (
//             <MinimumOrder
//                 minimumAmount={minimumOrderAmount}
//                 onCatalogClick={handleCatalogClick}
//                 privacyPolicyUrl={privacyPolicyUrl}
//             />
//         ) : (
//             <>
//               <OrderForm />
//               <OrderSummary
//                   totalAmount={totalAmount}
//                   currency={currency}
//                   cartItems={cartItems} // Передаем товары в OrderSummary
//                   userId={userId ? userId : "0"} // Если userId null, передаем '0' как дефолтное значение
//                   setCartItems={setCartItems}  // Передаем функцию setCartItems
//
//               />
//             </>
//         )}
//       </div>
//   );
// }
//
// export default CartPage;
import { useEffect, useState } from "react";
import MainComponent from "../components/MainComponent/MainComponent";
import Cart from "../components/CartComponents/Cart";
import OrderForm from "../components/OrderForm/OrderForm"; // Теперь только один компонент формы
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { fetchTopRatedProducts } from "../utils/productsSlice.ts";
import { MinimumOrder } from "../components/MinimumOrder/MinimumOrder.tsx";
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  media: string | Array<{ Uri: string }>;
  name: string;
  base_price: string | null;
  discounted_price: string | null;
}

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.topRated) as unknown as Product[];
  const productStatus = useAppSelector((state) => state.products.status.fetchTopRatedProducts);
  const minimumOrderAmount = 400; // Минимальная сумма заказа
  const privacyPolicyUrl = "/privacy-policy"; // URL политики конфиденциальности
  const userId = useAppSelector((state) => state.user.telegramId); // Извлекаем идентификатор пользователя из userSlice

  // Переход в каталог
  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  // Получаем список продуктов, если статус запроса в состоянии "idle"
  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchTopRatedProducts());
    }
  }, [productStatus, dispatch]);

  // Состояние корзины
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    title: string;
    subtitle: string;
    price: number;
    imageUrl: string;
  }>>([]);

  // Функция для извлечения URL изображения
  const extractImageUrl = (media: string | Array<{ Uri: string }>): string => {
    try {
      if (typeof media === 'string') {
        const parsedMedia = JSON.parse(media);
        const imageMedia = parsedMedia.find((item: { type: string }) => item.type === 'IMAGE');
        if (imageMedia && imageMedia.url) {
          return imageMedia.url;
        }
      } else if (Array.isArray(media)) {
        return `https:${media[0]?.Uri}`;
      }
    } catch (error) {
      console.error('Ошибка при парсинге media:', error);
    }
    return 'img/default.png';
  };

  // Рекомендации на основе продуктов
  const recommendations = products.map((product: any) => ({
    id: product.id,
    price: product.discounted_price || product.base_price,
    imageSrc: extractImageUrl(product.media),
    name: product.name,
  }));

  // Извлечение данных корзины из localStorage при загрузке компонента
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Функция для расчёта общей суммы заказа
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = String(item.price).trim() === "Бесплатно" ? 0 : parseFloat(String(item.price).replace("Р", "").trim());
      return sum + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const totalAmount = calculateTotal();
  const currency = "Р"; // Валюта для отображения

  return (
      <div style={{ minHeight: "100vh" }}>
        <MainComponent />
        <Cart cartItems={cartItems} recommendations={recommendations} />
        {totalAmount < minimumOrderAmount ? (
            <MinimumOrder
                minimumAmount={minimumOrderAmount}
                onCatalogClick={handleCatalogClick}
                privacyPolicyUrl={privacyPolicyUrl}
            />
        ) : (
            <OrderForm
                totalAmount={totalAmount}   // Общая сумма заказа
                currency={currency}         // Валюта
                cartItems={cartItems}       // Товары в корзине
                setCartItems={setCartItems} // Функция для обновления корзины (после успешного заказа очищаем корзину)
            />
        )}
      </div>
  );
}

export default CartPage;
