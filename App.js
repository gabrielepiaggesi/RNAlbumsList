import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Header from './header.js';
import AlbumList from './AlbumList.js';

export default class App extends Component {
  render() {
    return (
      //flex 1 espande la view a tutto il suo contenuto
      <View style={{flex:1}}>
        <Header title={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('albums', () => App);
