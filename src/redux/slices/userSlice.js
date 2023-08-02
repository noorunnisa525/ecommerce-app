import {createSlice} from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    token: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setUser, setToken} = userSlicer.actions;

export default userSlicer.reducer;
