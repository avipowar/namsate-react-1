import { RATING_URL } from "../utils/constants";
import Shimmer from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantsCategory from "./RestaurantCategories";

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

  // console.log(resInfo);

  const resCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (resCategori) =>
        resCategori?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(resCategories);

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
        {resCategories.map((resCategory) => (
          <RestaurantsCategory
            key={resCategories?.card?.card?.title}
            data={resCategory?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
