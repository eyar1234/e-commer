import { useContext } from "react";

import { CartContaxt } from "../../contexts/cart.context";
import CheckoutItem from "./../../components/checkout-item/checkout.component";

import "./../checkout/checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContaxt);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
