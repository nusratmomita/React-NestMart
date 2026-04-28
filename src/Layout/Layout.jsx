import { Outlet } from "react-router"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Newsletter from "../Components/Newletter/Newsletter";
import Features from "../Components/Features/Features";

const Layout = () => {
    return (
        <div>
            <ToastContainer/>
            <Header/>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Newsletter/>
            <Features/>
            <Footer/>
        </div>
    )
}

export default Layout;