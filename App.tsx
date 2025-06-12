import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigation/BottomTab/BottomTab';
import Login from './src/screens/Login';
import {AuthProvider, useAuthContext} from './context/AuthContext';

const Stack = createStackNavigator();

const RootStack = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {user} = useAuthContext();
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
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
