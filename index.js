import React from 'react';
import {FlatList, ActivityIndicator,AppRegistry, StyleSheet, Text, View} from 'react-native';

class HelloWorld extends React.Component {
  constructor(props){
    super(props);

  }



  render(){

    return(
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);