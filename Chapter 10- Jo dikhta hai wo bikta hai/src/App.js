import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { InfinitySpin } from "react-loader-spinner";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const Loader = () => {
  return (
    <div className="loaderContainer">
      <InfinitySpin
        visible={true}
        width="100"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus:", onlineStatus);

  return onlineStatus === false ? (
    <div className="noInternet">
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    </div>
  ) : (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Loader />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
