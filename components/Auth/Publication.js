import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    return (
      <View style={styles.container}>
        <Text> Publication </Text>
      </View>
    )
  }
}

export default Publication;
