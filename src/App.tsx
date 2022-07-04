import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, RegisterPage, UserDetailsPage, UsersPage} from "./pages";
import {useAppDispatch} from "./hooks";
import {authActions} from "./redux";
import { RequireAuth } from "./hoc";


const App: FC = () => {

    const dispatch = useAppDispatch();
    const access = localStorage.getItem('access');

    if(access) {
        dispatch(authActions.setAuth());
    }

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<RequireAuth><UsersPage/></RequireAuth>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={'auth/login'} element={<LoginPage/>}/>
                <Route path={'auth/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};