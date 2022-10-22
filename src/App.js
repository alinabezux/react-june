import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./Layout";
import {CommentsPage, PostsPage, ChosenUserPage, UsersPage} from "./Pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<ChosenUserPage/>}/>
                </Route>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    )
}

export {App}