import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(clearItem());
  };

  return (
    <div className="cart-main-container">
      <div className="cart-item-clear-btn">
        <button onClick={handleClick} className="clear-btn">
          Clear Cart Items
        </button>
      </div>
      <div className="cart-container">
        <h1 className="cart-heading">Cart</h1>
        <ItemList list={cartItems} />
      </div>
      {cartItems.length === 0 && (
        <h1 className="cart-heading"> Cart Is Empty Please Add the Items</h1>
      )}
    </div>
  );
};

export default Cart;
