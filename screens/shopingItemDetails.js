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
      <Text>{ navigation.getParam('product') }</Text>
      <Text>by: { navigation.getParam('manufacturer') }</Text>
      <Text>note: { navigation.getParam('notes') }</Text>
    </View>
  );
}
