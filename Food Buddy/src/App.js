import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "/restaurants/:resId", // Routes will be unique as per the name(resName) or Id (resId)
        element: <RestaurantMenu />,
        errorElement: <Error />
      },
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
