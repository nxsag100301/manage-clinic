import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Menu from '../../screens/Menu/Menu';
import {Image} from 'react-native';
import icons from '../../../constants/icons';
import Search from '../../screens/Search/Search';
import {useCallback} from 'react';
import Booking from '../../screens/Booking/Booking';
import {createStackNavigator} from '@react-navigation/stack';
import Notifications from '../../screens/Notifications/Notifications';

const Stack = createStackNavigator();

const TabBarIcon = ({icon, color}) => (
  <Image source={icon} tintColor={color} className="w-9 h-9" />
);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const renderHomeIcon = useCallback(
    ({color}) => <TabBarIcon icon={icons.home} color={color} />,
    [],
  );

  const renderSearchIcon = useCallback(
    ({color}) => <TabBarIcon icon={icons.search} color={color} />,
    [],
  );

  const renderMenuIcon = useCallback(
    ({color}) => <TabBarIcon icon={icons.menu} color={color} />,
    [],
  );

  const renderNotificationsIcon = useCallback(
    ({color}) => <TabBarIcon icon={icons.bell} color={color} />,
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: renderSearchIcon,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: renderNotificationsIcon,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: renderMenuIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
