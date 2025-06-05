import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { useTasks } from '../hooks/useTasks';
import { useTheme } from '../context/ThemeContext';
import { useTimer } from '../hooks/useTimer';

type TaskDetailRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen: React.FC = () => {
  const route = useRoute<TaskDetailRouteProp>();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { allTasks, deleteTask } = useTasks();
  const { startTimer } = useTimer();
  
  const { taskId } = route.params;
  const task = allTasks.find(t => t.id === taskId);

  // TODO: Implement useLayoutEffect to customize header
  useLayoutEffect(() => {
    navigation.setOptions({
      // Your implementation here
    });
  }, [navigation, task]);

  const handleDelete = () => {
    // TODO: Implement delete confirmation
  };

  const handleStartTimer = () => {
    // TODO: Navigate to timer screen with task
  };

  if (!task) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text>Task not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* TODO: Implement task detail UI */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // TODO: Add more styles
});

export default TaskDetailScreen;