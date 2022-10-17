import {Outlet} from "react-router-dom";

import {Header} from "../../components2";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};