import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  user: {
    avatar: any;
    name: string;
  };
}

const initialState: CounterState = {
  user: {
    avatar: null,
    name: 'Sang',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeName} = userSlice.actions;

export default userSlice.reducer;
