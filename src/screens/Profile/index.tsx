import {settings} from '../../../constants/data';
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import icons from '../../../constants/icons';
import images from '../../../constants/images';

interface SettingItemsProps {
  icon: any;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemsProps) => (
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

const Profile = () => {
  const handleLogout = async () => {};
  return (
    <SafeAreaView className="h-full bg-white" edges={['top', 'right', 'left']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-7 pb-32">
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
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
              Nguyen Xuan Sang
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
    </SafeAreaView>
  );
};

export default Profile;
