import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {UserDetailsPage, UsersPage} from "./pages";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export {App};