import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearItem());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="cart-main-container ">
      <h1 className="cart-heading">Cart</h1>
      <div>
        <button className="clear-btn" onClick={handleClick}>
          {" "}
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && <h1>Cart Is Empty Add The Items In It</h1>}
      <div className="cart-container ">
        <ItemList list={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
