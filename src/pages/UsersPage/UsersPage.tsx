import {FC} from "react";
import {Outlet, useLocation} from "react-router-dom";

import {Users} from "../../components";

const UsersPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};