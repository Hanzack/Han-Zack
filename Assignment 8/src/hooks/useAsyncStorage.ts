import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = <T>(key: string, defaultValue: T) => {
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement loadData function
  const loadData = async () => {
    // Your implementation here
  };

  // TODO: Implement saveData function
  const saveData = async (newData: T) => {
    // Your implementation here
  };

  useEffect(() => {
    loadData();
  }, [key]);

  return {
    data,
    setData: saveData,
    isLoading,
    error,
    reload: loadData,
  };
};