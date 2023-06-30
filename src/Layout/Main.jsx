
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;