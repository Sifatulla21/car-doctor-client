import { createBrowserRouter } from "react-router-dom";
import Main from "../Laouts/Main";
import Bookings from "../Pages/Bookings/Bookings";
import BookService from "../Pages/BookService/BookService";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'signup',
            element:<SignUp></SignUp>
          },
          {
            path: 'book/:id',
            element: <PrivateRoute><BookService></BookService></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: 'bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
          }
      ]
    },
  ]);

  export default router;