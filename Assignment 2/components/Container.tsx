// Example of a Container component with children props

import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ContainerProps {
  children: ReactNode;
  padding?: number;
  backgroundColor?: string;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding = 16,
  backgroundColor = 'white',
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        { padding, backgroundColor },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default Container;
// Example usage:
// <Container padding={20} backgroundColor="#f0f0f0" style={{ margin: 10 }}>