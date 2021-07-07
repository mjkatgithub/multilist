import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Container from '../shared/container';

export default function About() {
  return (
    <Container style={globalStyles.container}>
      <Text>About Screen</Text>
    </Container>
  );
}
