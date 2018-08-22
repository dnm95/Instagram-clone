import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Author') }}
        />
        <Button
          title="Comentarios"
          onPress={() => { navigation.navigate('Comments') }}
        />
      </View>
    )
  }
}

export default Home;
