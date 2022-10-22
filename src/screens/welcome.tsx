import {Button} from '@rneui/themed';
import React from 'react';
import SwipeButton from 'rn-swipe-button';
import {StyleSheet, View} from 'react-native';
import UserInfo from '../components/user-info/user-info';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const onButtonPress = () => {
    navigation.navigate('thankyou');
  };
  const renderSwipeButton = () => (
    <SwipeButton
      disabled={false}
      swipeSuccessThreshold={40}
      height={45}
      width={280}
      title="Slide me to continue"
      onSwipeSuccess={onButtonPress}
      railFillBackgroundColor="#6dbec7"
      thumbIconBackgroundColor="#3A609C"
      thumbIconBorderColor="#3A609C"
      railBackgroundColor="rgba(0,0,0,0)"
      railBorderColor="#3A609C"
      shouldResetAfterSuccess={true}
      titleFontSize={14}
      titleColor="#3A609C"
      containerStyles={styles.swipeButton}
    />
  );

  return (
    <View style={styles.container}>
      <UserInfo />
      <Button
        title="Press me"
        type="clear"
        containerStyle={styles.buttonContainer}
        onPress={onButtonPress}
      />
      <Button
        title="Press me"
        type="outline"
        containerStyle={styles.buttonContainer}
        onPress={onButtonPress}
      />
      <Button
        title="Press me"
        containerStyle={styles.buttonContainer}
        onPress={onButtonPress}
      />
      {renderSwipeButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 280,
    marginVertical: 10,
  },
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  swipeButton: {width: 280},
});
export default WelcomeScreen;
