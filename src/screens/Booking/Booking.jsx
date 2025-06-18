import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import DoctorCard from '../../components/Doctors/DoctorCard';

const groupedDoctors = [
  {
    title: 'Bác sĩ đa khoa',
    data: Array.from({length: 3}),
  },
  {
    title: 'Bác sĩ cơ xương khớp',
    data: Array.from({length: 5}),
  },
];

const Booking = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'right', 'left']}>
      <CustomHeader headerTitle="Đặt khám" />
      <View className="p-4">
        <FlatList
          data={groupedDoctors}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <View className="px-2 mb-5">
              <Text className="text-xl font-bold mb-4">{item.title}</Text>
              {item.data.map((_, i) => (
                <View key={i} className="mb-4">
                  <DoctorCard />
                </View>
              ))}
            </View>
          )}
          contentContainerClassName="pb-10"
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Booking;
