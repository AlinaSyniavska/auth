import {FC} from "react";

import {RegisterForm} from "../../components";
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

const UserDetailsPage: FC = () => {
    const {page, perPage} = useAppSelector(state => state.userReducer);
    const [query, setQuery] = useSearchParams({page: `${page}`, perPage: `${perPage}`});

    return (
        <div>
            <RegisterForm/>
        </div>
    );
};

export {UserDetailsPage};