import {FC} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import {Users} from "../../components";
import {useAppSelector} from "../../hooks";

const UsersPage: FC = () => {
    const {page, perPage} = useAppSelector(state => state.userReducer);
    const [query, setQuery] = useSearchParams({page: `${page}`, perPage: `${perPage}`});
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};