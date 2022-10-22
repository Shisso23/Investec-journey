import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {userSelector} from '../reducers/user/user.reducer';

const WelcomeScreen: React.FC = () => {
  const {username} = useSelector(userSelector);

  return <Text>Welcome{username} </Text>;
};
export default WelcomeScreen;
