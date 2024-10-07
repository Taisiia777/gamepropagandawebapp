import MainComponent from "../components/MainComponent/MainComponent";
import Cart from "../components/CartComponents/Cart";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
function CartPage() {
  // Example data for cartItems and recommendations
  const cartItems = [
    {
      id: "1",
      title: "ELDEN RING Shadow of the Erdtree",
      subtitle: "Дополнение | PS4 PS5",
      price: 6435,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e860ae8a5f047e9ef2ce92799a48728f7484de3ba38eae97367cbbea988bdbb1",
    },
    // Add more cart items as needed
  ];

  const recommendations = [
    {
      id: "1",
      title: "The Last of Us Part II",
      price: 2999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e860ae8a5f047e9ef2ce92799a48728f7484de3ba38eae97367cbbea988bdbb1",
    },
    {
      id: "2",
      title: "The Last of Us Part II",
      price: 2999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e860ae8a5f047e9ef2ce92799a48728f7484de3ba38eae97367cbbea988bdbb1",
    },
    {
      id: "3",
      title: "The Last of Us Part II",
      price: 2999,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e860ae8a5f047e9ef2ce92799a48728f7484de3ba38eae97367cbbea988bdbb1",
    }
    // Add more recommendation items as needed
  ];
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  const currency = "₽"; // Define your currency here
  return (
    <div>
      <MainComponent />
      <Cart cartItems={cartItems} recommendations={recommendations} />
      <OrderForm/>
      <OrderSummary totalAmount={totalAmount} currency={currency} />
    </div>
  );
}

export default CartPage;
