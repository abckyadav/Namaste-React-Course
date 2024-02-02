import RestaurantCard from "./RestaurantCard";
import { SWIGGY_DATA } from "../utils/contants";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(SWIGGY_DATA);
  const [selectValue, setSelectValue] = useState("allRestaurants");

  const filterTopRated = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4
    );

    setListOfRestaurants(filteredRestaurants);
    console.log("listOfRestaurants:", listOfRestaurants);
  };

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue === "allRestaurants") {
      setListOfRestaurants(SWIGGY_DATA);
    } else {
      const filteredRestaurants = listOfRestaurants.filter(
        (res) => res.info.avgRating >= 4
      );

      setListOfRestaurants(filteredRestaurants);
    }
  }, [selectValue]);

  return (
    <div className="body">
      <div className="toolBar">
        <div className="filter">
          <select onChange={handleSelect} className="select">
            <option value="allRestaurants">All Restaurants</option>
            <option value="topRatedRestaurants">Top Rated Restaurants</option>
          </select>
        </div>
        <div className="search">
          <input placeholder="Search Food Here..." />
          <button>Search</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants &&
          listOfRestaurants.map((data) => (
            <RestaurantCard key={data.info.id} resData={data} />
          ))}
      </div>
    </div>
  );
};

export default Body;
