import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { FontAwesome } from '@expo/vector-icons';
import Button from './button';

//<FontAwesome name="user" size={32} />
const AlbumDetail = ({ album }) =>{

  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>

      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button tapEvent={() => Linking.openURL(url)}>
          Buy on Amazon
        </Button>
      </CardSection>

    </Card>
  );

};

const styles = {
  textContainer:{
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  textTitle:{
    fontSize: 18
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
