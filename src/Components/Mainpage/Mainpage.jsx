import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";


const Mainpage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet className="min-h-screen"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainpage;