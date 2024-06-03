import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";
import Footer from "../shared/footer/Footer";



const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;