import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import FormScreenContainer from '../components/containers/form-screen-container/form-screen.container';
import {setUserNameAction} from '../reducers/user/user.actions';
import AuthForm from '../components/forms/sign-in/auth-form';
import {StyleSheet} from 'react-native';

const UserInfoScreen: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  console.log({navigation});

  const onSubmit = (formData: {username: string}) => {
    dispatch(setUserNameAction(formData.username));
  };

  return (
    <FormScreenContainer contentContainerStyle={styles.container}>
      <AuthForm initialValues={{username: ''}} submitForm={onSubmit} />
    </FormScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default UserInfoScreen;
