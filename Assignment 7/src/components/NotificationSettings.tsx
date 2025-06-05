import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNotifications } from '../store/userSlice'; // ✅ Named import
import { RootState } from '../store';

const NotificationSettings: React.FC = () => {
  const dispatch = useDispatch();

  const notificationsEnabled = useSelector(
    (state: RootState) => state.user.preferences.notificationsEnabled
  );

  const onToggle = () => {
    dispatch(toggleNotifications());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enable Notifications</Text>
      <Switch value={notificationsEnabled} onValueChange={onToggle} />
    </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
  },
});
