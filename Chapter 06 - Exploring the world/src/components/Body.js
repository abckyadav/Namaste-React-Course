import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/contants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [selectValue, setSelectValue] = useState("allRestaurants");
  const [searchText, setSearchText] = useState("");

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

  // useEffect(() => {
  //   if (selectValue === "allRestaurants") {
  //     setListOfRestaurants(SWIGGY_DATA);
  //   } else {
  //     const filteredRestaurants = listOfRestaurants.filter(
  //       (res) => res.info.avgRating >= 4
  //     );

  //     setListOfRestaurants(filteredRestaurants);
  //   }
  // }, [selectValue]);

  const fetchRestaurants = async () => {
    const data = await fetch(SWIGGY_API);

    const res = await data.json();
    setListOfRestaurants(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const searchData = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurants(searchData);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

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
          <input
            placeholder="Search Food Here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {filterRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterRestaurants &&
            filterRestaurants.map((data) => (
              <RestaurantCard key={data.info.id} resData={data} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
