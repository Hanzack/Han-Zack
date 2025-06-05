// src/store/notificationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
}

interface NotificationState {
  notifications: any;
  items: Notification[];
}

const initialState: NotificationState = {
    items: [],
    notifications: undefined
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead(state, action: PayloadAction<number>) {
      const notif = state.items.find(n => n.id === action.payload);
      if (notif) notif.read = true;
    },
    markAllAsRead(state) {
      state.items = state.items.map(n => ({ ...n, read: true }));
    },
    deleteNotification(state, action: PayloadAction<number>) {
      state.items = state.items.filter(n => n.id !== action.payload);
    },
    clearNotifications(state) {
      state.items = [];
    },
  },
});

export const {
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;
