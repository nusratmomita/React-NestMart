import { Outlet } from "react-router"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
    return (
        <div>
            <ToastContainer/>
            <Header/>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;