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
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.propriedade2}</Text>
        <Text>{this.props.propriedade3}</Text>
      </View>
    );
  }
}

class jokenpo extends Component {
  render(){
    return(
      <MeuComponente propriedade1='Banana' propriedade2='Abacaxi' propriedade3='Uva' ></MeuComponente>
      );
  } 
}


AppRegistry.registerComponent('jokenpo', () => jokenpo);
