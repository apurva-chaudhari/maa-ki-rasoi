// Cart.jsx
function Cart(props) {
  const cart = props.cart;

  // total now accounts for quantity, not just price
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="page cart-page">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Go add some delicious tiffins! 🍱
        </p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.productId}>
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-desc">{item.description}</span>
                </div>

                <div className="qty-selector">
                  <button
                    className="qty-btn"
                    onClick={() => props.decreaseCartQty(item.productId)}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => props.increaseCartQty(item.productId)}
                  >
                    +
                  </button>
                </div>

                <span className="cart-item-price">₹{item.price * item.quantity}</span>

                <button
                  className="remove-btn"
                  onClick={() => props.removeFromCart(item.productId)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;