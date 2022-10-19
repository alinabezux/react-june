import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {CarsPage} from "./pages/CarsPage/CarsPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    )
}

export default App;