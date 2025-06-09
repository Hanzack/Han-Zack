import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Position Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PositionScreen;
