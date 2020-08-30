import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={ () => pressHandler(item._id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="darkred" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10
  }
});