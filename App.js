import React, { useState } from 'react';
import Home from './screens/home';
import ShopingList from './screens/shopingList'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import Navigator from './routes/drawer';
import { createAppContainer } from 'react-navigation';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
    />
    );
  }
}
 