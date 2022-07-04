import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IState {
    users: IUser[],
    formErrors: any,
    registerError: boolean,
}

const initialState: IState = {
    users: [],
    formErrors: {},
    registerError: false,
};

const getAll = createAsyncThunk<IUser[], void>(
    'userSlice/getAll',
    async (arg,{rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const registerUser = createAsyncThunk<IUser, { user: IUser }>(
    'userSlice/registerUser',
    async ({user},{rejectWithValue}) => {
        try {
            const {data} = await userService.create(user);
            return data;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue({errorsFromDB: error.response.data});
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(registerUser.rejected, (state, action) => {
                const {errorsFromDB} = action.payload as any;
                state.registerError = true;
                state.formErrors = errorsFromDB;
            })
    },
});

const {reducer: userReducer, actions: {}} = userSlice;

const userActions = {
    getAll,
    registerUser,
};

export {
    userActions,
    userReducer,
}
