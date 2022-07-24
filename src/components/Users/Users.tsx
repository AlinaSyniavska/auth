import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";
import {User} from "../User/User";
import {useSearchParams} from "react-router-dom";

const Users: FC = () => {
    const {users, page, perPage} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: `${page}`, perPage: `${perPage}`});

    useEffect(() => {
        dispatch(userActions.saveQueryParams({page: query.get('page'), perPage: query.get('perPage')}));
        setQuery({page: `${page}`, perPage: `${perPage}`})
    }, [page, perPage]);

    useEffect(() => {
        dispatch(userActions.saveQueryParams({page: query.get('page'), perPage: query.get('perPage')}));
        dispatch(userActions.getAll({page: query.get('page') || '1', perPage: query.get('perPage') || '5'}))
    }, [dispatch, query]);

    return (
        <div>
            {
                users.map(user => <User key={user._id} user={user}/>)
            }
        </div>
    );
};

export {Users};