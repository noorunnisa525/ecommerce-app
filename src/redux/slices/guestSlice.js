import {createSlice} from '@reduxjs/toolkit';

const guestSlicer = createSlice({
  name: 'guest',
  initialState: {
    guest: false,
  },

  reducers: {
    setGuest: (state, action) => {
      state.guest = action.payload;
    },
  },
});

export const {setGuest} = guestSlicer.actions;

export default guestSlicer.reducer;
