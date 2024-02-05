import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!!!</h1>
      <h3>{error.data}</h3>
    </>
  );
};

export default Error;
