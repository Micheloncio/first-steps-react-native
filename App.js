import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 100, height: 100,  backgroundColor: 'powderblue'}} />
        <View style={{width: 350, height: 100, backgroundColor: 'skyblue'}} >
          <TextInput
          style={{height: 100, fontSize: 30,}}
          placeholder="Type here to translate!"
          />
        </View>
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});
