import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
        
export default function AppCombustivel() {
  const [precoEtanol, setPrecoEtanol] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');



  const calcularRendimento = () => {
    if (precoEtanol && precoGasolina) {
      const rendimento = parseFloat(precoEtanol) / parseFloat(precoGasolina);
      //alert(rendimento);
      if (rendimento < 0.7) {
        setResultado('Abasteça Etanol!');
      } else {
        setResultado('Abasteça GASOLINA!');
      }
    } else {
      setResultado('Por favor, preencha os valores de Etanol e Gasolina.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VALE A PENA ABASTECER COM ETANOL?</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text>Valor Etanol?</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: 4.90"
          keyboardType="numeric"
          value={precoEtanol}
          onChangeText={text => setPrecoEtanol(text)}
        />
        <View style={styles.inputLabel}>
          <Text>Valor Gasolina?</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: 7.00"
          keyboardType="numeric"
          value={precoGasolina}
          onChangeText={text => setPrecoGasolina(text)}
        />
        <TouchableOpacity style={styles.button} onPress={calcularRendimento}>
          <Text style={styles.buttonText}>Calcular Rendimento</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
    fontStyle: 'italic',
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        color: '#ccc',
      },
      android: {
        fontWeight: 'bold',
        color: '#00FFFF',
      },
      web: {
        fontWeight: 'bold',
        color: '#ccc',
      },
    }),
  },
  inputContainer: {
    alignItems: 'stretch',
    width: '84%',
    flex: 0.8,
    marginTop: 10,
    padding: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff'
  },
  inputLabel: {
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#665353', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    //color: '#731d18',
  },
});
