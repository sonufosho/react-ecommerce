import { NavLink } from 'react-router'
import './Header.css'

export default function Header({ cart }) {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src="images/logo-white.png" />
            <img className="mobile-logo"
              src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink to="/orders" className="orders-link header-link">

            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink to="/checkout" className="cart-link header-link">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{cartQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}