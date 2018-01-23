import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class MainComponent extends React.Component{
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
            <Button onPress={()=>navigate('Second')} title='Change screen'/>
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

class SecondMainComponent extends React.Component{
  static navigationOptions = {
    title: 'Second Component'
  };
  render(){
    return <Text> This is my second screen </Text>;
  }
}

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
  };
  render(){
    return <Text> Welcome </Text>;
  }
}
class MainScreen extends React.Component{
  static navigationOptions = {
    title: 'Main'
  };
  render(){
    return <SimpleApp />
  }
}

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  All: { screen: MainScreen },
});

const SimpleApp = StackNavigator({
  First: { screen: MainComponent },
  Second: { screen: SecondMainComponent },
});

export default class App extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{height:24}}/>
        <MainScreenNavigator />
      </View>
     );
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
