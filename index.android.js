import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class jokenpo extends Component {

  constructor(props){
    super(props);

    this.state = {escolhaUsuario: ''};
  }

  jokenpo(escolhaUsuario){
    this.setState({ escolhaUsuario: escolhaUsuario });
  }

  render(){
    return(
      <View>
        <Text>Escolha do Computador</Text>
        <Text>Escolha do usuário: { this.state.escolhaUsuario }</Text>
        <Text>Resultado</Text>

        <Button title="pedra" onPress={ () => { this.jokenpo('pedra') } } />
        <Button title="papel" onPress={ () => { this.jokenpo('papel') } } />
        <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
      </View>
    );
  } 
}


AppRegistry.registerComponent('jokenpo', () => jokenpo);
