// src/screens/NotificationsScreen.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // ✅ make sure this is correct
import NotificationCard from '../components/NotificationCard';

const NotificationsScreen = () => {
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationCard notification={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default NotificationsScreen;
