import {IUser} from "../interfaces";
import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: (): Response<IUser[]> => axiosService.get(urls.users),
/*    getAll: (): Response<IUser[]> => {
        return axiosService.get(urls.users,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
    },*/

    getById: (id: string): Response<IUser> => axiosService.get(`${urls.users}/${id}`),
};

export {
    userService,
}
