import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className=" w-full mx-auto">
            <Navbar></Navbar>
            </div>


            <div className="  w-full mx-auto">
                <Outlet></Outlet>
            </div>
            
            
            
        </div>
    );
};

export default Root;