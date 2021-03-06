import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';

import AccordionList from './components/accordion_list';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/pokemon-bgd.png')} resizeMode="contain" style={styles.image} >
      </Image>
      <AccordionList/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82a70a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 8,
    borderBottomColor:'#0f380f',
    borderBottomWidth: 2,
    paddingHorizontal: '100%',
  },


});
