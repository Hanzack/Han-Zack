import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTasks } from '../hooks/useTasks';
import { useTheme } from '../context/ThemeContext';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';

const TaskListScreen: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { tasks, isLoading, taskStats } = useTasks();
  const [refreshing, setRefreshing] = useState(false);

  // TODO: Implement useFocusEffect to refresh data when screen is focused
  useFocusEffect(
    useCallback(() => {
      // Your implementation here
    }, [])
  );

  const onRefresh = useCallback(async () => {
    // TODO: Implement pull-to-refresh
  }, []);

  const renderTask = ({ item }: { item: any }) => (
    <TaskCard 
      task={item} 
      onPress={() => {
        // TODO: Navigate to task detail
      }}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SearchBar />
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default TaskListScreen;