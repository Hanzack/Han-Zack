// userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    preferences: {
      notificationsEnabled: true,
    },
  },
  reducers: {
    toggleNotifications(state) {
      state.preferences.notificationsEnabled = !state.preferences.notificationsEnabled;
    },
  },
});

export const { toggleNotifications } = userSlice.actions; // ✅ Named export
export default userSlice.reducer;
