import { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { SWIGGY_API } from "../utils/contants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [selectValue, setSelectValue] = useState("allRestaurants");
  const [searchText, setSearchText] = useState("");
  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    if (selectValue === "allRestaurants") {
      setFilterRestaurants(listOfRestaurants);
    } else if (selectValue === "topRatedRestaurants") {
      const filteredRestaurants = listOfRestaurants?.filter(
        (res) => res?.info?.avgRating >= 4
      );
      setFilterRestaurants(filteredRestaurants);
    }
  }, [selectValue]);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API);

      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      } else {
        const json = await data.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);

        // update the state variable restaurants with Swiggy API data
        setListOfRestaurants(resData);
        setFilterRestaurants(resData);
        console.log("setListOfRestaurants:", listOfRestaurants);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
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
              <Link key={data?.info?.id} to={"/restaurants/" + data?.info?.id}>
                {data?.info?.veg ? (
                  <RestaurantCardVeg resData={data} />
                ) : (
                  <RestaurantCard resData={data}  />
                )}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
