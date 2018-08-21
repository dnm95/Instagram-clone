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

class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Comments </Text>
      </View>
    )
  }
}

export default Comments;
