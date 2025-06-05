import { useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task, TaskFilter, TaskStats } from '../types';

export const useTasks = () => {
  const { state, addTask, updateTask, deleteTask, setFilter, clearFilter } = useTaskContext();

  const filteredTasks = useMemo(() => {
    // TODO: Implement filtering logic
    return state.tasks;
  }, [state.tasks, state.filter]);

  const taskStats = useMemo((): TaskStats => {
    // TODO: Implement stats calculation
    return {
      total: 0,
      completed: 0,
      pending: 0,
      inProgress: 0,
      overdue: 0,
      completionRate: 0,
      totalTimeSpent: 0,
    };
  }, [state.tasks]);

  const getTasksByCategory = useMemo(() => {
    // TODO: Group tasks by category
    return {};
  }, [state.tasks]);

  const getOverdueTasks = useMemo(() => {
    // TODO: Filter overdue tasks
    return [];
  }, [state.tasks]);

  return {
    tasks: filteredTasks,
    allTasks: state.tasks,
    isLoading: state.isLoading,
    error: state.error,
    filter: state.filter,
    taskStats,
    getTasksByCategory,
    getOverdueTasks,
    addTask,
    updateTask,
    deleteTask,
    setFilter,
    clearFilter,
  };
};