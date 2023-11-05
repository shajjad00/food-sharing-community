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
        path: "/addFood",
        element: <AddFood></AddFood>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
  },
]);

export default Route;
