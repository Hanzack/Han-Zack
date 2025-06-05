export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  timeSpent: number; // in minutes
  estimatedTime: number; // in minutes
  tags: string[];
  isRecurring: boolean;
  recurringInterval?: RecurringInterval;
}

export type TaskCategory = 'work' | 'personal' | 'study' | 'health' | 'other';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type RecurringInterval = 'daily' | 'weekly' | 'monthly';

export interface TaskFilter {
  category?: TaskCategory;
  priority?: TaskPriority;
  status?: TaskStatus;
  searchQuery?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  overdue: number;
  completionRate: number;
  totalTimeSpent: number;
}

export interface AppState {
  tasks: Task[];
  filter: TaskFilter;
  isLoading: boolean;
  error: string | null;
  lastSync: Date | null;
}

export interface TimerState {
  isRunning: boolean;
  currentTime: number;
  taskId: string | null;
  startTime: Date | null;
}

export interface Theme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    error: string;
    success: string;
    warning: string;
  };
}