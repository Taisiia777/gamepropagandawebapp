
import React from "react";
import ProductElement from "./ProductElement";
import { useAppSelector } from "../../hooks/hooks.ts"; // Импортируем хук для работы с Redux
import {RootState} from "../../store.ts";
interface ProductDetails {
  label: string;
  value: string;
}

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: number | null;  // Поскольку цена может быть null
  currency: string | "Р";
  details: ProductDetails[];
  description: string;
}

interface ProductCardContainerProps {
  product: Product;
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({ product }) => {
  const userId = useAppSelector((state: RootState) => state.user.telegramId);

  const displayPrice = product.price !== null ? `${product.price} ${product.currency}` : "Бесплатно";

  return (
      <ProductElement
          imageUrl={product.imageUrl}
          title={product.title}
          price={displayPrice}
          details={product.details}
          description={product.description}
          currency={product.currency}
          id={product.id}
          userId={userId ? userId.toString() : '0'}  // Если userId null, передаем '0' как дефолтное значение
      />
  );
};

export default ProductCardContainer;
