import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';
import { IUser } from '../../Interfaces/User.Inter';

interface CounterState {
    users: IUser[],
    count: number,
    isloading: boolean,
    error: any,
};
  
const initialState: CounterState = {
    users: [],
    count: 0, 
    isloading: false,
    error: null,
};
  
export const counterSlice = createSlice({ 
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {//Suncrounous
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },

    extraReducers: (builder) => {//Asuncrounous
      builder.addCase(fetchUsers.fulfilled, (state: CounterState, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
        state.isloading = false
        state.error = null
      })
      builder.addCase(fetchUsers.pending, (state: CounterState) => {
        state.isloading = true
      })
      builder.addCase(fetchUsers.rejected, (state: CounterState, action: PayloadAction<unknown>) => {
        state.isloading = false
        state.error = action.payload as string
      })
      
    }
});



export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
