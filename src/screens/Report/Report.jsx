import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getStatisticalData} from '../../api';

const Report = () => {
  useEffect(() => {
    const testFetch = async () => {
      const res = await getStatisticalData({
        ngay: '24/05/2025',
        denngay: '24/06/2025',
      });
      console.log('check res: ', res);
    };
    testFetch();
  });
  return (
    <View>
      <Text>Report</Text>
    </View>
  );
};

export default Report;
