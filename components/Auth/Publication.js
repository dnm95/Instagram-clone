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

class Publication extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Publication </Text>
        <Button
          title="Comentarios"
          onPress={() => { navigation.navigate('Comments') }}
        />
      </View>
    )
  }
}

export default Publication;
