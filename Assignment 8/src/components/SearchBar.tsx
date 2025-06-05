import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useDebounce } from '../hooks/useDebounce';
import { useTasks } from '../hooks/useTasks';

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const { theme } = useTheme();
  const { setFilter } = useTasks();
  const debouncedSearchText = useDebounce(searchText, 300);

  // TODO: Implement search functionality with debounced input
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      {/* TODO: Implement search bar UI */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
  },
  // TODO: Add more styles
});

export default SearchBar;