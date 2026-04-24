import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardDefault from "../Pages/DashboardPages/DashboardDefault";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                loader: () => fetch("/JsonData/PopularProducts.json"),
                Component: Home
            }
        ]
    },

    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                loader: () => fetch("/JsonData/PopularProducts.json"),
                Component: DashboardDefault
            }
        ]
    }
])