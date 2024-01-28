// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);

/*
    React.createElement(tags, [props], [children]) :-
    Tags :- a html tag like h1, div etc,
    Props :- like class, id of that tag (can be an object or null, where null is same as an empty obj)
    Children :- the content of the tag, like what we use in .appendChild()
    It is a top-level API of ReactJS which is used to create an element like the document.createElement() in DOM.

    Now, in React, we have to create a root such that we can tell the JS Engine that we want to run our
    React application in that place. To do this, ReactDOM contains APIs to render React components
    on the client(on the browser).

    ReactDOM.createRoot(document.getElementById(“root”)) :-
    This API is a Client-side API that lets you create a root to display React components inside a browser DOM mode. It  returns an object with 2 functions/methods :- render and unmount

    root.render(reactNode) :-
    helps to display a piece of JSX(“React node”) or a React Element(created by react.createElement() ) into the React root’s browser DOM node.
    It returns undefined.
*/
