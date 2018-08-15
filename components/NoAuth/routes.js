import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SignIn = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Componente Sign In</Text>
      <Button
        title="Navegar a SignUp"
        onPress={() => { navigation.navigate('SignUp') }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Componente Sign Up</Text>
      <Button
        title="Regresar"
        onPress={() => { navigation.goBack(); }}
      />
    </View>
  )
}

const Routes = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  }
});

export { Routes };
