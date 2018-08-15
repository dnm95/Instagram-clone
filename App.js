import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './components/NoAuth/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

export default App;
