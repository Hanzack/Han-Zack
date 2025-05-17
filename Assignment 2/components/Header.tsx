import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, left, right }) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>{left}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.side}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  side: {
    width: 40,
    alignItems: 'center',
  },
});

export default Header;
// Example usage:
// <Header