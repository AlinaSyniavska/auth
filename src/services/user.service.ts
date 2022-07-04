import {IUser} from "../interfaces";
import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: (): Response<IUser[]> => axiosService.get(urls.users),
    getById: (id: string): Response<IUser> => axiosService.get(`${urls.users}/${id}`),
    create: (user: IUser): Response<IUser> => axiosService.post(urls.users, user),
};

export {
    userService,
}
