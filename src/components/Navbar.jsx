// Navbar.jsx
function Navbar(props) {
  const pages = ["Home", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-pill">MR</span>
        <span className="brand-text">Maa Ki Rasoi</span>
      </div>

      <div className="nav-links">
        {pages.map((page) => (
          <button
            key={page}
            className={`nav-link ${props.activePage === page ? "active" : ""}`}
            onClick={() => props.setActivePage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <button className="order-btn" onClick={() => props.setActivePage("Contact")}>
          Order Now
        </button>

        <button className="cart-icon-wrap" onClick={() => props.setActivePage("Cart")}>
          🛒
          {props.cart.length > 0 && (
            <span className="cart-badge">{props.cart.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;