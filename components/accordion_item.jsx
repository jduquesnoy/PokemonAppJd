import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
// require('../assets/#001.png')
class AccordionItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isActive: false,
      screenHeight: null,
      screenWidth: null
    }
  }

  handlePokemon = () =>{
    this.setState(prevState =>({isActive: !prevState.isActive}));
  }

  handlelayout = (e) =>{
    console.log("Screen Orientation Changed...")
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    })
  }


  render(){
    const pokemonSource = require(`../assets/${this.props.pokemon.photo}.png`);
    return (
      <View>
        <View style={styles.title}>
          <Text
            onPress={this.handlePokemon}>
            {this.props.pokemon.french_name}
          </Text>
          <Text>{this.state.isActive ? '-' : '+'}</Text>
        </View>
        { this.state.isActive &&
        <View>
            <Image
              style={styles.pokemonImage}
              source={pokemonSource}
            />
          <View style={this.state.screenHeight > this.state.screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape} onLayout={this.handlelayout}>
            <Text>N° pokedex: {this.props.pokemon.pokedex_number}</Text>
            <Text>Nom anglais: {this.props.pokemon.english_name}</Text>
            <Text>Nom japonais: {this.props.pokemon.japanese_name}</Text>
            <Text>{this.props.pokemon.description}</Text>
          </View>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokemonImage: {
    with: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    backgroundColor: 'red',
  },
  ContainerPortrait: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // }
});

export default AccordionItem;
