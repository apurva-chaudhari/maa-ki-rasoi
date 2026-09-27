// Home.jsx
import heroImage from "../assets/hero-mobile.jpg";
import productInfo from "../data/productInfo";
import Product from "./Product";

function Home(props) {
  return (
    <div className="page home-page">
      <section className="hero-v2">
        <div className="hero-v2-text">
          <h1 className="hero-v2-heading">
            Ghar ka khana, banaya pyaar se —<br />bilkul maa jaisa.
          </h1>
          <p className="hero-v2-sub">
            Fresh home-style tiffins delivered daily in traditional steel
            dabbas. No outside oil, no shortcuts — just real ghar ka khana,
            straight from the kitchen to your door.
          </p>
          <button className="order-now-btn">Order Now</button>
        </div>

        <div className="hero-v2-visual">
          <div className="blob-frame">
            <img src={heroImage} alt="Maa Ki Rasoi tiffin" className="blob-img" />
          </div>
          {/* <div className="fresh-badge">Fresh Today</div> */}
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-heading">
          <h2>Today's Menu</h2>
          <p className="section-sub">Updated fresh every morning at 8 AM</p>
        </div>

        <div className="menu-grid">
          {productInfo.map((product) => (
            <Product
              key={product.productId}
              product={product}
              addToCart={props.addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;