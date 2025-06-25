import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import {getStatisticalData} from '../../api';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

const Report = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (ngay, denngay) => {
    setLoading(true);
    const res = await getStatisticalData({ngay, denngay});
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    const defaultFrom = dayjs().subtract(30, 'day').format('DD/MM/YYYY');
    const defaultTo = dayjs().format('DD/MM/YYYY');
    fetchData(defaultFrom, defaultTo);
  }, []);

  const handleFilter = () => {
    const from = dayjs(fromDate).format('DD/MM/YYYY');
    const to = dayjs(toDate).format('DD/MM/YYYY');
    fetchData(from, to);
  };

  const renderRow = (label, value, isMoney = true) => (
    <View className="flex-row justify-between mb-2">
      <Text className="text-base text-gray-700">{label}</Text>
      <Text className="text-base font-semibold text-blue-600">
        {Number(value).toLocaleString()} {isMoney ? 'đ' : ''}
      </Text>
    </View>
  );

  return (
    <>
      <CustomHeader headerTitle="Thống kê" />
      <ScrollView className="flex-1 bg-gray-100 p-4">
        {/* Bộ lọc ngày */}
        <View className="flex-row items-center mb-6 gap-3">
          <TouchableOpacity
            onPress={() => setShowFromPicker(true)}
            className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded-lg flex-row items-center space-x-2">
            <Text className="text-gray-800">
              {dayjs(fromDate).format('DD/MM/YYYY')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowToPicker(true)}
            className="flex-1 bg-white border border-gray-300 px-3 py-2 rounded-lg flex-row items-center space-x-2">
            <Text className="text-gray-800">
              {dayjs(toDate).format('DD/MM/YYYY')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleFilter}
            className="bg-blue-600 px-4 py-2 rounded-lg">
            <Text className="text-white font-medium">Lọc</Text>
          </TouchableOpacity>
        </View>

        {/* Date pickers */}
        {showFromPicker && (
          <DateTimePicker
            value={fromDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={(event, selectedDate) => {
              setShowFromPicker(false);
              if (selectedDate) {
                setFromDate(selectedDate);
              }
            }}
          />
        )}
        {showToPicker && (
          <DateTimePicker
            value={toDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={(event, selectedDate) => {
              setShowToPicker(false);
              if (selectedDate) {
                setToDate(selectedDate);
              }
            }}
          />
        )}

        {/* Loading */}
        {loading && (
          <View className="items-center justify-center mt-10">
            <ActivityIndicator size="large" color="#2563eb" />
          </View>
        )}

        {/* Nội dung thống kê */}
        {!loading && data && (
          <>
            {/* Bệnh nhân */}
            <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
              <Text className="text-lg font-bold mb-3 text-blue-700">
                Thống kê bệnh nhân
              </Text>
              {renderRow('Tổng số bệnh nhân', data.tongSoBN, false)}
              {renderRow('Bệnh nhân mới', data.tongSoBNMoi, false)}
              {renderRow('Bệnh nhân cũ', data.tongSoBNCu, false)}
              {renderRow('Bệnh nhân BHYT', data.tongSoBNBHYT, false)}
              {renderRow('Bệnh nhân dịch vụ', data.tongSoBNDV, false)}
            </View>

            {/* Doanh thu */}
            <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
              <Text className="text-lg font-bold mb-3 text-green-700">
                Thống kê doanh thu
              </Text>
              {renderRow('Tổng doanh thu', data.tongDoanhThu)}
              {renderRow('Doanh thu BH', data.tongDoanhThuBH)}
              {renderRow('Doanh thu DV', data.tongDoanhThuDV)}
              {renderRow('Doanh thu thuốc', data.tongDoanhThuThuoc)}
              {renderRow('Thuốc BH', data.tongDoanhThuThuocBH)}
              {renderRow('Thuốc DV', data.tongDoanhThuThuocDV)}
              {renderRow('Thu ngân thu', data.thuNgan)}
            </View>

            {/* Dịch vụ kỹ thuật */}
            <View className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
              <Text className="text-lg font-bold mb-3 text-purple-700">
                Doanh thu DV kỹ thuật
              </Text>
              {renderRow('Tổng DVKT', data.tongDoanhThuDVKT)}
              {renderRow('DVKT BH', data.tongDoanhThuDVKTBH)}
              {renderRow('DVKT DV', data.tongDoanhThuDVKTDV)}
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Report;
