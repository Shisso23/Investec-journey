import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

type AuthFormProps = {
  submitForm: Function;
  initialValues: {username: string};
};

const AuthSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
});

const AuthForm: React.FC<AuthFormProps> = ({submitForm, initialValues}) => {
  const _handleSubmission = (formData: {username: string}) => {
    submitForm(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      initialStatus={{apiErrors: {}}}
      onSubmit={_handleSubmission}
      validationSchema={AuthSchema}
      enableReinitialize>
      {({handleChange, handleSubmit}) => {
        return (
          <>
            <View style={[styles.inputView]}>
              <Text>Enter your name to start</Text>
              <TextInput onChangeText={handleChange('username')} />
            </View>

            <Button title="Submit" onPress={handleSubmit} />
          </>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  buttonsView: {width: '100%'},
  inputView: {marginTop: '25%', width: '85%'},
});

export default AuthForm;
