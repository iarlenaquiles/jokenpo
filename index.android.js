import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>Primeiro parametro</Text>
        <Text>Segundo parametro</Text>
      </View>
    );
  }
}

class jokenpo extends Component {
  render(){
    return(
      <MeuComponente></MeuComponente>
      );
  } 
}


AppRegistry.registerComponent('jokenpo', () => jokenpo);
