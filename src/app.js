import React, { createElement, lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
// import Grocery from "";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Lazy Loading
const Grocery = lazy(() => {
  import("./components/Grocery");
});

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    // path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/resMenu/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={"LOading"}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    // errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
