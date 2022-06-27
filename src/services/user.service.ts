import {IUser} from "../interfaces";
import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: (): Response<IUser[]> => axiosService.get(urls.users),
    getById: (id: string): Response<IUser> => axiosService.get(`${urls.users}/${id}`),
};

export {
    userService,
}
