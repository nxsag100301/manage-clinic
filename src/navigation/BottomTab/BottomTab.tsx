import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Menu from '../../screens/Menu';
import {Image} from 'react-native';
import icons from '../../../constants/icons';
import Search from '../../screens/Search/Search';
import {BottomTabParamList} from '../type';
import {useCallback} from 'react';

const TabBarIcon = ({icon, color}: {icon: any; color: string}) => (
  <Image source={icon} tintColor={color} className="w-9 h-9" />
);

const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab = () => {
  const renderHomeIcon = useCallback(
    ({color}: {color: string}) => (
      <TabBarIcon icon={icons.home} color={color} />
    ),
    [],
  );

  const renderSearchIcon = useCallback(
    ({color}: {color: string}) => (
      <TabBarIcon icon={icons.search} color={color} />
    ),
    [],
  );

  const renderProfileIcon = useCallback(
    ({color}: {color: string}) => (
      <TabBarIcon icon={icons.person} color={color} />
    ),
    [],
  );

  const renderMenuIcon = useCallback(
    ({color}: {color: string}) => (
      <TabBarIcon icon={icons.person} color={color} />
    ),
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
        name="Home"
        component={Home}
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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: renderProfileIcon,
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
