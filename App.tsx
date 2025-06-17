import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigation/BottomTab/BottomTab';
import Login from './src/screens/Login';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const RootStack = () => {
  const isAuth = true; // !!user
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name="BottomTab" component={BottomTab} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
