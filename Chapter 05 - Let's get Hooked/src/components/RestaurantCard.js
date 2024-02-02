const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${resData.cloudinaryImageId}`}
      />
      <h3 className="res-card-title">{resData.name}</h3>
      <p className="res-card-rating">Rating: {resData.avgRating} </p>
      <p className="res-card-cuisine">{resData.cuisines.join(", ")}</p>
      <p className="res-card-address">{resData.areaName}</p>
      <p className="res-card-costfortwo">{resData.costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
