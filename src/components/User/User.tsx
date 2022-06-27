import {FC} from "react";

import {IUser} from "../../interfaces";
import './User.css';

interface IProps {
    user: IUser,
}

const User: FC<IProps> = ({user}) => {
    const {name, age, email, _id} = user;

    return (
        <div className={'userItem'}>
            <div>Name: {name}. Age: {age}</div>
            <div>Email: {email}</div>
            <div>Id: {_id}</div>
        </div>
    );
};

export {User};