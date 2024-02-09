import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/contants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [selectValue, setSelectValue] = useState("allRestaurants");
  const [searchText, setSearchText] = useState("");

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue === "allRestaurants") {
      setFilterRestaurants(listOfRestaurants);
    } else if (selectValue === "topRatedRestaurants") {
      const filteredRestaurants = listOfRestaurants.filter(
        (res) => res.info.avgRating >= 4
      );
      setFilterRestaurants(filteredRestaurants);
    }
  }, [selectValue]);

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
            <option value="---">Filter</option>
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
      {filterRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterRestaurants &&
            filterRestaurants?.map((data) => (
              <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
                <RestaurantCard resData={data} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
