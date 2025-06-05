// Add this at the top of TaskContext.tsx or in a types file
export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
}
export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  overdue: number;
  completionRate: number;
  totalTimeSpent: number; // in minutes
}
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Task, AppState, TaskFilter } from '../types';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

// TODO: Define action types
type TaskAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'CLEAR_FILTER' };

const initialState: AppState = {
  tasks: [],
  filter: {},
  isLoading: false,
  error: null,
  lastSync: null,
};

// TODO: Implement taskReducer
const taskReducer = (state: AppState, action: TaskAction): AppState => {
  switch (action.type) {
    // Implement all cases
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
      
    default:
      return state;
  }
};

interface TaskContextType {
  state: AppState;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: TaskFilter) => void;
  clearFilter: () => void;
  getFilteredTasks: () => Task[];
  getTaskStats: () => TaskStats;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { data: storedTasks, setData: setStoredTasks } = useAsyncStorage<Task[]>('tasks', []);

  // TODO: Implement context methods
  const addTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    // Your implementation here
  };

  const updateTask = (task: Task) => {
    // Your implementation here
  };

  const deleteTask = (id: string) => {
    // Your implementation here
  };

  const setFilter = (filter: TaskFilter) => {
    // Your implementation here
  };

  const clearFilter = () => {
    // Your implementation here
  };

  const getFilteredTasks = (): Task[] => {
    // Your implementation here
    return [];
  };

  const getTaskStats = (): TaskStats => {
    // Your implementation here
    return {
      total: 0,
      completed: 0,
      pending: 0,
      inProgress: 0,
      overdue: 0,
      completionRate: 0,
      totalTimeSpent: 0,
    };
  };

  const value: TaskContextType = {
    state,
    addTask,
    updateTask,
    deleteTask,
    setFilter,
    clearFilter,
    getFilteredTasks,
    getTaskStats,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskProvider');
  }
  return context;
};