import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardDefault from "../Pages/DashboardPages/DashboardDefault";
import Shop from "../Pages/Shop/Shop";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                loader: () => fetch("/JsonData/PopularProducts.json"),
                Component: Home
            },
            {
                path: "/shop",
                loader: () => fetch("/JsonData/ShopPageData.json"),
                Component: Shop
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