import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    props?.resData?.info;
  return (
    <div className="resContainer">
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h4 className="restaurant-heading">{name}</h4>
        <h4 className="restaurant-rating">{"Avg-Rating:    " + avgRating}</h4>
        <h4 className="restaurant-cost">{costForTwo}</h4>
        <h4 className="restaurant-cuisines">{cuisines.join(" , ")}</h4>
        <h4 className="restaurant-delivery-time">
          {props?.resData?.info?.sla?.deliveryTime + "  min"}{" "}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
