/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Menu from '../../screens/Menu';
import {Image} from 'react-native';
import icons from '../../../constants/icons';
import Search from '../../screens/Search/Search';
import {BottomTabParamList} from '../type';

const TabBarIcon = ({icon, color}: {icon: any; color: string}) => (
  <Image source={icon} tintColor={color} className="w-9 h-9" />
);

const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.home} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.search} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.person} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={icons.menu} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
