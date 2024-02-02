import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.jpg";
import { swiggyData } from "./data";

/**
 * Header
 *  -logo
 *  -nav-items
 *
 * body
 *  -search
 *  -restaurant container
 *   -card-container
 *    -card
 *      -img
 *      -name
 *      -location
 *      -price
 *      -etc
 *
 * footer
 *  -copyright
 *  -links
 *  -address
 *  -contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const Footer = () => {
  return <div className="footer"> Footer</div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
