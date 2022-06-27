export interface IAuth {
    user?: {
        _id: string,
        name: string,
        email: string,
        age: number,
    },
    access_token: string,
    refresh_token: string,
}
