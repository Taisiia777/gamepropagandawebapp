
import React from "react";
import ProductElement from "./ProductElement";

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
      />
  );
};

export default ProductCardContainer;
