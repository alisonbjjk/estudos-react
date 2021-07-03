import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.teste1}>DEU CERTO!!</Text>
      <Text style={styles.teste2}>SEJA BEM VINDO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
    shadowColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    teste1: {
      fontSize: 50,
      fontWeight: "bold",
      color: 'white',
  },
    teste2: {
      fontSize: 30,
      fontWeight: "bold",
      color: '#363636',
  },
});
