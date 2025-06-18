import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../../../constants/images';
import icons from '../../../constants/icons';

const DoctorCard = () => {
  return (
    <TouchableOpacity
      className="h-36 rounded-2xl bg-white px-4 py-6"
      style={styles.cardShadow}>
      <View className="flex flex-row gap-4 h-full">
        <View className="w-1/4 rounded-full">
          <Image
            source={images.doctorAvatar}
            className="h-full w-full object-cover rounded-full"
          />
        </View>
        <View className="w-[70%]">
          <View className="flex flex-row mb-1">
            <Text numberOfLines={1} className="font-bold text-lg">
              Bác sĩ: Ngyễn Văn A
            </Text>
          </View>
          <Text numberOfLines={2} className="mb-1">
            Gần 35 năm kinh nghiệm trong lĩnh vực Nội Tiêu hóa - Gan mật
          </Text>
          <View className="flex flex-row items-center gap-2">
            <Image
              source={icons.location}
              className="size-5"
              tintColor="black"
            />
            <Text className="">Thành phố Hồ Chí Minh</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 16,

    elevation: 6,
  },
});
