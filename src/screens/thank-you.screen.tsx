import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserInfo from '../components/user-info/user-info';

const ThankYouScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <Text style={styles.text}>Thanks for using this App </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 3,
  },
});
export default ThankYouScreen;
