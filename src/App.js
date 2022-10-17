import './App.css'
// --- Class vs Function Components--------------------------------
// // import {ClassComponent} from "./components/ClassComponent";
// import {useState} from "react";
// import {FunctionComponent} from "./components/FunctionComponent";
//
// function App() {
//
//     const [flag, setFlag] = useState(true);
//     return (
//         <div>
//             {flag && <FunctionComponent name='max'/>}
//             <button onClick={() => setFlag(prev => !prev)}>Hide</button>
//         </div>
//     )
// }
//
// export default App;

//-----Context & children------------------------------------------------------

import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {HomePage} from "./pages/HomePage";
import {UserPage} from "./pages/UserPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailPage} from "./pages/PostDetailPage";
import {AboutPage} from "./pages/AboutPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Login} from "./components2/login";
import {RequireAuth} from "./hoc/RequireAuth";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<PostDetailPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};


// const App = () => {
//
//     return (
//         <div>
//             app
//         </div>
//     )
// }
//
// export default App;