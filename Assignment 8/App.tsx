import React from 'react';
import { StatusBar } from 'react-native';
import { TaskProvider } from './src/context/TaskContext';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <StatusBar barStyle="default" />
        <AppNavigator />
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;