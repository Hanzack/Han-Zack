import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Divider, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, borderRadius, shadows } from '../styles/globalStyles';

interface CustomDrawerProps {
  navigation: any; // You can type this properly with navigation types
  state: any;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ navigation, state }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const menuItems = [
    { name: 'Home', icon: 'home', route: 'Home' },
    { name: 'News', icon: 'article', route: 'News' },
    { name: 'Flexbox Demo', icon: 'view-module', route: 'FlexboxDemo' },
    { name: 'Position Demo', icon: 'crop-free', route: 'PositionDemo' },
    { name: 'Profile', icon: 'person', route: 'Profile' },
    { name: 'Settings', icon: 'settings', route: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with ImageBackground */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&w=500'
        }}
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Avatar.Image
            size={80}
            source={{
              uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150'
            }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>
      </ImageBackground>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              state.index === index && styles.activeMenuItem
            ]}
            onPress={() => navigation.navigate(item.route)}
          >
            <Icon
              name={item.icon}
              size={24}
              color={state.index === index ? colors.primary : colors.darkGray}
              style={styles.menuIcon}
            />
            <Text
              style={[
                styles.menuText,
                state.index === index && styles.activeMenuText
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}

        <Divider style={styles.divider} />

        {/* Dark Mode Toggle */}
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Icon name="dark-mode" size={24} color={colors.darkGray} />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            color={colors.primary}
          />
        </View>

        {/* TODO: Add more settings or user actions */}
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="logout" size={24} color={colors.error} style={styles.menuIcon} />
          <Text style={[styles.menuText, { color: colors.error }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  headerBackground: {
    height: 200,
    justifyContent: 'flex-end',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: spacing.lg,
    alignItems: 'center',
  },
  avatar: {
    marginBottom: spacing.sm,
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingTop: spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  activeMenuItem: {
    backgroundColor: `${colors.primary}20`,
  },
  menuIcon: {
    marginRight: spacing.md,
  },
  menuText: {
    fontSize: 16,
    color: colors.onSurface,
  },
  activeMenuText: {
    color: colors.primary,
    fontWeight: '600',
  },
  divider: {
    marginVertical: spacing.md,
    marginHorizontal: spacing.lg,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: colors.onSurface,
    marginLeft: spacing.md,
  },
  // TODO: Add more styles for additional features
});

export default CustomDrawer;
