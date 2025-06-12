import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Button, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';

export default function App() {
  const [valorConta, setValorConta] = useState('');
  const [numeroPessoas, setNumeroPessoas] = useState('');
  const [percentualGorjeta, setPercentualGorjeta] = useState('');
  const [valorPorPessoa, setValorPorPessoa] = useState(null);

  function calcularDivisao() {
    const valor = parseFloat(valorConta);
    const pessoas = parseInt(numeroPessoas);
    const gorjeta = parseFloat(percentualGorjeta) || 0;

    if (isNaN(valor) || isNaN(pessoas) || pessoas <= 0) {
      setValorPorPessoa(null);
      return;
    }

    const totalComGorjeta = valor + (valor * (gorjeta / 100));
    const valorDividido = totalComGorjeta / pessoas;
    setValorPorPessoa(valorDividido.toFixed(2));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={estilos.container} behavior="padding">
        <Text style={estilos.titulo}>DivApp</Text>
        <Text style={estilos.titulo2}>Faça a divisão da conta!</Text>

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Valor total"
          value={valorConta}
          onChangeText={setValorConta}
        />

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Número de pessoas"
          value={numeroPessoas}
          onChangeText={setNumeroPessoas}
        />

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Gorjeta (%) - opcional"
          value={percentualGorjeta}
          onChangeText={setPercentualGorjeta}
        />

        <Button title="Calcular" onPress={calcularDivisao} />

        {valorPorPessoa && (
          <Text style={estilos.resultado}>Valor por pessoa: R$ {valorPorPessoa}</Text>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#f8f8f2',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#00000090',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  titulo2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f8f8f2',
    marginBottom: 20,
    textAlign: 'center',
  },
  entrada: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#2c2c3a',
    color: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#8be9fd',
    marginBottom: 18,
    fontSize: 16,
  },
  resultado: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#50fa7b',
    textAlign: 'center',
    backgroundColor: '#282a36',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#50fa7b',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});
