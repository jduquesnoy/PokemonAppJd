import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native';

import AccordionItem from './accordion_item';


class AccordionList extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemons:[]
    }
  }
  componentDidMount() {
    fetch("https://my-pokemon-api-jd.herokuapp.com/api/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemons: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    const { error, isLoaded, pokemons } = this.state;
    if (error) {
      return <Text> Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return(
        <View>
          {pokemons.map((pokemon)=>{
            return <AccordionItem pokemon={pokemon} key={pokemon.id}/>
          })}
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  // pokemonImage: {
  //   with: 250,
  //   height: 250,
  // },
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // }
});


export default AccordionList;