import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row',backgroundColor: 'powderblue'}}>
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'white'}} />
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <Text style={styles.text}>Hello World!!</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#759B84',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});
