// src/screens/AddTaskScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskForm from '../components/TaskForm';
import { useTheme } from '@react-navigation/native'; // ✅ FIXED

const AddTaskScreen: React.FC = () => {
  const { colors } = useTheme(); // ✅ Make sure this is used correctly

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.heading, { color: colors.text }]}>Add New Task</Text>
      <TaskForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AddTaskScreen;
