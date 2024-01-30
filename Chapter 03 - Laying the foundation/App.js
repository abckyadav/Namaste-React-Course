// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>(ReactElement JS) Object => HTML Element (render)
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Abhishek 🚀"
);

// JSX =>  is not HTML in JavaScript
// JSX => traspiled before it reaches the JS Engine => Parcel => Babel(takes jsx and convert it into react code)

const JSXHeading = <h1 id="title">Namaste Abhishek using JSX 🚀</h1>;

// React Functional Components
const HeadingComponent = () => {
  return (
    <h1 id="title">Namaste Abhishek from React Functional Component 🚀</h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
