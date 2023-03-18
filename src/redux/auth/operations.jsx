import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        console.log('вызов register', credentials)
        try {
            const responce = await axios.post('/users/signup', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        }
        catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout',
    async (credential, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            // After a successful logout, remove the token from the HTTP header
            clearAuthHeader();
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
            // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const responce = await axios.get('/users/current');
            return responce.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
}
)