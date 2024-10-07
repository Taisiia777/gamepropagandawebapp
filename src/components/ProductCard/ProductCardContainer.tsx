
import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer: React.FC = () => {
  const productDetails = [
    { label: "Платформа", value: "PS5" },
    {
      label: "Жанр",
      value: "Спорт",
      link: "https://gamepropaganda.com/product-category/sports/",
    },
    {
      label: "Локализация",
      value: "русская озвучка",
      link: "https://gamepropaganda.com/product-tag/ru-voice/",
    },
    {
      label: "",
      value: "русский текст",
      link: "https://gamepropaganda.com/product-tag/ru-text/",
    },
  ];

  return (
    <ProductCard
      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/99b93069ef4f17e6f0f96acfa7ebc473a204a9d0096ba8629020a4aa2afbdeac?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
      title="EA SPORTS FC 25 Standard Edition PS4 & PS5"
      price={9990}
      currency="₽"
      details={productDetails}
    />
  );
};

export default ProductCardContainer;
