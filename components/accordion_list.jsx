import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

import AccordionItem from './accordion_item';


class AccordionList extends Component{

  render(){
    const pokemons = [
      {
        "id": 1,
        "pokedex_number": "#001",
        "french_name": "Bulbizarre",
        "description": "Pokémon de départ de type Plante et Poison de la première génération offert par le Professeur Chen dans la région de Kanto. Il est le premier Pokémon du Pokédex National et du Pokédex de Kanto.",
        "english_name": "Bulbasaur",
        "japanese_name": "フシギダネ",
        "photo": "#001",
        "created_at": "2021-08-27T13:22:27.000000Z",
        "updated_at": "2021-08-27T13:22:27.000000Z"
      },
      {
        "id": 2,
        "pokedex_number": "#002",
        "french_name": "Herbizarre",
        "description": "Pokémon de type Plante et Poison de la première génération.",
        "english_name": "Ivysaur",
        "japanese_name": "フシギソウ",
        "photo": "#002",
        "created_at": "2021-08-27T13:22:27.000000Z",
        "updated_at": "2021-08-27T13:22:27.000000Z"
      },
      {
        "id": 3,
        "pokedex_number": "#003",
        "french_name": "Florizarre",
        "description": "Pokémon de type Plante et Poison de la première génération. On retrouve Florizarre sur les jaquettes des jeux Pokémon Vert et Pokémon Vert Feuille.",
        "english_name": "Venusaur",
        "japanese_name": "フシギバナ",
        "photo": "#003",
        "created_at": "2021-08-27T13:22:28.000000Z",
        "updated_at": "2021-08-27T13:22:28.000000Z"
      },
      {
        "id": 4,
        "pokedex_number": "#004",
        "french_name": "Salamèche",
        "description": "Pokémon de départ de type Feu offert par le Professeur Chen dans la région de Kanto et par le Professeur Platane dans la région de Kalos.",
        "english_name": "Charmander",
        "japanese_name": "ヒトカゲ",
        "photo": "#004",
        "created_at": "2021-08-27T13:22:28.000000Z",
        "updated_at": "2021-08-27T13:22:28.000000Z"
      }
    ];
    return(
      <View>
        {pokemons.map((pokemon)=>{
          return <AccordionItem pokemon={pokemon} key={pokemon.id}/>
        })}
      </View>
    );
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