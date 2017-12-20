import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class jokenpo extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';
    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }else if(escolhaUsuario == 'papel'){
        resultado = 'Você ganhou';
      }else{
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }else if(escolhaUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }else{
        resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }else if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }else{
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado });
  }

  render(){
    return(
      <View>

        <Topo></Topo>

        <View style={ styles.painelAcoes }>
          <View style={ styles.btnEscolha }>
            <Button title="pedra" onPress={ () => { this.jokenpo('pedra') } } />
          </View>

          <View style={ styles.btnEscolha }>
            <Button title="papel" onPress={ () => { this.jokenpo('papel') } } />
          </View>

          <View style={ styles.btnEscolha }>
            <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
          </View>
        </View>

        <View style={ styles.palco }>
          <Text style={ styles.txtResultado }>{ this.state.resultado } </Text>

          <Icone escolha={ this.state.escolhaComputador } jogador='Computador'></Icone>
          <Icone escolha={ this.state.escolhaUsuario } jogador='Você'></Icone>

        </View>


      </View>
      );
  } 
}

class Topo extends Component{
  render(){
    return ( 
      <View>
        <Image source={ require('./img/jokenpo.png') } style={{width: 450}}  />
      </View>
    );
  }
}

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return ( 
        <View style={ styles.icone }>
          <Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
          <Image source={ require('./img/pedra.png') } />
        </View>
      );
    } else if(this.props.escolha == 'papel'){
      return ( 
        <View style={ styles.icone }>
          <Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
          <Image source={ require('./img/papel.png') } />
        </View>
      );
    } else if(this.props.escolha == 'tesoura'){
      return ( 
        <View style={ styles.icone }>
          <Text style={ styles.txtJogador }>{ this.props.jogador }</Text>
          <Image source={ require('./img/tesoura.png') } />
        </View> 
      );
    } else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
  btnEscolha:{
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco:{
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 40
  },
  icone:{
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador:{
    fontSize: 18
  }
});

AppRegistry.registerComponent('jokenpo', () => jokenpo);
