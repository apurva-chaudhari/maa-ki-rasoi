// Product.jsx
import { useState } from "react";

function Product(props) {
  const product = props.product;

  // Each product card manages its own quantity before adding to cart
  const [quantity, setQuantity] = useState(1);

  function increaseQty() {
    setQuantity(quantity + 1);
  }

  function decreaseQty() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleClick() {
    // send the product AND the chosen quantity up to App.jsx
    props.addToCart({ ...product, quantity: quantity });
    setQuantity(1); // reset selector back to 1 after adding
  }

  return (
    <div className={`menu-card ${product.type === "veg" ? "card-veg" : "card-nonveg"}`}>
      {product.bestseller && <span className="bestseller-tag">⭐ Bestseller</span>}

      <img src={product.image} alt={product.name} className="product-img" />

      <div className="menu-card-top">
        <span className={`diet-tag ${product.type === "veg" ? "diet-veg" : "diet-nonveg"}`}>
          {product.type === "veg" ? "Veg" : "Non-Veg"}
        </span>
      </div>

      <p className="menu-name">{product.name}</p>
      <p className="menu-description">{product.description}</p>

      <div className="menu-card-bottom">
        <span className="menu-price">₹{product.price}</span>

        <div className="qty-selector">
          <button className="qty-btn" onClick={decreaseQty}>−</button>
          <span className="qty-value">{quantity}</span>
          <button className="qty-btn" onClick={increaseQty}>+</button>
        </div>
      </div>

      <button className="add-cart-btn" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;