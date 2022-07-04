import {FC, useEffect} from "react";
import {AuthForm} from "../../components";
import {Link, useSearchParams} from "react-router-dom";

const LoginPage: FC = () => {
    const [query] = useSearchParams();
    //TODO comment this clear
    localStorage.clear();

    useEffect(()=>{
        // console.log('session end', !!query.get('ExpSession'));
    },[query])

    return (
        <div>
            <AuthForm/>
            <br/><hr/>
            <Link to={'/auth/register'}>To Register</Link>
        </div>
    );
};

export {LoginPage};