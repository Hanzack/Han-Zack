import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native';
import { useTimer } from '../hooks/useTimer';
import { useTheme } from '../context/ThemeContext';
import { useTasks } from '../hooks/useTasks';

const TimerScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { theme } = useTheme();
  const { updateTask } = useTasks();
  
  const {
    isRunning,
    currentTime,
    startTimer,
    pauseTimer,
    resetTimer,
    stopTimer,
    formatTime,
  } = useTimer();

  // TODO: Implement useEffect with useIsFocused to handle screen focus
  useEffect(() => {
    if (!isFocused && isRunning) {
      // Handle timer when screen is not focused
    }
  }, [isFocused, isRunning]);

  const handleStart = () => {
    // TODO: Implement start timer
  };

  const handleStop = () => {
    // TODO: Implement stop timer and save time to task
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* TODO: Implement timer UI */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // TODO: Add more styles
});

export default TimerScreen;