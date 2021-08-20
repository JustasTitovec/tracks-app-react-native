import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>SignUpScreen Screen</Text>
      <Button
        title="Go to Sign in"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        title="Go to Main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SignUpScreen;
