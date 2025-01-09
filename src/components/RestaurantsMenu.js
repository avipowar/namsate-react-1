import { useState, useEffect } from "react";
import { RATING_URL } from "../utils/constants";
import Shimmer from "./ShimmerUi";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=364797&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  //   const { text } = resInfo?.cards[0]?.card?.card;

  const {
    cloudinaryImageId,
    avgRating,
    totalRatings,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  return (
    <div className="resinfo-parent-div">
      <h1 className="heading">{resInfo?.cards[0]?.card?.card?.text}</h1>
      <div className="resInfo">
        <div className="rating-parent-div">
          <img className="rating-url" src={RATING_URL} />
          <h4 className="res-ratings">
            {avgRating} ({Math.floor(totalRatings / 1000)}K+ ratings){" "}
            {"." + "  " + costForTwoMessage}
          </h4>
        </div>
        <div>
          <h5 className="res-cousins">{cuisines.join(" , ")}</h5>
        </div>
        <div>
          <h5 className="res-address">
            <span className="outlet-text">Outlet</span>
            <span className="area-name">{areaName}</span>
          </h5>
          <h5 className="res-delivery-time">
            {minDeliveryTime + "-" + maxDeliveryTime + " mins"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
