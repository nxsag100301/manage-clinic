import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = () => {
  return (
    <SafeAreaView edges={['top', 'right', 'left']}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;
