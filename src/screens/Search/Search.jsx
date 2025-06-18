import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      className="px-4 flex-1 bg-white justify-center items-center">
      <Text onPress={() => navigation.navigate('ViewPdf')}>Xem thử PDF</Text>
    </SafeAreaView>
  );
};

export default Search;
