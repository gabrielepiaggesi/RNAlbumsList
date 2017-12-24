import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './components/AlbumDetail';


class AlbumList extends Component {
  //initial state is empty
  state = { albums: [] };
  //onInit
  componentWillMount() {
    //get data and chenge state to these data
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(respone => this.setState({ albums: respone.data}));
  }

  //render each album
  renderAlbums(){
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }


  //nelle classi per passare il layout jsx bisogna chiamare il meotodo render
  render() {
    //console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    textStyle:{
      fontSize: 50
    }
});

export default AlbumList;
