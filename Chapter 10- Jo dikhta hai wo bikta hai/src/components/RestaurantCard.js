import { IMG_CDN_URL } from "../utils/contants";
import yellowStar from "../assets/star yellow.png";
import greenStar from "../assets/star green.png";

const RestaurantCard = (props) => {
  const resData = props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={`${IMG_CDN_URL}${resData.cloudinaryImageId}`}
      />

      <h3 className="res-card-title font-bold">{resData.name}</h3>
      <p className="res-card-rating flex items-center gap-1">
        Rating:{" "}
        <img
          className="h-4"
          src={resData.avgRating >= 4 ? greenStar : yellowStar}
        />{" "}
        {resData.avgRating}{" "}
      </p>
      <p className="res-card-address">{resData.areaName}</p>
      <p className="res-card-costfortwo">{resData.costForTwo}</p>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="flex">
        <label className="absolute bg-green-300 rounded-md p-1 m-1">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
