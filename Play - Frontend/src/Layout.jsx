import { Outlet } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;