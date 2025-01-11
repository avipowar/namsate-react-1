import { RATING_URL } from "../utils/constants";
import Shimmer from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { cuisines, name, areaName, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { maxDeliveryTime, minDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const { title } = cards[2]?.card?.card;
  const { itemCards } = cards[2]?.card?.card;

  return (
    <div className="menu-container">
      {/* Restaurant Info Card  */}
      <div className="restaurant-card">
        <h1 className="restaurant-name">{name}</h1>
        <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
        <p className="restaurant-area">{areaName}</p>
        <div className="restaurant-info">
          <p className="rating">⭐ {avgRating}</p>
          <p className="cost">{costForTwoMessage}</p>
          <p className="delivery-time">
            Delivery: {minDeliveryTime}-{maxDeliveryTime} mins
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-card">
        <h2 className="menu-title">{title}</h2>
        <p className="menu-subtitle">
          {title} ({itemCards.length} items)
        </p>
        <ul className="menu-items">
          {itemCards.map((resMenu) => {
            const { id, name } = resMenu?.card?.info;
            return (
              <li key={id} className="menu-item">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
