import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store';
import ProductsScreen from './src/screens/ProductsScreens';
import CartScreen from './src/screens/CartScreen';

// Optional: Type-safe route names for navigation
export type RootTabParamList = {
  Products: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: { paddingBottom: 5 },
          }}
        >
          <Tab.Screen name="Products" component={ProductsScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
