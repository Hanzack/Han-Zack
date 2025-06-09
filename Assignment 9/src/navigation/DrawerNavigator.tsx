import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from '../components/CustomDrawer';


// Import Screens
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import FlexboxScreen from '../screens/FlexboxScreen';
import PositionScreen from '../screens/PositionScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            width: 280,
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="FlexboxDemo" component={FlexboxScreen} />
        <Drawer.Screen name="PositionDemo" component={PositionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;