import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigation/BottomTab/BottomTab';
import Login from './src/screens/Login/Login';
import {store} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import ViewPdf from './src/screens/ViewPdf/ViewPdf';
import SignUp from './src/screens/SignUp/SignUp';
import Booking from './src/screens/Booking/Booking';
import {injectStore} from './src/utils/authorizeAxios';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const RootStack = () => {
  const user = useSelector(state => state.user.currentUser);
  const isAuth = !!user;
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
  injectStore(store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView className="flex-1">
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
