import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/provider/AuthProvider";
import Layout from "./components/Home/Layout/Layout";
import Recipes from "./components/Home/Layout/Recipes";
import PrivateRoutes from "./components/Roters/PrivateRoutes";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Layout></Layout>,
        loader:()=> fetch('https://chef-recipe-hunter-server-jerrytonmoy-gmailcom.vercel.app/chefs')
      },
      {
        path: 'recipes/:id',
        element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-jerrytonmoy-gmailcom.vercel.app/chefs/${params.id}`)

      },
      {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
);