import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";


const Root = () => {
    return (
        <div>
            <div className=" w-full mx-auto">
            <Navbar></Navbar>
            </div>


            <div className="  w-full mx-auto">
                <Outlet></Outlet>
            </div>
            
            <div>
              <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;