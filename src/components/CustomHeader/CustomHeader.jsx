import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icons from '../../../constants/icons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({headerTitle}) => {
  const navigation = useNavigation();
  return (
    <View className="w-full px-4 flex flex-row items-center justify-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={icons.back} className="w-9 h-9" tintColor="#598DD1" />
      </TouchableOpacity>
      <Text className="text-lg font-semibold text-primary">{headerTitle}</Text>
      <View className="w-9 h-9" />
    </View>
  );
};

export default CustomHeader;
