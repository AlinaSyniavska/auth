import {FC} from "react";
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser,
}

const User: FC<IProps> = ({user}) => {
    const {name, age, email} = user;

    return (
        <div>
            <div>Name: {name}. Age: {age}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};