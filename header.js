//import a library to help to create a component
import React from 'react';
import { Text, View } from 'react-native';

//create a component
//props is passed from index.js, app parent
const Header = (props) => {
  //take the style
  const { textStyle, viewStyle } = styles;

 //header structure
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>

  );
};

//here decide aspect, similar to css
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    /*paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,*/
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    marginTop: 18,
    justifyContent: 'center',
    lineHeight: 20,
    fontSize: 20
  }
};

//make this component available to the entire app
export default Header;
