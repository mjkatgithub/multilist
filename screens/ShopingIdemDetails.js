import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ShopingItemDetails({ navigation }) {

  const pressHandler = () =>{
    navigation.goBack();
    //navigation.pop();
  }

  return (
    <View style={globalStyles.container}>
      <Text>ShopingItemDetails Screen</Text>
      <Button title="back" onPress={pressHandler} />
    </View>
  );
}
