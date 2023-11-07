import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
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
        path: "/foods/:id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/addFoods",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manageFoods",
        element: (
          <PrivateRoute>
            <ManageFoods></ManageFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: <UpdateFood></UpdateFood>,
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood></ManageSingleFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
  },
]);

export default Route;
