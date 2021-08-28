import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// require('../assets/#001.png')
class AccordionItem extends Component {

  render(){
    const pokemonSource = require(`../assets/${this.props.pokemon.photo}.png`);
    return (
      <View>
        <Image
          style={styles.pokemonImage}
          source={pokemonSource}
        />
        <Text>N° pokedex: {this.props.pokemon.pokedex_number}</Text>
        <Text>Nom version française: {this.props.pokemon.french_name}</Text>
        <Text>Nom version anglaise: {this.props.pokemon.english_name}</Text>
        <Text>Nom version japonaise: {this.props.pokemon.japanese_name}</Text>
        <Text>Description: {this.props.pokemon.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokemonImage: {
    with: 250,
    height: 250,
  },
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // }
});

export default AccordionItem;
