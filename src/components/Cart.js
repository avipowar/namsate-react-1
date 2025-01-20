import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearItem());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart-main-container">
      {/* <h1 className="cart-heading">My Cart</h1> */}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <h2 className="empty-cart-text">
            Your cart is empty. Add some items!
          </h2>
        </div>
      ) : (
        <div className="cart-container">
          <ItemList list={cartItems} />
          <div className="clear-btn-container">
            <button className="clear-btn" onClick={handleClick}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
