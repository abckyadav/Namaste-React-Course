import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
