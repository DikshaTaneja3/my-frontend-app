import React, {lazy, Suspense, useEffect, useState} from "react"; // comes from node modules
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart"; 
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/Restaurantmenu";
import Grocery from "./components/Grocery";
import { lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
    const [userName, setUserName] = useState();
    //authentication
    useEffect(() => {
      const data = {
        name: "Diksha Taneja"
      };
      setUserName(data.name);
    },[]);

    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName }}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </UserContext.Provider>
      </Provider>
    );
}

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading Grocery Page</h1>}><Grocery /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);