import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useTasks } from '../hooks/useTasks';

interface TaskCardProps {
  task: Task;
  onPress?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onPress }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { updateTask } = useTasks();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // TODO: Navigate to task detail
    }
  };

  const toggleTaskStatus = () => {
    // TODO: Implement status toggle
  };

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: theme.colors.surface }]} onPress={handlePress}>
      {/* TODO: Implement task card UI */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  // TODO: Add more styles
});

export default TaskCard;