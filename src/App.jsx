// App.jsx
import { useState } from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [cart, setCart] = useState([]);

  // If the product is already in the cart, increase its quantity.
  // Otherwise, add it as a new cart item.
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === product.productId
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  }

  // Increase quantity of an item already in the cart
  function increaseCartQty(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity, but remove item if it hits 0
  function decreaseCartQty(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove item completely from cart
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
  }

  return (
    <div className="app">
      <Topbar />
      <Navbar activePage={activePage} setActivePage={setActivePage} cart={cart} />

      {activePage === "Home" && <Home addToCart={addToCart} />}
      {activePage === "About" && <About />}
      {activePage === "Contact" && <Contact />}
      {activePage === "Cart" && (
        <Cart
          cart={cart}
          increaseCartQty={increaseCartQty}
          decreaseCartQty={decreaseCartQty}
          removeFromCart={removeFromCart}
        />
      )}

      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
}

export default App;