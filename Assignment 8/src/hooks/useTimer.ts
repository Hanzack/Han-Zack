import { useState, useEffect, useCallback, useRef } from 'react';
import { TimerState } from '../types';

export const useTimer = (initialTime: number = 0) => {
  const [state, setState] = useState<TimerState>({
    isRunning: false,
    currentTime: initialTime,
    taskId: null,
    startTime: null,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // TODO: Implement timer functions
  const startTimer = useCallback((taskId?: string) => {
    // Your implementation here
  }, []);

  const pauseTimer = useCallback(() => {
    // Your implementation here
  }, []);

  const resetTimer = useCallback(() => {
    // Your implementation here
  }, []);

  const stopTimer = useCallback(() => {
    // Your implementation here
  }, []);

  // TODO: Implement useEffect for timer logic
  useEffect(() => {
    // Timer interval logic
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isRunning]);

  const formatTime = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    ...state,
    startTimer,
    pauseTimer,
    resetTimer,
    stopTimer,
    formatTime,
  };
};