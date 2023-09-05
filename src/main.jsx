import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs/AboutUs";
import Dashboard from "./components/Dashboard/Dashboard";
import AllUsers from "./components/Dashboard/AllUsers/AllUsers";
import AddGame from "./components/Dashboard/AddGame/AddGame";
import Login from "./components/Registrations/Login/Login";
import Signup from "./components/Registrations/Signup/Signup";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageGames from "./components/Dashboard/ManageGames/ManageGames";
import EditGames from "./components/Dashboard/EditGames/EditGames";
import MyGames from "./components/Dashboard/MyGames/MyGames";
import PaymentHistory from "./components/Dashboard/PaymentHistory/PaymentHistory";
import Pay from "./components/Dashboard/Pay/Pay";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import UserRoute from "./components/UserRoute/UserRoute";
axios.defaults.baseURL = `https://game-marketplace-server.vercel.app/`;
axios.interceptors.request.use((req) => {
  return req;
});
axios.interceptors.response.use((res) => {
  return res.data;
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: "/dashboard/manageusers",
        element: <AdminRoute><AllUsers /></AdminRoute>
      },

      {
        path: "/dashboard/addgame",
        element:<AdminRoute><AddGame /></AdminRoute> ,
      },

      {
        path:"/dashboard/managegames",
        element:<AdminRoute><ManageGames/></AdminRoute>
      },
      {
        path: '/dashboard/edit/:id',
        element:<AdminRoute><EditGames/></AdminRoute>,
        loader: ({params})=>fetch(`https://game-marketplace-server.vercel.app/games/${params.id}`)
      },
      {
        path:"/dashboard/mygames",
        element: <UserRoute><MyGames/></UserRoute>
       
      },
      {
        path: "/dashboard/paymenthistory",
        element:<UserRoute><PaymentHistory/></UserRoute>
      },
      {
        path: "/dashboard/pay",
        element:<UserRoute><Pay/></UserRoute>
      }
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
