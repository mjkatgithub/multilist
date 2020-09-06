import React from 'react';
import { ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';

export default function card(props){
  return (
    <ImageBackground source={require('../assets/images/4691168202_fbb9cf7f15_z.jpg')} style={globalStyles.container}>
      { props.children }
    </ImageBackground>
  );
}
