import RestaurantCard from "./RestaurantCard";
import { SWIGGY_DATA } from "../utils/contants";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="Search Food Here..." />
        <button>Search</button>
      </div>
      <div className="res-container">
        {SWIGGY_DATA &&
          SWIGGY_DATA.map((data) => (
            <RestaurantCard key={data.info.id} resData={data.info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
