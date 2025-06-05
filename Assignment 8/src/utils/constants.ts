// src/constants.ts

// App Colors
export const COLORS = {
  primary: '#4A90E2',
  secondary: '#50E3C2',
  background: '#F5F7FA',
  textPrimary: '#333333',
  textSecondary: '#666666',
  error: '#FF3B30',
  success: '#4CD964',
  warning: '#FF9500',
};

// Screen Names (for navigation)
export const SCREENS = {
  HOME: 'Home',
  ADD_TASK: 'AddTask',
  TASK_DETAILS: 'TaskDetails',
  SETTINGS: 'Settings',
  NOTIFICATIONS: 'Notifications',
};

// AsyncStorage Keys
export const STORAGE_KEYS = {
  TASKS: '@tasks_storage_key',
  USER_SETTINGS: '@user_settings_key',
};

// API Config
export const API = {
  BASE_URL: 'https://api.example.com',
  TIMEOUT: 10000, // in milliseconds
};

// Recurring Intervals
export enum RecurringInterval {
  NONE = 'none',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

// Miscellaneous
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_TASK_TITLE_LENGTH = 100;
