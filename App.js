import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class FirstComponent extends React.Component{
  static navigationOptions = {
    title: 'First Component'
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={{width: 100, height: 100,  backgroundColor: 'powderblue'}} />
          <View style={{width: 350, height: 100, backgroundColor: 'skyblue'}} >
            <Button onPress={()=>navigate('SecondScreen')} title='Change screen'/>
          </View>
          <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
          <View style={{width: 100, height: 100,  backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
          <View style={{width: 100, height: 100,  backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
          <View style={{width: 100, height: 100,  backgroundColor: 'powderblue'}} />
        </View>
      </ScrollView>
    );
  }
}

class SecondComponent extends React.Component{
  static navigationOptions = {
    title: 'Second Component'
  };
  render(){
    return <Text> This is my second screen </Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: FirstComponent },
  SecondScreen: { screen: SecondComponent },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
