import {settings} from '../../../constants/data';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import icons from '../../../constants/icons';
import images from '../../../constants/images';
import {logOut} from '../../redux/users/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingItems = ({icon, title, onPress, textStyle, showArrow = true}) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-3 ">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Menu = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('refresh_token');
    dispatch(logOut());
  };
  const user = useSelector(state => state.user.currentUser);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="px-7 pt-3 bg-white">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-2xl font-rubik-bold">Menu</Text>
        <Image source={icons.bell} className="w-8 h-8" />
      </View>
      <View className="flex flex-row justify-center mt-5">
        <View className="flex flex-col items-center relative mt-5 max-w-[200px]">
          <Image
            source={images.avatar}
            className="size-44 relative rouded-full"
          />
          <TouchableOpacity className="absolute top-36 right-6">
            <Image source={icons.edit} className="size-9" />
          </TouchableOpacity>
          <Text className="text-2xl font-rubik-bold mt-2 text-center">
            {user?.TenNhanVien}
          </Text>
        </View>
      </View>
      <View className="flex flex-col mt-10">
        <SettingItems icon={icons.calendar} title="My Bookings" />
        <SettingItems icon={icons.wallet} title="Payments" />
      </View>
      <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
        {settings.slice(2).map((item, index) => (
          <SettingItems key={index} {...item} />
        ))}
      </View>
      <View className="flex flex-col border-primary-200">
        <SettingItems
          icon={icons.logout}
          title="Logout"
          textStyle="text-red-500"
          showArrow={false}
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  );
};

export default Menu;
