import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import AddTouristSpots from "../AddTouristSpots/AddTouristSpots";
import AllTouristSpots from "../AllTouristSpots/AllTouristSpots";
import MyTouristSpots from "../MyTouristSpots/MyTouristSpots";
import TouristSpotsDetails from "../HomePage-Component/TouristSpots/TouristSpotsDetails";
import Login from "../RegisterLogComponent/Login";
import Register from "../RegisterLogComponent/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../MyTouristSpots/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTouristSpots",
        element: <PrivateRoute>
          <AddTouristSpots></AddTouristSpots>
        </PrivateRoute>,
      },

      {
        path: "/allTouristSpots",
        element: <AllTouristSpots></AllTouristSpots>,
      },
      {
        path: "/Mylist",
        element: <PrivateRoute>
          <MyTouristSpots></MyTouristSpots>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/TouristSpots/:_id",
        element: <PrivateRoute>
          <TouristSpotsDetails></TouristSpotsDetails>
        </PrivateRoute>,
        loader: () => fetch('https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot')
      },


      {
        path: "/product/:id",
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
