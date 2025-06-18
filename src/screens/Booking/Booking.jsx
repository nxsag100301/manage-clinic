import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

const Booking = () => {
  return (
    <SafeAreaView className="flex-1" edges={['top', 'right', 'left']}>
      <CustomHeader headerTitle="Đặt khám" />
      <View className="flex-1 px-6 items-center justify-center">
        <Text className="">Booking</Text>
      </View>
    </SafeAreaView>
  );
};

export default Booking;
