import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";
import {IAuth, ILogin} from "../../interfaces";

interface IState {
    isAuth: boolean,
    loginError: boolean,

    authStatus: null,
    authErrors: any,
}

const initialState: IState = {
    isAuth: false,
    loginError: false,

    authStatus: null,
    authErrors: {}
};

const login = createAsyncThunk<IAuth, { user: ILogin }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.getTokens(user);
            return data;
        } catch (e: any) {
            return rejectWithValue({errorStatus: e.message, errorsFromForm: e.response.data});
        }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                state.loginError = false;
                const {access_token, refresh_token} = action.payload;
                localStorage.setItem('access', access_token);
                localStorage.setItem('refresh', refresh_token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loginError = true;
                const {errorStatus, errorsFromForm} = action.payload as any;
                state.authStatus = errorStatus;
                state.authErrors = errorsFromForm;
            })
    }
});

const {reducer: authReducer, actions: {setAuth}} = authSlice;

const authActions = {
    login,
    setAuth,
}

export {
    authReducer,
    authActions
}