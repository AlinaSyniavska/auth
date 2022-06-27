import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces";
import {userService} from "../../services";

interface IState {
    users: IUser[],
}

const initialState: IState = {
    users: [],
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

/*const getById = createAsyncThunk<IUser, { id: string }>(
    'userSlice/getById',
    async ({id},{rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);*/

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                const errors = action.payload as any;
                console.log(errors);
            })
    },
});

const {reducer: userReducer, actions: {}} = userSlice;

const userActions = {
    getAll,
};

export {
    userReducer,
    userActions,
}
