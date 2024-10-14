//
// import React from "react";
// import ProductElement from "./ProductElement";
//
// const ProductCardContainer: React.FC = () => {
//   const productDetails = [
//     { label: "Платформа", value: "PS5" },
//     {
//       label: "Жанр",
//       value: "Спорт"
//     },
//     {
//       label: "Локализация",
//       value: "русская озвучка, русский текст"
//     },
//
//   ];
//
//   return (
//     <ProductElement
//       imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/99b93069ef4f17e6f0f96acfa7ebc473a204a9d0096ba8629020a4aa2afbdeac?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
//       title="EA SPORTS FC 25 Standard Edition PS4 & PS5"
//       price={9990}
//       currency="₽"
//       details={productDetails}
//       description="Подробнее о предварительном заказе, в том числе и о его отмене, можно узнать из Условий обслуживания и Лицензионного соглашения Sony Entertainment Network. Автоматическая загрузка осуществляется, если на системе PS5™/PS4™ включены настройки «Автоматический вход в систему» и «Автоматический вход в сеть».
//
// Оформите предзаказ* стандартного издания EA SPORTS FC™ 25 до 26 сентября и получите:
//
// — игрок с обложки в аренду в Football Ultimate Team™ (10 матчей)
// — 1 посол в аренду на выбор в Football Ultimate Team™ (10 матчей)
// — Открытая ячейка игровых стилей в режиме «Клубы»
// — 250 000 монет Клубов
// — дополнительные очки индивидуальности игрока в карьере игрока
// — 3 кумира в карьере игрока — Бекхэм, Зидан и Роналдо эры Галактикос
// — 5-звездочный тренер для найма в карьере тренера
// — возможность нанять молодежного скаута с рейтингом 5 звезд в карьере тренера.
//
// EA SPORTS FC™ 25 содержит версии игр для PS4 и PS5†.
//
// В EA SPORTS FC™ 25 у вас будет ещё больше возможностей принести клубу победу.
//
// Объединяйте усилия в Rush 5 на 5 — это новый способ играть в мини-футбол с друзьями в Football Ultimate Team™, Клубах и быстрых матчах. Соберите состав вашей мечты с 5 игроками в Football Ultimate Team Rush, с участием до трех ваших друзей, играющих своими любимыми игроками.
//
// Выведите игру вашего состава на уровень лучших команд мира с помощью FC IQ. Полная переработка тактических основ в игре предоставляет больший стратегический контроль и более реалистичное командное движение, а новая созданная на основании данных реальных матчей ИИ-модель определяет тактический аспект с помощью новых ролей игроков.
//
// Нововведения в карьере тренера и игрока позволяют вам воссоздать в игре главные события реального мира футбола с помощью Динамических стартовых очков**. Перепишите истории КУМИРОВ прошлого, используя современные команды в карьере игрока. Играйте во впервые появившейся в игре женской карьере, управляя клубом или игроком из топ-5 женских лиг.
//
// В EA SPORTS FC™ 25 представлены лучшие игроки из крупнейших клубов и турниров со всего мира, а данные из матчей топ-лиг мира определяют, как в каждом матче более 19 000 игроков двигаются, играют и выигрывают.
//
// Представляем Клубное сообщество — следующий этап лояльности в EA SPORTS FC™ 25. Доступно для всех поклонников игры, сыгравших в EA SPORTS FC™ 24 до 27 сентября 2024 г. и сыгравших в EA SPORTS FC™ 25 до 1 ноября 2024 г.*
//
// Не важно, как вы решите побеждать в EA SPORTS FC™ 25 — побеждайте ради клуба.
//
// В этой игре предусмотрена дополнительная внутриигровая покупка виртуальной валюты, которую можно использовать для приобретения виртуальных внутриигровых предметов, в том числе отобранных случайным образом."
//     />
//   );
// };
//
// export default ProductCardContainer;
import React from "react";
import ProductElement from "./ProductElement";

interface ProductDetails {
  label: string;
  value: string;
}

interface Product {
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

      />
  );
};

export default ProductCardContainer;
