import {Outlet} from "react-router-dom";

import {Header} from "../componets";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MainLayout}