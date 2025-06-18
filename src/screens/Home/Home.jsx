import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../../../constants/images';
import icons from '../../../constants/icons';
import {mockData} from '../../../constants/data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useGetUserInfo} from '../../redux/users/useGetUserInfo';

const Home = () => {
  const navigation = useNavigation();
  const {user} = useGetUserInfo();
  return (
    <SafeAreaView
      className="flex-1 px-6 bg-white"
      edges={['top', 'right', 'left']}>
      <ScrollView
        contentContainerClassName="pb-6"
        showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row gap-3 items-center">
            <Image source={images.avatar} className="w-14 h-14 rounded-full" />
            <View>
              <Text>Welcome back</Text>
              <Text className="font-bold text-xl leading-6">{user.name}</Text>
            </View>
          </View>
          <View className="flex flex-row gap-4">
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                source={icons.search}
                className="rounded-full object-contain w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.bell}
                className="rounded-full object-contain w-8 h-8"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="my-6 p-8 bg-primary rounded-3xl h-[150px] relative">
          <Text className="text-white font-bold text-xl">Looking for</Text>
          <Text className="text-white font-bold text-xl">desired doctor?</Text>
          <Image
            source={images.avatar}
            className="w-32 h-32 rounded-full absolute right-10 top-6"
          />
          <TouchableOpacity className="w-24 h-8 bg-white mt-2 rounded-lg cursor-pointer">
            <Text className="my-auto mx-auto text-sm font-bold text-primary">
              Search for
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl font-bold mb-6">Welcome to NXS Care</Text>
        <View className="flex flex-row flex-wrap gap-4 justify-center items-center">
          {mockData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-[#e8ecf0] h-[90px] w-[47%] px-4 rounded-2xl
              flex flex-row gap-2 items-center justify-center"
              onPress={() =>
                item.screen ? navigation.navigate(item.screen) : {}
              }>
              <Image
                source={item.icon}
                className="w-10 h-10 m-2"
                tintColor={'#177de2'}
              />
              <Text className="font-semibold text-base text-[#177de2] flex-1">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
