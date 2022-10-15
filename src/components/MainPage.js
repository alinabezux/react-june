import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Menu</h1>
            <h3><Link to={'/todos'}>Todos</Link></h3>
            <h3><Link to={'/albums'}>Albums</Link></h3>
            <h3><Link to={'/comments'}>Comments</Link></h3>
            <hr/>
            <h1>Result</h1>

            <Outlet/>
        </div>
    );
}

export {MainPage}