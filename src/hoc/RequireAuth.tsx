import {useLocation, useNavigate} from "react-router-dom";

import {useAppSelector} from "../hooks";
import {useEffect} from "react";

interface Props {
    children: any
}

const RequireAuth = ({children}: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {isAuth} = useAppSelector(state => state.authReducer);

    useEffect(() => {
        if(!isAuth){
            // return <Navigate to={'/auth/login'} state={location} />
            navigate('/auth/login', { state: { location } });
        }
    }, [isAuth]);

    return children;
};

export {RequireAuth};

