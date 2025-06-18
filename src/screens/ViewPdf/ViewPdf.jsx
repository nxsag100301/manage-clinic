import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Pdf from 'react-native-pdf';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

const ViewPdf = () => {
  const source = {uri: 'bundle-assets://pdf/mockpdf.pdf'};
  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      className="flex-1 bg-white justify-center items-center">
      <CustomHeader headerTitle="Xem PDF Test" />
      <Pdf
        source={source}
        style={styles.pdf}
        onError={error => {
          console.log('PDF load error:', error);
        }}
      />
    </SafeAreaView>
  );
};

export default ViewPdf;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
