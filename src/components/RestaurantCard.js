import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props)
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    props?.resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{props?.resData?.info?.sla?.deliveryTime + "  min"} </h4>
    </div>
  );
};

export default RestaurantCard;
