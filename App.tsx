import React from 'react';
import {Platform} from 'react-native';
import AppContainer from './src/navigation/root.navigator';
import DeviceInfo from 'react-native-device-info';
import flashService from './src/services/flash-service/flash.service';

const App = () => {
  DeviceInfo.isEmulator().then(isEmulator => {
    if (isEmulator && Platform.OS === 'android') {
      flashService.info('Currently running on an Android emulator');
    } else if (isEmulator && Platform.OS === 'ios') {
      flashService.info('Currently running on an IOS simulator');
    }
  });

  return <AppContainer />;
};

export default App;
