import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppTab from './AppCombustivel';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <AppTab />
      <StatusBar style="light" />

      <Text>Aula App Alunos ETEC Camargo Aranha!</Text>
      <Text>Prof. Dr. Luiz Lima e Thiago Pascotto.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});