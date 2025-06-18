import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigation/BottomTab/BottomTab';
import Login from './src/screens/Login/Login';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import ViewPdf from './src/screens/ViewPdf/ViewPdf';
import SignUp from './src/screens/SignUp/SignUp';
import Booking from './src/screens/Booking/Booking';

const Stack = createStackNavigator();

const RootStack = () => {
  const isAuth = true; // !!user
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="ViewPdf" component={ViewPdf} />
          <Stack.Screen name="Booking" component={Booking} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
