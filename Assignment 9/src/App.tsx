import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import FlexboxDemo from './components/FlexboxDemo';
import PositionDemo from './components/PositionDemo';
import ImageBackgroundDemo from './components/ImageBackgroundDemo';

// Styles
import { colors } from './styles/globalStyles';

const Drawer = createDrawerNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    surface: colors.surface,
    background: colors.background,
  },
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: colors.surface,
              width: 280,
            },
            drawerActiveTintColor: colors.primary,
            drawerInactiveTintColor: colors.darkGray,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.onPrimary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              drawerIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="News"
            component={NewsScreen}
            options={{
              title: 'News Feed',
              drawerIcon: ({ color, size }) => (
                <Icon name="article" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="FlexboxDemo"
            component={FlexboxDemo}
            options={{
              title: 'Flexbox Demo',
              drawerIcon: ({ color, size }) => (
                <Icon name="view-module" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="PositionDemo"
            component={PositionDemo}
            options={{
              title: 'Position Demo',
              drawerIcon: ({ color, size }) => (
                <Icon name="crop-free" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="ImageDemo"
            component={ImageBackgroundDemo}
            options={{
              title: 'Image Background',
              drawerIcon: ({ color, size }) => (
                <Icon name="image" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;