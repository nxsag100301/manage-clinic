import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    avatar: null,
    name: 'Xuan Sang',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.user.name = action.payload;
    },
  },
});

export const {changeName} = userSlice.actions;

export default userSlice.reducer;
