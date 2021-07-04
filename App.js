import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.teste1}>DEU CERTO!!</Text>
//       <Text style={styles.teste2}>SEJA BEM VINDO</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
export default function Button(props) {
  const { onPress, title = 'OLÁ' } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            'http://setur.rn.gov.br/wp-content/uploads/2021/04/logo-gov-rn.png',
        }}
      />
      {/* <Image source={require('http://setur.rn.gov.br/wp-content/uploads/2021/04/logo-gov-rn.png')} /> */}
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.teste1}>DEU CERTO!!</Text>
        <Text style={styles.teste2}>SEJA BEM VINDO</Text>
        <StatusBar style="auto" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    paddingHorizontal: 36,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: 'black',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
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
