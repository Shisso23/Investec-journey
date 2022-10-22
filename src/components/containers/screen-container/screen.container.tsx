import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: React.FC<ScreenContainerProps> = props => {
  return (
    <ScrollView contentContainerStyle={styles.container} {...props}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});

export default ScreenContainer;
