import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useRef, useState } from "react";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const dropdownRef = useRef();

  const [isOpen, toggleMenu] = useState(false);

  return (
    <>
      <div className={isOpen ? "mobile-menu active" : "mobile-menu"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "20px", letterSpacing: "1px" }}>Menu</div>
          <button
            className="close-cart-button"
            onClick={() => toggleMenu(false)}
          >
            X
          </button>
        </div>
        <Link to="/">
          <div className="mobile-section" onClick={() => toggleMenu(false)}>
            <div>Home</div>
            <div>{">"}</div>
          </div>
        </Link>
        <Link to="/contact">
          <div className="mobile-section" onClick={() => toggleMenu(false)}>
            <div>Contact</div>
            <div>{">"}</div>
          </div>
        </Link>
        <Link to="/store">
          <div className="mobile-section" onClick={() => toggleMenu(false)}>
            <div>Products</div>
            <div>{">"}</div>
          </div>
        </Link>
        <Link to="/contact">
          <div className="mobile-section" onClick={() => toggleMenu(false)}>
            <div>Locations</div>
            <div>{">"}</div>
          </div>
        </Link>
      </div>

      <div className="navbar-mobile">
      <Link to="/">
        <div>
          <img
            style={{ height: "32px", display: "block", cursor:"pointer" }}
            src="favicon.ico"
            alt="yeti-snowflake"
          />
        </div>
        </Link>
        <div className="mobile-icon-container">
          <div className="cart-icon" onClick={openCart}>
            <ShoppingCartIcon />
            {cartQuantity > 0 && (
              <div className="cart-items-amount">{cartQuantity}</div>
            )}
          </div>
          <div className="hamburger" onClick={() => toggleMenu(true)}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}
