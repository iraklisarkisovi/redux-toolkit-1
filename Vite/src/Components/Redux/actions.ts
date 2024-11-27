import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../Interfaces/User.Inter";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('Users not found :(');
        }
    }
);