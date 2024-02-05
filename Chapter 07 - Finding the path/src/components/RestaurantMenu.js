import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/contants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);

    const res = await data.json();
    console.log("res:", res);
    setResInfo(res?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card &&
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("itemCards:", itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs ."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
