import {FC, useEffect} from "react";
import {AuthForm} from "../../components";
import {useSearchParams} from "react-router-dom";

const LoginPage: FC = () => {
    const [query] = useSearchParams();

    // localStorage.clear();

    useEffect(()=>{
        console.log('session end', !!query.get('ExpSession'));
    },[query])

    return (
        <div>
            <AuthForm/>
            {/*<Link to={'/register'}>To Register</Link>*/}
        </div>
    );
};

export {LoginPage};