import { NavLink } from 'react-router'

export default function CheckoutHeader({ cart }) {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <NavLink to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </NavLink>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<NavLink className="return-to-home-link"
              to="/">{cartQuantity} items</NavLink>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}