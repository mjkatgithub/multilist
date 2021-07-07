import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Container from '../shared/container';

export default function Home() {
  return (
    <Container style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </Container>
  );
}

const styles = StyleSheet.create({

});