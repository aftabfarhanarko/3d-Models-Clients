import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Home } from "lucide-react";
import Login from "../Pages/Login/Login";
import Rigester from "../Pages/Rigester/Rigester";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Rigester></Rigester>
            }
        ]
    }
]) 