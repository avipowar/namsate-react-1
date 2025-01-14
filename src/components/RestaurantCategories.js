import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ data }) => {
  const { title } = data;
  const itemList = data?.categories || [];
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  // console.log(itemList);
  return (
    <div className="main-div-container">
      <h3 className="restaurant-category-title">{title}</h3>
      {itemList.map((item) => {
        return (
          <div key={item.id}>
            {/* <div className="resTaurantsCategory"> */}
            <div className="resTaurantsCategory" onClick={handleClick}>
              <p>
                {item.title} ({item?.itemCards?.length})
              </p>
              <span className="resTaurantsCategory-symbol">⬇️</span>
            </div>
            {showItem && <ItemList list={item.itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantsCategory;
