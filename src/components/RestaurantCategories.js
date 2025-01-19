import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = (props) => {
  const { data, showIndex, setShowIndex } = props;
  const { title } = data;
  const itemList = data?.categories || [];
  const showItem = showIndex;
  // console.log(props);

  function handleClick() {
    setShowIndex();
  }

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
