import React from 'react';
import './global.css';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-white">Hello world</Text>
    </SafeAreaView>
  );
};

export default App;
