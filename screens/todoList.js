import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <Text>TodoList Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});