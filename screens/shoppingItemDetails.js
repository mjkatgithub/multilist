import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Container from '../shared/container';

export default function ShoppingItemDetails({ navigation }) {

  const pressHandler = () =>{
    navigation.goBack();
    //navigation.pop();
  };

  return (
    <Container>
      <Card>
        <Text>{ navigation.getParam('product') }</Text>
        <Text>by: { navigation.getParam('manufacturer') }</Text>
        <Text>amount: { navigation.getParam('amount') }</Text>
        <Text>note: { navigation.getParam('notes') }</Text>
      </Card>
    </Container>
  );
}
