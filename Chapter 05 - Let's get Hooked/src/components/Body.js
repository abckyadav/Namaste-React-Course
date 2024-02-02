import RestaurantCard from "./RestaurantCard";
import { swiggyData } from "../../data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="Search Food Here..." />
        <button>Search</button>
      </div>
      <div className="res-container">
        {swiggyData.map((data) => (
          <RestaurantCard key={data.info.id} resData={data.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
