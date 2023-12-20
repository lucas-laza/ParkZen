import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar";
export default function Template() {


    return(
        <div className="content">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}