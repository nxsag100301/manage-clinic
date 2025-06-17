import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Pdf from 'react-native-pdf';

const Search = () => {
  const pdf = require('./mockpdf2.pdf');
  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      className="px-4 flex-1 bg-white justify-center items-center border-black border-2">
      <Pdf
        source={pdf}
        style={styles.pdf}
        onError={error => {
          console.log('PDF load error:', error);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Search;
