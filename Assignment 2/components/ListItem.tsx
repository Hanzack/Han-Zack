import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface ListItemProps {
  title: string;
  onPress?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default ListItem;
