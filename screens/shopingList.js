import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ShopiingList({ navigation }) {

  const pressHandler = () =>{
    //navigation.navigate("Item Deteils");
    navigation.push("Item Deteils");
  }

  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>ShopiingList Screen</Text>
    <Button title="Details" onPress={pressHandler} />
    </View>
  );
}
