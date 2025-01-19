import { CDN_URL, MENU_URL, ITEMLIST_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ list }) => {
  // console.log(list);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));

    // {
    //   paylod:"pizza"
    // }
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <div className="itemList" key={item?.card?.info?.id}>
            <div className="itemList-info">
              <span className="itemList-name">{item?.card?.info?.name}</span>
              <p className="itemList-price">₹{item?.card?.info?.price / 100}</p>
              <h4>
                <span className="itemList-rating-icon">®️</span>
                <span className="itemList-rating">
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>{" "}
                <span className="itemList-avgRating">
                  ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </h4>
              <p className="itemList-description">
                {item?.card?.info?.description})
              </p>
            </div>
            <div className="itemList-image">
              {item?.card?.info?.imageId ? (
                <img
                  className="itemList-image-url"
                  src={ITEMLIST_URL + item.card.info.imageId}
                  alt="Item Image"
                />
              ) : (
                <div></div> // Or any fallback content
              )}
              <div className=" itemList-Add-btn">
                <button
                  className="itemList-add-btn"
                  onClick={() => handleClick(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
