import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../hooks/redux';

const HomeScreen = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <View>
      <Text>
        Notifications: {user.preferences.notificationsEnabled ? 'On' : 'Off'}
      </Text>
    </View>
  );
};

export default HomeScreen;
